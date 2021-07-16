# Onepanel.PosixModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;posix\&quot;&#x60;  Any POSIX compatible storage, typically attached over high-throughput local network, such as NFS.  | 
**mountPoint** | **String** | The absolute path to the directory where the POSIX storage is mounted on the cluster nodes.  | [optional] 
**rootUid** | **Number** | UID of the user on whose behalf operations in the admin context will be performed on the storage. | [optional] 
**rootGid** | **Number** | GID of the group on whose behalf operations in the admin context will be performed on the storage. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `posix` (value: `"posix"`)




