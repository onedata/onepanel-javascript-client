# Onepanel.ProviderModifyRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name under which the provider has been registered in a zone. | [optional] 
**subdomainDelegation** | **Boolean** | If enabled, the storage provider will be assigned a subdomain in onezone&#39;s domain  and &#39;subdomain&#39; property must be provided. If disabled, &#39;domain&#39; property  should be provided.  | [optional] 
**subdomain** | **String** | Unique subdomain in onezone&#39;s domain for the provider. This property is required  only if subdomain delegation is enabled. Otherwise it is ignored.  | [optional] 
**domain** | **String** | The fully qualified domain name of the provider or its IP address (only for  single-node deployments or clusters with a reverse proxy). This property is required  only if subdomain delegation is disabled. Otherwise it is ignored.  | [optional] 
**geoLongitude** | **Number** | The geographical longitude of the provider. | [optional] 
**geoLatitude** | **Number** | The geographical latitude of the provider. | [optional] 


