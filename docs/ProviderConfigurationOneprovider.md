# Onepanel.ProviderConfigurationOneprovider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**register** | **Boolean** | Defines whether the provider should be registered in a zone. | 
**token** | **String** | Registration token obtained from Onezone. This token identifies Onezone to be used and authorizes the registration request.  | [optional] 
**name** | **String** | The name under which the provider will be registered in a zone. | 
**subdomainDelegation** | **Boolean** | If enabled, the storage provider will be assigned a subdomain in onezone&#39;s domain and &#39;subdomain&#39; property must be provided. If disabled, &#39;domain&#39; property should be provided.  | [optional] [default to false]
**subdomain** | **String** | Unique subdomain in onezone&#39;s domain for the provider. Required if subdomain delegation is enabled.  | [optional] 
**letsEncryptEnabled** | **Boolean** | If enabled the provider will use Let&#39;s Encrypt service to obtain SSL certificates. Otherwise certificates must be manually provided. This option cannot be enabled if subdomainDelegation is false. By enabling this option you agree to the Let&#39;s Encrypt Subscriber Agreement.  | [optional] [default to false]
**domain** | **String** | The fully qualified domain name of the provider or its IP address (only for single-node deployments or clusters with a reverse proxy). Required if subdomain delegation is disabled.  | [optional] 
**geoLongitude** | **Number** | The geographical longitude of the provider. | [optional] 
**geoLatitude** | **Number** | The geographical latitude of the provider. | [optional] 
**adminEmail** | **String** | Email address of the oneprovider administrator. | 


