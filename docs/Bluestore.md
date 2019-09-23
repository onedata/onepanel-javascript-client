# Onepanel.Bluestore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the OSD. Available types are: - bluestore - formats a raw block device to store the data - loopdevice - stores data in a file mounted as loop device  | 
**device** | **String** | Specifies block device to be ERASED and FORMATTED for use as the main data store of this OSD.  | 
**dbDevice** | **String** | Specifies block device to be ERASED and FORMATTED to be used for this OSD&#39;s database. It should be used when a storage faster than \&quot;device\&quot; is available, otherwise it is sufficient to specify just the \&quot;device\&quot;.  | [optional] 
**walDevice** | **String** | Specifies block device to be ERASED and FORMATTED for use as the Write Ahead Log. It should be used when a storage faster than \&quot;device\&quot; is available, otherwise it is sufficient to specify just the \&quot;device\&quot;.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `bluestore` (value: `"bluestore"`)




