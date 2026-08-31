# Onepanel.HTTPCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;http\&quot;&#x60;  Any [HTTP](https://tools.ietf.org/html/rfc7231) or HTTPS compatible server. Supported only with Readonly option enabled and in manual import mode.  | 
**endpoint** | **String** | Base URL of the HTTP server, including scheme (&#x60;http&#x60; or &#x60;https&#x60;) and optional path prefix. When registering files by relative path in &#x60;storageFileId&#x60;, that path is appended to this URL. **Note:** A full URI supplied as &#x60;storageFileId&#x60; always takes precedence and bypasses this endpoint, allowing files from any HTTP server reachable by the Oneprovider to be registered.  | 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the HTTP server.  | [optional] [default to true]
**authorizationHeader** | **String** | Header format for passing the API/access token to the backend storage server. The token will be inserted in place of \&quot;{}\&quot;. Use a colon to separate the header name and value, e.g. \&quot;X-API-Token: {}\&quot;.  | [optional] [default to &#39;Authorization: Bearer {}&#39;]
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single HTTP storage.  | [optional] 
**maxRequestsPerSession** | **Number** | Defines the maximum number of requests performed in a single HTTP session. After the limit is reached, &#39;Connection: close&#39; header is sent to the server. When set to 0 (default), number of requests per session is unlimited, unless imposed by the server.  | [optional] 
**emulateRangeRead** | **Boolean** | Enables fallback emulation of range reads for HTTP servers that do not support the &#x60;Range&#x60; header. When active, the full file content is downloaded and only the requested byte range is returned to the caller. Has no effect on servers that support range reads natively. **Warning:** Emulation causes significant performance degradation and increased memory usage; enable only as a last resort.  | [optional] [default to false]
**maxEmulatedRangeReadFileSize** | **Number** | Maximum file size in bytes eligible for emulated range reads. Files exceeding this limit cannot be accessed from servers that lack native range read support. Has no effect unless &#x60;emulateRangeRead&#x60; is &#x60;true&#x60;.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from HTTP storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0664&#x60;.  | [optional] [default to &#39;0664&#39;]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;canonical&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `http` (value: `"http"`)




