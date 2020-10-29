# Onepanel.StoragesApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStorage**](StoragesApi.md#addStorage) | **POST** /provider/storages | Add storage
[**getStorageDetails**](StoragesApi.md#getStorageDetails) | **GET** /provider/storages/{id} | Get storage details
[**getStorages**](StoragesApi.md#getStorages) | **GET** /provider/storages | Get storages
[**modifyStorage**](StoragesApi.md#modifyStorage) | **PATCH** /provider/storages/{id} | Modify storage config
[**removeStorage**](StoragesApi.md#removeStorage) | **DELETE** /provider/storages/{id} | Remove storage


<a name="addStorage"></a>
# **addStorage**
> addStorage(storageCreateRequest)

Add storage

Adds additional storage resources to the provider.  ***Example cURL requests***  **Add storage** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X POST \\ -H \&quot;Content-type: application/json\&quot; \\ -d &#39;{\&quot;s3_Storage\&quot;: {\&quot;type\&quot;: \&quot;s3\&quot;, \&quot;hostname\&quot;: \&quot;iam.example.com\&quot;, \&quot;bucketName\&quot;: \&quot;bucket1.iam.example.com\&quot;, \&quot;skipStorageDetection\&quot;: true}}&#39; \\ https://$HOST/api/v3/onepanel/provider/storages &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.StoragesApi();

var storageCreateRequest = new Onepanel.StorageCreateRequest(); // StorageCreateRequest | The configuration details of storage resources to be added to the provider deployment. Must be an object with unique names for the storages as keys and their corresponding configuration (objects) as values - see the request body example. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addStorage(storageCreateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageCreateRequest** | [**StorageCreateRequest**](StorageCreateRequest.md)| The configuration details of storage resources to be added to the provider deployment. Must be an object with unique names for the storages as keys and their corresponding configuration (objects) as values - see the request body example.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getStorageDetails"></a>
# **getStorageDetails**
> StorageGetDetails getStorageDetails(id)

Get storage details

Returns the details of the selected storage.  ***Example cURL requests***  **Get Storage Details** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET \\ https:/$HOST/api/v3/onepanel/provider/storages/$STORAGE_ID  {   \&quot;type\&quot;: \&quot;s3\&quot;,   \&quot;storagePathType\&quot;: \&quot;flat\&quot;,   \&quot;skipStorageDetection\&quot;: true,   \&quot;signatureVersion\&quot;: 4,   \&quot;scheme\&quot;: \&quot;http\&quot;,   \&quot;readonly\&quot;: false,   \&quot;qosParameters\&quot;:{     \&quot;storageId\&quot;: \&quot;05b6c0a9b72e475c9d5061b0b7e16947chbcdc\&quot;,     \&quot;providerId\&quot;: \&quot;03c7e42a793912307b01b1bbb72a3a6bch4c1c\&quot;   },   \&quot;name\&quot;: \&quot;s3_storage\&quot;,   \&quot;maximumCanonicalObjectSize\&quot;: 67108864,   \&quot;lumaFeed\&quot;: \&quot;auto\&quot;,   \&quot;importedStorage\&quot;: false,   \&quot;id\&quot;: \&quot;05b6c0a9b72e475c9d5061b0b7e16947chbcdc\&quot;,   \&quot;hostname\&quot;: \&quot;iam.exampele.com:80/\&quot;,   \&quot;fileMode\&quot;: \&quot;0664\&quot;,   \&quot;dirMode\&quot;: \&quot;0775\&quot;,   \&quot;bucketName\&quot;: \&quot;bucket1.iam.examplee.com\&quot;,   \&quot;blockSize\&quot;: 10485760,   \&quot;accessKey\&quot;: \&quot;\&quot; } &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.StoragesApi();

var id = "id_example"; // String | The Id of a storage resource, which details should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStorageDetails(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage resource, which details should be returned.  | 

### Return type

[**StorageGetDetails**](StorageGetDetails.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStorages"></a>
# **getStorages**
> ProviderStorages getStorages()

Get storages

Returns the list of provider storage resources and their details.  ***Example cURL requests***  **Get provider storage ids** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET \\ https://$HOST/api/v3/onepanel/provider/storages  {   \&quot;ids\&quot;: [     \&quot;18a42a43b1b2d92455ffa09e9a15df7fch4f82\&quot;,     \&quot;0a26877440f6ce457106c6958dfe7ecbch0ac6\&quot;,     \&quot;b3d7d10504393556d9b1631a74c34520ch8359\&quot;   ] } &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.StoragesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStorages(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderStorages**](ProviderStorages.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyStorage"></a>
# **modifyStorage**
> StorageModifyDetails modifyStorage(id, storageModifyRequest)

Modify storage config

Modifies storage configuration.  ***Example cURL requests***  **Modify storage name. Notice, that current storage name is the map key.** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X PATCH \\ -H \&quot;Content-type: application/json\&quot; \\ -d &#39;{\&quot;s3_storage\&quot;:{\&quot;type\&quot;:\&quot;s3\&quot;, \&quot;name\&quot;: \&quot;new_s3_storage_name\&quot;}}&#39; \\ https://$HOST/api/v3/onepanel/provider/storages/$STORAGE_ID  {   \&quot;type\&quot;: \&quot;s3\&quot;,   \&quot;storagePathType\&quot;: \&quot;flat\&quot;,   \&quot;skipStorageDetection\&quot;: \&quot;true\&quot;,   \&quot;signatureVersion\&quot;: \&quot;4\&quot;,   \&quot;scheme\&quot;: \&quot;http\&quot;,   \&quot;readonly\&quot;: false,   \&quot;qosParameters\&quot;: {     \&quot;storageId\&quot;: \&quot;2456aa013af797dbef27743790a5f12cche680\&quot;,     \&quot;providerId\&quot;: \&quot;03c7e42a793912307b01b1bbb72a3a6bch4c1c\&quot;   },   \&quot;name\&quot;: \&quot;new_s3_storage_name\&quot;,   \&quot;maximumCanonicalObjectSize\&quot;: \&quot;67108864\&quot;,   \&quot;lumaFeed\&quot;: \&quot;auto\&quot;,   \&quot;importedStorage\&quot;: false,   \&quot;id\&quot;: \&quot;2456aa013af797dbef27743790a5f12cche680\&quot;,   \&quot;hostname\&quot;: \&quot;iam.exampele.com:80/\&quot;,   \&quot;fileMode\&quot;: \&quot;0664\&quot;,   \&quot;dirMode\&quot;: \&quot;0775\&quot;,   \&quot;bucketName\&quot;: \&quot;bucket1.iam.examplee.com\&quot;,   \&quot;blockSize\&quot;: \&quot;10485760\&quot;,   \&quot;accessKey\&quot;: \&quot;\&quot; } &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.StoragesApi();

var id = "id_example"; // String | The Id of the storage resource which details should be modified. 

var storageModifyRequest = new Onepanel.StorageModifyRequest(); // StorageModifyRequest | An object with one key - the current name of the storage that is being modified - and its value set to an object with updated parameters. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyStorage(id, storageModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of the storage resource which details should be modified.  | 
 **storageModifyRequest** | [**StorageModifyRequest**](StorageModifyRequest.md)| An object with one key - the current name of the storage that is being modified - and its value set to an object with updated parameters.  | 

### Return type

[**StorageModifyDetails**](StorageModifyDetails.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="removeStorage"></a>
# **removeStorage**
> removeStorage(id)

Remove storage

Removes storage from the cluster. Only storage not supporting any spaces can be removed.  ***Example cURL requests***  **Remove storage** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X DELETE \\ https://$HOST/api/v3/onepanel/provider/storages/$STORAGE_ID &#x60;&#x60;&#x60; 

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

var apiInstance = new Onepanel.StoragesApi();

var id = "id_example"; // String | The Id of the storage to remove.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeStorage(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of the storage to remove. | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

