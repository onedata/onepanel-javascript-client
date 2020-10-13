# Onepanel.WebdavCredentials

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the storage. Must be given explicitly and must match the actual type of subject storage - this redundancy is needed due to limitations of OpenAPI polymorphism.  | 
**credentialsType** | **String** | Determines the types of credentials provided in the credentials field.  | [optional] [default to &#39;none&#39;]
**credentials** | **String** | The credentials to authenticate with the WebDAV server. &#x60;basic&#x60; credentials should be provided in the form &#x60;username:password&#x60;, for &#x60;token&#x60; just the token. In case of &#x60;oauth2&#x60;, this field should contain the username for the WebDAV, while the token will be obtained and refreshed automatically in the background. For &#x60;none&#x60; this field is ignored.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `webdav` (value: `"webdav"`)




<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `none` (value: `"none"`)

* `basic` (value: `"basic"`)

* `token` (value: `"token"`)

* `oauth2` (value: `"oauth2"`)




