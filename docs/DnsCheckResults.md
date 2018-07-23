# Onepanel.DnsCheckResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **String** | Describes the cluster domain name status in public dns. Possible values: - \&quot;unresolvable\&quot; - no A records can be found for the domain - \&quot;missing_ips\&quot; - no A records can be found for the domain - \&quot;unknown_ips\&quot; - IPs returned by dns servers are not the cluster external IPs as configured in onepanel - \&quot;ok\&quot; - The domain is configured correctly  | 
**dnsZone** | **String** | Checks if management of the cluster&#39;s domain and its subdomains was delegated to the built-in dns server. This field is returned only in the Onezone onepanel. Possible values: - \&quot;no_ns_records\&quot; - no NS records could be resolved - \&quot;bad_ns_ips\&quot; - nameserver IPs resolved by global dns servers are not the cluster exteanl IPs as configured in onepanel - \&quot;ok\&quot; - The dns zone delegation is configured correctly  | [optional] 


<a name="DomainEnum"></a>
## Enum: DomainEnum


* `unresolvable` (value: `"unresolvable"`)

* `missing_ips` (value: `"missing_ips"`)

* `foreing_ips` (value: `"foreing_ips"`)

* `ok` (value: `"ok"`)




<a name="DnsZoneEnum"></a>
## Enum: DnsZoneEnum


* `no_ns_records` (value: `"no_ns_records"`)

* `bad_ns_ips` (value: `"bad_ns_ips"`)

* `ok` (value: `"ok"`)




