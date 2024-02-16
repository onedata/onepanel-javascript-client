# Onepanel.SpaceSupportApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProviderSpaces**](SpaceSupportApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
[**getSpaceDetails**](SpaceSupportApi.md#getSpaceDetails) | **GET** /provider/spaces/{id} | Get space details
[**modifySpace**](SpaceSupportApi.md#modifySpace) | **PATCH** /provider/spaces/{id} | Modify space details
[**revokeSpaceSupport**](SpaceSupportApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space
[**supportSpace**](SpaceSupportApi.md#supportSpace) | **POST** /provider/spaces | Support space


<a name="getProviderSpaces"></a>
# **getProviderSpaces**
> ProviderSpaces getProviderSpaces()

Get provider spaces

Returns the list of spaces supported by the provider.  ***Example cURL requests***  **Get provider space ids** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$OP_PANEL_HOST/api/v3/onepanel/provider/spaces  {     \&quot;ids\&quot;: [         \&quot;0614a7a1512271ceeae95539872eeeabched69\&quot;,         \&quot;06911eba60e6ba947f86f799ce975042chad21\&quot;,         \&quot;109b7d84c00cd45a88b6cdb852dba5b3ch84db\&quot;     ] } &#x60;&#x60;&#x60; 

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

Returns details of space specified by space Id in the path.  ***Example cURL requests***  **Get space details** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$OP_PANEL_HOST/api/v3/onepanel/provider/spaces/$SPACE_ID  {     \&quot;supportingProviders\&quot;: {         \&quot;03c7e42a793912307b01b1bbb72a3a6bch4c1c\&quot;: 10000000     },     \&quot;storageId\&quot;: \&quot;18a42a43b1b2d92455ffa09e9a15df7fch4f82\&quot;,     \&quot;spaceOccupancy\&quot;: 0,     \&quot;name\&quot;: \&quot;someSpace\&quot;,     \&quot;localStorages\&quot;: [\&quot;18a42a43b1b2d92455ffa09e9a15df7fch4f82\&quot;],     \&quot;importedStorage\&quot;: false,     \&quot;id\&quot;: \&quot;16403a6c45105010dc7103e31874cb3echac41\&quot;,     \&quot;accountingEnabled\&quot;: false,     \&quot;dirStatsServiceEnabled\&quot;: true,     \&quot;dirStatsServiceStatus\&quot;: \&quot;initializing\&quot; } &#x60;&#x60;&#x60; 

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

Modifies the space import/update strategies.  ***Example cURL requests***  **Modify space support size** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X PATCH https://$OP_PANEL_HOST/api/v3/onepanel/provider/spaces/$SPACE_ID \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{\&quot;size\&quot;: 30000000}&#39; &#x60;&#x60;&#x60; 

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

Allows provider to revoke storage support for a specific space. Users with access to this space will no longer be able to store data on the resources of this provider.  ***Example cURL requests***  **Revoke space support** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X DELETE https://$OP_PANEL_HOST/api/v3/onepanel/provider/spaces/$SPACE_ID &#x60;&#x60;&#x60; 

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

Supports an existing space.  ***Example cURL requests***  **Support space** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X POST https://$OP_PANEL_HOST/api/v3/onepanel/provider/spaces \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;token\&quot;: \&quot;MDAU02QHLaaJ00go\&quot;,     \&quot;size\&quot;: 10000000,     \&quot;storageId\&quot;: \&quot;18a42a43b1b2d9e9a1f82\&quot; }&#39;  {     \&quot;id\&quot;: \&quot;16403a6c45105010dc7103e31874cb3echac41\&quot; } &#x60;&#x60;&#x60; 

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

