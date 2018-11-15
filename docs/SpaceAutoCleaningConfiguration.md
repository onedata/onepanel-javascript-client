# Onepanel.SpaceAutoCleaningConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | If true, auto-cleaning mechanism is enabled in the space. | [optional] 
**threshold** | **Number** | Amount of data [b], which should trigger the auto-cleaning in the space. Only replicas maintained by this storage provider will be removed.  This parameter is required to enable auto-cleaning.  | [optional] 
**target** | **Number** | Amount of data [b], at which the auto-cleaning process should stop. This parameter is required to enable auto-cleaning.  | [optional] 
**rules** | [**SpaceAutoCleaningRules**](SpaceAutoCleaningRules.md) | Rules used to select certain list of file replicas that can be evicted by auto-cleaning mechanism.  | [optional] 


