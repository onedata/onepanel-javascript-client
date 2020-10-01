# Onepanel.SecurityApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmergencyPassphraseStatus**](SecurityApi.md#getEmergencyPassphraseStatus) | **GET** /emergency_passphrase | Get emergency passphrase status
[**setEmergencyPassphrase**](SecurityApi.md#setEmergencyPassphrase) | **PUT** /emergency_passphrase | Set emergency passphrase


<a name="getEmergencyPassphraseStatus"></a>
# **getEmergencyPassphraseStatus**
> EmergencyPassphraseStatus getEmergencyPassphraseStatus()

Get emergency passphrase status

Returns information whether emergency passphrase is set.

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

var apiInstance = new Onepanel.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmergencyPassphraseStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EmergencyPassphraseStatus**](EmergencyPassphraseStatus.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setEmergencyPassphrase"></a>
# **setEmergencyPassphrase**
> setEmergencyPassphrase(emergencyPassphrase)

Set emergency passphrase

Sets passphrase which can be used to access the Onepanel REST API and emergency Onepanel GUI. May be invoked without credentials when no passphrase is set. 

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

var apiInstance = new Onepanel.SecurityApi();

var emergencyPassphrase = new Onepanel.EmergencyPassphraseChangeRequest(); // EmergencyPassphraseChangeRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setEmergencyPassphrase(emergencyPassphrase, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emergencyPassphrase** | [**EmergencyPassphraseChangeRequest**](EmergencyPassphraseChangeRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

