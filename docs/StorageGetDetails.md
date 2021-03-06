# Onepanel.StorageGetDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**id** | **String** | The Id of storage. | [optional] 
**name** | **String** | The name of storage. | [optional] 
**verificationPassed** | **Boolean** | Result of storage verification (reading and writing a file). Returned only on PATCH requests for read-write storages. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**skipStorageDetection** | **Boolean** | If true, detecting whether storage is directly accessible by the Oneclient will not be performed. This option should be set to true on readonly storages.  | [optional] 
**lumaFeed** | **String** | Type of feed for LUMA DB. Feed is a source of user/group mappings used to populate the LUMA DB. For more info please read: https://onedata.org/#/home/documentation/doc/administering_onedata/luma.html  | [optional] 
**lumaFeedUrl** | **String** | URL of external feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;. | [optional] 
**lumaFeedApiKey** | **String** | API key checked by external service used as feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;.  | [optional] 
**qosParameters** | **{String: String}** | Map with key-value pairs used for describing storage QoS parameters. | [optional] 
**importedStorage** | **Boolean** | Defines whether storage contains existing data to be imported. | [optional] [default to false]
**archiveStorage** | **Boolean** | Defines whether storage supports long-term dataset archiving.  | [optional] [default to false]
**readonly** | **Boolean** | Defines whether the storage is readonly. If enabled, Oneprovider will block any operation that writes, modifies or deletes data on the storage. Such storage can only be used to import data into the space. Mandatory to ensure proper behaviour if the backend storage is actually configured as readonly. This option is available only for imported storages.  | [optional] [default to false]


<a name="LumaFeedEnum"></a>
## Enum: LumaFeedEnum


* `auto` (value: `"auto"`)

* `local` (value: `"local"`)

* `external` (value: `"external"`)




