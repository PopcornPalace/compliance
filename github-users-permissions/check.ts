import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';
import parse from 'csv-parse/lib/sync';
import axios from 'axios';

async function checkMFA(username: string): Promise<boolean> {
  const response = await axios.get(`https://api.github.com/users/${username}/mfa`);
  return response.status === 200;
}


async function run() {
  try {
    const token = core.getInput('token');
    const octokit = github.getOctokit(token);
    const org = core.getInput('org');
    const excludeUsersFile = core.getInput('exclude_users_file');
    const excludeUsers = fs.existsSync(excludeUsersFile)
      ? parse(fs.readFileSync(excludeUsersFile), { columns: true })
      : [];
    const orgRepos = await octokit.paginate(octokit.repos.listForOrg, { org, type: 'all' });
    const data: string[][] = [];
    const admins: string[][] = [];
    const header = ['organization', 'repository', 'name', 'login', 'permission', 'mfa'];
    data.push(header);
    admins.push(header);

    for (const repo of orgRepos) {
      if (repo.permissions.admin) {
        admins.push([org, repo.name, '', '', 'admin']);
      }
      const repoCollabs = await octokit.paginate(octokit.repos.listCollaborators, { org, repo: repo.name });
      for (const collab of repoCollabs) {
        const isExcluded = excludeUsers.some(
          (excludeUser) =>
            excludeUser.repository.toLowerCase() === repo.name.toLowerCase() &&
            excludeUser.login.toLowerCase() === collab.login.toLowerCase()
        );
        if (!isExcluded) {
          const mfaEnabled = await checkMFA(collab.login);
          data.push([org, repo.name, collab.name || '', collab.login, collab.permissions.admin ? 'admin' : 'write', String(mfaEnabled)]);
        }
      }
    }

    const artifactFileName = core.getInput('artifact_file_name');
    fs.writeFileSync(`${artifactFileName}.csv`, data.map((row) => row.join(',')).join('\n'));
    fs.writeFileSync(`${artifactFileName}_admins.csv`, admins.map((row) => row.join(',')).join('\n'));

    const issueNumber = github.context.issue.number;
    const repository = github.context.payload.repository;
    if (issueNumber && repository) {
      const issueComment = octokit.issues.createComment({
        owner: repository.owner.login,
        repo: repository.name,
        issue_number: issueNumber,
        body: 'Admins CSV:',
        attachments: [
          {
            title: `${artifactFileName}_admins.csv`,
            file_type: 'csv',
            data: Buffer.from(fs.readFileSync(`${artifactFileName}_admins.csv`)).toString('base64')
          }
        ]
      });
      console.log(`Admins CSV has been added to issue #${issueNumber}.`);
    } else {
      console.log(`Admins CSV:\n${fs.readFileSync(`${artifactFileName}_admins.csv`)}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
