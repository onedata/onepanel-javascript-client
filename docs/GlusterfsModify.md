# Onepanel.GlusterfsModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the modified storage. Must be given explicitly and must match the actual type of subject storage - this redundancy is needed due to limitations of OpenAPI polymorphism.  | 
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




