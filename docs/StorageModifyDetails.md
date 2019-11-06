# Onepanel.StorageModifyDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of storage. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] 
**lumaEnabled** | **Boolean** | If true LUMA and reverse LUMA services will be enabled. | [optional] 
**lumaUrl** | **String** | URL of external LUMA service. | [optional] 
**lumaApiKey** | **String** | LUMA API Key, must be identical with API Key in external LUMA service. | [optional] 
**qosParameters** | **{String: String}** | Map with key-value pairs used for describing storage QoS parameters. Overrides all previously set parameters. | [optional] 
**mountInRoot** | **Boolean** | Defines whether space will be mounted in / or /{SpaceId}/ path.  | [optional] 

