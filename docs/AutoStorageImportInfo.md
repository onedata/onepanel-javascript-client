# Onepanel.AutoStorageImportInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Describes status of current (or last finished) auto storage import scan in given space. | 
**start** | **Number** | Time at which current (or last finished) scan has been started. | 
**stop** | **Number** | Time at which current (or last finished) scan has been stopped. | 
**createdFiles** | **Number** | Counter of created files that has been detected during current (or last finished) scan. | 
**modifiedFiles** | **Number** | Counter of modified files that has been detected during current (or last finished) scan. | 
**deletedFiles** | **Number** | Counter of deleted files that has been detected during current (or last finished) scan. | 
**nextScan** | **Number** | Estimated time at which next scan will be enqueued. | [optional] 
**totalScans** | **Number** | Total number of performed scans. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `enqueued` (value: `"enqueued"`)

* `running` (value: `"running"`)

* `aborting` (value: `"aborting"`)

* `completed` (value: `"completed"`)

* `failed` (value: `"failed"`)

* `aborted` (value: `"aborted"`)




