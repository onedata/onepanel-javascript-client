# Onepanel.Glusterfs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;glusterfs\&quot;&#x60;  [GlusterFS](https://www.gluster.org/) volume directly attached to the Oneprovider.  | 
**volume** | **String** | The name of the volume to use as a storage backend. | 
**hostname** | **String** | The hostname (IP address or FQDN) of GlusterFS volume server. | 
**port** | **Number** | The GlusterFS port on volume server. | [optional] 
**transport** | **String** | The transport protocol to use to connect to the volume server. | [optional] [default to &#39;tcp&#39;]
**mountPoint** | **String** | Relative mountpoint within the volume which should be used by Oneprovider. | [optional] [default to &#39;&#39;]
**xlatorOptions** | **String** | Volume specific GlusterFS translator options, in the format:   TRANSLATOR1.OPTION1&#x3D;VALUE1;TRANSLATOR2.OPTION2&#x3D;VALUE2;...  | [optional] [default to &#39;&#39;]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;canonical&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `glusterfs` (value: `"glusterfs"`)




<a name="TransportEnum"></a>
## Enum: TransportEnum


* `tcp` (value: `"tcp"`)

* `rdma` (value: `"rdma"`)

* `socket` (value: `"socket"`)




