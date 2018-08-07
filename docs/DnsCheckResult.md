# Onepanel.DnsCheckResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summary** | **String** | Presents an interpration of a DNS configuration check. Possible values are:  - &#39;error&#39; - no DNS server could be contacted to perform the check - &#39;unresolvable&#39; - checked DNS name could not be resolved - &#39;missing_records&#39; - only some of the expected results were returned by the DNS server - &#39;bad_records&#39; - none of the expected results were returned by the DNS server - &#39;ok&#39; - obtained resultsa are correct  | 
**expected** | **[String]** | List of expected query results.  | 
**got** | **[String]** | List of obtained query results.  | 


<a name="SummaryEnum"></a>
## Enum: SummaryEnum


* `unresolvable` (value: `"unresolvable"`)

* `missing_records` (value: `"missing_records"`)

* `bad_records` (value: `"bad_records"`)

* `ok` (value: `"ok"`)




