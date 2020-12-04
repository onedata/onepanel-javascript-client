# Onepanel.ProviderConfigurationOneprovider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**register** | **Boolean** | Defines whether the provider should be registered in a zone. | 
**tokenProvisionMethod** | **String** | Indicates how the Oneprovider registration token will be provided: * &#x60;\&quot;inline\&quot;&#x60; - the registration token must be placed in the **token**   field (consult for more information). * &#x60;\&quot;fromFile\&quot;&#x60; - the registration token will be read from given file,   specified in the **tokenFile** field (consult for more information).  | [optional] [default to &#39;inline&#39;]
**token** | **String** | Registration token obtained from Onezone. This token identifies the Onezone service where the Oneprovider will be registered and authorizes the registration request. Required when the &#x60;tokenProvisionMethod&#x60; is set to &#x60;\&quot;inline\&quot;&#x60;.  | [optional] 
**tokenFile** | **String** | Absolute path to the file containing the Oneprovider registration token. The token (and nothing else) should be placed in the file as plaintext. The file does not have to pre-exist - it may be created after this request is made (Onepanel will wait for the file to appear for some time). Required when the &#x60;tokenProvisionMethod&#x60; is set to &#x60;\&quot;fromFile\&quot;&#x60;.  | [optional] 
**name** | **String** | The name under which the provider will be registered in a zone. | 
**subdomainDelegation** | **Boolean** | If enabled, the storage provider will be assigned a subdomain in onezone&#39;s domain and &#39;subdomain&#39; property must be provided. If disabled, &#39;domain&#39; property should be provided.  | [optional] [default to false]
**subdomain** | **String** | Unique subdomain in onezone&#39;s domain for the provider. Required if subdomain delegation is enabled.  | [optional] 
**letsEncryptEnabled** | **Boolean** | If enabled the provider will use Let&#39;s Encrypt service to obtain SSL certificates. Otherwise certificates must be manually provided. This option cannot be enabled if subdomainDelegation is false. By enabling this option you agree to the Let&#39;s Encrypt Subscriber Agreement.  | [optional] [default to false]
**domain** | **String** | The fully qualified domain name of the provider or its IP address (only for single-node deployments or clusters with a reverse proxy). Required if subdomain delegation is disabled.  | [optional] 
**geoLongitude** | **Number** | The geographical longitude of the provider. | [optional] 
**geoLatitude** | **Number** | The geographical latitude of the provider. | [optional] 
**adminEmail** | **String** | Email address of the oneprovider administrator. | 


<a name="TokenProvisionMethodEnum"></a>
## Enum: TokenProvisionMethodEnum


* `inline` (value: `"inline"`)

* `fromFile` (value: `"fromFile"`)




