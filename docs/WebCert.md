# Onepanel.WebCert

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**letsEncrypt** | **Boolean** | If true, the certificate is obtained from Let&#39;s Encrypt service and renewed automatically. Otherwise, the certificate management is up to the administrator.  | 
**expirationTime** | **String** | Installed certificate&#39;s expiration time formatted in ISO 8601.  | 
**creationTime** | **String** | Installed certificate&#39;s creation time formatted in ISO 8601.  | 
**paths** | [**WebCertPaths**](WebCertPaths.md) |  | [optional] 
**domain** | **String** | The domain (Common Name) for which current certificate was issued.  | 
**issuer** | **String** | Issuer value of the current certificate.  | 


