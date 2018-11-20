# Onepanel.OnepanelApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addClusterHost**](OnepanelApi.md#addClusterHost) | **POST** /hosts | Adds given host to the cluster
[**addUser**](OnepanelApi.md#addUser) | **POST** /users | Create Onepanel user
[**checkDns**](OnepanelApi.md#checkDns) | **GET** /dns_check | Check correctness of DNS entries for the cluster&#39;s domain.
[**createSession**](OnepanelApi.md#createSession) | **POST** /session | Create Onepanel user session
[**getClusterCookie**](OnepanelApi.md#getClusterCookie) | **GET** /cookie | Get cluster cookie
[**getClusterHosts**](OnepanelApi.md#getClusterHosts) | **GET** /hosts | Get cluster hosts
[**getClusterUser**](OnepanelApi.md#getClusterUser) | **GET** /user/clusters/{id}/users/{userId} | Get info about Onezone user linked to cluster
[**getClusterUsers**](OnepanelApi.md#getClusterUsers) | **GET** /user/clusters/{id}/users | List Onezone users linked to a cluster
[**getClusters**](OnepanelApi.md#getClusters) | **GET** /user/clusters | List user&#39;s clusters
[**getClusters_0**](OnepanelApi.md#getClusters_0) | **GET** /user/clusters/{id} | Get details of a user&#39;s cluster
[**getCurrentUser**](OnepanelApi.md#getCurrentUser) | **GET** /user | Get Onepanel user details of currently logged in user.
[**getDnsCheckConfiguration**](OnepanelApi.md#getDnsCheckConfiguration) | **GET** /dns_check/configuration | Return settings used when performing the DNS check.
[**getNode**](OnepanelApi.md#getNode) | **GET** /node | Get information about current onepanel node.
[**getOnezoneLogin**](OnepanelApi.md#getOnezoneLogin) | **GET** /onezone_login | Get information needed for logging in via Onezone.
[**getSession**](OnepanelApi.md#getSession) | **GET** /session | Get Onepanel user session
[**getTaskStatus**](OnepanelApi.md#getTaskStatus) | **GET** /tasks/{id} | Get background task result
[**getUser**](OnepanelApi.md#getUser) | **GET** /users/{username} | Get Onepanel user details
[**getUserLink**](OnepanelApi.md#getUserLink) | **GET** /user/link | Get details of Onezone account linked to current user.
[**getUsers**](OnepanelApi.md#getUsers) | **GET** /users | List onepanel users
[**getWebCert**](OnepanelApi.md#getWebCert) | **GET** /web_cert | Get information about SSL certificates configuration and status.
[**joinCluster**](OnepanelApi.md#joinCluster) | **POST** /join_cluster | Join existing cluster
[**modifyCurrentUser**](OnepanelApi.md#modifyCurrentUser) | **PATCH** /user | Modify Onepanel user details of currently logged in user.
[**modifyDnsCheckConfiguration**](OnepanelApi.md#modifyDnsCheckConfiguration) | **PATCH** /dns_check/configuration | Configure dns check
[**modifyUser**](OnepanelApi.md#modifyUser) | **PATCH** /users/{username} | Modify Onepanel user details
[**modifyWebCert**](OnepanelApi.md#modifyWebCert) | **PATCH** /web_cert | Modify SSL certificate configuration
[**removeClusterHost**](OnepanelApi.md#removeClusterHost) | **DELETE** /hosts/{host} | Remove host from cluster
[**removeCurrentUser**](OnepanelApi.md#removeCurrentUser) | **DELETE** /user | Remove the currently logged in Onepanel user
[**removeSession**](OnepanelApi.md#removeSession) | **DELETE** /session | Remove Onepanel user session
[**removeUser**](OnepanelApi.md#removeUser) | **DELETE** /users/{username} | Remove Onepanel user
[**removeUserLink**](OnepanelApi.md#removeUserLink) | **DELETE** /user/link | Detach Onepanel user from the linked Onezone account.


<a name="addClusterHost"></a>
# **addClusterHost**
> Host addClusterHost(hostAddRequest)

Adds given host to the cluster

Adds given host to the current cluster. The host can be specified by any address by which it is reachable. Upon success returns proper hostname used to address the new host in cluster management. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var hostAddRequest = new Onepanel.HostAddRequest(); // HostAddRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addClusterHost(hostAddRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostAddRequest** | [**HostAddRequest**](HostAddRequest.md)|  | 

### Return type

[**Host**](Host.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addUser"></a>
# **addUser**
> addUser(userCreateRequest)

Create Onepanel user

Creates a new Onepanel user account.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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

<a name="checkDns"></a>
# **checkDns**
> DnsCheck checkDns(opts)

Check correctness of DNS entries for the cluster&#39;s domain.

Returns results of the last DNS check, verifying validity of DNS configuration for cluster&#39;s domain. Unless &#39;forceCheck&#39; flag is set, the results may be cached. If the cluster is configured with an IP instead of a domain no results are returned. Settings used for the check, ie. DNS servers used can be modified using the dns_check/configuration endpoint. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var opts = { 
  'forceCheck': false // Boolean | If true the DNS check cache is overriden and check is performed during handling of the request.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkDns(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forceCheck** | **Boolean**| If true the DNS check cache is overriden and check is performed during handling of the request. | [optional] [default to false]

### Return type

[**DnsCheck**](DnsCheck.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createSession"></a>
# **createSession**
> SessionDetails createSession()

Create Onepanel user session

Creates a new Onepanel user session.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
var defaultClient = Onepanel.ApiClient.instance;

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
> [&#39;String&#39;] getClusterHosts()

Get cluster hosts

Returns the list of administrative cluster hosts. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.getClusterHosts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getClusterUser"></a>
# **getClusterUser**
> OnezoneUser getClusterUser(id, userId)

Get info about Onezone user linked to cluster

@fixme

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var id = "id_example"; // String | Cluster id which users should be returned.

var userId = "userId_example"; // String | Id of the user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClusterUser(id, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cluster id which users should be returned. | 
 **userId** | **String**| Id of the user. | 

### Return type

[**OnezoneUser**](OnezoneUser.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getClusterUsers"></a>
# **getClusterUsers**
> Ids getClusterUsers(id)

List Onezone users linked to a cluster

@fixme

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var id = "id_example"; // String | Cluster id which users should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClusterUsers(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cluster id which users should be returned. | 

### Return type

[**Ids**](Ids.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getClusters"></a>
# **getClusters**
> Clusters getClusters()

List user&#39;s clusters

Lists clusters linked with current user&#39;s account. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.getClusters(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Clusters**](Clusters.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getClusters_0"></a>
# **getClusters_0**
> ClusterDetails getClusters_0(id)

Get details of a user&#39;s cluster

Lists clusters linked with current user&#39;s account. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var id = "id_example"; // String | Cluster id which details should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClusters_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cluster id which details should be returned. | 

### Return type

[**ClusterDetails**](ClusterDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getCurrentUser"></a>
# **getCurrentUser**
> UserDetails getCurrentUser()

Get Onepanel user details of currently logged in user.

Returns the configuration information of the Onepanel user performing the query. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.getCurrentUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDnsCheckConfiguration"></a>
# **getDnsCheckConfiguration**
> DnsCheckConfiguration getDnsCheckConfiguration()

Return settings used when performing the DNS check.

Returns servers queried to check DNS configuration correctness. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.getDnsCheckConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DnsCheckConfiguration**](DnsCheckConfiguration.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNode"></a>
# **getNode**
> Node getNode()

Get information about current onepanel node.

Returns information about current onepanel node. This request can be executed by unauthorized users only if there are no admin users in the system. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.getNode(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Node**](Node.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnezoneLogin"></a>
# **getOnezoneLogin**
> OnezoneRedirect getOnezoneLogin(opts)

Get information needed for logging in via Onezone.

Returns URL used to redirect user to Onezone connection page. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var opts = { 
  'action': "login" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnezoneLogin(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **String**|  | [optional] [default to login]

### Return type

[**OnezoneRedirect**](OnezoneRedirect.md)

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
var defaultClient = Onepanel.ApiClient.instance;

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
var defaultClient = Onepanel.ApiClient.instance;

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
var defaultClient = Onepanel.ApiClient.instance;

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

<a name="getUserLink"></a>
# **getUserLink**
> OnezoneUser getUserLink()

Get details of Onezone account linked to current user.

Returns details of Onezone user account linked to the currently logged in user. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.getUserLink(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OnezoneUser**](OnezoneUser.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> Users getUsers(opts)

List onepanel users

Lists all usernames. This request can be executed by unauthorized users only if there are no admin users in the system. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var opts = { 
  'role': "role_example" // String | If present, query returns only users with specified role.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | **String**| If present, query returns only users with specified role. | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getWebCert"></a>
# **getWebCert**
> WebCert getWebCert()

Get information about SSL certificates configuration and status.

Returns information about SSL certificate status and renewal configuration. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.getWebCert(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WebCert**](WebCert.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="joinCluster"></a>
# **joinCluster**
> joinCluster(joinClusterRequest)

Join existing cluster

Adds this host to adminstrative cluster. The host handling this request has to be newly started or removed from previous cluster. It cannot contain any configured user accounts or other configuration data. Therefore this request does not need authorization. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var joinClusterRequest = new Onepanel.JoinClusterRequest(); // JoinClusterRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.joinCluster(joinClusterRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **joinClusterRequest** | [**JoinClusterRequest**](JoinClusterRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="modifyCurrentUser"></a>
# **modifyCurrentUser**
> modifyCurrentUser(userModifyRequest)

Modify Onepanel user details of currently logged in user.

Modifies the Onepanel user password. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var userModifyRequest = new Onepanel.UserModifyRequest(); // UserModifyRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyCurrentUser(userModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userModifyRequest** | [**UserModifyRequest**](UserModifyRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="modifyDnsCheckConfiguration"></a>
# **modifyDnsCheckConfiguration**
> modifyDnsCheckConfiguration(dnsCheckConfiguration)

Configure dns check

Informs what DNS servers to use for checking external DNS records validity. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var dnsCheckConfiguration = new Onepanel.DnsCheckConfiguration(); // DnsCheckConfiguration | The configuration changes.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyDnsCheckConfiguration(dnsCheckConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dnsCheckConfiguration** | [**DnsCheckConfiguration**](DnsCheckConfiguration.md)| The configuration changes. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
 - **Accept**: Not defined

<a name="modifyUser"></a>
# **modifyUser**
> modifyUser(username, userModifyRequest)

Modify Onepanel user details

Modifies the Onepanel user password. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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

<a name="modifyWebCert"></a>
# **modifyWebCert**
> modifyWebCert(webCertModifyRequest)

Modify SSL certificate configuration

Modifies configuration regarding certificate management. Allows enabling or disabling certificate autorenewal using Let&#39;s Encrypt service. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var webCertModifyRequest = new Onepanel.WebCertModifyRequest(); // WebCertModifyRequest | New values for certificate management configuration. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyWebCert(webCertModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webCertModifyRequest** | [**WebCertModifyRequest**](WebCertModifyRequest.md)| New values for certificate management configuration.  | 

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

Removes a node from the administrative cluster. This operation removes all user and configuration data from the host. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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

<a name="removeCurrentUser"></a>
# **removeCurrentUser**
> removeCurrentUser()

Remove the currently logged in Onepanel user

Removes the Onepanel user account. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.removeCurrentUser(callback);
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

<a name="removeSession"></a>
# **removeSession**
> removeSession()

Remove Onepanel user session

Removes the Onepanel user session. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
var defaultClient = Onepanel.ApiClient.instance;

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

<a name="removeUserLink"></a>
# **removeUserLink**
> removeUserLink()

Detach Onepanel user from the linked Onezone account.

Removes link between Onepanel user and a Onezone account. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

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
apiInstance.removeUserLink(callback);
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

