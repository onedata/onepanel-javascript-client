# Onepanel.WebCert

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**letsEncrypt** | **Boolean** | If true, the certificate is obtained from Let&#39;s Encrypt service and renewed automatically. Otherwise, the certificate management is up to the administrator.  | 
**expirationTime** | **String** | Installed certificate&#39;s expiration time formatted in ISO 8601.  | 
**creationTime** | **String** | Installed certificate&#39;s creation time formatted in ISO 8601.  | 
**status** | **String** | Describes certificate validity status. | 
**paths** | [**WebCertPaths**](WebCertPaths.md) |  | [optional] 
**domain** | **String** | The domain (Common Name) for which current certificate was issued.  | 
**issuer** | **String** | Issuer value of the current certificate.  | 
**lastRenewalSuccess** | **String** | Date and time formatted as iso8601. Represents last sucesfful attempt to obtain certificate from Let&#39;s Encrypt. Null if there are no successful attempts. This property is omitted if letsEncrypt is off.  | [optional] 
**lastRenewalFailure** | **String** | Date and time formatted as iso8601. Represents last unsucesfful attempt to obtain certificate from Let&#39;s Encrypt. Null if there are no failed attempts. This property is omitted if letsEncrypt is off.  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `valid` (value: `"valid"`)

* `near_expiration` (value: `"near_expiration"`)

* `expired` (value: `"expired"`)

* `domain_mismatch` (value: `"domain_mismatch"`)

* `regenerating` (value: `"regenerating"`)

* `unknown` (value: `"unknown"`)




