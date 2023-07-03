name: Backup alerting and monitoring policy
acronym: BAMP
satisfies:
  TSC:
    - CC9.1
    - A1.2
majorRevisions:
  - date: Jun 20 2023
    comment: Initial document
---

# Policy Statement
DoubleGood Technology is committed to maintaining a reliable and secure backup and recovery process for its data. This policy outlines the guidelines for data monitoring and alerting procedures, describe backup notifications, and conditions to observe. The policy aligns with industry best practices and complies with SOC 2 requirements.

# Purpose
The purpose of this policy is to define observability of backup process for DoubleGood Technology and its customers. It takes advantage of the robust notifications delivered and to empower you to monitor its workloads.

# Scope
The scope of this policy encompasses all data within DoubleGood Technology's systems and applies to all employees, contractors, and third-party service providers who have access to the data.

# Policy
The following guidelines and requirements apply to configure monitoring and alerting for backup and recovery process:

## Backup Alerting and Monitoring Process
a. Alerting and Monitoring: Activating and configuring notifications to monitor AWS Backup jobs provides the awareness of your backup activities, helps ensure that critical service-level agreements (SLAs) are met, enhances business-as-usual monitoring, helps meet compliance obligations. Set up monitoring configuration to obtain notifications when backup or restore, or copy jobs either failed, pending or in successful state to be informed about backup and restore process.

b. Backup Notifications: An important aspect to protecting assets is the ability to monitor backup, restore, and copy jobs. Awareness of backup and restore job status is critical to ensure that the protection plan is executed according to service-level agreements (SLAs) and meets compliance requirements. Failed backups, restores, and copy jobs can negatively affect workflows and SLAs. The ability to get notifications on job status can enhance the efficiency and efficacy of compliance and operational procedures.

## Policy Review and Updates
a. Regular Review: The alerting and monitoring policy, including the backup and restore aspects, shall be reviewed periodically to ensure compliance with changing legal and regulatory requirements.

b. Policy Updates: Any necessary updates or revisions to the alerting and monitoring policy shall be documented, communicated, and implemented accordingly.

## Tech Notes
Monitor the number of failed backup and restore jobs within one or more specific backup vaults. When there are more than zero failed job within 1 hour, send an email, or SMS, or open a ticket to the engineering team to investigate. AWS Backup also integrates with Amazon Simple Notification Service, providing with backup activity notifications, such as when a backup succeeds or a restore has been initiated that makes it simple to audit backup and restore activity across AWS services.

The following events are supported:
1. BACKUP_JOB_FAILED - The number of backup jobs with status of Failed.
2. BACKUP_JOB_EXPIRED - The number of backup jobs that AWS Backup attempted to delete based on your backup retention lifecycle, but could not delete. You are billed for the storage that expired backups consume and should delete them manually.
3. BACKUP_JOB_COMPLETED - The number of backup jobs that AWS Backup finished.
4. BACKUP_JOB_SUCCESSFUL - The number of backup jobs that AWS Backup finished successfuly.
5. COPY_JOB_SUCCESSFUL -The number of cross-account and cross-Region copy jobs that AWS Backup finished successfuly.
6. COPY_JOB_FAILED - The number of cross-account and cross-Region copy jobs that AWS Backup attempted but could not complete.
7. RESTORE_JOB_FAILED - The number of restore jobs that AWS Backup attempted but could not complete.
8. RESTORE_JOB_COMPLETED - The number of restore jobs that AWS Backup finished.
9. RESTORE_JOB_SUCCESSFUL - The number of restore jobs that AWS Backup finished successfuly.
10. S3_BACKUP_OBJECT_FAILED - The number of S3 backup jobs with status of Failed.
11. S3_RESTORE_OBJECT_FAILED - The number of S3 restore jobs with status of Failed.
