# Onepanel.NFSModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;nfs\&quot;&#x60;  NFS storage.  | 
**host** | **String** | The hostname (IP address or FQDN) of NFS server. | [optional] 
**version** | **Number** | The NFS protocol version. Allowed values are 3 (default) and 4 (experimental). | [optional] 
**volume** | **String** | The name (path) of the NFS export. | [optional] 
**connectionPoolSize** | **Number** | Number of simultaneous network connections that can be maintained with the NFS server.  | [optional] 
**dirCache** | **Boolean** | Enables caching of directory metadata on the client side to improve performance by reducing requests to the NFS server. May cause temporary inconsistencies if the directory content changes on the server.  | [optional] 
**readAhead** | **Number** | The amount of data that the system preloads into cache ahead of client requests.  | [optional] 
**autoReconnect** | **Number** | The number of automatic reconnect attempts to the server. Setting &#x60;-1&#x60; enables infinite number of reconnects. | [optional] 
**uid** | **Number** | User identifier. | [optional] 
**gid** | **Number** | Group identifier. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `nfs` (value: `"nfs"`)




