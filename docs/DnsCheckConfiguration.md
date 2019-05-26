# Onepanel.DnsCheckConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dnsServers** | **[String]** | A collection of IP addresses for DNS servers used in checking DNS. If empty, local system configuration will be used. | [optional] 
**builtInDnsServer** | **Boolean** | If true, DNS check will verify that control of DNS zone for Onezone&#39;s domain was delegated to the DNS server built into Onezone service. This option is available only in Onezone service.  | [optional] 
**dnsCheckAcknowledged** | **Boolean** | Flag indicating that user completed the DNS check step during interactive deployment.  | [optional] 


