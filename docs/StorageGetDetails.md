# Onepanel.StorageGetDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | [optional] 
**id** | **String** | The Id of storage. | [optional] 
**name** | **String** | The name of storage. | [optional] 
**verificationPassed** | **Boolean** | Result of storage verification (reading and writing a file). Returned only on PATCH requests for read-write storages. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]
**lumaEnabled** | **Boolean** | If true LUMA and reverse LUMA services will be enabled. | [optional] [default to false]
**lumaUrl** | **String** | URL of external LUMA service. | [optional] 
**lumaApiKey** | **String** | LUMA API Key, must be identical with API Key in external LUMA service. | [optional] 
**qosParameters** | **{String: String}** | Map with key-value pairs used for describing storage QoS parameters. Overrides all previously set parameters. | [optional] 
**importedStorage** | **Boolean** | Defines whether storage contains existing data to be imported. | [optional] [default to false]


