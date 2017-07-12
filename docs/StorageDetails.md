# Onepanel.StorageDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of storage. | [optional] 
**name** | **String** | The name of storage. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]
**type** | **String** | The type of storage. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `posix` (value: `"posix"`)

* `s3` (value: `"s3"`)

* `ceph` (value: `"ceph"`)

* `swift` (value: `"swift"`)

* `glusterfs` (value: `"glusterfs"`)




