# Onepanel.NFSModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;nfs\&quot;&#x60;    NFS storage.  | 
**hostname** | **String** | The hostname (IP address or FQDN) of NFS server. | [optional] 
**version** | **Number** | The NFS protocol version. Allowed values are 3 (default) and 4 (experimental). | [optional] 
**volume** | **String** | The name of the NFS volume (export). | [optional] 
**dircache** | **Boolean** | Enables directory caching. | [optional] 
**readahead** | **Number** | The size of readahead in bytes. | [optional] 
**autoreconnect** | **Number** | The number of automatic reconnect attempts to the server. Setting &#x60;-1&#x60; enables infinite number of reconnects. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `nfs` (value: `"nfs"`)




