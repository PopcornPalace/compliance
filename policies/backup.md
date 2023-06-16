Backup Policy
SOC 2 Criteria: CC9.1, A1.2

# Policy Statement:
DoubleGood Technology is committed to maintaining a reliable and secure backup and recovery process for its data. This policy outlines the guidelines for data retention, backup procedures, recovery process, and testing to ensure data availability, confidentiality, and integrity. The policy aligns with industry best practices and complies with SOC 2 requirements.


# Purpose:
The purpose of this policy is to protect the confidentiality, integrity, and availability of data for DoubleGood Technology and its customers. It establishes comprehensive backup and recovery procedures to ensure data remains accessible when needed and can be recovered in the event of a system failure, data breach, or disaster.

The scope of this policy encompasses all data within DoubleGood Technology's systems and applies to all employees, contractors, and third-party service providers who have access to the data.

# Keywords:
Data availability, Data confidentiality, Data integrity, Backup frequency, Recovery Point Objective (RPO), Recovery Time Objective (RTO), Data classification, Data retention, Backup storage, Backup integrity, Recovery testing

# Policy:
The following guidelines and requirements apply to the backup and recovery process:

## Data Classification and Retention:
a. Data Classification: All data within DoubleGood Technology's systems shall be classified based on its sensitivity and regulatory requirements.

b. Data Retention Periods: The retention periods for different data categories shall be defined and documented, considering legal requirements, business needs, and industry standards. The following retention periods apply:
 - Financial and accounting data: 7 years
 - Customer personal information: 3 years after the end of the customer relationship
 - Employee records: 5 years after employment termination
 - System logs and audit trails: 1 year

## Backup Procedures:
a. Regular Backups: DoubleGood Technology shall perform regular backups of critical data according to the defined backup schedule.

b. Backup Storage: Backed-up data shall be securely stored in AWS S3 or other approved cloud-based storage services, following industry best practices and encryption standards.

c. Backup Integrity: Regular tests and verifications shall be conducted to ensure the integrity and recoverability of backup data.

## Recovery Process:
a. Recovery Point Objective (RPO): DoubleGood Technology shall define the maximum acceptable data loss in the event of a system failure or data breach, aligning with the trust service principle of data availability.

b. Recovery Time Objective (RTO): The timeframe within which data and systems should be restored after a disruption shall be determined and documented, considering the impact on business operations and the trust service principle of data availability.

c. Recovery Testing: Periodic recovery testing shall be conducted to validate the effectiveness and efficiency of the recovery process. This includes testing the restoration of data from backups to ensure the ability to recover critical systems and data.

## Policy Review and Updates:
a. Regular Review: The backup and recovery policy, including the data retention aspects, shall be reviewed periodically to ensure compliance with changing legal and regulatory requirements.

b. Policy Updates: Any necessary updates or revisions to the retention policy shall be documented, communicated, and implemented accordingly.

# Appendices:
## Journal of backups and recoveries

|   Date      |    Time     |    Action                |    Responsible Person        |
|-------------|-------------|--------------------------|------------------------------|
| 2023-05-15  |  10:00 AM   | Creating database backup |        John Smith            |
| 2023-05-15  |  10:15 AM   | Checking backup integrity|        Sarah Johnson         |
| 2023-05-16  |  09:30 AM   | Data recovery after      |        David Thompson        |
|             |             | system failure           |                              |
| 2023-05-18  |  11:45 AM   | Restoring files from     |        Emma Davis            |
|             |             | backup for user          |                              |


Revision History:
Version Date Editor Description of Changes
V1 Jun 14, 2023 DoubleGood Technology Initial Creation
V1.2 Jun 15 2023 Valentyn Nastenko  Change Data Retention Periods

By implementing this Backup and Recovery Policy, DoubleGood Technology aims to maintain the availability, confidentiality, and integrity of its data while adhering to SOC 2 requirements and industry best practices.