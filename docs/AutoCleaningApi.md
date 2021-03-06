# Onepanel.AutoCleaningApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelAutoCleaning**](AutoCleaningApi.md#cancelAutoCleaning) | **POST** /provider/spaces/{id}/auto-cleaning/cancel | Cancel space auto-cleaning
[**configureSpaceAutoCleaning**](AutoCleaningApi.md#configureSpaceAutoCleaning) | **PATCH** /provider/spaces/{id}/auto-cleaning/configuration | Configure space auto-cleaning mechanism
[**getProviderSpaceAutoCleaningReport**](AutoCleaningApi.md#getProviderSpaceAutoCleaningReport) | **GET** /provider/spaces/{id}/auto-cleaning/reports/{report_id} | Get the report from a space auto-cleaning run
[**getProviderSpaceAutoCleaningReports**](AutoCleaningApi.md#getProviderSpaceAutoCleaningReports) | **GET** /provider/spaces/{id}/auto-cleaning/reports | Get Ids of of the space auto-cleaning reports
[**getProviderSpaceAutoCleaningStatus**](AutoCleaningApi.md#getProviderSpaceAutoCleaningStatus) | **GET** /provider/spaces/{id}/auto-cleaning/status | Get status of space auto-cleaning mechanism
[**getSpaceAutoCleaningConfiguration**](AutoCleaningApi.md#getSpaceAutoCleaningConfiguration) | **GET** /provider/spaces/{id}/auto-cleaning/configuration | Get space auto-cleaning configuration
[**triggerAutoCleaning**](AutoCleaningApi.md#triggerAutoCleaning) | **POST** /provider/spaces/{id}/auto-cleaning/start | Trigger space auto-cleaning


<a name="cancelAutoCleaning"></a>
# **cancelAutoCleaning**
> cancelAutoCleaning(id)

Cancel space auto-cleaning

Cancel current run of auto-cleaning mechanism for given space.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.AutoCleaningApi();

var id = "id_example"; // String | The Id of a space.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cancelAutoCleaning(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space. | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="configureSpaceAutoCleaning"></a>
# **configureSpaceAutoCleaning**
> configureSpaceAutoCleaning(id, spaceAutoCleaningConfiguration)

Configure space auto-cleaning mechanism

Configures space auto-cleaning mechanism in the space. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.AutoCleaningApi();

var id = "id_example"; // String | The Id of a space.

var spaceAutoCleaningConfiguration = new Onepanel.SpaceAutoCleaningConfiguration(); // SpaceAutoCleaningConfiguration | New configuration of space auto-cleaning mechanism. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configureSpaceAutoCleaning(id, spaceAutoCleaningConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space. | 
 **spaceAutoCleaningConfiguration** | [**SpaceAutoCleaningConfiguration**](SpaceAutoCleaningConfiguration.md)| New configuration of space auto-cleaning mechanism.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderSpaceAutoCleaningReport"></a>
# **getProviderSpaceAutoCleaningReport**
> SpaceAutoCleaningReport getProviderSpaceAutoCleaningReport(id, reportId)

Get the report from a space auto-cleaning run

Returns the details of a specific auto-cleaning run. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.AutoCleaningApi();

var id = "id_example"; // String | The Id of a space.

var reportId = "reportId_example"; // String | The Id of an auto-cleaning report.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderSpaceAutoCleaningReport(id, reportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space. | 
 **reportId** | **String**| The Id of an auto-cleaning report. | 

### Return type

[**SpaceAutoCleaningReport**](SpaceAutoCleaningReport.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderSpaceAutoCleaningReports"></a>
# **getProviderSpaceAutoCleaningReports**
> SpaceAutoCleaningReports getProviderSpaceAutoCleaningReports(id, opts)

Get Ids of of the space auto-cleaning reports

Returns the list of Ids of space auto-cleaning reports. The list is sorted descending by start time of an auto-cleaning run (the newest report is first). 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.AutoCleaningApi();

var id = "id_example"; // String | The Id of a space.

var opts = { 
  'offset': 0, // Number | Allows to skip N first report Ids.
  'limit': 56, // Number | Allows to limit the number of returned report Ids up to N last reports. By default, all report Ids will be returned. 
  'index': "index_example" // String | Allows to list the report Ids starting from the specific report. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderSpaceAutoCleaningReports(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space. | 
 **offset** | **Number**| Allows to skip N first report Ids. | [optional] [default to 0]
 **limit** | **Number**| Allows to limit the number of returned report Ids up to N last reports. By default, all report Ids will be returned.  | [optional] 
 **index** | **String**| Allows to list the report Ids starting from the specific report.  | [optional] 

### Return type

[**SpaceAutoCleaningReports**](SpaceAutoCleaningReports.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderSpaceAutoCleaningStatus"></a>
# **getProviderSpaceAutoCleaningStatus**
> SpaceAutoCleaningStatus getProviderSpaceAutoCleaningStatus(id)

Get status of space auto-cleaning mechanism

Returns status of current process of auto-cleaning for the space. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.AutoCleaningApi();

var id = "id_example"; // String | The Id of a space.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderSpaceAutoCleaningStatus(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space. | 

### Return type

[**SpaceAutoCleaningStatus**](SpaceAutoCleaningStatus.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpaceAutoCleaningConfiguration"></a>
# **getSpaceAutoCleaningConfiguration**
> SpaceAutoCleaningConfiguration getSpaceAutoCleaningConfiguration(id)

Get space auto-cleaning configuration

Returns configuration of auto-cleaning mechanism in the space specified by space Id in the path. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.AutoCleaningApi();

var id = "id_example"; // String | The Id of a space of which auto-cleaning configuration should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSpaceAutoCleaningConfiguration(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space of which auto-cleaning configuration should be returned. | 

### Return type

[**SpaceAutoCleaningConfiguration**](SpaceAutoCleaningConfiguration.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="triggerAutoCleaning"></a>
# **triggerAutoCleaning**
> InlineResponse202 triggerAutoCleaning(id)

Trigger space auto-cleaning

Trigger one run of auto-cleaning mechanism for given space.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.AutoCleaningApi();

var id = "id_example"; // String | The Id of a space.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.triggerAutoCleaning(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space. | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

