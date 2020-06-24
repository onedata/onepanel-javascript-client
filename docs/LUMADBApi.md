# Onepanel.LUMADBApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lumaClearDb**](LUMADBApi.md#lumaClearDb) | **DELETE** /provider/storages/{id}/luma/db | Clear LUMA DB
[**lumaGetAclGroupToOnedataGroupMapping**](LUMADBApi.md#lumaGetAclGroupToOnedataGroupMapping) | **GET** /provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname} | Lookup mapping of ACL group
[**lumaGetAclUserToOnedataUserMapping**](LUMADBApi.md#lumaGetAclUserToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_user_to_onedata_user/{username} | Lookup mapping of ACL user
[**lumaGetConfig**](LUMADBApi.md#lumaGetConfig) | **GET** /provider/storages/{id}/luma/config | Get LUMA DB configuration
[**lumaGetDefaultPosixCredentials**](LUMADBApi.md#lumaGetDefaultPosixCredentials) | **GET** /provider/storages/{id}/luma/db/storage_access/posix_compatible/default_credentials/{space_id} | Lookup default posix credentials
[**lumaGetDisplayCredentials**](LUMADBApi.md#lumaGetDisplayCredentials) | **GET** /provider/storages/{id}/luma/db/display_credentials/all/default/{space_id} | Lookup default display credentials
[**lumaGetOnedataUserToCredentialsMapping**](LUMADBApi.md#lumaGetOnedataUserToCredentialsMapping) | **GET** /provider/storages/{id}/luma/db/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Lookup Onedata user to credentials mapping
[**lumaGetUidToOnedataUserMapping**](LUMADBApi.md#lumaGetUidToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/db/storage_import/posix_compatible/uid_to_onedata_user/{uid} | Lookup mapping of UID
[**lumaRemoveAclGroupToOnedataGroupMapping**](LUMADBApi.md#lumaRemoveAclGroupToOnedataGroupMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname} | Remove mapping of ACL group
[**lumaRemoveAclUserToOnedataUserMapping**](LUMADBApi.md#lumaRemoveAclUserToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_user_to_onedata_user/{username} | Remove mapping of ACL user
[**lumaRemoveDefaultPosixCredentials**](LUMADBApi.md#lumaRemoveDefaultPosixCredentials) | **DELETE** /provider/storages/{id}/luma/db/storage_access/posix_compatible/default_credentials/{space_id} | Remove default posix credentials
[**lumaRemoveDisplayCredentials**](LUMADBApi.md#lumaRemoveDisplayCredentials) | **DELETE** /provider/storages/{id}/luma/db/display_credentials/all/default/{space_id} | Remove default display credentials
[**lumaRemoveOnedataUserToCredentialsMapping**](LUMADBApi.md#lumaRemoveOnedataUserToCredentialsMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Remove Onedata user to credentials mapping
[**lumaRemoveUidToOnedataUserMapping**](LUMADBApi.md#lumaRemoveUidToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_import/posix_compatible/uid_to_onedata_user/{uid} | Remove mapping of UID


<a name="lumaClearDb"></a>
# **lumaClearDb**
> lumaClearDb(id)

Clear LUMA DB

Clears all LUMA DB entries for given storage. LUMA DB will be repopulated using currently setup feed. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage for which LUMA DB will be cleared


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lumaClearDb(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage for which LUMA DB will be cleared | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="lumaGetAclGroupToOnedataGroupMapping"></a>
# **lumaGetAclGroupToOnedataGroupMapping**
> LumaOnedataGroup lumaGetAclGroupToOnedataGroupMapping(id, groupname)

Lookup mapping of ACL group

Returns mapping of ACL group on the specific storage to Onedata group stored in LUMA DB. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata group mapping should be returned. 

var groupname = 56; // Number | The ACL name of the group on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lumaGetAclGroupToOnedataGroupMapping(id, groupname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which onedata group mapping should be returned.  | 
 **groupname** | **Number**| The ACL name of the group on the storage.  | 

### Return type

[**LumaOnedataGroup**](LumaOnedataGroup.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lumaGetAclUserToOnedataUserMapping"></a>
# **lumaGetAclUserToOnedataUserMapping**
> LumaOnedataUser lumaGetAclUserToOnedataUserMapping(id, username)

Lookup mapping of ACL user

Returns mapping of ACL user on the specific storage to Onedata user stored in LUMA DB. Mapping will be acquired again using currently setup LUMA feed. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be returned. 

var username = 56; // Number | The ACL name of the user on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lumaGetAclUserToOnedataUserMapping(id, username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which onedata user mapping should be returned.  | 
 **username** | **Number**| The ACL name of the user on the storage.  | 

### Return type

[**LumaOnedataUser**](LumaOnedataUser.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lumaGetConfig"></a>
# **lumaGetConfig**
> LumaConfig lumaGetConfig(id)

Get LUMA DB configuration

Returns configuration of Local User Mapping database (LUMA DB) for the storage. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage for which LUMA DB configuration should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lumaGetConfig(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage for which LUMA DB configuration should be returned. | 

### Return type

[**LumaConfig**](LumaConfig.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lumaGetDefaultPosixCredentials"></a>
# **lumaGetDefaultPosixCredentials**
> PosixCompatibleCredentials lumaGetDefaultPosixCredentials(id, spaceId)

Lookup default posix credentials

Returns default storage credentials for the space supported by POSIX-compatible storage that are stored in LUMA DB. GID will be used as a component of storage credentials for each member of the space. Both UID and GID will be used as to represent owner of the space directory on storage. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default storage credentials should be returned. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default storage credentials should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lumaGetDefaultPosixCredentials(id, spaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which default storage credentials should be returned.  | 
 **spaceId** | **String**| The Id of a space constituting space support for which default storage credentials should be returned.  | 

### Return type

[**PosixCompatibleCredentials**](PosixCompatibleCredentials.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lumaGetDisplayCredentials"></a>
# **lumaGetDisplayCredentials**
> PosixCompatibleCredentials lumaGetDisplayCredentials(id, spaceId)

Lookup default display credentials

Returns default display credentials for the space support that are stored in LUMA DB. These are POSIX credentials (UID &amp; GID) which are returned in getattr response. They are used to present file owners in the result of e.g. &#x60;ls&#x60; or &#x60;stat&#x60; operation in Oneclient or when fetching file attributes via REST API. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default display credentials should be returned. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default display credentials should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lumaGetDisplayCredentials(id, spaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which default display credentials should be returned.  | 
 **spaceId** | **String**| The Id of a space constituting space support for which default display credentials should be returned.  | 

### Return type

[**PosixCompatibleCredentials**](PosixCompatibleCredentials.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lumaGetOnedataUserToCredentialsMapping"></a>
# **lumaGetOnedataUserToCredentialsMapping**
> LumaStorageUser lumaGetOnedataUserToCredentialsMapping(id, onedataUserId)

Lookup Onedata user to credentials mapping

Returns mapping of the Onedata user to user on the specific storage stored in LUMA DB. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage for which user mapping should be returned. 

var onedataUserId = "onedataUserId_example"; // String | The Id of a user for which mapping should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lumaGetOnedataUserToCredentialsMapping(id, onedataUserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage for which user mapping should be returned.  | 
 **onedataUserId** | **String**| The Id of a user for which mapping should be returned.  | 

### Return type

[**LumaStorageUser**](LumaStorageUser.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lumaGetUidToOnedataUserMapping"></a>
# **lumaGetUidToOnedataUserMapping**
> LumaOnedataUser lumaGetUidToOnedataUserMapping(id, uid)

Lookup mapping of UID

Returns mapping of UID on the specific storage to Onedata user stored in LUMA DB. Mapping will be acquired again using currently setup LUMA feed. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be returned. 

var uid = 56; // Number | The UID of the user on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lumaGetUidToOnedataUserMapping(id, uid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which onedata user mapping should be returned.  | 
 **uid** | **Number**| The UID of the user on the storage.  | 

### Return type

[**LumaOnedataUser**](LumaOnedataUser.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lumaRemoveAclGroupToOnedataGroupMapping"></a>
# **lumaRemoveAclGroupToOnedataGroupMapping**
> lumaRemoveAclGroupToOnedataGroupMapping(id, groupname)

Remove mapping of ACL group

Removes mapping of ACL group on the specific storage to Onedata group from LUMA DB. Mapping will be acquired again using currently setup LUMA feed. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata group mapping should be removed. 

var groupname = 56; // Number | The ACL name of the group on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lumaRemoveAclGroupToOnedataGroupMapping(id, groupname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which onedata group mapping should be removed.  | 
 **groupname** | **Number**| The ACL name of the group on the storage.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="lumaRemoveAclUserToOnedataUserMapping"></a>
# **lumaRemoveAclUserToOnedataUserMapping**
> lumaRemoveAclUserToOnedataUserMapping(id, username)

Remove mapping of ACL user

Removes mapping of ACL user on the specific storage to Onedata user from LUMA DB. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be removed. 

var username = 56; // Number | The ACL name of the user on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lumaRemoveAclUserToOnedataUserMapping(id, username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which onedata user mapping should be removed.  | 
 **username** | **Number**| The ACL name of the user on the storage.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="lumaRemoveDefaultPosixCredentials"></a>
# **lumaRemoveDefaultPosixCredentials**
> lumaRemoveDefaultPosixCredentials(id, spaceId)

Remove default posix credentials

Removes default storage credentials for the space supported by POSIX-compatible storage from LUMA DB. Default storage credentials will be acquired again using currently setup LUMA feed. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default storage credentials should be removed. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default storage credentials should be removed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lumaRemoveDefaultPosixCredentials(id, spaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which default storage credentials should be removed.  | 
 **spaceId** | **String**| The Id of a space constituting space support for which default storage credentials should be removed.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="lumaRemoveDisplayCredentials"></a>
# **lumaRemoveDisplayCredentials**
> lumaRemoveDisplayCredentials(id, spaceId)

Remove default display credentials

Removes default display credentials for the space support from LUMA DB. Default display credentials will be acquired again using currently setup LUMA feed. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default display credentials should be removed. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default display credentials should be removed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lumaRemoveDisplayCredentials(id, spaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which default display credentials should be removed.  | 
 **spaceId** | **String**| The Id of a space constituting space support for which default display credentials should be removed.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="lumaRemoveOnedataUserToCredentialsMapping"></a>
# **lumaRemoveOnedataUserToCredentialsMapping**
> lumaRemoveOnedataUserToCredentialsMapping(id, onedataUserId)

Remove Onedata user to credentials mapping

Removes mapping of the Onedata user to user on the specific storage from LUMA DB. Mapping will be acquired again using currently setup LUMA feed. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage for which user mapping should be removed. 

var onedataUserId = "onedataUserId_example"; // String | The Id of a user for which mapping should be removed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lumaRemoveOnedataUserToCredentialsMapping(id, onedataUserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage for which user mapping should be removed.  | 
 **onedataUserId** | **String**| The Id of a user for which mapping should be removed.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="lumaRemoveUidToOnedataUserMapping"></a>
# **lumaRemoveUidToOnedataUserMapping**
> lumaRemoveUidToOnedataUserMapping(id, uid)

Remove mapping of UID

Removes mapping of UID on the specific storage to Onedata user from LUMA DB. 

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

var apiInstance = new Onepanel.LUMADBApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be removed. 

var uid = 56; // Number | The UID of the user on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lumaRemoveUidToOnedataUserMapping(id, uid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which onedata user mapping should be removed.  | 
 **uid** | **Number**| The UID of the user on the storage.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

