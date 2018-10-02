# Onepanel.DnsCheckResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summary** | **String** | An interpreation of results obtained from DNS check. Possible values are: &#39;unresolvable&#39; - query returned empty results; &#39;missing_records&#39; - only some of the expected results were returned; &#39;bad_records&#39; - none of the expected results were returned; &#39;ok&#39; - all of expected values were present in obtained results.  | 
**expected** | **[String]** | List of expected query results.  | 
**got** | **[String]** | List of obtained query results.  | 
**recommended** | **[String]** | List of suggested DNS records to set at your DNS provider to fulfill this check. Each record is provided in the format of BIND server. | 


<a name="SummaryEnum"></a>
## Enum: SummaryEnum


* `unresolvable` (value: `"unresolvable"`)

* `missing_records` (value: `"missing_records"`)

* `bad_records` (value: `"bad_records"`)

* `ok` (value: `"ok"`)




