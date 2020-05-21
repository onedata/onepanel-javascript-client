# Onepanel.WebdavCredentials

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the storage. Must match the type of existing storage, needed only for OpenAPI polymorphism disambiguation.  | 
**credentialsType** | **String** | Determines the types of credentials provided in the credentials field.  | [optional] [default to &#39;none&#39;]
**credentials** | **String** | The credentials to authenticate with the WebDAV server. &#x60;basic&#x60; credentials should be provided in the form &#x60;username:password&#x60;, for &#x60;token&#x60; just the token. In case of &#x60;oauth2&#x60;, this field should contain the username for the WebDAV, while the token will be obtained and refreshed automatically in the background. For &#x60;none&#x60; this field is ignored.  | [optional] 
**oauth2IdP** | **String** | In case &#x60;oauth2&#x60; credential type is selected and Onezone is configured with support for multiple external IdP&#39;s, this field must contain the name of the IdP which authenticates requests to the WebDAV endpoint. If Onezone has only one external IdP, it will be selected automatically.  | [optional] 
**onedataAccessToken** | **String** | When registering storage with disabled LUMA service with &#x60;oauth2&#x60; external IdP, this field must contain a valid Onedata access token of the user on whose behalf the WebDAV storage will be accessed by all users with access to any space supported by this storage.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `webdav` (value: `"webdav"`)




<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `none` (value: `"none"`)

* `basic` (value: `"basic"`)

* `token` (value: `"token"`)

* `oauth2` (value: `"oauth2"`)




