# Onepanel.StorageGetDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**id** | **String** | The Id of storage. | [optional] 
**name** | **String** | The name of storage. | [optional] 
**verificationPassed** | **Boolean** | Whether the storage passed the test that a PATCH request runs before it modifies the storage. Returned only in a response to a PATCH request.  * &#x60;true&#x60; - the storage has been modified: it passed the test, or the   request needed none. * &#x60;false&#x60; - the storage failed the test and has not been modified.  The test depends on the request:  * no test - the request changes nothing but &#x60;name&#x60; and &#x60;qosParameters&#x60;,   or the storage is of type &#x60;http&#x60; or &#x60;nulldevice&#x60;; * access to the storage from every Oneprovider node - after the   modification, the storage is read-only, or is imported and supports   a space; * access, then the creation, write, read and removal of a test file from   every Oneprovider node - in any other case.  | [optional] 
**timeout** | **Number** | Maximum time to wait for a response from the storage service before the request is aborted.  | [optional] 
**lumaFeed** | **String** | Type of feed for LUMA DB. Feed is a source of user/group mappings used to populate the LUMA DB. For more info please read: https://onedata.org/#/home/documentation/doc/administering_onedata/luma.html  | [optional] 
**lumaFeedUrl** | **String** | URL of external feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;. | [optional] 
**lumaFeedApiKey** | **String** | API key checked by external service used as feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;.  | [optional] 
**qosParameters** | **{String: String}** | Map with key-value pairs used for describing storage QoS parameters. | [optional] 
**importedStorage** | **Boolean** | Defines whether storage contains existing data to be imported.  | [optional] [default to false]
**readonly** | **Boolean** | Defines whether the storage is readonly. If enabled, Oneprovider will block any operation that writes, modifies or deletes data on the storage. Such storage can only be used to import data into the space. Mandatory to ensure proper behaviour if the backend storage is actually configured as readonly. This option is available only for imported storages.  | [optional] [default to false]


<a name="LumaFeedEnum"></a>
## Enum: LumaFeedEnum


* `auto` (value: `"auto"`)

* `local` (value: `"local"`)

* `external` (value: `"external"`)




