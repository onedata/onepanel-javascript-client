# Onepanel.WebCert

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**letsEncrypt** | **Boolean** | If true, the certificate is obtained from Let&#39;s Encrypt service and renewed automatically. Otherwise, the certificate management is up to the administrator.  | 
**expirationTime** | **String** | Installed certificate&#39;s expiration time in ISO 8601 format.  | 
**creationTime** | **String** | Installed certificate&#39;s creation time in ISO 8601 format.  | 
**status** | **String** | Describes certificate validity status. | 
**paths** | [**WebCertPaths**](WebCertPaths.md) |  | [optional] 
**domain** | **String** | The domain (Common Name) for which current certificate was issued.  | 
**issuer** | **String** | Issuer value of the current certificate.  | 
**lastRenewalSuccess** | **String** | Date and time in ISO 8601 format. Represents last successful Let&#39;s Encrypt certification. If there are no successful attempts its value is null. This property is omitted if letsEncrypt is off.  | [optional] 
**lastRenewalFailure** | **String** | Date and time in ISO 8601 format. Represents last unsuccessful Let&#39;s Encrypt certification. If there are no successful attempts its value is null. This property is omitted if letsEncrypt is off.  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `valid` (value: `"valid"`)

* `near_expiration` (value: `"near_expiration"`)

* `expired` (value: `"expired"`)

* `domain_mismatch` (value: `"domain_mismatch"`)

* `regenerating` (value: `"regenerating"`)

* `unknown` (value: `"unknown"`)




