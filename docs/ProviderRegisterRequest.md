# Onepanel.ProviderRegisterRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name under which the provider should be registered in a zone.  | 
**subdomainDelegation** | **Boolean** | If enabled, the storage provider will be assigned a subdomain in onezone&#39;s domain  and &#39;subdomain&#39; property must be provided. If disabled, &#39;domain&#39; property  should be provided.  | [optional] [default to false]
**subdomain** | **String** | Unique subdomain in onezone&#39;s domain for the storage provider. Required if  subdomain delegation is enabled.  | [optional] 
**domain** | **String** | The fully qualified domain name of the storage provider or its IP address (only for  single-node deployments or clusters with a reverse proxy). Required if  subdomain delegation is disabled.  | [optional] 
**geoLongitude** | **Number** | The geographical longitude of the storage provider.  | [optional] 
**geoLatitude** | **Number** | The geographical latitude of the storage provider.  | [optional] 
**onezoneDomainName** | **String** | The domain name of a zone where this storage provider will be registered.  | 
**adminEmail** | **String** | Email address of the oneprovider administrator. | [optional] 


