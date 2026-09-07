# Onepanel.WebdavModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;webdav\&quot;&#x60;  Storage backend compatible with [WebDAV](https://tools.ietf.org/html/rfc4918) protocol.  | 
**endpoint** | **String** | Full URL of the WebDAV server, including scheme (http or https) and path.  | [optional] 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the WebDAV server.  | [optional] 
**credentialsType** | **String** | Determines what credentials will be used to authorize access to the WebDAV storage backend. For public endpoints, select \&quot;none\&quot;.  | [optional] 
**credentials** | **String** | The credentials to authenticate with the WebDAV server. &#x60;basic&#x60; credentials should be provided in the form &#x60;username:password&#x60;, for &#x60;token&#x60; just the token. In case of &#x60;oauth2&#x60;, this field should contain the username for the WebDAV, while the token will be obtained and refreshed automatically in the background. For &#x60;none&#x60; this field is ignored.  | [optional] 
**oauth2IdP** | **String** | In case &#x60;oauth2&#x60; credential type is selected and Onezone is configured with support for multiple external IdP&#39;s, this field must contain the name of the IdP which authenticates requests to the WebDAV endpoint. If Onezone has only one external IdP, it will be selected automatically.  | [optional] 
**onedataAccessToken** | **String** | An access token of the Onedata user in whose name IdP access tokens will be acquired. Used only with the &#x60;oauth2&#x60; credentials type, where it is effectively required - Oneprovider verifies it when the storage is created or modified and then spends it to obtain and refresh access tokens of the IdP indicated by &#x60;oauth2IdP&#x60;. It is never passed to the WebDAV server.  | [optional] 
**authorizationHeader** | **String** | Header format for passing the API/access token to the backend storage server. The token will be inserted in place of \&quot;{}\&quot;. Use a colon to separate the header name and value, e.g. \&quot;X-API-Token: {}\&quot;.  | [optional] 
**rangeWriteSupport** | **String** | Select the mechanism used for range writes (partial/random-access writes). Since the Onedata filesystem permits partial file modifications, writable supports require a storage backend that implements the selected method. Standard WebDAV does not support range writes and only provides write-once semantics.  | [optional] 
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single WebDAV storage.  | [optional] 
**maximumUploadSize** | **Number** | Defines the maximum upload size for a single &#x60;PUT&#x60; or &#x60;PATCH&#x60; request. If set to 0, assumes that the WebDAV server has no upload limit.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from WebDAV storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0644&#x60;.  | [optional] 
**dirMode** | **String** | Defines the directory mode which directories imported from WebDAV storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0775&#x60;.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `webdav` (value: `"webdav"`)




<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `none` (value: `"none"`)

* `basic` (value: `"basic"`)

* `token` (value: `"token"`)

* `oauth2` (value: `"oauth2"`)




<a name="RangeWriteSupportEnum"></a>
## Enum: RangeWriteSupportEnum


* `none` (value: `"none"`)

* `moddav` (value: `"moddav"`)

* `sabredav` (value: `"sabredav"`)




