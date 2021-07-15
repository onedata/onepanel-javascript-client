# Onepanel.HTTP

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;http\&quot;&#x60;  Any [HTTP](https://tools.ietf.org/html/rfc7231) or HTTPS compatible server. Supported only with Readonly option enabled and in manual import mode.  | 
**endpoint** | **String** | Full URL of the HTTP server, including scheme (http or https) and path.  | 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the HTTP server.  | [optional] [default to true]
**authorizationHeader** | **String** | The authorization header to be used for passing the access token. This field can contain any prefix that should be added to the header value. Default is &#x60;Authorization: Bearer {}&#x60;. The token will placed where &#x60;{}&#x60; is provided.  | [optional] [default to &#39;Authorization: Bearer {}&#39;]
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single HTTP storage.  | [optional] 
**maxRequestsPerSession** | **Number** | Defines the maximum number of requests performed in a single HTTP session. After the limit is reached, &#39;Connection: close&#39; header is sent to the server. When set to 0 (default), number of requests per session is unlimited, unless imposed by the server.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from HTTP storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0664&#x60;.  | [optional] [default to &#39;0664&#39;]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;canonical&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `http` (value: `"http"`)




