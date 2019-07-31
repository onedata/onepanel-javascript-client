# Onepanel.CephPool

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the pool | [optional] 
**copiesNumber** | **Number** | Desired number of object replicas in the pool. When below this number the pool still may be used in &#39;degraded&#39; mode. Defaults to &#x60;2&#x60; if there are at least 2 OSDs, &#x60;1&#x60; otherwise. | [optional] 
**minCopiesNumber** | **Number** | Minimum number of object replicas in the pool. Below this threshold any I/O for the pool is disabled. Must be lower or equal to &#39;copiesNumber&#39;. Defaults to &#x60;min(2, copiesNumber)&#x60; if there are at least 2 OSDs, &#x60;1&#x60; otherwise. | [optional] 


