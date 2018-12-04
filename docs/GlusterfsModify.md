# Onepanel.GlusterfsModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | 
**volume** | **String** | The name of the volume to use as a storage backend. | [optional] 
**hostname** | **String** | The hostname (IP address or FQDN) of GlusterFS volume server. | [optional] 
**port** | **Number** | The GlusterFS port on volume server. | [optional] 
**transport** | **String** | The transport protocol to use to connect to the volume server. | [optional] 
**mountPoint** | **String** | Relative mountpoint within the volume which should be used by Oneprovider. | [optional] 
**xlatorOptions** | **String** | Volume specific GlusterFS translator options, in the format:   TRANSLATOR1.OPTION1&#x3D;VALUE1;TRANSLATOR2.OPTION2&#x3D;VALUE2;...  | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] 
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] 


<a name="TransportEnum"></a>
## Enum: TransportEnum


* `tcp` (value: `"tcp"`)

* `rdma` (value: `"rdma"`)

* `socket` (value: `"socket"`)




