# Onepanel.SpaceFilePopularityConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | If true, collecting file-popularity mechanism in the space is enabled | [optional] 
**exampleQuery** | **String** | Example &#x60;curl&#x60; command that can be executed to query the file-popularity view in the space.  | [optional] 
**lastOpenHourWeight** | **Number** | Weight of &#x60;lastOpenHour&#x60; parameter.  | [optional] [default to 1.0]
**avgOpenCountPerDayWeight** | **Number** | Weight of &#x60;avgOpenCountPerDayWeight&#x60; parameter.  | [optional] [default to 20.0]
**maxAvgOpenCountPerDay** | **Number** | Maximal value of average open count per day taken to calculate the value of popularity function.  | [optional] [default to 100.0]


