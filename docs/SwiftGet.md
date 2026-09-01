# Onepanel.SwiftGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;swift\&quot;&#x60;  Storage backend compatible with [OpenStack](http://docs.openstack.org/developer/swift/) SWIFT protocol.  | 
**authUrl** | **String** | The URL to OpenStack Keystone identity service. | 
**containerName** | **String** | The name of the Swift storage container. | 
**blockSize** | **Number** | Storage block size in bytes i.e. the maximum object size. Files larger than one block will be stripped and stored in a series of objects. Must be more than zero for non-imported storage. To enable import from an Swift storage, block size must be set to zero, together with \&quot;canonical\&quot; path type and the read-only mode.  | [optional] 
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `swift` (value: `"swift"`)




<a name="StoragePathTypeEnum"></a>
## Enum: StoragePathTypeEnum


* `canonical` (value: `"canonical"`)

* `flat` (value: `"flat"`)




