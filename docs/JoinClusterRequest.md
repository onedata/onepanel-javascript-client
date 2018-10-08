# Onepanel.JoinClusterRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusterHost** | **String** | Hostname of an existing cluster node. | 
**cookie** | **String** | The cookie is a character sequence that is common for all the cluster nodes. If this parameter is not provided, in case of a cluster initialization request, it will be generated, and in case of a cluster extension request the current cookie value will be used. However, if the cluster cookie and the cookie of the host that is about to join the cluster doesn&#39;t match there will be a connection error.  | [optional] 


