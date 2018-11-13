# Onepanel.SpaceAutoCleaningSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxOpenCount** | **Number** | Files that have been opened less than &#x60;maxOpenCount&#x60; times may be cleaned.  | [optional] 
**minHoursSinceLastOpen** | **Number** | Files that haven&#39;t been opened for longer than or equal to given period [h] may be cleaned.  | [optional] 
**lowerFileSizeLimit** | **Number** | Only files which size [b] is greater than given value may be cleaned.  | [optional] 
**upperFileSizeLimit** | **Number** | Only files which size [b] is less than given value may be cleaned.  | [optional] 
**maxHourlyMovingAverage** | **Number** | Files that have moving average of open operations count per hour less than given value may be cleaned. The average is calculated in 24 hours window.  | [optional] 
**maxDailyMovingAverage** | **Number** | Files that have moving average of open operations count per day less than given value may be cleaned. The average is calculated in 31 days window.  | [optional] 
**maxMonthlyMovingAverage** | **Number** | Files that have moving average of open operations count per month less than given value may be cleaned. The average is calculated in 12 months window.  | [optional] 
**threshold** | **Number** | Amount of data [b], which should trigger the auto-cleaning in the space. Only replicas maintained by this storage provider will be removed.  This parameter is required to enable auto-cleaning.  | [optional] 
**target** | **Number** | Amount of data [b], at which the auto-cleaning process should stop. This parameter is required to enable auto-cleaning.  | [optional] 


