# Onepanel.HTTPModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;http\&quot;&#x60;  Any [HTTP](https://tools.ietf.org/html/rfc7231) or HTTPS compatible server. Supported only with Readonly option enabled and in manual import mode.  | 
**endpoint** | **String** | Full URL of the HTTP server, including scheme (http or https) and path.  | [optional] 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the HTTP server.  | [optional] 
**credentialsType** | **String** | Determines the types of credentials provided in the credentials field.  | [optional] 
**credentials** | **String** | The credentials to authenticate with the HTTP server. &#x60;basic&#x60; credentials should be provided in the form &#x60;username:password&#x60;, for &#x60;token&#x60; just the token. For &#x60;none&#x60; this field is ignored.  | [optional] 
**authorizationHeader** | **String** | The authorization header to be used for passing the access token. This field can contain any prefix that should be added to the header value. Default is &#x60;Authorization: Bearer {}&#x60;. The token will placed where &#x60;{}&#x60; is provided.  | [optional] 
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single HTTP storage.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from HTTP storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0664&#x60;.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `http` (value: `"http"`)




<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `none` (value: `"none"`)

* `basic` (value: `"basic"`)

* `token` (value: `"token"`)




