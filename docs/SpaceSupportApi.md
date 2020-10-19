# Onepanel.SpaceSupportApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forceStartAutoStorageImportScan**](SpaceSupportApi.md#forceStartAutoStorageImportScan) | **POST** /provider/spaces/{id}/storage-import/auto/force-start | Force start auto storage import scan
[**forceStopAutoStorageImportScan**](SpaceSupportApi.md#forceStopAutoStorageImportScan) | **POST** /provider/spaces/{id}/storage-import/auto/force-stop | Force stop auto storage import scan
[**getAutoStorageImportInfo**](SpaceSupportApi.md#getAutoStorageImportInfo) | **GET** /provider/spaces/{id}/storage-import/auto/info | Get information about auto storage import scan
[**getAutoStorageImportStats**](SpaceSupportApi.md#getAutoStorageImportStats) | **GET** /provider/spaces/{id}/storage-import/auto/stats | Get statistics of auto storage import mechanism
[**getManualStorageImportExample**](SpaceSupportApi.md#getManualStorageImportExample) | **GET** /provider/spaces/{id}/storage-import/manual/example | Get manual storage import example
[**getProviderSpaces**](SpaceSupportApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
[**getSpaceDetails**](SpaceSupportApi.md#getSpaceDetails) | **GET** /provider/spaces/{id} | Get space details
[**modifySpace**](SpaceSupportApi.md#modifySpace) | **PATCH** /provider/spaces/{id} | Modify space details
[**revokeSpaceSupport**](SpaceSupportApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space
[**supportSpace**](SpaceSupportApi.md#supportSpace) | **POST** /provider/spaces | Support space


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

var apiInstance = new Onepanel.SpaceSupportApi();

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

var apiInstance = new Onepanel.SpaceSupportApi();

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

var apiInstance = new Onepanel.SpaceSupportApi();

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

var apiInstance = new Onepanel.SpaceSupportApi();

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

var apiInstance = new Onepanel.SpaceSupportApi();

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

<a name="getProviderSpaces"></a>
# **getProviderSpaces**
> ProviderSpaces getProviderSpaces()

Get provider spaces

Returns the list of spaces supported by the provider.

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

var apiInstance = new Onepanel.SpaceSupportApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderSpaces(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderSpaces**](ProviderSpaces.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpaceDetails"></a>
# **getSpaceDetails**
> SpaceDetails getSpaceDetails(id)

Get space details

Returns details of space specified by space Id in the path. 

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

var apiInstance = new Onepanel.SpaceSupportApi();

var id = "id_example"; // String | The Id of a space which details should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSpaceDetails(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space which details should be returned. | 

### Return type

[**SpaceDetails**](SpaceDetails.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifySpace"></a>
# **modifySpace**
> modifySpace(id, spaceModifyRequest)

Modify space details

Modifies the space import/update strategies.

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

var apiInstance = new Onepanel.SpaceSupportApi();

var id = "id_example"; // String | The Id of a space which details should be modified.

var spaceModifyRequest = new Onepanel.SpaceModifyRequest(); // SpaceModifyRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifySpace(id, spaceModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space which details should be modified. | 
 **spaceModifyRequest** | [**SpaceModifyRequest**](SpaceModifyRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="revokeSpaceSupport"></a>
# **revokeSpaceSupport**
> revokeSpaceSupport(id)

Revoke space support for a space

Allows provider to revoke storage support for a specific space. Users with access to this space will no longer be able to store data on the resources of this provider. 

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

var apiInstance = new Onepanel.SpaceSupportApi();

var id = "id_example"; // String | The Id of a space to be removed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.revokeSpaceSupport(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space to be removed. | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="supportSpace"></a>
# **supportSpace**
> Id supportSpace(spaceSupportRequest)

Support space

Supports an existing space. 

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

var apiInstance = new Onepanel.SpaceSupportApi();

var spaceSupportRequest = new Onepanel.SpaceSupportRequest(); // SpaceSupportRequest | Specification of the space support request including support size and token. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.supportSpace(spaceSupportRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceSupportRequest** | [**SpaceSupportRequest**](SpaceSupportRequest.md)| Specification of the space support request including support size and token.  | 

### Return type

[**Id**](Id.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

