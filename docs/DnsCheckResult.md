# Onepanel.DnsCheckResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summary** | **String** | Presents an interpration of a DNS configuration check. Possible values are: - \&quot;error\&quot; -&gt; no DNS server could be contacted to perform the check - \&quot;unresolvable\&quot; - checked DNS name could not be resolved - \&quot;missing_records\&quot; - only some of the expected results were returned by the DNS server - \&quot;bad_records\&quot; - none of the expected results were returned by the DNS server - \&quot;ok\&quot; - obtained resultsa are correct  | 
**expected** | **[String]** | List of expected query results.  | 
**got** | **[String]** | List of obtained query results.  | 


<a name="SummaryEnum"></a>
## Enum: SummaryEnum


* `unresolvable` (value: `"unresolvable"`)

* `missing_records` (value: `"missing_records"`)

* `bad_records` (value: `"bad_records"`)

* `ok` (value: `"ok"`)




