# Onepanel.SpaceAutoCleaningRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Informs whether selective rules should be used by auto-cleaning mechanism.  | [optional] 
**maxOpenCount** | [**SpaceAutoCleaningRuleSetting**](SpaceAutoCleaningRuleSetting.md) | Files that have been opened less than &#x60;maxOpenCount&#x60; times may be cleaned. The default value is &#x60;9007199254740991 (2^53-1)&#x60;.  | [optional] 
**minHoursSinceLastOpen** | [**SpaceAutoCleaningRuleSetting**](SpaceAutoCleaningRuleSetting.md) | Files that haven&#39;t been opened for longer than or equal to given period [h] may be cleaned. The default value is &#x60;0&#x60;.  | [optional] 
**minFileSize** | [**SpaceAutoCleaningRuleSetting**](SpaceAutoCleaningRuleSetting.md) | Only files which size [b] is greater than given value may be cleaned. The default value is &#x60;1&#x60;.  | [optional] 
**maxFileSize** | [**SpaceAutoCleaningRuleSetting**](SpaceAutoCleaningRuleSetting.md) | Only files which size [b] is less than given value may be cleaned. The default value is &#x60;1125899906842624 (1 PiB)&#x60;.  | [optional] 
**maxHourlyMovingAverage** | [**SpaceAutoCleaningRuleSetting**](SpaceAutoCleaningRuleSetting.md) | Files that have moving average of open operations count per hour less than given value may be cleaned. The average is calculated in 24 hours window. The default value is &#x60;9007199254740991 (2^53-1)&#x60;.  | [optional] 
**maxDailyMovingAverage** | [**SpaceAutoCleaningRuleSetting**](SpaceAutoCleaningRuleSetting.md) | Files that have moving average of open operations count per day less than given value may be cleaned. The average is calculated in 30 days window. The default value is &#x60;9007199254740991 (2^53-1)&#x60;.  | [optional] 
**maxMonthlyMovingAverage** | [**SpaceAutoCleaningRuleSetting**](SpaceAutoCleaningRuleSetting.md) | Files that have moving average of open operations count per month less than given value may be cleaned. The average is calculated in 12 months window. The default value is &#x60;9007199254740991 (2^53-1)&#x60;. | [optional] 


