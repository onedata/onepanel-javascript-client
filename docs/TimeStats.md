# Onepanel.TimeStats

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastValueDate** | **String** | Date of last measurement value in this object in ISO 8601 format. | 
**values** | **[Number]** | List of sample values for given metric. The used period is divided into array-length number of parts. E.g. if the used period is an hour, and if there are 12 values in this array, every value is a value for 1/12 of day, which gives value for every hour of the day. If the value is null, there is no sample for given time part.  | 


