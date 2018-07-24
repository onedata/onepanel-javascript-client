# Onepanel.DnsCheckResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **String** | Describes status of the cluster domain name in public DNS.  | 
**dnsZone** | **String** | This field is returned only in the Onezone Onepanel. Indicates whether the nameservers used responsible for the domain (as in NS records) match the cluster IPs. Requires NS and glue records to be configured properly at the dns provider.  | [optional] 


<a name="DomainEnum"></a>
## Enum: DomainEnum


* `unresolvable` (value: `"unresolvable"`)

* `missing_records` (value: `"missing_records"`)

* `bad_records` (value: `"bad_records"`)

* `ok` (value: `"ok"`)




<a name="DnsZoneEnum"></a>
## Enum: DnsZoneEnum


* `unresolvable` (value: `"unresolvable"`)

* `missing_records` (value: `"missing_records"`)

* `bad_records` (value: `"bad_records"`)

* `ok` (value: `"ok"`)




