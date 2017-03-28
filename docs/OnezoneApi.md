# Onepanel.OnezoneApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addZoneDatabases**](OnezoneApi.md#addZoneDatabases) | **POST** /zone/databases | Add zone databases
[**addZoneManagers**](OnezoneApi.md#addZoneManagers) | **POST** /zone/managers | Add zone cluster managers
[**addZoneWorkers**](OnezoneApi.md#addZoneWorkers) | **POST** /zone/workers | Add zone cluster workers
[**configureZone**](OnezoneApi.md#configureZone) | **POST** /zone/configuration | Configure zone deployment
[**getZoneConfiguration**](OnezoneApi.md#getZoneConfiguration) | **GET** /zone/configuration | Get zone cluster configuration
[**getZoneDatabaseStatus**](OnezoneApi.md#getZoneDatabaseStatus) | **GET** /zone/databases/{host} | Get zone database status
[**getZoneDatabasesStatus**](OnezoneApi.md#getZoneDatabasesStatus) | **GET** /zone/databases | Get zone databases status
[**getZoneManagerStatus**](OnezoneApi.md#getZoneManagerStatus) | **GET** /zone/managers/{host} | Get zone cluster manager status
[**getZoneManagersStatus**](OnezoneApi.md#getZoneManagersStatus) | **GET** /zone/managers | Get zone cluster managers status
[**getZoneWorkerStatus**](OnezoneApi.md#getZoneWorkerStatus) | **GET** /zone/workers/{host} | Get zone cluster worker status
[**getZoneWorkersStatus**](OnezoneApi.md#getZoneWorkersStatus) | **GET** /zone/workers | Get zone cluster workers status
[**startStopZoneDatabases**](OnezoneApi.md#startStopZoneDatabases) | **PATCH** /zone/databases | Start/stop zone databases
[**startStopZoneDatabasesHost**](OnezoneApi.md#startStopZoneDatabasesHost) | **PATCH** /zone/databases/{host} | Start/stop zone database
[**startStopZoneManager**](OnezoneApi.md#startStopZoneManager) | **PATCH** /zone/managers/{host} | Start/stop zone cluster manager
[**startStopZoneManagers**](OnezoneApi.md#startStopZoneManagers) | **PATCH** /zone/managers | Start/stop zone cluster managers
[**startStopZoneWorker**](OnezoneApi.md#startStopZoneWorker) | **PATCH** /zone/workers/{host} | Start/stop zone cluster worker
[**startStopZoneWorkers**](OnezoneApi.md#startStopZoneWorkers) | **PATCH** /zone/workers | Start/stop zone cluster workers


<a name="addZoneDatabases"></a>
# **addZoneDatabases**
> addZoneDatabases(serviceHosts)

Add zone databases

Deploys a database service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var serviceHosts = new Onepanel.ServiceDatabases(); // ServiceDatabases | The service hosts configuration where databases should be deployed. 

apiInstance.addZoneDatabases(serviceHosts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceDatabases**](ServiceDatabases.md)| The service hosts configuration where databases should be deployed.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addZoneManagers"></a>
# **addZoneManagers**
> addZoneManagers(managerHosts)

Add zone cluster managers

Deploys a cluster manager service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var managerHosts = new Onepanel.ManagerHosts(); // ManagerHosts | The hosts specification where cluster managers should be deployed. 

apiInstance.addZoneManagers(managerHosts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managerHosts** | [**ManagerHosts**](ManagerHosts.md)| The hosts specification where cluster managers should be deployed.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addZoneWorkers"></a>
# **addZoneWorkers**
> addZoneWorkers(serviceHosts)

Add zone cluster workers

Deploys a cluster worker service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var serviceHosts = new Onepanel.ServiceHosts(); // ServiceHosts | The hosts specification where the workers should be deployed.

apiInstance.addZoneWorkers(serviceHosts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceHosts**](ServiceHosts.md)| The hosts specification where the workers should be deployed. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="configureZone"></a>
# **configureZone**
> configureZone(zoneConfiguration)

Configure zone deployment

Configures and starts zone services, such as database, cluster manager and cluster worker. This request can be executed by unauthorized usersas long as there are no  admin users in the system. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var zoneConfiguration = new Onepanel.ZoneConfiguration(); // ZoneConfiguration | The zone configuration description.

apiInstance.configureZone(zoneConfiguration).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneConfiguration** | [**ZoneConfiguration**](ZoneConfiguration.md)| The zone configuration description. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
 - **Accept**: Not defined

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

<a name="getZoneDatabaseStatus"></a>
# **getZoneDatabaseStatus**
> ServiceStatusHost getZoneDatabaseStatus(host)

Get zone database status

Returns status of database service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which database service status should be returned. 

apiInstance.getZoneDatabaseStatus(host).then(function(data) {
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

<a name="getZoneDatabasesStatus"></a>
# **getZoneDatabasesStatus**
> ServiceStatus getZoneDatabasesStatus()

Get zone databases status

Returns status of database service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();
apiInstance.getZoneDatabasesStatus().then(function(data) {
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

<a name="getZoneManagerStatus"></a>
# **getZoneManagerStatus**
> ServiceStatusHost getZoneManagerStatus(host)

Get zone cluster manager status

Returns status of cluster manager service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be  returned. 

apiInstance.getZoneManagerStatus(host).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be  returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneManagersStatus"></a>
# **getZoneManagersStatus**
> ServiceStatus getZoneManagersStatus()

Get zone cluster managers status

Returns status of cluster manager service on each host where it has been  eployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();
apiInstance.getZoneManagersStatus().then(function(data) {
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

<a name="getZoneWorkerStatus"></a>
# **getZoneWorkerStatus**
> ServiceStatusHost getZoneWorkerStatus(host)

Get zone cluster worker status

Returns status of cluster worker service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be returned. 

apiInstance.getZoneWorkerStatus(host).then(function(data) {
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

<a name="getZoneWorkersStatus"></a>
# **getZoneWorkersStatus**
> ServiceStatus getZoneWorkersStatus()

Get zone cluster workers status

Returns status of cluster worker service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();
apiInstance.getZoneWorkersStatus().then(function(data) {
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

<a name="startStopZoneDatabases"></a>
# **startStopZoneDatabases**
> startStopZoneDatabases(opts)

Start/stop zone databases

Starts or stops database service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the database service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.startStopZoneDatabases(opts).then(function() {
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

<a name="startStopZoneDatabasesHost"></a>
# **startStopZoneDatabasesHost**
> startStopZoneDatabasesHost(host, opts)

Start/stop zone database

Starts or stops database service on the selected hosts in the local  deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which database service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the database service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.startStopZoneDatabasesHost(host, opts).then(function() {
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

<a name="startStopZoneManager"></a>
# **startStopZoneManager**
> startStopZoneManager(host, opts)

Start/stop zone cluster manager

Starts or stops cluster manager service on the selected hosts in the local  deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be  changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster manager service. The service  will be started or stopped in order to match the requested state. 
};
apiInstance.startStopZoneManager(host, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be  changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service  will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OnezoneApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster manager service. The service  will be started or stopped in order to match the requested state. 
};
apiInstance.startStopZoneManagers(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service  will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startStopZoneWorker"></a>
# **startStopZoneWorker**
> startStopZoneWorker(host, opts)

Start/stop zone cluster worker

Starts or stops cluster worker service on the selected hosts in the local  deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OnezoneApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be  changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.startStopZoneWorker(host, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be  changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OnezoneApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster worker service. The service  will be started or stopped in order to match the requested state. 
};
apiInstance.startStopZoneWorkers(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service  will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

