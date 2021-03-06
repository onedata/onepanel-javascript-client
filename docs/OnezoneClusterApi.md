# Onepanel.OnezoneClusterApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addZoneDatabases**](OnezoneClusterApi.md#addZoneDatabases) | **POST** /zone/databases | Add zone databases
[**addZoneManagers**](OnezoneClusterApi.md#addZoneManagers) | **POST** /zone/managers | Add zone cluster managers
[**addZoneWorkers**](OnezoneClusterApi.md#addZoneWorkers) | **POST** /zone/workers | Add zone cluster workers
[**configureZone**](OnezoneClusterApi.md#configureZone) | **POST** /zone/configuration | Configure zone deployment
[**getZoneClusterIps**](OnezoneClusterApi.md#getZoneClusterIps) | **GET** /zone/cluster_ips | Get zone cluster nodes IPs
[**getZoneConfiguration**](OnezoneClusterApi.md#getZoneConfiguration) | **GET** /zone/configuration | Get zone cluster configuration
[**getZoneDatabaseStatus**](OnezoneClusterApi.md#getZoneDatabaseStatus) | **GET** /zone/databases/{host} | Get zone database status
[**getZoneDatabasesStatus**](OnezoneClusterApi.md#getZoneDatabasesStatus) | **GET** /zone/databases | Get zone databases status
[**getZoneManagerStatus**](OnezoneClusterApi.md#getZoneManagerStatus) | **GET** /zone/managers/{host} | Get zone cluster manager status
[**getZoneManagersStatus**](OnezoneClusterApi.md#getZoneManagersStatus) | **GET** /zone/managers | Get zone cluster managers status
[**getZoneNagiosReport**](OnezoneClusterApi.md#getZoneNagiosReport) | **GET** /zone/nagios | Get zone nagios report
[**getZoneWorkerStatus**](OnezoneClusterApi.md#getZoneWorkerStatus) | **GET** /zone/workers/{host} | Get zone cluster worker status
[**getZoneWorkersStatus**](OnezoneClusterApi.md#getZoneWorkersStatus) | **GET** /zone/workers | Get zone cluster workers status
[**modifyZoneClusterIps**](OnezoneClusterApi.md#modifyZoneClusterIps) | **PATCH** /zone/cluster_ips | Set external IPs of nodes in application config
[**startStopZoneDatabases**](OnezoneClusterApi.md#startStopZoneDatabases) | **PATCH** /zone/databases | Start/stop zone databases
[**startStopZoneDatabasesHost**](OnezoneClusterApi.md#startStopZoneDatabasesHost) | **PATCH** /zone/databases/{host} | Start/stop zone database
[**startStopZoneManager**](OnezoneClusterApi.md#startStopZoneManager) | **PATCH** /zone/managers/{host} | Start/stop zone cluster manager
[**startStopZoneManagers**](OnezoneClusterApi.md#startStopZoneManagers) | **PATCH** /zone/managers | Start/stop zone cluster managers
[**startStopZoneWorker**](OnezoneClusterApi.md#startStopZoneWorker) | **PATCH** /zone/workers/{host} | Start/stop zone cluster worker
[**startStopZoneWorkers**](OnezoneClusterApi.md#startStopZoneWorkers) | **PATCH** /zone/workers | Start/stop zone cluster workers


<a name="addZoneDatabases"></a>
# **addZoneDatabases**
> TaskId addZoneDatabases(serviceHosts)

Add zone databases

Deploys a database service on provided hosts.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var serviceHosts = new Onepanel.ServiceDatabases(); // ServiceDatabases | The service hosts configuration where databases should be deployed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addZoneDatabases(serviceHosts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceDatabases**](ServiceDatabases.md)| The service hosts configuration where databases should be deployed.  | 

### Return type

[**TaskId**](TaskId.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addZoneManagers"></a>
# **addZoneManagers**
> TaskId addZoneManagers(managerHosts)

Add zone cluster managers

Deploys a cluster manager service on provided hosts.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var managerHosts = new Onepanel.ManagerHosts(); // ManagerHosts | The hosts specification where cluster managers should be deployed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addZoneManagers(managerHosts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managerHosts** | [**ManagerHosts**](ManagerHosts.md)| The hosts specification where cluster managers should be deployed.  | 

### Return type

[**TaskId**](TaskId.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addZoneWorkers"></a>
# **addZoneWorkers**
> TaskId addZoneWorkers(serviceHosts)

Add zone cluster workers

Deploys a cluster worker service on provided hosts.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var serviceHosts = new Onepanel.ServiceHosts(); // ServiceHosts | The hosts specification where the workers should be deployed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addZoneWorkers(serviceHosts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceHosts**](ServiceHosts.md)| The hosts specification where the workers should be deployed. | 

### Return type

[**TaskId**](TaskId.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="configureZone"></a>
# **configureZone**
> TaskId configureZone(zoneConfiguration)

Configure zone deployment

Configures and starts zone services, such as database, cluster manager and cluster worker. This request can be executed by unauthorized users as long as there are no admin users in the system. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var zoneConfiguration = new Onepanel.ZoneConfiguration(); // ZoneConfiguration | The zone configuration description.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configureZone(zoneConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneConfiguration** | [**ZoneConfiguration**](ZoneConfiguration.md)| The zone configuration description. | 

### Return type

[**TaskId**](TaskId.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
 - **Accept**: Not defined

<a name="getZoneClusterIps"></a>
# **getZoneClusterIps**
> ClusterIps getZoneClusterIps()

Get zone cluster nodes IPs

Returns IPs of nodes in zone cluster.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneClusterIps(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ClusterIps**](ClusterIps.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneConfiguration"></a>
# **getZoneConfiguration**
> ZoneConfigurationDetails getZoneConfiguration()

Get zone cluster configuration

Returns the zone cluster configuration.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ZoneConfigurationDetails**](ZoneConfigurationDetails.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneDatabaseStatus"></a>
# **getZoneDatabaseStatus**
> ServiceStatusHost getZoneDatabaseStatus(host)

Get zone database status

Returns status of database service on the selected host.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var host = "host_example"; // String | The name of a host for which database service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneDatabaseStatus(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which database service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneDatabasesStatus"></a>
# **getZoneDatabasesStatus**
> ServiceStatus getZoneDatabasesStatus()

Get zone databases status

Returns status of database service on each host where it has been deployed. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneDatabasesStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneManagerStatus"></a>
# **getZoneManagerStatus**
> ServiceStatusHost getZoneManagerStatus(host)

Get zone cluster manager status

Returns status of cluster manager service on the selected host.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneManagerStatus(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneManagersStatus"></a>
# **getZoneManagersStatus**
> ServiceStatus getZoneManagersStatus()

Get zone cluster managers status

Returns status of cluster manager service on each host where it has been eployed. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneManagersStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneNagiosReport"></a>
# **getZoneNagiosReport**
> getZoneNagiosReport()

Get zone nagios report

Returns the zone nagios report.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getZoneNagiosReport(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/xml

<a name="getZoneWorkerStatus"></a>
# **getZoneWorkerStatus**
> ServiceStatusHost getZoneWorkerStatus(host)

Get zone cluster worker status

Returns status of cluster worker service on the selected host.

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneWorkerStatus(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneWorkersStatus"></a>
# **getZoneWorkersStatus**
> ServiceStatus getZoneWorkersStatus()

Get zone cluster workers status

Returns status of cluster worker service on each host where it has been deployed. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneWorkersStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyZoneClusterIps"></a>
# **modifyZoneClusterIps**
> modifyZoneClusterIps(clusterIps)

Set external IPs of nodes in application config

Informs cluster nodes about external IPs which can be used to access them by other zones. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var clusterIps = new Onepanel.ModifyClusterIps(); // ModifyClusterIps | The zone configuration description.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyZoneClusterIps(clusterIps, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterIps** | [**ModifyClusterIps**](ModifyClusterIps.md)| The zone configuration description. | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
 - **Accept**: Not defined

<a name="startStopZoneDatabases"></a>
# **startStopZoneDatabases**
> startStopZoneDatabases(opts)

Start/stop zone databases

Starts or stops database service on all hosts in the local deployment. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the database service. The service will be started or stopped in order to match the requested state. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startStopZoneDatabases(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopZoneDatabasesHost"></a>
# **startStopZoneDatabasesHost**
> startStopZoneDatabasesHost(host, opts)

Start/stop zone database

Starts or stops database service on the selected hosts in the local deployment. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var host = "host_example"; // String | The name of a host for which database service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the database service. The service will be started or stopped in order to match the requested state. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startStopZoneDatabasesHost(host, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which database service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopZoneManager"></a>
# **startStopZoneManager**
> startStopZoneManager(host, opts)

Start/stop zone cluster manager

Starts or stops cluster manager service on the selected hosts in the local deployment. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startStopZoneManager(host, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopZoneManagers"></a>
# **startStopZoneManagers**
> startStopZoneManagers(opts)

Start/stop zone cluster managers

Starts or stops cluster manager service on all hosts in the local deployment. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startStopZoneManagers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopZoneWorker"></a>
# **startStopZoneWorker**
> startStopZoneWorker(host, opts)

Start/stop zone cluster worker

Starts or stops cluster worker service on the selected hosts in the local deployment. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startStopZoneWorker(host, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopZoneWorkers"></a>
# **startStopZoneWorkers**
> startStopZoneWorkers(opts)

Start/stop zone cluster workers

Starts or stops cluster worker service on all hosts in the local deployment. 

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

var apiInstance = new Onepanel.OnezoneClusterApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startStopZoneWorkers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

