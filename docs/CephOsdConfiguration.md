# Onepanel.CephOsdConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **String** | Host on which given osd should be deployed | 
**type** | **String** |  | 
**device** | **String** | Relevant only for bluestore. Specifies block device to be ERASED and FORMATTED for use with ceph. | [optional] 
**partition** | **String** | partition | [optional] 
**dbDevice** | **String** | Relevant only for bluestore. Specifies block device to be ERASED and FORMATTED for use with ceph database. Must be a faster storage than the main device, otherwise use just the main storage.  | [optional] 
**walDevice** | **String** | Relevant only for bluestore. Specifies block device to be ERASED and FORMATTED for use with ceph Write Ahead Log. Must be a faster storage than the main device, otherwise use just the main storage.  | [optional] 
**path** | **String** | Relevant for plain filestore. If omitted, default location based on OSD id will be used. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `bluestore` (value: `"bluestore"`)

* `filestore` (value: `"filestore"`)




