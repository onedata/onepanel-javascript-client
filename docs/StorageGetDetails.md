# Onepanel.StorageGetDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | [optional] 
**id** | **String** | The Id of storage. | [optional] 
**name** | **String** | The name of storage. | [optional] 
**verificationPassed** | **Boolean** | Result of storage verification (reading and writing a file). Returned only on PATCH requests for read-write storages. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**skipStorageDetection** | **Boolean** | If true, detecting whether storage is directly accessible by the Oneclient will not be performed. This option should be set to true on readonly storages.  | [optional] 
**lumaFeed** | **String** | Type of feed for Local User Mapping (LUMA) database. | [optional] 
**lumaUrl** | **String** | URL of external feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;. | [optional] 
**lumaApiKey** | **String** | API key checked by external service used as feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;.  | [optional] 
**qosParameters** | **{String: String}** | Map with key-value pairs used for describing storage QoS parameters. | [optional] 
**importedStorage** | **Boolean** | Defines whether storage contains existing data to be imported. | [optional] [default to false]


<a name="LumaFeedEnum"></a>
## Enum: LumaFeedEnum


* `auto` (value: `"auto"`)

* `local` (value: `"local"`)

* `external` (value: `"external"`)




