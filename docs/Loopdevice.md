# Onepanel.Loopdevice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the OSD. Available types are: - blockdevice - formats a raw block device to store the data - loopdevice - stores data in a file mounted as loop device  | 
**path** | **String** | Path of the loopdevice file to be created. If omitted, default path will be generated according to following template: /volumes/persistence/ceph-loopdevices/osd-{uuid}.loop  | [optional] 
**size** | **Number** | Size in bytes of the loopdevice file. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `loopdevice` (value: `"loopdevice"`)




