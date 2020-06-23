# Onepanel.StorageModifyDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of storage. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**skipStorageDetection** | **Boolean** | If true, detecting whether storage is directly accessible by the Oneclient will not be performed. This option should be set to true on readonly storages.  | [optional] 
**lumaFeed** | **String** | Type of feed for LUMA DB. Feed is a source of user/group mappings used to populate the LUMA DB. For more info please read: https://onedata.org/#/home/documentation/doc/administering_onedata/luma.html  | [optional] 
**lumaFeedUrl** | **String** | URL of external feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;. | [optional] 
**lumaFeedApiKey** | **String** | API key checked by external service used as feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;.  | [optional] 
**qosParameters** | **{String: String}** | Map with key-value pairs used for describing storage QoS parameters. Overrides all previously set parameters. | [optional] 
**importedStorage** | **Boolean** | Defines whether storage contains existing data to be imported. | [optional] 


<a name="LumaFeedEnum"></a>
## Enum: LumaFeedEnum


* `auto` (value: `"auto"`)

* `local` (value: `"local"`)

* `external` (value: `"external"`)




