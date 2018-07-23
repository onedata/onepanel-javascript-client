# Onepanel.DnsCheckResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **String** | Describes the cluster domain name status in public DNS. Possible values: - \&quot;unresolvable\&quot; - no A records can be found for the domain - \&quot;missing_ips\&quot; - not all of cluster&#39;s IPs are returned in DNS A records - \&quot;unknown_ips\&quot; - IPs returned by DNS servers are different from the cluster external IPs as configured in onepanel - \&quot;ok\&quot; - the domain is configured correctly  | 
**dnsZone** | **String** | Checks if management of the cluster&#39;s domain and its subdomains was delegated to the built-in DNS server. This field is returned only in the Onezone onepanel. Possible values: - \&quot;no_ns_records\&quot; - no NS records could be resolved - \&quot;bad_ns_ips\&quot; - nameserver IPs resolved by global DNS servers are not the cluster exteanl IPs as configured in onepanel - \&quot;ok\&quot; - the DNS zone delegation is configured correctly  | [optional] 


<a name="DomainEnum"></a>
## Enum: DomainEnum


* `unresolvable` (value: `"unresolvable"`)

* `missing_ips` (value: `"missing_ips"`)

* `unknown_ips` (value: `"unknown_ips"`)

* `ok` (value: `"ok"`)




<a name="DnsZoneEnum"></a>
## Enum: DnsZoneEnum


* `no_ns_records` (value: `"no_ns_records"`)

* `bad_ns_ips` (value: `"bad_ns_ips"`)

* `ok` (value: `"ok"`)




