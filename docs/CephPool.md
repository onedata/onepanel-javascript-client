# Onepanel.CephPool

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the pool | 
**size** | **Number** | Desired number of object replicas in the pool. When below this number the pool still may be used in \&quot;degraded\&quot; mode. | [optional] 
**minSize** | **Number** | Minimum number of object replicas in the pool. Below this threshold any I/O for the pool is forbidden. | [optional] 
**storageParams** | [**CephPoolStorageParams**](CephPoolStorageParams.md) |  | [optional] 


