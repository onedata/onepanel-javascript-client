# Onepanel.StorageDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of storage. | [optional] 
**name** | **String** | The name of storage. | [optional] 
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]
**type** | **String** | The type of storage. | 
**secure** | **Boolean** | If enabled, provided LUMA service will be used to map onedata user credentials into storage credentials and vice versa. If disabled, storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**lumaUrl** | **String** | URL of external LUMA service | [optional] 
**lumaCacheTimeout** | **Number** | LUMA cache timeout in minutes. | [optional] 
**lumaApiKey** | **String** | LUMA API Key, must be identical with API Key in external LUMA service. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `posix` (value: `"posix"`)

* `s3` (value: `"s3"`)

* `ceph` (value: `"ceph"`)

* `swift` (value: `"swift"`)

* `glusterfs` (value: `"glusterfs"`)




