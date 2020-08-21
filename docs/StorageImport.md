# Onepanel.StorageImport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | Mode of the storage import within the space. In case of &#x60;auto&#x60; mode, the storage will be automatically scanned and data will be imported from storage into the assigned Onedata space without need for copying the data. It is possible to enable periodical scans for automatic detection of changes on the storage (look at option &#x60;continuousScan&#x60;). Configuration of the auto storage import can be passed in the &#x60;scanConfig&#x60; parameter. In case of &#x60;manual&#x60; mode, the files must be registered manually by using REST API. Registration of directories is not supported. For more info please read: https://onedata.org/#/home/api/stable/oneprovider?anchor&#x3D;tag/File-registration  | [optional] [default to &#39;auto&#39;]
**scanConfig** | [**AutoStorageImport**](AutoStorageImport.md) |  | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `auto` (value: `"auto"`)

* `manual` (value: `"manual"`)




