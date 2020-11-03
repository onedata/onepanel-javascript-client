# Onepanel.ServiceConfigurationApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGuiMessage**](ServiceConfigurationApi.md#getGuiMessage) | **GET** /zone/gui_messages/{id} | Get settings of a Onezone GUI message
[**getZonePolicies**](ServiceConfigurationApi.md#getZonePolicies) | **GET** /zone/policies | Get Onezone policies
[**modifyGuiMessage**](ServiceConfigurationApi.md#modifyGuiMessage) | **PATCH** /zone/gui_messages/{id} | Modify settings of a Onezone GUI message
[**modifyZonePolicies**](ServiceConfigurationApi.md#modifyZonePolicies) | **PATCH** /zone/policies | Modify current Onezone policies


<a name="getGuiMessage"></a>
# **getGuiMessage**
> GuiMessage getGuiMessage(id)

Get settings of a Onezone GUI message

Returns settings of a message displayed in Onezone GUI.

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

var apiInstance = new Onepanel.ServiceConfigurationApi();

var id = "id_example"; // String | Possible values are:   - cookie_consent_notification - for the contents of cookie consent popup   - privacy_policy - for the privacy policy   - signin_notification - for the message displayed on the Onezone sign in screen 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGuiMessage(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Possible values are:   - cookie_consent_notification - for the contents of cookie consent popup   - privacy_policy - for the privacy policy   - signin_notification - for the message displayed on the Onezone sign in screen  | 

### Return type

[**GuiMessage**](GuiMessage.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZonePolicies"></a>
# **getZonePolicies**
> ZonePolicies getZonePolicies()

Get Onezone policies

Returns restrictions placed on Onezone operations such as registering Oneproviders. 

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

var apiInstance = new Onepanel.ServiceConfigurationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZonePolicies(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ZonePolicies**](ZonePolicies.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyGuiMessage"></a>
# **modifyGuiMessage**
> modifyGuiMessage(id, messageChange)

Modify settings of a Onezone GUI message

Enables, disables or modifies a message displayed in Onezone GUI.

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

var apiInstance = new Onepanel.ServiceConfigurationApi();

var id = "id_example"; // String | Possible values are:   - cookie_consent_notification - for the contents of cookie consent popup   - privacy_policy - for the privacy policy   - signin_notification - for the message displayed on the Onezone sign in screen 

var messageChange = new Onepanel.GuiMessage(); // GuiMessage | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyGuiMessage(id, messageChange, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Possible values are:   - cookie_consent_notification - for the contents of cookie consent popup   - privacy_policy - for the privacy policy   - signin_notification - for the message displayed on the Onezone sign in screen  | 
 **messageChange** | [**GuiMessage**](GuiMessage.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="modifyZonePolicies"></a>
# **modifyZonePolicies**
> modifyZonePolicies(zonePolicies)

Modify current Onezone policies

Modifies restrictions placed on Onezone operations such as registering providers. 

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

var apiInstance = new Onepanel.ServiceConfigurationApi();

var zonePolicies = new Onepanel.ZonePolicies(); // ZonePolicies | New values for Onezone policies.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyZonePolicies(zonePolicies, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zonePolicies** | [**ZonePolicies**](ZonePolicies.md)| New values for Onezone policies. | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

