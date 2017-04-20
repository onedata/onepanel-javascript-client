# Onepanel.OnepanelApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](OnepanelApi.md#addUser) | **POST** /users | Create Onepanel user
[**createCluster**](OnepanelApi.md#createCluster) | **POST** /hosts | Create or join cluster
[**createSession**](OnepanelApi.md#createSession) | **POST** /session | Create Onepanel user session
[**getClusterCookie**](OnepanelApi.md#getClusterCookie) | **GET** /cookie | Get cluster cookie
[**getClusterHosts**](OnepanelApi.md#getClusterHosts) | **GET** /hosts | Get cluster or discovered hosts
[**getSession**](OnepanelApi.md#getSession) | **GET** /session | Get Onepanel user session
[**getTaskStatus**](OnepanelApi.md#getTaskStatus) | **GET** /tasks/{id} | Get background task result
[**getUser**](OnepanelApi.md#getUser) | **GET** /users/{username} | Get Onepanel user details
[**modifyUser**](OnepanelApi.md#modifyUser) | **PATCH** /users/{username} | Modify Onepanel user details
[**removeClusterHost**](OnepanelApi.md#removeClusterHost) | **DELETE** /hosts/{host} | Remove host from cluster
[**removeSession**](OnepanelApi.md#removeSession) | **DELETE** /session | Remove Onepanel user session
[**removeUser**](OnepanelApi.md#removeUser) | **DELETE** /users/{username} | Remove Onepanel user


<a name="addUser"></a>
# **addUser**
> addUser(userCreateRequest)

Create Onepanel user

Creates a new Onepanel user account.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var userCreateRequest = new Onepanel.UserCreateRequest(); // UserCreateRequest | The user configuration details.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUser(userCreateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateRequest** | [**UserCreateRequest**](UserCreateRequest.md)| The user configuration details. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createCluster"></a>
# **createCluster**
> createCluster(opts)

Create or join cluster

Initializes administrative cluster or if &#x60;clusterHost&#x60; parameter has been  provided in the query string adds this host to an existing cluster. In both cases the host handling this request has to be newly started or  removed from previous cluster. It cannot contain any configuration data. This request can be executed by unauthorized users as long as there are no  admin users. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var opts = { 
  'clusterHost': "clusterHost_example", // String | Hostname of an existing cluster node.
  'cookie': new Onepanel.Cookie() // Cookie | The cookie used for cluster authentication.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createCluster(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterHost** | **String**| Hostname of an existing cluster node. | [optional] 
 **cookie** | [**Cookie**](Cookie.md)| The cookie used for cluster authentication. | [optional] 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createSession"></a>
# **createSession**
> SessionDetails createSession()

Create Onepanel user session

Creates a new Onepanel user session.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSession(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SessionDetails**](SessionDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getClusterCookie"></a>
# **getClusterCookie**
> &#39;String&#39; getClusterCookie()

Get cluster cookie

Returns cookie of a cluster this host belongs to. The cookie is a character sequence that is common for all the cluster nodes. The cookies are used for authentication between distributed Erlang Onedata processes. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClusterCookie(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getClusterHosts"></a>
# **getClusterHosts**
> [&#39;String&#39;] getClusterHosts(opts)

Get cluster or discovered hosts

Returns the list of administrative cluster hosts. It is also possible to return the list of hosts that have been discovered using multicast  advertisment. In order to retrieve discovered hosts set the &#x60;discovered&#x60; query string to &#x60;true&#x60;. This request can be executed by unauthorized users only if there  are no admin users in the system. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var opts = { 
  'discovered': false // Boolean | Defines whether to return cluster or discovered hosts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClusterHosts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discovered** | **Boolean**| Defines whether to return cluster or discovered hosts. | [optional] [default to false]

### Return type

**[&#39;String&#39;]**

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSession"></a>
# **getSession**
> SessionDetails getSession()

Get Onepanel user session

Returns details of a Onepanel user session associated with the request. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSession(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SessionDetails**](SessionDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTaskStatus"></a>
# **getTaskStatus**
> TaskStatus getTaskStatus(id)

Get background task result

Returns result of an asynchronous operation, e.g. database service configuration. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var id = "id_example"; // String | The requested task Id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskStatus(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested task Id. | 

### Return type

[**TaskStatus**](TaskStatus.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> UserDetails getUser(username)

Get Onepanel user details

Returns the configuration information of the Onepanel user. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var username = "username_example"; // String | The name of the user whose details should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name of the user whose details should be returned. | 

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyUser"></a>
# **modifyUser**
> modifyUser(username, userModifyRequest)

Modify Onepanel user details

Modifies the Onepanel user password. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

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
apiInstance.modifyUser(username, userModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name. | 
 **userModifyRequest** | [**UserModifyRequest**](UserModifyRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="removeClusterHost"></a>
# **removeClusterHost**
> removeClusterHost(host)

Remove host from cluster

Removes a node from the administrative cluster. This operation removes all user and configuration data from the host. It also removes the host from each service cluster it belonged to. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var host = "host_example"; // String | Hostname of a node to be removed from the cluster.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeClusterHost(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| Hostname of a node to be removed from the cluster. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeSession"></a>
# **removeSession**
> removeSession()

Remove Onepanel user session

Removes the Onepanel user session. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeSession(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeUser"></a>
# **removeUser**
> removeUser(username)

Remove Onepanel user

Removes the Onepanel user account. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var username = "username_example"; // String | The name of the user to be removed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeUser(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name of the user to be removed. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

