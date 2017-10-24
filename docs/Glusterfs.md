# Onepanel.Glusterfs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume** | **String** | The name of the volume to use as a storage backend. | 
**hostname** | **String** | The hostname (IP address or FQDN) of GlusterFS volume server. | 
**port** | **Number** | The GlusterFS port on volume server. | [optional] 
**transport** | **String** | The transport protocol to use to connect to the volume server. | [optional] [default to &#39;tcp&#39;]
**mountPoint** | **String** | Relative mountpoint within the volume which should be used by Oneprovider. | [optional] [default to &#39;&#39;]
**xlatorOptions** | **String** | Volume specific GlusterFS translator options, in the format:   TRANSLATOR1.OPTION1&#x3D;VALUE1;TRANSLATOR2.OPTION2&#x3D;VALUE2;...  | [optional] [default to &#39;&#39;]
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]


<a name="TransportEnum"></a>
## Enum: TransportEnum


* `tcp` (value: `"tcp"`)

* `rdma` (value: `"rdma"`)

* `socket` (value: `"socket"`)




