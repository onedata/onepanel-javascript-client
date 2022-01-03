# Onepanel.NFSModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;nfs\&quot;&#x60;    NFS storage.  | 
**host** | **String** | The hostname (IP address or FQDN) of NFS server. | [optional] 
**version** | **Number** | The NFS protocol version. Allowed values are 3 (default) and 4 (experimental). | [optional] 
**volume** | **String** | The name of the NFS volume (export). | [optional] 
**connectionPoolSize** | **Number** | The size of NFS connection pool. | [optional] 
**dirCache** | **Boolean** | Enables directory caching. | [optional] 
**readAhead** | **Number** | The size of readahead in bytes. | [optional] 
**autoReconnect** | **Number** | The number of automatic reconnect attempts to the server. Setting &#x60;-1&#x60; enables infinite number of reconnects. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `nfs` (value: `"nfs"`)




