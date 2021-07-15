# Onepanel.Posix

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;posix\&quot;&#x60;  Any POSIX compatible storage, typically attached over high-throughput local network, such as NFS.  | 
**mountPoint** | **String** | The absolute path to the directory where the POSIX storage is mounted on the cluster nodes.  | 
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;canonical&#39;]
**rootUid** | **Number** | UID of the user, on whose behalf operations in the admin context will be performed on the storage. | [optional] 
**rootGid** | **Number** | GID of the group, on whose behalf operations in the admin context will be performed on the storage. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `posix` (value: `"posix"`)




