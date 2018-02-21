# Onepanel.ProviderClusterConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domainName** | **String** | The name of a domain common for all services in the cluster. Together with a node hostname constitutes a fully qualified domain name (FQDN) of the node.  | 
**nodes** | [**{String: ProviderClusterConfigurationNodes}**](ProviderClusterConfigurationNodes.md) | The collection of nodes aliases associated with nodes properties. | 
**databases** | [**ClusterDatabases**](ClusterDatabases.md) |  | 
**managers** | [**ClusterManagers**](ClusterManagers.md) |  | 
**workers** | [**ClusterWorkers**](ClusterWorkers.md) |  | 
**storages** | [**StorageCreateRequest**](StorageCreateRequest.md) |  | [optional] 


