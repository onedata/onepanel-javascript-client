# Onepanel.NFS

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;nfs\&quot;&#x60;  NFS storage.  | 
**volume** | **String** | The name of the NFS volume (export). | 
**hostname** | **String** | The hostname (IP address or FQDN) of NFS server. | 
**version** | **Number** | The NFS protocol version. Allowed values are 3 (default) and 4 (experimental). | [optional] 
**dircache** | **Boolean** | Enables directory caching. | [optional] [default to true]
**readahead** | **Number** | The size of readahead in bytes. | [optional] 
**autoreconnect** | **Number** | The number of automatic reconnect attempts to the server. Setting &#x60;-1&#x60; enables infinite number of reconnects. | [optional] 
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed. **Note that &#39;flat&#39; paths are not allowed on this type of storage.**  | [optional] [default to &#39;canonical&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `nfs` (value: `"nfs"`)




<a name="StoragePathTypeEnum"></a>
## Enum: StoragePathTypeEnum


* `canonical` (value: `"canonical"`)




