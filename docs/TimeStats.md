# Onepanel.TimeStats

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | How many samples were taken in measurement period. | 
**period** | **String** | Predefined time period for which the statistics should be fetched | 
**values** | **[Number]** | List of sample values for given metric. The used period is divided into array-length number of parts. E.g. if the used period is an hour, and if there are 12 values in this array, every value is a value for 1/12 of day, which gives value for every hour of the day. If the value is null, there is no sample for given time part.  | 


<a name="NameEnum"></a>
## Enum: NameEnum


* `queueLength` (value: `"queueLength"`)

* `insertCount` (value: `"insertCount"`)

* `updateCount` (value: `"updateCount"`)

* `deleteCount` (value: `"deleteCount"`)




<a name="PeriodEnum"></a>
## Enum: PeriodEnum


* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)




