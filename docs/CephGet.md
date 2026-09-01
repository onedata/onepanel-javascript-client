# Onepanel.CephGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;ceph\&quot;&#x60;  (**DEPRECATED** - use Ceph RADOS instead) storage backend compatible with [Ceph](http://ceph.com/ceph-storage/) object storage, using the deprecated &#x60;libradosstriper&#x60; library.  | 
**monitorHostname** | **String** | The hostname (IP address or FQDN) of the Ceph monitor service.  | 
**clusterName** | **String** | The name of the Ceph storage cluster. | 
**poolName** | **String** | The name of the Ceph pool – the logical partition for object storage.  | 
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ceph` (value: `"ceph"`)




<a name="StoragePathTypeEnum"></a>
## Enum: StoragePathTypeEnum


* `canonical` (value: `"canonical"`)

* `flat` (value: `"flat"`)




