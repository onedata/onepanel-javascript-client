# Onepanel.HTTPModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;http\&quot;&#x60;  Any [HTTP](https://tools.ietf.org/html/rfc7231) or HTTPS compatible server. Supported only with Readonly option enabled and in manual import mode.  | 
**endpoint** | **String** | Base URL of the HTTP server, including scheme (&#x60;http&#x60; or &#x60;https&#x60;) and optional path prefix. When registering files by relative path in &#x60;storageFileId&#x60;, that path is appended to this URL. **Note:** A full URI supplied as &#x60;storageFileId&#x60; always takes precedence and bypasses this endpoint, allowing files from any HTTP server reachable by the Oneprovider to be registered.  | [optional] 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the HTTP server.  | [optional] 
**credentialsType** | **String** | Determines the types of credentials provided in the credentials field.  | [optional] 
**credentials** | **String** | The credentials to authenticate with the HTTP server. &#x60;basic&#x60; credentials should be provided in the form &#x60;username:password&#x60;, for &#x60;token&#x60; just the token. In case of &#x60;oauth2&#x60;, this field should contain the username for the HTTP, while the token will be obtained and refreshed automatically in the background. For &#x60;none&#x60; this field is ignored.  | [optional] 
**oauth2IdP** | **String** | In case &#x60;oauth2&#x60; credential type is selected and Onezone is configured with support for multiple external IdP&#39;s, this field must contain the name of the IdP which authenticates requests to the HTTP endpoint. If Onezone has only one external IdP, it will be selected automatically.  | [optional] 
**onedataAccessToken** | **String** | A token specific for this storage backend that will be used to authorize data access operations.  | [optional] 
**authorizationHeader** | **String** | Header format for passing the API/access token to the backend storage server. The token will be inserted in place of \&quot;{}\&quot;. Use a colon to separate the header name and value, e.g. \&quot;X-API-Token: {}\&quot;.  | [optional] 
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single HTTP storage.  | [optional] 
**maxRequestsPerSession** | **Number** | Defines the maximum number of requests performed in a single HTTP session. After the limit is reached, &#39;Connection: close&#39; header is sent to the server. When set to 0 (default), number of requests per session is unlimited, unless imposed by the server.  | [optional] 
**emulateRangeRead** | **Boolean** | Enables fallback emulation of range reads for HTTP servers that do not support the &#x60;Range&#x60; header. When active, the full file content is downloaded and only the requested byte range is returned to the caller. Has no effect on servers that support range reads natively. **Warning:** Emulation causes significant performance degradation and increased memory usage; enable only as a last resort.  | [optional] 
**maxEmulatedRangeReadFileSize** | **Number** | Maximum file size in bytes eligible for emulated range reads. Files exceeding this limit cannot be accessed from servers that lack native range read support. Has no effect unless &#x60;emulateRangeRead&#x60; is &#x60;true&#x60;.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from HTTP storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0664&#x60;.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `http` (value: `"http"`)




<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `none` (value: `"none"`)

* `basic` (value: `"basic"`)

* `token` (value: `"token"`)

* `oauth2` (value: `"oauth2"`)




