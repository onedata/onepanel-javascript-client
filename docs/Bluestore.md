# Onepanel.Bluestore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | **String** | Relevant only for bluestore. Specifies block device to be ERASED and FORMATTED for use with ceph. | [optional] 
**dbDevice** | **String** | Relevant only for bluestore. Specifies block device to be ERASED and FORMATTED for use with ceph database. Must be a faster storage than the main device, otherwise use just the main storage.  | [optional] 
**walDevice** | **String** | Relevant only for bluestore. Specifies block device to be ERASED and FORMATTED for use with ceph Write Ahead Log. Must be a faster storage than the main device, otherwise use just the main storage.  | [optional] 


