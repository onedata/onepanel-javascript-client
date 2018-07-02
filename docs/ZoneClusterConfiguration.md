# Onepanel.ZoneClusterConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domainName** | **String** | The name of a domain common for all services in the cluster. Together with a node hostname constitute a node fully qualified domain name.  | [optional] [default to &#39;&#39;]
**nodes** | [**{String: ZoneClusterConfigurationNodes}**](ZoneClusterConfigurationNodes.md) | The collection of nodes aliases associated with nodes properties. | 
**databases** | [**ClusterDatabases**](ClusterDatabases.md) |  | 
**managers** | [**ClusterManagers**](ClusterManagers.md) |  | 
**workers** | [**ClusterWorkers**](ClusterWorkers.md) |  | 


