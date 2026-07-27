# Onepanel.Webdav

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;webdav\&quot;&#x60;  Storage backend compatible with [WebDAV](https://tools.ietf.org/html/rfc4918) protocol.  | 
**endpoint** | **String** | Full URL of the WebDAV server, including scheme (http or https) and path.  | 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the WebDAV server.  | [optional] [default to true]
**authorizationHeader** | **String** | Header format for passing the API/access token to the backend storage server. The token will be inserted in place of \&quot;{}\&quot;. Use a colon to separate the header name and value, e.g. \&quot;X-API-Token: {}\&quot;.  | [optional] [default to &#39;Authorization: Bearer {}&#39;]
**rangeWriteSupport** | **String** | Select the mechanism used for range writes (partial/random-access writes). Since the Onedata filesystem permits partial file modifications, writable supports require a storage backend that implements the selected method. Standard WebDAV does not support range writes and only provides write-once semantics.  | [optional] [default to &#39;none&#39;]
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




