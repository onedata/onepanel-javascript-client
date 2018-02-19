# Onepanel.SpaceAutoCleaningSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lowerFileSizeLimit** | **Number** | Only files which size [b] is greater than or equal to given value should be cleaned. Set to null to disable this parameter.  | [optional] 
**upperFileSizeLimit** | **Number** | Only files which size [b] is less than or equal to given value should be cleaned Set to null to disable this parameter.  | [optional] 
**maxFileNotOpenedHours** | **Number** | Files that haven&#39;t been opened for longer than or equal to given period [h] will be cleaned. Set to null to disable this parameter.  | [optional] 
**threshold** | **Number** | Amount of data [b], which should trigger the auto cleaning in the space.  Only replicas maintained by this storage provider will be removed. If not  specified, the auto cleaning will not start automatically.  | [optional] 
**target** | **Number** | Amount of data [b], at which the auto cleaning process should stop. This parameter is required to enale auto cleaning.  | [optional] 


