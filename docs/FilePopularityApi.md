# Onepanel.FilePopularityApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configureFilePopularity**](FilePopularityApi.md#configureFilePopularity) | **PATCH** /provider/spaces/{id}/file-popularity/configuration | Configure file popularity mechanism in the space
[**getFilePopularityConfiguration**](FilePopularityApi.md#getFilePopularityConfiguration) | **GET** /provider/spaces/{id}/file-popularity/configuration | Get file popularity configuration


<a name="configureFilePopularity"></a>
# **configureFilePopularity**
> TaskId configureFilePopularity(id, spaceFilePopularityConfiguration)

Configure file popularity mechanism in the space

Configures the file popularity mechanism in the space. The mechanism is responsible for collecting file popularity usage statistics per space support. Creates a view which can be queried to fetch the least popular files. The view is sorted in an increasing order by the popularity function value. The popularity function is defined as  &#x60;&#x60;&#x60; P(lastOpenHour, avgOpenCountPerDay) &#x3D; w1 * lastOpenHour + w2 * min(avgOpenCountPerDay, MAX_AVG_OPEN_COUNT_PER_DAY) where: * lastOpenHour - parameter which is equal to timestamp (in hours since 01.01.1970) of last open operation on given file * w1 - weight of lastOpenHour parameter * avgOpenCountPerDay - parameter equal to moving average of number of open operations on given file per day. Value is calculated over last 30 days. * w2 - weight of avgOpenCountPerDay parameter * MAX_AVG_OPEN_COUNT_PER_DAY - upper boundary for avgOpenCountPerDay parameter &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.FilePopularityApi();

var id = "id_example"; // String | The Id of a space.

var spaceFilePopularityConfiguration = new Onepanel.SpaceFilePopularityConfiguration(); // SpaceFilePopularityConfiguration | Configuration of the file-popularity mechanism in the space.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configureFilePopularity(id, spaceFilePopularityConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space. | 
 **spaceFilePopularityConfiguration** | [**SpaceFilePopularityConfiguration**](SpaceFilePopularityConfiguration.md)| Configuration of the file-popularity mechanism in the space. | 

### Return type

[**TaskId**](TaskId.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getFilePopularityConfiguration"></a>
# **getFilePopularityConfiguration**
> SpaceFilePopularityConfiguration getFilePopularityConfiguration(id)

Get file popularity configuration

Returns configuration of file popularity mechanism in the space specified by space Id in the path. 

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

var apiInstance = new Onepanel.FilePopularityApi();

var id = "id_example"; // String | The Id of a space of which file-popularity configuration should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFilePopularityConfiguration(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a space of which file-popularity configuration should be returned. | 

### Return type

[**SpaceFilePopularityConfiguration**](SpaceFilePopularityConfiguration.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

