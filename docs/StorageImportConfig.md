# Onepanel.StorageImportConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | Mode of the storage import mechanism. In case of &#x60;auto&#x60; mode, the storage will be automatically scanned and data will be imported from storage into the assigned Onedata space without need for copying the data. It is possible to enable periodical scans for automatic detection of changes on the storage (look at option &#x60;continousScan&#x60;). In case of &#x60;manual&#x60; mode, the files must be registered manually by calling REST API. For more info please read: https://onedata.org/#/home/api/stable/oneprovider?anchor&#x3D;tag/File-registration  | [optional] [default to &#39;auto&#39;]
**continuousScan** | **Boolean** | This option is relevant only if mode is set to &#x60;auto&#x60;. With this option enabled the storage will be scanned periodically and direct changes on the storage will be reflected in the assigned Onedata space (upon the consecutive scan).  | [optional] [default to false]
**scanConfig** | [**AutoStorageImportScanConfig**](AutoStorageImportScanConfig.md) |  | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `auto` (value: `"auto"`)

* `manual` (value: `"manual"`)




