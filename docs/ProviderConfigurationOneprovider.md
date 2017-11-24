# Onepanel.ProviderConfigurationOneprovider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**register** | **Boolean** | Defines whether the provider should be registered in a zone. | 
**name** | **String** | The name under which the provider will be registered in a zone. | 
**subdomainDelegation** | **Boolean** | If enabled, the storage provider will be assigned a subdomain in onezone&#39;s  domain and &#39;subdomain&#39; property must be provided. If disabled,  &#39;domain&#39; property should be provided.  | [optional] [default to false]
**subdomain** | **String** | Unique subdomain in onezone&#39;s domain for the provider. Required if subdomain  delegation is enabled.  | [optional] 
**domain** | **String** | The fully qualified domain name of the provider or its IP address (only for  single-node deployments or clusters with a reverse proxy). Required if subdomain  delegation is disabled.  | [optional] 
**geoLongitude** | **Number** | The geographical longitude of the provider. | [optional] 
**geoLatitude** | **Number** | The geographical latitude of the provider. | [optional] 


