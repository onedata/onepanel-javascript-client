# Onepanel.OnezoneApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getZoneConfiguration**](OnezoneApi.md#getZoneConfiguration) | **GET** /zone/configuration | Get zone cluster configuration
[**getZoneDatabases**](OnezoneApi.md#getZoneDatabases) | **GET** /zone/databases | Get zone databases status
[**getZoneDatabasesHost**](OnezoneApi.md#getZoneDatabasesHost) | **GET** /zone/databases/{host} | Get zone database status
[**getZoneManagers**](OnezoneApi.md#getZoneManagers) | **GET** /zone/managers | Get zone cluster managers status
[**getZoneManagersHost**](OnezoneApi.md#getZoneManagersHost) | **GET** /zone/managers/{host} | Get zone cluster manager status
[**getZoneWorkers**](OnezoneApi.md#getZoneWorkers) | **GET** /zone/workers | Get zone cluster workers status
[**getZoneWorkersHost**](OnezoneApi.md#getZoneWorkersHost) | **GET** /zone/workers/{host} | Get zone cluster worker status
[**patchZoneDatabases**](OnezoneApi.md#patchZoneDatabases) | **PATCH** /zone/databases | Start/stop zone databases
[**patchZoneDatabasesHost**](OnezoneApi.md#patchZoneDatabasesHost) | **PATCH** /zone/databases/{host} | Start/stop zone database
[**patchZoneManagers**](OnezoneApi.md#patchZoneManagers) | **PATCH** /zone/managers | Start/stop zone cluster managers
[**patchZoneManagersHost**](OnezoneApi.md#patchZoneManagersHost) | **PATCH** /zone/managers/{host} | Start/stop zone cluster manager
[**patchZoneWorkers**](OnezoneApi.md#patchZoneWorkers) | **PATCH** /zone/workers | Start/stop zone cluster workers
[**patchZoneWorkersHost**](OnezoneApi.md#patchZoneWorkersHost) | **PATCH** /zone/workers/{host} | Start/stop zone cluster worker
[**putZoneConfiguration**](OnezoneApi.md#putZoneConfiguration) | **POST** /zone/configuration | Configure zone deployment
[**putZoneDatabases**](OnezoneApi.md#putZoneDatabases) | **POST** /zone/databases | Deploy zone databases
[**putZoneManagers**](OnezoneApi.md#putZoneManagers) | **POST** /zone/managers | Deploy zone cluster managers
[**putZoneWorkers**](OnezoneApi.md#putZoneWorkers) | **POST** /zone/workers | Deploy zone cluster workers


<a name="getZoneConfiguration"></a>
# **getZoneConfiguration**
> ZoneConfiguration getZoneConfiguration()

Get zone cluster configuration

Returns the zone cluster configuration.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();
apiInstance.getZoneConfiguration().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ZoneConfiguration**](ZoneConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneDatabases"></a>
# **getZoneDatabases**
> ServiceStatus getZoneDatabases()

Get zone databases status

Returns status of database service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();
apiInstance.getZoneDatabases().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneDatabasesHost"></a>
# **getZoneDatabasesHost**
> ServiceStatusHost getZoneDatabasesHost(host)

Get zone database status

Returns status of database service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which database service status should be returned. 

apiInstance.getZoneDatabasesHost(host).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which database service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneManagers"></a>
# **getZoneManagers**
> ServiceStatus getZoneManagers()

Get zone cluster managers status

Returns status of cluster manager service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();
apiInstance.getZoneManagers().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneManagersHost"></a>
# **getZoneManagersHost**
> ServiceStatusHost getZoneManagersHost(host)

Get zone cluster manager status

Returns status of cluster manager service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be returned. 

apiInstance.getZoneManagersHost(host).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneWorkers"></a>
# **getZoneWorkers**
> ServiceStatus getZoneWorkers()

Get zone cluster workers status

Returns status of cluster worker service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();
apiInstance.getZoneWorkers().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneWorkersHost"></a>
# **getZoneWorkersHost**
> ServiceStatusHost getZoneWorkersHost(host)

Get zone cluster worker status

Returns status of cluster worker service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be returned. 

apiInstance.getZoneWorkersHost(host).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchZoneDatabases"></a>
# **patchZoneDatabases**
> patchZoneDatabases(opts)

Start/stop zone databases

Starts or stops database service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the database service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.patchZoneDatabases(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="patchZoneDatabasesHost"></a>
# **patchZoneDatabasesHost**
> patchZoneDatabasesHost(host, opts)

Start/stop zone database

Starts or stops database service on the selected hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which database service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the database service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.patchZoneDatabasesHost(host, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which database service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="patchZoneManagers"></a>
# **patchZoneManagers**
> patchZoneManagers(opts)

Start/stop zone cluster managers

Starts or stops cluster manager service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.patchZoneManagers(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="patchZoneManagersHost"></a>
# **patchZoneManagersHost**
> patchZoneManagersHost(host, opts)

Start/stop zone cluster manager

Starts or stops cluster manager service on the selected hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.patchZoneManagersHost(host, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="patchZoneWorkers"></a>
# **patchZoneWorkers**
> patchZoneWorkers(opts)

Start/stop zone cluster workers

Starts or stops cluster worker service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.patchZoneWorkers(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="patchZoneWorkersHost"></a>
# **patchZoneWorkersHost**
> patchZoneWorkersHost(host, opts)

Start/stop zone cluster worker

Starts or stops cluster worker service on the selected hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.patchZoneWorkersHost(host, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putZoneConfiguration"></a>
# **putZoneConfiguration**
> putZoneConfiguration(zoneConfiguration)

Configure zone deployment

Configures and starts zone services, such as database, cluster manager and cluster worker.  This request can be executed unauthorized as long as there are no admin users. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var zoneConfiguration = new Onepanel.ZoneConfiguration(); // ZoneConfiguration | 

apiInstance.putZoneConfiguration(zoneConfiguration).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneConfiguration** | [**ZoneConfiguration**](ZoneConfiguration.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="putZoneDatabases"></a>
# **putZoneDatabases**
> putZoneDatabases(serviceHosts)

Deploy zone databases

Deploys a database service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var serviceHosts = new Onepanel.ServiceDatabases(); // ServiceDatabases | 

apiInstance.putZoneDatabases(serviceHosts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceDatabases**](ServiceDatabases.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="putZoneManagers"></a>
# **putZoneManagers**
> putZoneManagers(managerHosts)

Deploy zone cluster managers

Deploys a cluster manager service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var managerHosts = new Onepanel.ManagerHosts(); // ManagerHosts | 

apiInstance.putZoneManagers(managerHosts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managerHosts** | [**ManagerHosts**](ManagerHosts.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="putZoneWorkers"></a>
# **putZoneWorkers**
> putZoneWorkers(serviceHosts)

Deploy zone cluster workers

Deploys a cluster worker service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var serviceHosts = new Onepanel.ServiceHosts(); // ServiceHosts | 

apiInstance.putZoneWorkers(serviceHosts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceHosts**](ServiceHosts.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

