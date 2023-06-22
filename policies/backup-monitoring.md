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

## Data Classification and Retention
a. Data Classification: All data within DoubleGood Technology's systems shall be classified based on its sensitivity and regulatory requirements.

b. Data Retention Periods: The retention periods for different data categories shall be defined and documented, considering legal requirements, business needs, and industry standards. The following retention periods apply:
 - Financial and accounting data: 7 years
 - Customer personal information: 3 years after the end of the customer relationship
 - Employee records: 5 years after employment termination
 - System logs and audit trails: 1 year

## Backup Alerting and Monitoring Process
a. Alerting and Monitoring: Activating and configuring notifications to monitor AWS Backup jobs provides the awareness of your backup activities, helps ensure that critical service-level agreements (SLAs) are met, enhances business-as-usual monitoring, helps meet compliance obligations. Set up monitoring configuration to obtain notifications when backup or restore, or copy jobs either failed, pending or in successful state to be informed about backup and restore process.

b. Backup Notifications: An important aspect to protecting assets is the ability to monitor backup, restore, and copy jobs. Awareness of backup and restore job status is critical to ensure that the protection plan is executed according to service-level agreements (SLAs) and meets compliance requirements. Failed backups, restores, and copy jobs can negatively affect workflows and SLAs. The ability to get notifications on job status can enhance the efficiency and efficacy of compliance and operational procedures.

## Policy Review and Updates
a. Regular Review: The alerting and monitoring policy, including the backup and restore aspects, shall be reviewed periodically to ensure compliance with changing legal and regulatory requirements.

b. Policy Updates: Any necessary updates or revisions to the alerting and monitoring policy shall be documented, communicated, and implemented accordingly.
