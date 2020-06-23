# Onepanel.LUMAApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**localFeedAddOnedataUserToCredentialsMapping**](LUMAApi.md#localFeedAddOnedataUserToCredentialsMapping) | **POST** /provider/storages/{id}/luma/local_feed/storage_access/all/onedata_user_to_credentials | Insert Onedata user to credentials mapping into local feed
[**localFeedGetAclGroupToOnedataGroupMapping**](LUMAApi.md#localFeedGetAclGroupToOnedataGroupMapping) | **GET** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/acl_group_to_onedata_group/{groupname} | Lookup mapping of ACL group in local feed
[**localFeedGetAclUserToOnedataUserMapping**](LUMAApi.md#localFeedGetAclUserToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/acl_user_to_onedata_user/{username} | Lookup mapping of ACL user in local feed
[**localFeedGetDefaultPosixCredentials**](LUMAApi.md#localFeedGetDefaultPosixCredentials) | **GET** /provider/storages/{id}/luma/local_feed/storage_access/posix_compatible/default_credentials/{space_id} | Lookup default posix credentials in local feed
[**localFeedGetDisplayCredentials**](LUMAApi.md#localFeedGetDisplayCredentials) | **GET** /provider/storages/{id}/luma/local_feed/display_credentials/all/default/{space_id} | Lookup default display credentials in local feed
[**localFeedGetOnedataUserToCredentialsMapping**](LUMAApi.md#localFeedGetOnedataUserToCredentialsMapping) | **GET** /provider/storages/{id}/luma/local_feed/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Lookup Onedata user to credentials mapping in local feed
[**localFeedGetUidToOnedataUserMapping**](LUMAApi.md#localFeedGetUidToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/uid_to_onedata_user/{uid} | Lookup mapping of UID in local feed
[**localFeedModifyOnedataUserToCredentialsMapping**](LUMAApi.md#localFeedModifyOnedataUserToCredentialsMapping) | **PATCH** /provider/storages/{id}/luma/local_feed/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Update Onedata user to credentials mapping in local feed
[**localFeedRemoveAclGroupToOnedataGroupMapping**](LUMAApi.md#localFeedRemoveAclGroupToOnedataGroupMapping) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/acl_group_to_onedata_group/{groupname} | Remove mapping of ACL group from local feed
[**localFeedRemoveAclUserToOnedataUserMapping**](LUMAApi.md#localFeedRemoveAclUserToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/acl_user_to_onedata_user/{username} | Remove mapping of ACL user from local feed
[**localFeedRemoveDefaultPosixCredentials**](LUMAApi.md#localFeedRemoveDefaultPosixCredentials) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_access/posix_compatible/default_credentials/{space_id} | Remove default posix credentials from local feed
[**localFeedRemoveDisplayCredentials**](LUMAApi.md#localFeedRemoveDisplayCredentials) | **DELETE** /provider/storages/{id}/luma/local_feed/display_credentials/all/default/{space_id} | Remove default display credentials from local feed
[**localFeedRemoveOnedataUserToCredentialsMapping**](LUMAApi.md#localFeedRemoveOnedataUserToCredentialsMapping) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Remove Onedata user to credentials mapping from local feed
[**localFeedRemoveUidToOnedataUserMapping**](LUMAApi.md#localFeedRemoveUidToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/uid_to_onedata_user/{uid} | Remove mapping of UID from local feed
[**localFeedSetAclGroupToOnedataGroupMapping**](LUMAApi.md#localFeedSetAclGroupToOnedataGroupMapping) | **PUT** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/acl_group_to_onedata_group/{groupname} | Insert mapping of ACL group into local feed
[**localFeedSetAclUserToOnedataUserMapping**](LUMAApi.md#localFeedSetAclUserToOnedataUserMapping) | **PUT** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/acl_user_to_onedata_user/{username} | Insert mapping of ACL user into local feed
[**localFeedSetDefaultPosixCredentials**](LUMAApi.md#localFeedSetDefaultPosixCredentials) | **PUT** /provider/storages/{id}/luma/local_feed/storage_access/posix_compatible/default_credentials/{space_id} | Insert default posix credentials into local feed
[**localFeedSetDisplayCredentials**](LUMAApi.md#localFeedSetDisplayCredentials) | **PUT** /provider/storages/{id}/luma/local_feed/display_credentials/all/default/{space_id} | Insert default display credentials into local feed
[**localFeedSetUidToOnedataUserMapping**](LUMAApi.md#localFeedSetUidToOnedataUserMapping) | **PUT** /provider/storages/{id}/luma/local_feed/storage_sync/posix_compatible/uid_to_onedata_user/{uid} | Insert mapping of UID into local feed
[**lumaGetAclGroupToOnedataGroupMapping**](LUMAApi.md#lumaGetAclGroupToOnedataGroupMapping) | **GET** /provider/storages/{id}/luma/db/storage_sync/posix_compatible/acl_group_to_onedata_group/{groupname} | Lookup mapping of ACL group
[**lumaGetAclUserToOnedataUserMapping**](LUMAApi.md#lumaGetAclUserToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/db/storage_sync/posix_compatible/acl_user_to_onedata_user/{username} | Lookup mapping of ACL user
[**lumaGetDefaultPosixCredentials**](LUMAApi.md#lumaGetDefaultPosixCredentials) | **GET** /provider/storages/{id}/luma/db/storage_access/posix_compatible/default_credentials/{space_id} | Lookup default posix credentials
[**lumaGetDisplayCredentials**](LUMAApi.md#lumaGetDisplayCredentials) | **GET** /provider/storages/{id}/luma/db/display_credentials/all/default/{space_id} | Lookup default display credentials
[**lumaGetOnedataUserToCredentialsMapping**](LUMAApi.md#lumaGetOnedataUserToCredentialsMapping) | **GET** /provider/storages/{id}/luma/db/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Lookup Onedata user to credentials mapping
[**lumaGetUidToOnedataUserMapping**](LUMAApi.md#lumaGetUidToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/db/storage_sync/posix_compatible/uid_to_onedata_user/{uid} | Lookup mapping of UID
[**lumaRemoveAclGroupToOnedataGroupMapping**](LUMAApi.md#lumaRemoveAclGroupToOnedataGroupMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_sync/posix_compatible/acl_group_to_onedata_group/{groupname} | Remove mapping of ACL group
[**lumaRemoveAclUserToOnedataUserMapping**](LUMAApi.md#lumaRemoveAclUserToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_sync/posix_compatible/acl_user_to_onedata_user/{username} | Remove mapping of ACL user
[**lumaRemoveDefaultPosixCredentials**](LUMAApi.md#lumaRemoveDefaultPosixCredentials) | **DELETE** /provider/storages/{id}/luma/db/storage_access/posix_compatible/default_credentials/{space_id} | Remove default posix credentials
[**lumaRemoveDisplayCredentials**](LUMAApi.md#lumaRemoveDisplayCredentials) | **DELETE** /provider/storages/{id}/luma/db/display_credentials/all/default/{space_id} | Remove default display credentials
[**lumaRemoveOnedataUserToCredentialsMapping**](LUMAApi.md#lumaRemoveOnedataUserToCredentialsMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Remove Onedata user to credentials mapping
[**lumaRemoveUidToOnedataUserMapping**](LUMAApi.md#lumaRemoveUidToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_sync/posix_compatible/uid_to_onedata_user/{uid} | Remove mapping of UID


<a name="localFeedAddOnedataUserToCredentialsMapping"></a>
# **localFeedAddOnedataUserToCredentialsMapping**
> localFeedAddOnedataUserToCredentialsMapping(id, userMapping)

Insert Onedata user to credentials mapping into local feed

Adds mapping of Onedata user to user on the specific storage to local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage for which user mapping should be added. 

var userMapping = new Onepanel.LumaUserMapping(); // LumaUserMapping | New user mapping 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedAddOnedataUserToCredentialsMapping(id, userMapping, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage for which user mapping should be added.  | 
 **userMapping** | [**LumaUserMapping**](LumaUserMapping.md)| New user mapping  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="localFeedGetAclGroupToOnedataGroupMapping"></a>
# **localFeedGetAclGroupToOnedataGroupMapping**
> LumaOnedataGroup localFeedGetAclGroupToOnedataGroupMapping(id, groupname)

Lookup mapping of ACL group in local feed

Returns mapping of ACL group on the specific storage to Onedata group defined in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata group mapping should be returned. 

var groupname = 56; // Number | The ACL name of the group on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.localFeedGetAclGroupToOnedataGroupMapping(id, groupname, callback);
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

<a name="localFeedGetAclUserToOnedataUserMapping"></a>
# **localFeedGetAclUserToOnedataUserMapping**
> LumaOnedataUser localFeedGetAclUserToOnedataUserMapping(id, username)

Lookup mapping of ACL user in local feed

Returns mapping of ACL user on the specific storage to Onedata user defined in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be returned. 

var username = 56; // Number | The ACL name of the user on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.localFeedGetAclUserToOnedataUserMapping(id, username, callback);
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

<a name="localFeedGetDefaultPosixCredentials"></a>
# **localFeedGetDefaultPosixCredentials**
> PosixCompatibleCredentials localFeedGetDefaultPosixCredentials(id, spaceId)

Lookup default posix credentials in local feed

Returns default storage credentials for the space supported by POSIX-compatible storage that are defined in local feed. GID will be used as a component of storage credentials for each member of the space. Both UID and GID will be used as to represent owner of the space directory on storage. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default storage credentials should be returned. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default storage credentials should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.localFeedGetDefaultPosixCredentials(id, spaceId, callback);
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

<a name="localFeedGetDisplayCredentials"></a>
# **localFeedGetDisplayCredentials**
> PosixCompatibleCredentials localFeedGetDisplayCredentials(id, spaceId)

Lookup default display credentials in local feed

Returns default display credentials for the space support that are defined in local feed. These are POSIX credentials (UID &amp; GID) which are returned in getattr response. They are used to present file owners in the result of e.g. &#x60;ls&#x60; or &#x60;stat&#x60; operation in Oneclient or when fetching file attributes via REST API. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default display credentials should be returned. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default display credentials should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.localFeedGetDisplayCredentials(id, spaceId, callback);
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

<a name="localFeedGetOnedataUserToCredentialsMapping"></a>
# **localFeedGetOnedataUserToCredentialsMapping**
> LumaStorageUser localFeedGetOnedataUserToCredentialsMapping(id, onedataUserId)

Lookup Onedata user to credentials mapping in local feed

Returns mapping of the Onedata user to user on the specific storage defined in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage for which user mapping should be returned. 

var onedataUserId = "onedataUserId_example"; // String | The Id of a user for which mapping should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.localFeedGetOnedataUserToCredentialsMapping(id, onedataUserId, callback);
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

<a name="localFeedGetUidToOnedataUserMapping"></a>
# **localFeedGetUidToOnedataUserMapping**
> LumaOnedataUser localFeedGetUidToOnedataUserMapping(id, uid)

Lookup mapping of UID in local feed

Returns mapping of UID on the specific storage to Onedata user defined in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be returned. 

var uid = 56; // Number | The UID of the user on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.localFeedGetUidToOnedataUserMapping(id, uid, callback);
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

<a name="localFeedModifyOnedataUserToCredentialsMapping"></a>
# **localFeedModifyOnedataUserToCredentialsMapping**
> localFeedModifyOnedataUserToCredentialsMapping(id, onedataUserId, storageUser)

Update Onedata user to credentials mapping in local feed

Modifies mapping of the Onedata user to user on the specific storage in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage for which user mapping should be updated. 

var onedataUserId = "onedataUserId_example"; // String | The Id of a user for which mapping should be updated. 

var storageUser = new Onepanel.LumaStorageUser(); // LumaStorageUser | New user mapping 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedModifyOnedataUserToCredentialsMapping(id, onedataUserId, storageUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage for which user mapping should be updated.  | 
 **onedataUserId** | **String**| The Id of a user for which mapping should be updated.  | 
 **storageUser** | [**LumaStorageUser**](LumaStorageUser.md)| New user mapping  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="localFeedRemoveAclGroupToOnedataGroupMapping"></a>
# **localFeedRemoveAclGroupToOnedataGroupMapping**
> localFeedRemoveAclGroupToOnedataGroupMapping(id, groupname)

Remove mapping of ACL group from local feed

Removes mapping of ACL group on the specific storage to Onedata group from local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata group mapping should be removed. 

var groupname = 56; // Number | The ACL name of the group on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedRemoveAclGroupToOnedataGroupMapping(id, groupname, callback);
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

<a name="localFeedRemoveAclUserToOnedataUserMapping"></a>
# **localFeedRemoveAclUserToOnedataUserMapping**
> localFeedRemoveAclUserToOnedataUserMapping(id, username)

Remove mapping of ACL user from local feed

Removes mapping of ACL user on the specific storage to Onedata user from local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be removed. 

var username = 56; // Number | The ACL name of the user on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedRemoveAclUserToOnedataUserMapping(id, username, callback);
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

<a name="localFeedRemoveDefaultPosixCredentials"></a>
# **localFeedRemoveDefaultPosixCredentials**
> localFeedRemoveDefaultPosixCredentials(id, spaceId)

Remove default posix credentials from local feed

Removes default storage credentials for the space supported by POSIX-compatible storage from local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default storage credentials should be removed. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default storage credentials should be removed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedRemoveDefaultPosixCredentials(id, spaceId, callback);
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

<a name="localFeedRemoveDisplayCredentials"></a>
# **localFeedRemoveDisplayCredentials**
> localFeedRemoveDisplayCredentials(id, spaceId)

Remove default display credentials from local feed

Removes default display credentials for the space support from local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default display credentials should be removed. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default display credentials should be removed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedRemoveDisplayCredentials(id, spaceId, callback);
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

<a name="localFeedRemoveOnedataUserToCredentialsMapping"></a>
# **localFeedRemoveOnedataUserToCredentialsMapping**
> localFeedRemoveOnedataUserToCredentialsMapping(id, onedataUserId)

Remove Onedata user to credentials mapping from local feed

Removes mapping of the Onedata user to user on the specific storage local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage for which user mapping should be removed. 

var onedataUserId = "onedataUserId_example"; // String | The Id of a user for which mapping should be removed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedRemoveOnedataUserToCredentialsMapping(id, onedataUserId, callback);
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

<a name="localFeedRemoveUidToOnedataUserMapping"></a>
# **localFeedRemoveUidToOnedataUserMapping**
> localFeedRemoveUidToOnedataUserMapping(id, uid)

Remove mapping of UID from local feed

Removes mapping of UID on the specific storage to Onedata user from local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be removed. 

var uid = 56; // Number | The UID of the user on the storage. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedRemoveUidToOnedataUserMapping(id, uid, callback);
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

<a name="localFeedSetAclGroupToOnedataGroupMapping"></a>
# **localFeedSetAclGroupToOnedataGroupMapping**
> localFeedSetAclGroupToOnedataGroupMapping(id, groupname, lumaOnedataGroup)

Insert mapping of ACL group into local feed

Sets mapping of ACL group on the specific storage to Onedata group in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata group mapping should be set. 

var groupname = 56; // Number | The ACL name of the group on the storage. 

var lumaOnedataGroup = new Onepanel.LumaOnedataGroup(); // LumaOnedataGroup | Credentials identifying group in the Onedata system.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedSetAclGroupToOnedataGroupMapping(id, groupname, lumaOnedataGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which onedata group mapping should be set.  | 
 **groupname** | **Number**| The ACL name of the group on the storage.  | 
 **lumaOnedataGroup** | [**LumaOnedataGroup**](LumaOnedataGroup.md)| Credentials identifying group in the Onedata system. | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="localFeedSetAclUserToOnedataUserMapping"></a>
# **localFeedSetAclUserToOnedataUserMapping**
> localFeedSetAclUserToOnedataUserMapping(id, username, lumaOnedataUser)

Insert mapping of ACL user into local feed

Sets mapping of ACL user on the specific storage to Onedata user in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for for which onedata user mapping should be set. 

var username = 56; // Number | The ACL name of the user on the storage. 

var lumaOnedataUser = new Onepanel.LumaOnedataUser(); // LumaOnedataUser | Credentials identifying user in the Onedata system.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedSetAclUserToOnedataUserMapping(id, username, lumaOnedataUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for for which onedata user mapping should be set.  | 
 **username** | **Number**| The ACL name of the user on the storage.  | 
 **lumaOnedataUser** | [**LumaOnedataUser**](LumaOnedataUser.md)| Credentials identifying user in the Onedata system. | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="localFeedSetDefaultPosixCredentials"></a>
# **localFeedSetDefaultPosixCredentials**
> localFeedSetDefaultPosixCredentials(id, spaceId, posixCredentials)

Insert default posix credentials into local feed

Sets default storage credentials for the space supported by POSIX-compatible storage in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default storage credentials should be set. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default storage credentials should be set. 

var posixCredentials = new Onepanel.PosixCompatibleCredentials(); // PosixCompatibleCredentials | New default storage credentials for the space support. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedSetDefaultPosixCredentials(id, spaceId, posixCredentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which default storage credentials should be set.  | 
 **spaceId** | **String**| The Id of a space constituting space support for which default storage credentials should be set.  | 
 **posixCredentials** | [**PosixCompatibleCredentials**](PosixCompatibleCredentials.md)| New default storage credentials for the space support.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="localFeedSetDisplayCredentials"></a>
# **localFeedSetDisplayCredentials**
> localFeedSetDisplayCredentials(id, spaceId, displayCredentials)

Insert default display credentials into local feed

Sets default display credentials for the space support in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which default display credentials should be set. 

var spaceId = "spaceId_example"; // String | The Id of a space constituting space support for which default display credentials should be set. 

var displayCredentials = new Onepanel.PosixCompatibleCredentials(); // PosixCompatibleCredentials | New default display credentials for the space support. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedSetDisplayCredentials(id, spaceId, displayCredentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which default display credentials should be set.  | 
 **spaceId** | **String**| The Id of a space constituting space support for which default display credentials should be set.  | 
 **displayCredentials** | [**PosixCompatibleCredentials**](PosixCompatibleCredentials.md)| New default display credentials for the space support.  | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="localFeedSetUidToOnedataUserMapping"></a>
# **localFeedSetUidToOnedataUserMapping**
> localFeedSetUidToOnedataUserMapping(id, uid, lumaOnedataUser)

Insert mapping of UID into local feed

Sets mapping of UID on the specific storage to Onedata user in local feed. Returns an error if the storage has a different LUMA feed than &#x60;local&#x60;. 

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

var apiInstance = new Onepanel.LUMAApi();

var id = "id_example"; // String | The Id of a storage constituting space support for which onedata user mapping should be set. 

var uid = 56; // Number | The UID of the user on the storage. 

var lumaOnedataUser = new Onepanel.LumaOnedataUser(); // LumaOnedataUser | Credentials identifying user in the Onedata system.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.localFeedSetUidToOnedataUserMapping(id, uid, lumaOnedataUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of a storage constituting space support for which onedata user mapping should be set.  | 
 **uid** | **Number**| The UID of the user on the storage.  | 
 **lumaOnedataUser** | [**LumaOnedataUser**](LumaOnedataUser.md)| Credentials identifying user in the Onedata system. | 

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

var apiInstance = new Onepanel.LUMAApi();

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

Returns mapping of ACL user on the specific storage to Onedata user stored in LUMA DB. 

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

var apiInstance = new Onepanel.LUMAApi();

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

var apiInstance = new Onepanel.LUMAApi();

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

var apiInstance = new Onepanel.LUMAApi();

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

var apiInstance = new Onepanel.LUMAApi();

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

Returns mapping of UID on the specific storage to Onedata user stored in LUMA DB. 

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

var apiInstance = new Onepanel.LUMAApi();

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

Removes mapping of ACL group on the specific storage to Onedata group from LUMA DB. 

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

var apiInstance = new Onepanel.LUMAApi();

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

var apiInstance = new Onepanel.LUMAApi();

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

Removes default storage credentials for the space supported by POSIX-compatible storage from LUMA DB. 

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

var apiInstance = new Onepanel.LUMAApi();

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

Removes default display credentials for the space support from LUMA DB. 

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

var apiInstance = new Onepanel.LUMAApi();

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

Removes mapping of the Onedata user to user on the specific storage from LUMA DB. 

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

var apiInstance = new Onepanel.LUMAApi();

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

var apiInstance = new Onepanel.LUMAApi();

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

