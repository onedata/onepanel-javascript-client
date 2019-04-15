# Onepanel.ProviderDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Id assigned by a zone. | 
**name** | **String** | The name under which the Oneprovider has been registered in a zone. | 
**subdomainDelegation** | **Boolean** | If enabled, the storage Oneprovider has a subdomain in onezone&#39;s domain and &#39;subdomain&#39; property must be provided.  | 
**subdomain** | **String** | Unique subdomain in onezone&#39;s domain for the Oneprovider. Required if subdomain delegation is enabled.  | [optional] 
**domain** | **String** | The fully qualified domain name of the Oneprovider or its IP address (only for single-node deployments or clusters with a reverse proxy).  | 
**adminEmail** | **String** | Email address of the Oneprovider administrator. Omitted if it could not be retrievied. | [optional] 
**geoLongitude** | **Number** | The geographical longitude of the Oneprovider. | 
**geoLatitude** | **Number** | The geographical latitude of the Oneprovider. | 
**onezoneDomainName** | **String** | The domain name of a zone where this storage Oneprovider is registered. | 


