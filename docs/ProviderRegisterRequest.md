# Onepanel.ProviderRegisterRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name under which the provider should be registered in a zone.  | 
**subdomainDelegation** | **Boolean** | If enabled, the storage provider will be assigned a subdomain in onezone&#39;s domain and &#39;subdomain&#39; property must be provided. If disabled, &#39;domain&#39; property should be provided.  | [default to false]
**subdomain** | **String** | Unique subdomain in onezone&#39;s domain for the storage provider. Required if subdomain delegation is enabled.  | [optional] 
**token** | **String** | Registration token obtained from Onezone service. This token identifies Onezone to be used and authorizes the registration request.  | 
**geoLongitude** | **Number** | The geographical longitude of the storage provider.  | [optional] 
**geoLatitude** | **Number** | The geographical latitude of the storage provider.  | [optional] 
**adminEmail** | **String** | Email address of the oneprovider administrator. | 


