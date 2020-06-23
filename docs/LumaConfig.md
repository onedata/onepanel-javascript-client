# Onepanel.LumaConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lumaFeed** | **String** | Type of feed for LUMA DB. Feed is a source of user/group mappings used to populate the LUMA DB. For more info please read: https://onedata.org/#/home/documentation/doc/administering_onedata/luma.html  | 
**lumaFeedUrl** | **String** | URL of external feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;.  | [optional] 
**lumaFeedApiKey** | **String** | API key checked by external service used as feed for LUMA DB. Relevant only if lumaFeed equals &#x60;external&#x60;.  | [optional] 


<a name="LumaFeedEnum"></a>
## Enum: LumaFeedEnum


* `auto` (value: `"auto"`)

* `local` (value: `"local"`)

* `external` (value: `"external"`)




