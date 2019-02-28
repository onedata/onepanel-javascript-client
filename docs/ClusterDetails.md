# Onepanel.ClusterDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Id of the cluster record | 
**type** | **String** | Type of the cluster | 
**serviceId** | **String** | The Id of the service hosted on this cluster - depending on the type equal to the Oneprovider Id or \&quot;onezone\&quot; in case of Onezone cluster  | 
**workerVersion** | [**VersionInfo**](VersionInfo.md) |  | 
**onepanelVersion** | [**VersionInfo**](VersionInfo.md) |  | 
**proxy** | **Boolean** | Is Onepanel proxy enabled - if so, onepanel GUI is served on cluster&#39;s domain at port 443 (rather than 9443).  | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `oneprovider` (value: `"oneprovider"`)

* `onezone` (value: `"onezone"`)




