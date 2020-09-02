# Onepanel.AutoStorageImportStats

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Describes current status of storage import scan in given space. | 
**nextScan** | **Number** | Estimated time at which next scan will be enqueued. | [optional] 
**stats** | [**TimeStatsCollection**](TimeStatsCollection.md) | Collection of statistics for requested metrics. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `enqueued` (value: `"enqueued"`)

* `running` (value: `"running"`)

* `aborting` (value: `"aborting"`)

* `completed` (value: `"completed"`)

* `failed` (value: `"failed"`)

* `aborted` (value: `"aborted"`)




