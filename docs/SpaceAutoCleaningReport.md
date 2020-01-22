# Onepanel.SpaceAutoCleaningReport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Id of a auto-cleaning report. | 
**index** | **String** | Index of a auto-cleaning report. It can be used to list report Ids starting from given report.  | 
**startedAt** | **String** | Start time of a auto-cleaning run in ISO 8601 format. | 
**stoppedAt** | **String** | Finish time of a auto-cleaning run in ISO 8601 format. | 
**releasedBytes** | **Number** | Number of bytes deleted during a auto-cleaning run. | 
**bytesToRelease** | **Number** | Number of bytes that should be deleted. | 
**filesNumber** | **Number** | Number of deleted files. | 
**status** | **String** | Status of a auto-cleaning run. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `cancelling` (value: `"cancelling"`)

* `completed` (value: `"completed"`)

* `failed` (value: `"failed"`)

* `cancelled` (value: `"cancelled"`)




