# Onepanel.Webdav

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | 
**endpoint** | **String** | Full URL of the WebDAV server, including scheme (http or https) and path.  | 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the WebDAV server.  | [optional] [default to true]
**credentialsType** | **String** | Determines the types of credentials provided in the credentials field.  | [optional] [default to &#39;none&#39;]
**credentials** | **String** | The credentials to authenticate with the WebDAV server. &#x60;basic&#x60; credentials should be provided in the form &#x60;username:password&#x60;, for &#x60;token&#x60; just the token. For &#x60;none&#x60; this field is ignored.  | [optional] 
**authorizationHeader** | **String** | The authorization header to be used for passing the access token. This field can contain any prefix that should be added to the header value. Default is &#x60;Authorization: Bearer {}&#x60;. The token will placed where &#x60;{}&#x60; is provided.  | [optional] [default to &#39;Authorization: Bearer {}&#39;]
**rangeWriteSupport** | **String** | The type of partial write support enabled in the WebDAV server. Currently 2 types are supported &#x60;sabredav&#x60; which assumes the server supports the SabreDAV PartialUpdate extension via &#x60;PATCH&#x60; method, and &#x60;moddav&#x60; which assumes server supports partial &#x60;PUT&#x60; requests with &#x60;Content-Range&#x60; header. If &#x60;none&#x60; is selected no write support is available for this WebDAV storage.  | [optional] [default to &#39;none&#39;]
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single WebDAV storage.  | [optional] 
**maximumUploadSize** | **Number** | Defines the maximum upload size for a single &#x60;PUT&#x60; or &#x60;PATCH&#x60; request. If set to 0, assumes that the WebDAV server has no upload limit.  | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;canonical&#39;]


<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `none` (value: `"none"`)

* `basic` (value: `"basic"`)

* `token` (value: `"token"`)




<a name="RangeWriteSupportEnum"></a>
## Enum: RangeWriteSupportEnum


* `none` (value: `"none"`)

* `moddav` (value: `"moddav"`)

* `sabredav` (value: `"sabredav"`)




