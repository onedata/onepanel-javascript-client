# Onepanel.StorageImportApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forceStartAutoStorageImportScan**](StorageImportApi.md#forceStartAutoStorageImportScan) | **POST** /provider/spaces/{id}/storage-import/auto/force-start | Force start auto storage import scan
[**forceStopAutoStorageImportScan**](StorageImportApi.md#forceStopAutoStorageImportScan) | **POST** /provider/spaces/{id}/storage-import/auto/force-stop | Force stop auto storage import scan
[**getAutoStorageImportInfo**](StorageImportApi.md#getAutoStorageImportInfo) | **GET** /provider/spaces/{id}/storage-import/auto/info | Get information about auto storage import scan
[**getAutoStorageImportStats**](StorageImportApi.md#getAutoStorageImportStats) | **GET** /provider/spaces/{id}/storage-import/auto/stats | Get statistics of auto storage import mechanism
[**getManualStorageImportExample**](StorageImportApi.md#getManualStorageImportExample) | **GET** /provider/spaces/{id}/storage-import/manual/example | Get manual storage import example


<a name="forceStartAutoStorageImportScan"></a>
# **forceStartAutoStorageImportScan**
> forceStartAutoStorageImportScan(id)

Force start auto storage import scan

Forcefully starts scan of auto storage import mechanism in given space.

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

var apiInstance = new Onepanel.StorageImportApi();

var id = "id_example"; // String | The Id of a space.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.forceStartAutoStorageImportScan(id, callback);
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

<a name="forceStopAutoStorageImportScan"></a>
# **forceStopAutoStorageImportScan**
> forceStopAutoStorageImportScan(id)

Force stop auto storage import scan

Forcefully stops current scan of auto storage import mechanism in given space.

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

var apiInstance = new Onepanel.StorageImportApi();

var id = "id_example"; // String | The Id of a space.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.forceStopAutoStorageImportScan(id, callback);
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

<a name="getAutoStorageImportInfo"></a>
# **getAutoStorageImportInfo**
> AutoStorageImportInfo getAutoStorageImportInfo(id)

Get information about auto storage import scan

Returns information about current or last finished auto storage import scan.

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

var apiInstance = new Onepanel.StorageImportApi();

var id = "id_example"; // String | The Id of a space for which storage import stats should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAutoStorageImportInfo(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space for which storage import stats should be returned. | 

### Return type

[**AutoStorageImportInfo**](AutoStorageImportInfo.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAutoStorageImportStats"></a>
# **getAutoStorageImportStats**
> AutoStorageImportStats getAutoStorageImportStats(id, period, metrics)

Get statistics of auto storage import mechanism

Returns requested statistics of auto storage import mechanism for given space on this provider. 

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

var apiInstance = new Onepanel.StorageImportApi();

var id = "id_example"; // String | The Id of a space for which storage import stats should be returned.

var period = "period_example"; // String | Predefined time period for which the statistics should be fetched.

var metrics = "metrics_example"; // String | Specify which statistic metrics should be returned - strings delimited with comma. Accepted values are: `queueLength`, `createdFiles`, `modifiedFiles`, `deletedFiles` 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAutoStorageImportStats(id, period, metrics, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space for which storage import stats should be returned. | 
 **period** | **String**| Predefined time period for which the statistics should be fetched. | 
 **metrics** | **String**| Specify which statistic metrics should be returned - strings delimited with comma. Accepted values are: &#x60;queueLength&#x60;, &#x60;createdFiles&#x60;, &#x60;modifiedFiles&#x60;, &#x60;deletedFiles&#x60;  | 

### Return type

[**AutoStorageImportStats**](AutoStorageImportStats.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getManualStorageImportExample"></a>
# **getManualStorageImportExample**
> ManualStorageImportExample getManualStorageImportExample(id)

Get manual storage import example

Returns example &#x60;curl&#x60; command that can be executed to manually import (register) file from storage.  The command is filled with correct host of the Oneprovider, space and storage ids. In order to execute the command, user must set 3 variables:  * &#x60;TOKEN&#x60; - Onedata access token.  * &#x60;STORAGE_FILE_ID&#x60; - Identifier of the file on storage, relevant for given storage backend:    * path on POSIX-compatible or canonical object storages, e.g. /dir/file.txt,    * URL on HTTP based storages, e.g. https://www.example.org/data/21/run123.tar.  * &#x60;DESTINATION_PATH&#x60; - An absolute path in space where file should be created.  For more info please read: https://onedata.org/#/home/api/stable/oneprovider?anchor&#x3D;tag/File-registration 

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

var apiInstance = new Onepanel.StorageImportApi();

var id = "id_example"; // String | The Id of a space for which the example command should be generated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getManualStorageImportExample(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space for which the example command should be generated. | 

### Return type

[**ManualStorageImportExample**](ManualStorageImportExample.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

