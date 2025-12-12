# Onepanel.Ceph

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;ceph\&quot;&#x60;  (**DEPRECATED** - use Ceph RADOS instead) storage backend compatible with [Ceph](http://ceph.com/ceph-storage/) object storage, using the deprecated &#x60;libradosstriper&#x60; library.  | 
**monitorHostname** | **String** | The monitor hostname. | 
**clusterName** | **String** | The Ceph cluster name. | 
**poolName** | **String** | The Ceph pool name. | 
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;flat&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ceph` (value: `"ceph"`)




