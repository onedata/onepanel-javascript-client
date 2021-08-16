# Onepanel.UserManagementApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOnezoneUser**](UserManagementApi.md#addOnezoneUser) | **POST** /zone/users | Create Onezone user
[**changeUserPassword**](UserManagementApi.md#changeUserPassword) | **PATCH** /zone/users/{id} | Set password for Onezone user
[**getOnezoneUser**](UserManagementApi.md#getOnezoneUser) | **GET** /zone/users/{id} | Get Onezone user details
[**getOnezoneUsers**](UserManagementApi.md#getOnezoneUsers) | **GET** /zone/users | List Onezone users


<a name="addOnezoneUser"></a>
# **addOnezoneUser**
> Id addOnezoneUser(userCreateRequest)

Create Onezone user

Creates a new Onezone user account with Basic (username &amp; password) authentication enabled.  ***Example cURL requests***  **Create Onezone user with username &amp; password** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X POST https://$HOST/api/v3/onepanel/zone/users \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;username\&quot;: \&quot;someUser\&quot;,     \&quot;password\&quot;: \&quot;somePassword\&quot; }&#39;  {     \&quot;id\&quot;: \&quot;b519b3ac46823b2b83b6cb85e1b16f4fchaa0f\&quot; } &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.UserManagementApi();

var userCreateRequest = new Onepanel.OnezoneUserCreateRequest(); // OnezoneUserCreateRequest | The user configuration details.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOnezoneUser(userCreateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateRequest** | [**OnezoneUserCreateRequest**](OnezoneUserCreateRequest.md)| The user configuration details. | 

### Return type

[**Id**](Id.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="changeUserPassword"></a>
# **changeUserPassword**
> changeUserPassword(id, passwordChangeRequest)

Set password for Onezone user

Sets a new password for a Onezone user using Basic authentication.  ***Example cURL requests***  **Set Onezone user password** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X PATCH https://$HOST/api/v3/onepanel/zone/users/$USER_ID \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{\&quot;newPassword\&quot;: \&quot;someNewPassword\&quot;}&#39; &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.UserManagementApi();

var id = "id_example"; // String | Id of the user whose password is changed.

var passwordChangeRequest = new Onepanel.PasswordChangeRequest(); // PasswordChangeRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changeUserPassword(id, passwordChangeRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the user whose password is changed. | 
 **passwordChangeRequest** | [**PasswordChangeRequest**](PasswordChangeRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getOnezoneUser"></a>
# **getOnezoneUser**
> OnezoneUser getOnezoneUser(id)

Get Onezone user details

Returns the configuration information of the Onezone user.  ***Example cURL requests***  **Get Onezone user details** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$HOST/api/v3/onepanel/zone/users/$USER_ID  {     \&quot;username\&quot;: \&quot;someUser\&quot;,     \&quot;userId\&quot;: \&quot;b519b3ac46823b2b83b6cb85e1b16f4fchaa0f\&quot;,     \&quot;fullName\&quot;: \&quot;Unnamed User\&quot; } &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.UserManagementApi();

var id = "id_example"; // String | Id of the user to be described.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnezoneUser(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the user to be described. | 

### Return type

[**OnezoneUser**](OnezoneUser.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnezoneUsers"></a>
# **getOnezoneUsers**
> Ids getOnezoneUsers()

List Onezone users

List Ids of Onezone users.  ***Example cURL requests***  **Get Onezone user ids** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$HOST/api/v3/onepanel/zone/users  {     \&quot;ids\&quot;: [         \&quot;f891d1ddf693232bbf0c11fe3cd9f7e7cheda9\&quot;,         \&quot;eefc8a11e1776d0797969ccf0b59c6dcch73dc\&quot;,         \&quot;ec0a39261b325cdc74e9c2d6b54fa786ch0419\&quot;     ] } &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.UserManagementApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnezoneUsers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Ids**](Ids.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

