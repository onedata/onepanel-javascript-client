# Onepanel.OnepanelApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addClusterHost**](OnepanelApi.md#addClusterHost) | **POST** /hosts | Adds given host to the cluster
[**checkDns**](OnepanelApi.md#checkDns) | **GET** /dns_check | Check correctness of DNS entries for the cluster&#39;s domain.
[**createUserInviteToken**](OnepanelApi.md#createUserInviteToken) | **POST** /cluster/invite_user_token | Generate cluster invitation token for a user
[**getCluster**](OnepanelApi.md#getCluster) | **GET** /user/clusters/{id} | Get details of a user&#39;s cluster
[**getClusterCookie**](OnepanelApi.md#getClusterCookie) | **GET** /cookie | Get cluster cookie
[**getClusterHosts**](OnepanelApi.md#getClusterHosts) | **GET** /hosts | Get cluster hosts
[**getClusterMembersSummary**](OnepanelApi.md#getClusterMembersSummary) | **GET** /cluster/members_summary | Get summary of members in this cluster
[**getClusters**](OnepanelApi.md#getClusters) | **GET** /user/clusters | List user&#39;s clusters
[**getConfiguration**](OnepanelApi.md#getConfiguration) | **GET** /configuration | Get public configuration
[**getCurrentCluster**](OnepanelApi.md#getCurrentCluster) | **GET** /cluster | Get details of this cluster
[**getCurrentUser**](OnepanelApi.md#getCurrentUser) | **GET** /user | Get Onepanel user details of currently logged in user.
[**getDnsCheckConfiguration**](OnepanelApi.md#getDnsCheckConfiguration) | **GET** /dns_check/configuration | Return settings used when performing the DNS check.
[**getEmergencyPassphraseStatus**](OnepanelApi.md#getEmergencyPassphraseStatus) | **GET** /passphrase | Get emergency passphrase status
[**getNode**](OnepanelApi.md#getNode) | **GET** /node | Get information about current onepanel node.
[**getProgress**](OnepanelApi.md#getProgress) | **GET** /progress | Get deployment progress
[**getRemoteProvider**](OnepanelApi.md#getRemoteProvider) | **GET** /providers/{id} | Get details of a remote Oneprovider.
[**getTaskStatus**](OnepanelApi.md#getTaskStatus) | **GET** /tasks/{id} | Get background task result
[**getWebCert**](OnepanelApi.md#getWebCert) | **GET** /web_cert | Get information about SSL certificates configuration and status.
[**joinCluster**](OnepanelApi.md#joinCluster) | **POST** /join_cluster | Join existing cluster
[**modifyDnsCheckConfiguration**](OnepanelApi.md#modifyDnsCheckConfiguration) | **PATCH** /dns_check/configuration | Configure dns check
[**modifyProgress**](OnepanelApi.md#modifyProgress) | **PATCH** /progress | Modify progress markers
[**modifyWebCert**](OnepanelApi.md#modifyWebCert) | **PATCH** /web_cert | Modify SSL certificate configuration
[**removeClusterHost**](OnepanelApi.md#removeClusterHost) | **DELETE** /hosts/{host} | Remove host from cluster
[**setEmergencyPassphrase**](OnepanelApi.md#setEmergencyPassphrase) | **PUT** /passphrase | Set emergency passphrase


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
  'forceCheck': false // Boolean | If true the DNS check cache is overridden and check is performed during handling of the request.
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
 **forceCheck** | **Boolean**| If true the DNS check cache is overridden and check is performed during handling of the request. | [optional] [default to false]

### Return type

[**DnsCheck**](DnsCheck.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createUserInviteToken"></a>
# **createUserInviteToken**
> Token createUserInviteToken()

Generate cluster invitation token for a user

Returns a token which can be used to add a Onezone user as a member of this cluster. 

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
apiInstance.createUserInviteToken(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Token**](Token.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getCluster"></a>
# **getCluster**
> ClusterDetails getCluster(id)

Get details of a user&#39;s cluster

Returns details of the specified cluster. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var id = "id_example"; // String | Cluster Id which details should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCluster(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cluster Id which details should be returned. | 

### Return type

[**ClusterDetails**](ClusterDetails.md)

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

<a name="getClusterMembersSummary"></a>
# **getClusterMembersSummary**
> ClusterMembersSummary getClusterMembersSummary()

Get summary of members in this cluster

Returns aggregated counts of users and groups belonging to this cluster. 

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
apiInstance.getClusterMembersSummary(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ClusterMembersSummary**](ClusterMembersSummary.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getClusters"></a>
# **getClusters**
> Ids getClusters()

List user&#39;s clusters

Lists clusters to which current user belongs. 

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

[**Ids**](Ids.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getConfiguration"></a>
# **getConfiguration**
> Configuration getConfiguration()

Get public configuration

Returns public configuration details.

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
apiInstance.getConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Configuration**](Configuration.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentCluster"></a>
# **getCurrentCluster**
> ClusterDetails getCurrentCluster()

Get details of this cluster

Returns details of this cluster. 

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
apiInstance.getCurrentCluster(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ClusterDetails**](ClusterDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

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

<a name="getEmergencyPassphraseStatus"></a>
# **getEmergencyPassphraseStatus**
> EmergencyPassphraseStatus getEmergencyPassphraseStatus()

Get emergency passphrase status

Returns information whether emergency passphrase is set.

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
apiInstance.getEmergencyPassphraseStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EmergencyPassphraseStatus**](EmergencyPassphraseStatus.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

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

<a name="getProgress"></a>
# **getProgress**
> Progress getProgress()

Get deployment progress

Returns deployment markers state.

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
apiInstance.getProgress(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Progress**](Progress.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRemoteProvider"></a>
# **getRemoteProvider**
> RemoteProviderDetails getRemoteProvider(id)

Get details of a remote Oneprovider.

Returns the details of given provider. Only users belonging to that Oneprovider&#39;s cluster can fetch its details. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var id = "id_example"; // String | Id of requested Oneprovider.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRemoteProvider(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of requested Oneprovider. | 

### Return type

[**RemoteProviderDetails**](RemoteProviderDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

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

<a name="modifyProgress"></a>
# **modifyProgress**
> modifyProgress(progressModify)

Modify progress markers

Sets or unsets markers for completed deployment stages.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

var progressModify = new Onepanel.ProgressModify(); // ProgressModify | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyProgress(progressModify, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **progressModify** | [**ProgressModify**](ProgressModify.md)|  | 

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

<a name="setEmergencyPassphrase"></a>
# **setEmergencyPassphrase**
> setEmergencyPassphrase(emergencyPassphrase)

Set emergency passphrase

Sets passphrase which can be used to access the Onepanel REST API and emergency Onepanel GUI.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OnepanelApi();

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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

