# Onepanel.ProviderClusterConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domainName** | **String** | Hostname suffix common for all services in the cluster. Together with a node hostname constitutes a fully qualified domain name (FQDN) of the node. May be skipped to allow unrelated hostnames for each node.  | [optional] [default to &#39;&#39;]
**nodes** | [**{String: ZoneClusterConfigurationNodes}**](ZoneClusterConfigurationNodes.md) | The collection of nodes aliases associated with nodes properties. | 
**databases** | [**ClusterDatabases**](ClusterDatabases.md) |  | 
**managers** | [**ClusterManagers**](ClusterManagers.md) |  | 
**workers** | [**ClusterWorkers**](ClusterWorkers.md) |  | 
**storages** | [**StorageCreateRequest**](StorageCreateRequest.md) |  | [optional] 


