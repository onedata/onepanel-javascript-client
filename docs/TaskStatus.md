# Onepanel.TaskStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The operation status. | 
**steps** | **[String]** | The list of operation steps that have been executed successfully. | 
**totalSteps** | **Number** | Total number of steps to be executed. | 
**error** | **String** | The name of an error type. | [optional] 
**description** | **String** | The detailed error description. | [optional] 
**module** | **String** | The name of a module containing function that returned error. | [optional] 
**_function** | **String** | The name of a function that returned error. | [optional] 
**hosts** | [**{String: Error}**](Error.md) | The collection of hosts with associated error description. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ok` (value: `"ok"`)

* `error` (value: `"error"`)

* `running` (value: `"running"`)




