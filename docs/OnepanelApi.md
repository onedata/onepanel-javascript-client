# Onepanel.OnepanelApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteHostsHost**](OnepanelApi.md#deleteHostsHost) | **DELETE** /hosts/{host} | Remove cluster node
[**deleteUsersUsername**](OnepanelApi.md#deleteUsersUsername) | **DELETE** /users/{username} | Remove user
[**getCookie**](OnepanelApi.md#getCookie) | **GET** /cookie | Get cluster cookie
[**getHosts**](OnepanelApi.md#getHosts) | **GET** /hosts | Get cluster/discovered hosts
[**getTasksId**](OnepanelApi.md#getTasksId) | **GET** /tasks/{id} | Get task result
[**getUsersUsername**](OnepanelApi.md#getUsersUsername) | **GET** /users/{username} | Get user details
[**patchUsersUsername**](OnepanelApi.md#patchUsersUsername) | **PATCH** /users/{username} | Modify user details
[**postHosts**](OnepanelApi.md#postHosts) | **POST** /hosts | Create or join cluster
[**postUsers**](OnepanelApi.md#postUsers) | **POST** /users | Create user


<a name="deleteHostsHost"></a>
# **deleteHostsHost**
> deleteHostsHost(host)

Remove cluster node

Removes a node from the administrative cluster. This operation removes all user and configuration data from the host. It also removes the host from each service cluster it belonged to. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var host = "host_example"; // String | Hostname of a node to be removed from the cluster.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteHostsHost(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| Hostname of a node to be removed from the cluster. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteUsersUsername"></a>
# **deleteUsersUsername**
> deleteUsersUsername(username)

Remove user

Removes the Onepanel user account.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var username = "username_example"; // String | The name of the user to be removed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsersUsername(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name of the user to be removed. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCookie"></a>
# **getCookie**
> &#39;String&#39; getCookie()

Get cluster cookie

Returns cookie of a cluster this host belongs to. The cookie is a character sequence that is common for all the cluster nodes. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCookie(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getHosts"></a>
# **getHosts**
> [&#39;String&#39;] getHosts(opts)

Get cluster/discovered hosts

Returns the list of administrative cluster hosts. It is also possible to return the list of hosts that have been discovered using multicast  advertisment.  In order to retrive discovered hosts set the &#x60;discovered&#x60; query string to &#x60;true&#x60;. This request can be executed unauthorized as long as there are no admin users. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var opts = { 
  'discovered': false // Boolean | Defines whether return cluster or discovered hosts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHosts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discovered** | **Boolean**| Defines whether return cluster or discovered hosts. | [optional] [default to false]

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTasksId"></a>
# **getTasksId**
> TaskStatus getTasksId(id)

Get task result

Returns result of an asynchronous operation, e.g. database service configuration. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var id = "id_example"; // String | The task ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTasksId(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The task ID. | 

### Return type

[**TaskStatus**](TaskStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsersUsername"></a>
# **getUsersUsername**
> UserDetails getUsersUsername(username)

Get user details

Returns the configuration information of the Onepanel user.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var username = "username_example"; // String | The name of a user whose details should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersUsername(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name of a user whose details should be returned. | 

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchUsersUsername"></a>
# **patchUsersUsername**
> patchUsersUsername(username, userModifyRequest)

Modify user details

Modifies the Onepanel user password.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var username = "username_example"; // String | The user name.

var userModifyRequest = new Onepanel.UserModifyRequest(); // UserModifyRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.patchUsersUsername(username, userModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name. | 
 **userModifyRequest** | [**UserModifyRequest**](UserModifyRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postHosts"></a>
# **postHosts**
> postHosts(opts)

Create or join cluster

Initializes administrative cluster or if &#x60;clusterHost&#x60; parameter has been provided in the query string adds this host to an existing cluster.  In both cases the host handling this request has to be newly started or removed from previous cluster. It cannot contain any configuration data.  This request can be executed unauthorized as long as there are no admin users. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var opts = { 
  'clusterHost': "clusterHost_example", // String | Hostname of an existing cluster node.
  'cookie': new Onepanel.Cookie() // Cookie | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postHosts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterHost** | **String**| Hostname of an existing cluster node. | [optional] 
 **cookie** | [**Cookie**](Cookie.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postUsers"></a>
# **postUsers**
> postUsers(userCreateRequest)

Create user

Creates a Onepanel user account.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnepanelApi();

var userCreateRequest = new Onepanel.UserCreateRequest(); // UserCreateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postUsers(userCreateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateRequest** | [**UserCreateRequest**](UserCreateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

