# Onepanel.GlusterfsModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the modified storage. Must match the type of existing storage, needed only for OpenAPI polymorphism disambiguation. | 
**volume** | **String** | The name of the volume to use as a storage backend. | [optional] 
**hostname** | **String** | The hostname (IP address or FQDN) of GlusterFS volume server. | [optional] 
**port** | **Number** | The GlusterFS port on volume server. | [optional] 
**transport** | **String** | The transport protocol to use to connect to the volume server. | [optional] 
**mountPoint** | **String** | Relative mountpoint within the volume which should be used by Oneprovider. | [optional] 
**xlatorOptions** | **String** | Volume specific GlusterFS translator options, in the format:   TRANSLATOR1.OPTION1&#x3D;VALUE1;TRANSLATOR2.OPTION2&#x3D;VALUE2;...  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `glusterfs` (value: `"glusterfs"`)




<a name="TransportEnum"></a>
## Enum: TransportEnum


* `tcp` (value: `"tcp"`)

* `rdma` (value: `"rdma"`)

* `socket` (value: `"socket"`)




