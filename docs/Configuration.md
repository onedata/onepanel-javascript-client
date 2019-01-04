# Onepanel.Configuration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceId** | **String** | The Id of the service hosted on this cluster - depending on the type equal to the Oneprovider Id or null in case of Onezone cluster  | [optional] 
**name** | **String** | Name of this cluster. | [optional] 
**domain** | **String** | Domain of this cluster. | [optional] 
**onezoneDomain** | **String** | In oz_panel - the domain of this Onezone cluster. In op_panel - the domain of the Onezone where this Oneprovider is registered.  | [optional] 
**version** | **String** | Version of this Onepanel | 
**build** | **String** | Build number of this Onepanel | 
**deployed** | **Boolean** | True when initial cluster deployment is finished | [default to true]


