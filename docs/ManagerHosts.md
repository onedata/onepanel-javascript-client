# Onepanel.ManagerHosts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mainHost** | **String** | The main cluster manager host. Main cluster manager node is responsible for monitoring cluster worker nodes. Other nodes, which are redundant, are suspended. In case of main cluster manager node failure one of redundant nodes is resumed and takes over main node responsibilities.  | 
**hosts** | **[String]** | The list of service hosts. | 


