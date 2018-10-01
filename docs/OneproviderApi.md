# Onepanel.OneproviderApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProvider**](OneproviderApi.md#addProvider) | **POST** /provider | Register provider
[**addProviderDatabases**](OneproviderApi.md#addProviderDatabases) | **POST** /provider/databases | Deploy provider databases
[**addProviderManagers**](OneproviderApi.md#addProviderManagers) | **POST** /provider/managers | Add provider cluster managers
[**addProviderWorkers**](OneproviderApi.md#addProviderWorkers) | **POST** /provider/workers | Add provider cluster workers
[**addStorage**](OneproviderApi.md#addStorage) | **POST** /provider/storages | Add storage
[**configureProvider**](OneproviderApi.md#configureProvider) | **POST** /provider/configuration | Configure provider deployment
[**getProvider**](OneproviderApi.md#getProvider) | **GET** /provider | Get provider details
[**getProviderClusterIps**](OneproviderApi.md#getProviderClusterIps) | **GET** /provider/cluster_ips | Get provider cluster nodes IPs
[**getProviderConfiguration**](OneproviderApi.md#getProviderConfiguration) | **GET** /provider/configuration | Get provider cluster configuration
[**getProviderDatabaseStatus**](OneproviderApi.md#getProviderDatabaseStatus) | **GET** /provider/databases/{host} | Get provider database status
[**getProviderDatabasesStatus**](OneproviderApi.md#getProviderDatabasesStatus) | **GET** /provider/databases | Get provider databases status
[**getProviderManagerStatus**](OneproviderApi.md#getProviderManagerStatus) | **GET** /provider/managers/{host} | Get provider cluster manager status
[**getProviderManagersStatus**](OneproviderApi.md#getProviderManagersStatus) | **GET** /provider/managers | Get provider cluster managers status
[**getProviderNagiosReport**](OneproviderApi.md#getProviderNagiosReport) | **GET** /provider/nagios | Get provider nagios report
[**getProviderSpaceAutoCleaningReports**](OneproviderApi.md#getProviderSpaceAutoCleaningReports) | **GET** /provider/spaces/{id}/auto_cleaning_reports | Get reports of space auto cleaning
[**getProviderSpaceAutoCleaningStatus**](OneproviderApi.md#getProviderSpaceAutoCleaningStatus) | **GET** /provider/spaces/{id}/auto_cleaning_status | Get status of space auto cleaning
[**getProviderSpaceSyncStats**](OneproviderApi.md#getProviderSpaceSyncStats) | **GET** /provider/spaces/{id}/sync | Get statistics of storage synchronization
[**getProviderSpaces**](OneproviderApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
[**getProviderWorkerStatus**](OneproviderApi.md#getProviderWorkerStatus) | **GET** /provider/workers/{host} | Get provider cluster worker status
[**getProviderWorkersStatus**](OneproviderApi.md#getProviderWorkersStatus) | **GET** /provider/workers | Get provider cluster workers status
[**getSpaceDetails**](OneproviderApi.md#getSpaceDetails) | **GET** /provider/spaces/{id} | Get space details
[**getStorageDetails**](OneproviderApi.md#getStorageDetails) | **GET** /provider/storages/{id} | Get storage details
[**getStorages**](OneproviderApi.md#getStorages) | **GET** /provider/storages | Get storages
[**invalidateLumaCache**](OneproviderApi.md#invalidateLumaCache) | **PATCH** /provider/storages/{id}/invalidate_luma | Invalidate LUMA cache
[**modifyProvider**](OneproviderApi.md#modifyProvider) | **PATCH** /provider | Modify provider details
[**modifyProviderClusterIps**](OneproviderApi.md#modifyProviderClusterIps) | **PATCH** /provider/cluster_ips | Set external IPs of nodes in application config
[**modifySpace**](OneproviderApi.md#modifySpace) | **PATCH** /provider/spaces/{id} | Modify space details
[**modifyStorage**](OneproviderApi.md#modifyStorage) | **PATCH** /provider/storages/{id} | Modify storage details
[**providerSpaceStartCleaning**](OneproviderApi.md#providerSpaceStartCleaning) | **POST** /provider/spaces/{id}/start_cleaning | Start space cleaning
[**removeProvider**](OneproviderApi.md#removeProvider) | **DELETE** /provider | Unregister provider
[**revokeSpaceSupport**](OneproviderApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space
[**startStopProviderDatabase**](OneproviderApi.md#startStopProviderDatabase) | **PATCH** /provider/databases/{host} | Start/stop provider database
[**startStopProviderDatabases**](OneproviderApi.md#startStopProviderDatabases) | **PATCH** /provider/databases | Start/stop provider databases
[**startStopProviderManager**](OneproviderApi.md#startStopProviderManager) | **PATCH** /provider/managers/{host} | Start/stop provider cluster manager
[**startStopProviderManagers**](OneproviderApi.md#startStopProviderManagers) | **PATCH** /provider/managers | Start/stop provider cluster managers
[**startStopProviderWorker**](OneproviderApi.md#startStopProviderWorker) | **PATCH** /provider/workers/{host} | Start/stop provider cluster worker
[**startStopProviderWorkers**](OneproviderApi.md#startStopProviderWorkers) | **PATCH** /provider/workers | Start/stop provider cluster workers
[**supportSpace**](OneproviderApi.md#supportSpace) | **POST** /provider/spaces | Support space


<a name="addProvider"></a>
# **addProvider**
> addProvider(providerRegisterRequest)

Register provider

Registers provider in the zone.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var providerRegisterRequest = new Onepanel.ProviderRegisterRequest(); // ProviderRegisterRequest | The new provider details.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProvider(providerRegisterRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerRegisterRequest** | [**ProviderRegisterRequest**](ProviderRegisterRequest.md)| The new provider details. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addProviderDatabases"></a>
# **addProviderDatabases**
> addProviderDatabases(serviceHosts)

Deploy provider databases

Deploys a database service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var serviceHosts = new Onepanel.ServiceDatabases(); // ServiceDatabases | The service hosts configuration where databases should be deployed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProviderDatabases(serviceHosts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceDatabases**](ServiceDatabases.md)| The service hosts configuration where databases should be deployed.  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addProviderManagers"></a>
# **addProviderManagers**
> addProviderManagers(managerHosts)

Add provider cluster managers

Deploys a cluster manager service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var managerHosts = new Onepanel.ManagerHosts(); // ManagerHosts | The cluster manager service hosts configuration.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProviderManagers(managerHosts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managerHosts** | [**ManagerHosts**](ManagerHosts.md)| The cluster manager service hosts configuration. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addProviderWorkers"></a>
# **addProviderWorkers**
> addProviderWorkers(serviceHosts)

Add provider cluster workers

Deploys cluster worker services on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var serviceHosts = new Onepanel.ServiceHosts(); // ServiceHosts | The service hosts configuration where workers should be deployed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProviderWorkers(serviceHosts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceHosts**](ServiceHosts.md)| The service hosts configuration where workers should be deployed.  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addStorage"></a>
# **addStorage**
> addStorage(storageCreateRequest)

Add storage

Adds additional storage resources to the provider.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var storageCreateRequest = new Onepanel.StorageCreateRequest(); // StorageCreateRequest | The configuration details of storage resources to be added to the provider deployment. 


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
 **storageCreateRequest** | [**StorageCreateRequest**](StorageCreateRequest.md)| The configuration details of storage resources to be added to the provider deployment.  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="configureProvider"></a>
# **configureProvider**
> configureProvider(providerConfiguration)

Configure provider deployment

Configures and starts provider services, such as database, cluster manager and cluster worker. Depending on the configuration, sets up provider storage and registers in the zone. This request can be executed unauthorized as long as there are no admin users. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var providerConfiguration = new Onepanel.ProviderConfiguration(); // ProviderConfiguration | The provider configuration description.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configureProvider(providerConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerConfiguration** | [**ProviderConfiguration**](ProviderConfiguration.md)| The provider configuration description. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
 - **Accept**: Not defined

<a name="getProvider"></a>
# **getProvider**
> ProviderDetails getProvider()

Get provider details

Returns the basic configuration information of the provider.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProvider(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderDetails**](ProviderDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderClusterIps"></a>
# **getProviderClusterIps**
> ClusterIps getProviderClusterIps()

Get provider cluster nodes IPs

Returns IPs of nodes in provider cluster

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderClusterIps(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ClusterIps**](ClusterIps.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderConfiguration"></a>
# **getProviderConfiguration**
> ProviderConfigurationDetails getProviderConfiguration()

Get provider cluster configuration

Returns the provider cluster configuration.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderConfigurationDetails**](ProviderConfigurationDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderDatabaseStatus"></a>
# **getProviderDatabaseStatus**
> ServiceStatusHost getProviderDatabaseStatus(host)

Get provider database status

Returns status of database service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which database service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderDatabaseStatus(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which database service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderDatabasesStatus"></a>
# **getProviderDatabasesStatus**
> ServiceStatus getProviderDatabasesStatus()

Get provider databases status

Returns status of database service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderDatabasesStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderManagerStatus"></a>
# **getProviderManagerStatus**
> ServiceStatusHost getProviderManagerStatus(host)

Get provider cluster manager status

Returns status of cluster manager service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderManagerStatus(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderManagersStatus"></a>
# **getProviderManagersStatus**
> ServiceStatus getProviderManagersStatus()

Get provider cluster managers status

Returns status of cluster manager service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderManagersStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderNagiosReport"></a>
# **getProviderNagiosReport**
> getProviderNagiosReport()

Get provider nagios report

Returns the provider nagios report.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProviderNagiosReport(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/xml

<a name="getProviderSpaceAutoCleaningReports"></a>
# **getProviderSpaceAutoCleaningReports**
> SpaceAutoCleaningReportCollection getProviderSpaceAutoCleaningReports(id, startedAfter)

Get reports of space auto cleaning

Returns collection of reports of auto cleaning for the space 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space

var startedAfter = "startedAfter_example"; // String | Fetch only reports that started after this date (ISO 8601)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderSpaceAutoCleaningReports(id, startedAfter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a space | 
 **startedAfter** | **String**| Fetch only reports that started after this date (ISO 8601) | 

### Return type

[**SpaceAutoCleaningReportCollection**](SpaceAutoCleaningReportCollection.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderSpaceAutoCleaningStatus"></a>
# **getProviderSpaceAutoCleaningStatus**
> SpaceAutoCleaningStatus getProviderSpaceAutoCleaningStatus(id)

Get status of space auto cleaning

Returns status of current process of auto cleaning for the space 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderSpaceAutoCleaningStatus(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a space | 

### Return type

[**SpaceAutoCleaningStatus**](SpaceAutoCleaningStatus.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderSpaceSyncStats"></a>
# **getProviderSpaceSyncStats**
> SpaceSyncStats getProviderSpaceSyncStats(id, opts)

Get statistics of storage synchronization

Returns requested statistics of storage synchronization for given space on this provider. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space for which sync stats should be returned.

var opts = { 
  'period': "period_example", // String | Predefined time period for which the statistics should be fetched
  'metrics': "metrics_example" // String | Specify which statistic metrics should be returned - strings delimited with comma
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderSpaceSyncStats(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a space for which sync stats should be returned. | 
 **period** | **String**| Predefined time period for which the statistics should be fetched | [optional] 
 **metrics** | **String**| Specify which statistic metrics should be returned - strings delimited with comma | [optional] 

### Return type

[**SpaceSyncStats**](SpaceSyncStats.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderSpaces"></a>
# **getProviderSpaces**
> ProviderSpaces getProviderSpaces()

Get provider spaces

Returns the list of spaces supported by the provider.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderWorkerStatus"></a>
# **getProviderWorkerStatus**
> ServiceStatusHost getProviderWorkerStatus(host)

Get provider cluster worker status

Returns status of cluster worker service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderWorkerStatus(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderWorkersStatus"></a>
# **getProviderWorkersStatus**
> ServiceStatus getProviderWorkersStatus()

Get provider cluster workers status

Returns status of cluster worker service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderWorkersStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpaceDetails"></a>
# **getSpaceDetails**
> SpaceDetails getSpaceDetails(id)

Get space details

Returns details of space specified by space Id in the path. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space which details should be returned.


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
 **id** | **String**| The ID of a space which details should be returned. | 

### Return type

[**SpaceDetails**](SpaceDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStorageDetails"></a>
# **getStorageDetails**
> StorageDetails getStorageDetails(id)

Get storage details

Returns the details of the selected storage.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a storage resource, which details should be returned. 


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
 **id** | **String**| The ID of a storage resource, which details should be returned.  | 

### Return type

[**StorageDetails**](StorageDetails.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStorages"></a>
# **getStorages**
> ProviderStorages getStorages()

Get storages

Returns the list of provider storage resources and their details.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invalidateLumaCache"></a>
# **invalidateLumaCache**
> invalidateLumaCache(id)

Invalidate LUMA cache

Invalidates LUMA cache in provider for given storage.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a storage resource, which details should be modified. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invalidateLumaCache(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a storage resource, which details should be modified.  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="modifyProvider"></a>
# **modifyProvider**
> modifyProvider(providerModifyRequest)

Modify provider details

Modifies basic provider details in the zone.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var providerModifyRequest = new Onepanel.ProviderModifyRequest(); // ProviderModifyRequest | New values for provider configuration parameters which should be changed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyProvider(providerModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerModifyRequest** | [**ProviderModifyRequest**](ProviderModifyRequest.md)| New values for provider configuration parameters which should be changed.  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="modifyProviderClusterIps"></a>
# **modifyProviderClusterIps**
> modifyProviderClusterIps(clusterIps)

Set external IPs of nodes in application config

Informs cluster nodes about external IPs which can be used to access them by other providers. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var clusterIps = new Onepanel.ModifyClusterIps(); // ModifyClusterIps | The provider configuration description.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyProviderClusterIps(clusterIps, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterIps** | [**ModifyClusterIps**](ModifyClusterIps.md)| The provider configuration description. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
 - **Accept**: Not defined

<a name="modifySpace"></a>
# **modifySpace**
> modifySpace(id, spaceModifyRequest)

Modify space details

Modifies the space import/update strategies.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space which details should be modified.

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
 **id** | **String**| The ID of a space which details should be modified. | 
 **spaceModifyRequest** | [**SpaceModifyRequest**](SpaceModifyRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="modifyStorage"></a>
# **modifyStorage**
> modifyStorage(id, storageModifyRequest)

Modify storage details

Modifies basic storage details, such as operation timeout.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a storage resource, which details should be modified. 

var storageModifyRequest = new Onepanel.StorageModifyRequest(); // StorageModifyRequest | New values for storage configuration parameters which should be changed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyStorage(id, storageModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a storage resource, which details should be modified.  | 
 **storageModifyRequest** | [**StorageModifyRequest**](StorageModifyRequest.md)| New values for storage configuration parameters which should be changed.  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="providerSpaceStartCleaning"></a>
# **providerSpaceStartCleaning**
> providerSpaceStartCleaning(id)

Start space cleaning

Starts cleaning of space with current configuration.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.providerSpaceStartCleaning(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a space | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="removeProvider"></a>
# **removeProvider**
> removeProvider()

Unregister provider

Unregisters provider from the zone.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeProvider(callback);
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

<a name="revokeSpaceSupport"></a>
# **revokeSpaceSupport**
> revokeSpaceSupport(id)

Revoke space support for a space

Allows provider to revoke storage support for a specific space. Users with access to this space will no longer be able to store data on the resources of this provider. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space to be removed.


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
 **id** | **String**| The ID of a space to be removed. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopProviderDatabase"></a>
# **startStopProviderDatabase**
> startStopProviderDatabase(host, opts)

Start/stop provider database

Starts or stops database service on the selected hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

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
apiInstance.startStopProviderDatabase(host, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which database service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopProviderDatabases"></a>
# **startStopProviderDatabases**
> startStopProviderDatabases(opts)

Start/stop provider databases

Starts or stops database service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

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
apiInstance.startStopProviderDatabases(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopProviderManager"></a>
# **startStopProviderManager**
> startStopProviderManager(host, opts)

Start/stop provider cluster manager

Starts or stops cluster manager service on the selected hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

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
apiInstance.startStopProviderManager(host, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopProviderManagers"></a>
# **startStopProviderManagers**
> startStopProviderManagers(opts)

Start/stop provider cluster managers

Starts or stops cluster manager service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

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
apiInstance.startStopProviderManagers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopProviderWorker"></a>
# **startStopProviderWorker**
> startStopProviderWorker(host, opts)

Start/stop provider cluster worker

Starts or stops cluster worker service on the selected host in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

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
apiInstance.startStopProviderWorker(host, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopProviderWorkers"></a>
# **startStopProviderWorkers**
> startStopProviderWorkers(opts)

Start/stop provider cluster workers

Starts or stops cluster worker service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

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
apiInstance.startStopProviderWorkers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="supportSpace"></a>
# **supportSpace**
> supportSpace(spaceSupportRequest)

Support space

Supports an existing space. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var spaceSupportRequest = new Onepanel.SpaceSupportRequest(); // SpaceSupportRequest | Specification of the space support request including support size and token. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.supportSpace(spaceSupportRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceSupportRequest** | [**SpaceSupportRequest**](SpaceSupportRequest.md)| Specification of the space support request including support size and token.  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

