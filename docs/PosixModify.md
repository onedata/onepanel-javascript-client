# Onepanel.PosixModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;posix\&quot;&#x60;  Any POSIX compatible storage, typically attached over high-throughput local network, such as NFS.  | 
**mountPoint** | **String** | Absolute path to the root directory of the storage file system. The directory must exist and be accessible. In containerized deployments, this path refers to a location inside the container (Docker/pod) and must be mounted referencing an external persistent storage (e.g., host file system or network storage), except for non-persistent (testing) deployments.  | [optional] 
**rootUid** | **Number** | UID of the user on whose behalf operations in the admin context will be performed on the storage. | [optional] 
**rootGid** | **Number** | GID of the group on whose behalf operations in the admin context will be performed on the storage. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `posix` (value: `"posix"`)




