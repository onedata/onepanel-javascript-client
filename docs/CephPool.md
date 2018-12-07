# Onepanel.CephPool

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the pool | [optional] 
**copiesNumber** | **Number** | Desired number of object replicas in the pool. When below this number the pool still may be used in &#39;degraded&#39; mode. | [optional] 
**minCopiesNumber** | **Number** | Minimum number of object replicas in the pool. Below this threshold any I/O for the pool is disabled. Must be lower or equal to &#39;copiesNumber&#39;. | [optional] 


