# Onepanel.ClusterDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**type** | **String** | Type of the cluster | 
**serviceId** | **String** | The id of the service hosted on this cluster - depending on the type equal to the Oneprovider Id or null in case of Onezone cluster  | 
**version** | **String** | Software version. | 
**build** | **String** | Software build identifier. | 
**proxy** | **Boolean** | Is onepanel proxy enabled - if so, onepanel GUI is served on cluster&#39;s domain at port 443 (rather than 9443).  | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `oneprovider` (value: `"oneprovider"`)

* `onezone` (value: `"onezone"`)




