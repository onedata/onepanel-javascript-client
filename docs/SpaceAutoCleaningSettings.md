# Onepanel.SpaceAutoCleaningSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileSizeGreaterThan** | **Number** | Only files which size [b] exceeds given should be cleaned. Set to null to disable this parameter.  | [optional] 
**fileSizeLessThan** | **Number** | Only files which size [b] is less than given should be cleaned Set to null to disable this parameter.  | [optional] 
**fileNotActiveHours** | **Number** | Only files that were not active for given period [h] should be cleaned. Set to null to disable this parameter.  | [optional] 
**threshold** | **Number** | Autocleaning will start if occupancy of storage will exceed this value. This parameter is required to start autocleaning.  | [optional] 
**target** | **Number** | Autocleaning will stop if occupancy of storage will reach this value. This parameter is required to start autocleaning.  | [optional] 


