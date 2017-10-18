# Onepanel.SpaceAutoCleaningSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lowerFileSizeLimit** | **Number** | Only files which size [b] is greater than or equal to given value should be cleaned. Set to null to disable this parameter.  | [optional] 
**upperFileSizeLimit** | **Number** | Only files which size [b] is less than or equal to given value should be cleaned Set to null to disable this parameter.  | [optional] 
**maxFileNotOpenedHours** | **Number** | Files that haven&#39;t been opened for longer than or equal to given period [h] will be cleaned. Set to null to disable this parameter.  | [optional] 
**threshold** | **Number** | Autocleaning will start if occupancy of storage will greater than or equal to this value [b]. This parameter is required to start autocleaning.  | [optional] 
**target** | **Number** | Autocleaning will stop if occupancy of storage will be less than or equal to this value [b]. This parameter is required to start autocleaning.  | [optional] 


