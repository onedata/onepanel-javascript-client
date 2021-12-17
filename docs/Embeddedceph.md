# Onepanel.Embeddedceph

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;embeddedceph\&quot;&#x60;  Embedded Ceph cluster that has been deployed during deployment of Oneprovider. For more information on embedded Ceph deployment please see [here](https://onedata.org/#/home/documentation/stable/doc/administering_onedata/ceph_cluster_deployment.html).  | [optional] 
**blockSize** | **Number** | Storage block size in bytes. | [optional] 
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;flat&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `embeddedceph` (value: `"embeddedceph"`)




<a name="StoragePathTypeEnum"></a>
## Enum: StoragePathTypeEnum


* `flat` (value: `"flat"`)




