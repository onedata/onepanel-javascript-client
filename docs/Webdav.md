# Onepanel.Webdav

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;webdav\&quot;&#x60;  Storage backend compatible with [WebDAV](https://tools.ietf.org/html/rfc4918) protocol.  | 
**endpoint** | **String** | Full URL of the WebDAV server, including scheme (http or https) and path.  | 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the WebDAV server.  | [optional] [default to true]
**authorizationHeader** | **String** | The authorization header to be used for passing the access token. This field can contain any prefix that should be added to the header value. Default is &#x60;Authorization: Bearer {}&#x60;. The token will placed where &#x60;{}&#x60; is provided.  | [optional] [default to &#39;Authorization: Bearer {}&#39;]
**rangeWriteSupport** | **String** | The type of partial write support enabled in the WebDAV server. Currently 2 types are supported &#x60;sabredav&#x60; which assumes the server supports the SabreDAV PartialUpdate extension via &#x60;PATCH&#x60; method, and &#x60;moddav&#x60; which assumes server supports partial &#x60;PUT&#x60; requests with &#x60;Content-Range&#x60; header. If &#x60;none&#x60; is selected no write support is available for this WebDAV storage.  | [optional] [default to &#39;none&#39;]
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single WebDAV storage.  | [optional] 
**maximumUploadSize** | **Number** | Defines the maximum upload size for a single &#x60;PUT&#x60; or &#x60;PATCH&#x60; request. If set to 0, assumes that the WebDAV server has no upload limit.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from WebDAV storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0644&#x60;.  | [optional] [default to &#39;0664&#39;]
**dirMode** | **String** | Defines the directory mode which directories imported from WebDAV storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0775&#x60;.  | [optional] [default to &#39;0775&#39;]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed. **Note that &#39;flat&#39; paths are not allowed on this type of storage.**  | [optional] [default to &#39;canonical&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `webdav` (value: `"webdav"`)




<a name="RangeWriteSupportEnum"></a>
## Enum: RangeWriteSupportEnum


* `none` (value: `"none"`)

* `moddav` (value: `"moddav"`)

* `sabredav` (value: `"sabredav"`)




<a name="StoragePathTypeEnum"></a>
## Enum: StoragePathTypeEnum


* `canonical` (value: `"canonical"`)




