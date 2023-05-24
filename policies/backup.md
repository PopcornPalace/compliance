Backup Policy
SOC 2 Criteria: CC9.1, A1.2

Keywords: Multiple availability zones, Backup frequency

Purpose
To protect the confidentiality, integrity, and availability of data, both for Userflow and Userflow’s customers, complete backups are performed daily to assure that data remains available when it’s needed and in the case of a disaster.

Policy
 policy requires that:

Data should be classified at time of creation or acquisition according to the Data Classification Policy.
An up-to-date inventory and data flow map of all critical data are maintained.
All business data should be stored or replicated into a company controlled repository, including data on end-user computing systems.
Data must be backed up according to its level defined in Data Classification Policy.
Data retention period must be defined and comply with any and all applicable regulatory and contractual requirements. More specifically
Backup and Recovery
Customer Data

Userflow stores customer data in a secure production account in Google Cloud Platform (GCP), using a PostgreSQL database. By default, Google Cloud Storage provides durable infrastructure to store important data and is designed for durability of 99.999999999% of objects.

Userflow performs automatic backups of all customer and system data to protect against catastrophic loss due to unforeseen events that impact the entire system. An automated process will back up all data to a separate region in the same country (e.g. US East to US West). By default, data will be backed up daily. The backups are encrypted in the same way as live production data. Backups are monitored and alerted by Google Cloud SQL.

Source Code

Userflow stores its source code in git repositories hosted by Github. Source code repositories are backed up locally on a daily basis. In the event that Github suffers a catastrophic loss of data, source code will be restored from the local backups.

Revision History
Version	Date	Editor	Description of Changes
V1	October 20th, 2021	Userflow	Initial Creation