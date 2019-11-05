# Onepanel.BlockDevicesBlockDevices

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Device type, as returned by lsblk. | [optional] 
**host** | **String** | Host on which the device is available. | 
**path** | **String** |  | 
**size** | **Number** | Device size in bytes. | 
**mounted** | **Boolean** | Result of heuristic attempt to detect whether a device or any of its children is mounted. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `disk` (value: `"disk"`)

* `part` (value: `"part"`)




