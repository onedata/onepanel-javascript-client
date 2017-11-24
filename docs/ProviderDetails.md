# Onepanel.ProviderDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID assigned by a zone. | 
**name** | **String** | The name under which the provider has been registered in a zone. | 
**subdomainDelegation** | **Boolean** | If enabled, the storage provider has a subdomain in onezone&#39;s domain and  &#39;subdomain&#39; property must be provided.  | 
**subdomain** | **String** | Unique subdomain in onezone&#39;s domain for the provider. Required if subdomain  delegation is enabled.  | [optional] 
**domain** | **String** | The fully qualified domain name of the provider or its IP address  (only for single-node deployments or clusters with a reverse proxy).  | 
**geoLongitude** | **Number** | The geographical longitude of the provider. | 
**geoLatitude** | **Number** | The geographical latitude of the provider. | 
**onezoneDomainName** | **String** | The domain name of a zone where this storage provider is registered. | 


