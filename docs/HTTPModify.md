# Onepanel.HTTPModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;http\&quot;&#x60;  Any [HTTP](https://tools.ietf.org/html/rfc7231) or HTTPS compatible server. Supported only with Readonly option enabled and in manual import mode.  | 
**endpoint** | **String** | Full URL of the HTTP server, including scheme (http or https) and path.  | [optional] 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the HTTP server.  | [optional] 
**credentialsType** | **String** | Determines the types of credentials provided in the credentials field.  | [optional] 
**credentials** | **String** | The credentials to authenticate with the HTTP server. &#x60;basic&#x60; credentials should be provided in the form &#x60;username:password&#x60;, for &#x60;token&#x60; just the token. In case of &#x60;oauth2&#x60;, this field should contain the username for the HTTP, while the token will be obtained and refreshed automatically in the background. For &#x60;none&#x60; this field is ignored.  | [optional] 
**oauth2IdP** | **String** | In case &#x60;oauth2&#x60; credential type is selected and Onezone is configured with support for multiple external IdP&#39;s, this field must contain the name of the IdP which authenticates requests to the HTTP endpoint. If Onezone has only one external IdP, it will be selected automatically.  | [optional] 
**onedataAccessToken** | **String** | When registering storage with feed of LUMA DB set to&#x60;auto&#x60; and with &#x60;oauth2&#x60; external IdP, this field must contain a valid Onedata access token of the user on whose behalf the HTTP storage will be accessed by all users with access to any space supported by this storage.  | [optional] 
**authorizationHeader** | **String** | The authorization header to be used for passing the access token. This field can contain any prefix that should be added to the header value. Default is &#x60;Authorization: Bearer {}&#x60;. The token will placed where &#x60;{}&#x60; is provided.  | [optional] 
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single HTTP storage.  | [optional] 
**maxRequestsPerSession** | **Number** | Defines the maximum number of requests performed in a single HTTP session. After the limit is reached, &#39;Connection: close&#39; header is sent to the server. When set to 0 (default), number of requests per session is unlimited, unless imposed by the server.  | [optional] 
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




