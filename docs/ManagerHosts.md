# Onepanel.ManagerHosts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mainHost** | **String** | The name of a host where main cluster manager node should be deployed. Main cluster manager node is responsible for monitoring cluster worker nodes. Other nodes, called optional, are suspended. In case of main cluster manager node failure one of optional nodes is resumed and takes over main node responsibilities.  | 
**hosts** | **[String]** | The list of hosts where service should be deployed. | 


