# Onepanel.OneproviderApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProvider**](OneproviderApi.md#addProvider) | **POST** /provider | Register provider
[**addProviderDatabases**](OneproviderApi.md#addProviderDatabases) | **POST** /provider/databases | Deploy provider databases
[**addProviderManagers**](OneproviderApi.md#addProviderManagers) | **POST** /provider/managers | Add provider cluster managers
[**addProviderWorkers**](OneproviderApi.md#addProviderWorkers) | **POST** /provider/workers | Add provider cluster workers
[**addStorage**](OneproviderApi.md#addStorage) | **POST** /provider/storages | Add storage.
[**configureProvider**](OneproviderApi.md#configureProvider) | **POST** /provider/configuration | Configure provider deployment
[**getProvider**](OneproviderApi.md#getProvider) | **GET** /provider | Get provider details
[**getProviderConfiguration**](OneproviderApi.md#getProviderConfiguration) | **GET** /provider/configuration | Get provider cluster configuration
[**getProviderDatabaseStatus**](OneproviderApi.md#getProviderDatabaseStatus) | **GET** /provider/databases/{host} | Get provider database status
[**getProviderDatabasesStatus**](OneproviderApi.md#getProviderDatabasesStatus) | **GET** /provider/databases | Get provider databases status
[**getProviderManagerStatus**](OneproviderApi.md#getProviderManagerStatus) | **GET** /provider/managers/{host} | Get provider cluster manager status
[**getProviderManagersStatus**](OneproviderApi.md#getProviderManagersStatus) | **GET** /provider/managers | Get provider cluster managers status
[**getProviderSpaces**](OneproviderApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
[**getProviderWorkerStatus**](OneproviderApi.md#getProviderWorkerStatus) | **GET** /provider/workers/{host} | Get provider cluster worker status
[**getProviderWorkersStatus**](OneproviderApi.md#getProviderWorkersStatus) | **GET** /provider/workers | Get provider cluster workers status
[**getSpaceDetails**](OneproviderApi.md#getSpaceDetails) | **GET** /provider/spaces/{id} | Get space details
[**getStorageDetails**](OneproviderApi.md#getStorageDetails) | **GET** /provider/storages/{name} | Get storage details
[**getStorages**](OneproviderApi.md#getStorages) | **GET** /provider/storages | Get storages
[**modifyProvider**](OneproviderApi.md#modifyProvider) | **PATCH** /provider | Modify provider details
[**modifyStorage**](OneproviderApi.md#modifyStorage) | **PATCH** /provider/storages/{name} | Modify storage details
[**removeProvider**](OneproviderApi.md#removeProvider) | **DELETE** /provider | Unregister provider
[**revokeSpaceSupport**](OneproviderApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space.
[**startStopProviderDatabase**](OneproviderApi.md#startStopProviderDatabase) | **PATCH** /provider/databases/{host} | Start/stop provider database
[**startStopProviderDatabases**](OneproviderApi.md#startStopProviderDatabases) | **PATCH** /provider/databases | Start/stop provider databases
[**startStopProviderManager**](OneproviderApi.md#startStopProviderManager) | **PATCH** /provider/managers/{host} | Start/stop provider cluster manager
[**startStopProviderManagers**](OneproviderApi.md#startStopProviderManagers) | **PATCH** /provider/managers | Start/stop provider cluster managers
[**startStopProviderWorker**](OneproviderApi.md#startStopProviderWorker) | **PATCH** /provider/workers/{host} | Start/stop provider cluster worker
[**startStopProviderWorkers**](OneproviderApi.md#startStopProviderWorkers) | **PATCH** /provider/workers | Start/stop provider cluster workers
[**supportSpace**](OneproviderApi.md#supportSpace) | **POST** /provider/spaces | Support or create space


<a name="addProvider"></a>
# **addProvider**
> addProvider(providerRegisterRequest)

Register provider

Registers provider in the zone.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var providerRegisterRequest = new Onepanel.ProviderRegisterRequest(); // ProviderRegisterRequest | The new provider details.

apiInstance.addProvider(providerRegisterRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerRegisterRequest** | [**ProviderRegisterRequest**](ProviderRegisterRequest.md)| The new provider details. | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();

var serviceHosts = new Onepanel.ServiceDatabases(); // ServiceDatabases | The service hosts configuration where databases should be deployed. 

apiInstance.addProviderDatabases(serviceHosts).then(function() {
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

<a name="addProviderManagers"></a>
# **addProviderManagers**
> addProviderManagers(managerHosts)

Add provider cluster managers

Deploys a cluster manager service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var managerHosts = new Onepanel.ManagerHosts(); // ManagerHosts | The cluster manager service hosts configuration.

apiInstance.addProviderManagers(managerHosts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managerHosts** | [**ManagerHosts**](ManagerHosts.md)| The cluster manager service hosts configuration. | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();

var serviceHosts = new Onepanel.ServiceHosts(); // ServiceHosts | The service hosts configuration where workers should be deployed. 

apiInstance.addProviderWorkers(serviceHosts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**ServiceHosts**](ServiceHosts.md)| The service hosts configuration where workers should be deployed.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addStorage"></a>
# **addStorage**
> addStorage(clusterStoragesList)

Add storage.

Adds additional storage resource to the storage provider.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var clusterStoragesList = new Onepanel.ClusterStoragesList(); // ClusterStoragesList | The list of configuration details of storages to be added to the provider deployment. 

apiInstance.addStorage(clusterStoragesList).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterStoragesList** | [**ClusterStoragesList**](ClusterStoragesList.md)| The list of configuration details of storages to be added to the provider deployment.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();

var providerConfiguration = new Onepanel.ProviderConfiguration(); // ProviderConfiguration | The provider configuration description.

apiInstance.configureProvider(providerConfiguration).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerConfiguration** | [**ProviderConfiguration**](ProviderConfiguration.md)| The provider configuration description. | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();
apiInstance.getProvider().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderDetails**](ProviderDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderConfiguration"></a>
# **getProviderConfiguration**
> ProviderConfiguration getProviderConfiguration()

Get provider cluster configuration

Returns the provider cluster configuration.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();
apiInstance.getProviderConfiguration().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderConfiguration**](ProviderConfiguration.md)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which database service status should be returned. 

apiInstance.getProviderDatabaseStatus(host).then(function(data) {
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

<a name="getProviderDatabasesStatus"></a>
# **getProviderDatabasesStatus**
> ServiceStatus getProviderDatabasesStatus()

Get provider databases status

Returns status of database service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();
apiInstance.getProviderDatabasesStatus().then(function(data) {
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

<a name="getProviderManagerStatus"></a>
# **getProviderManagerStatus**
> ServiceStatusHost getProviderManagerStatus(host)

Get provider cluster manager status

Returns status of cluster manager service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be returned. 

apiInstance.getProviderManagerStatus(host).then(function(data) {
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

<a name="getProviderManagersStatus"></a>
# **getProviderManagersStatus**
> ServiceStatus getProviderManagersStatus()

Get provider cluster managers status

Returns status of cluster manager service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();
apiInstance.getProviderManagersStatus().then(function(data) {
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

<a name="getProviderSpaces"></a>
# **getProviderSpaces**
> ProviderSpaces getProviderSpaces()

Get provider spaces

Returns the list of spaces supported by the provider.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();
apiInstance.getProviderSpaces().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProviderSpaces**](ProviderSpaces.md)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be  returned. 

apiInstance.getProviderWorkerStatus(host).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be  returned.  | 

### Return type

[**ServiceStatusHost**](ServiceStatusHost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderWorkersStatus"></a>
# **getProviderWorkersStatus**
> ServiceStatus getProviderWorkersStatus()

Get provider cluster workers status

Returns status of cluster worker service on each host where it has been  deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();
apiInstance.getProviderWorkersStatus().then(function(data) {
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

<a name="getSpaceDetails"></a>
# **getSpaceDetails**
> SpaceDetails getSpaceDetails(id)

Get space details

Returns details of space specified by space Id in the path. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space which details should be returned.

apiInstance.getSpaceDetails(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a space which details should be returned. | 

### Return type

[**SpaceDetails**](SpaceDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStorageDetails"></a>
# **getStorageDetails**
> ClusterStorages getStorageDetails(name)

Get storage details

Returns the details of the selected storage.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var name = "name_example"; // String | The name of a storage resource, which details should be returned. 

apiInstance.getStorageDetails(name).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of a storage resource, which details should be returned.  | 

### Return type

[**ClusterStorages**](ClusterStorages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStorages"></a>
# **getStorages**
> [ClusterStorages] getStorages()

Get storages

Returns the list of provider storage resources and their details.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();
apiInstance.getStorages().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ClusterStorages]**](ClusterStorages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyProvider"></a>
# **modifyProvider**
> modifyProvider(providerModifyRequest)

Modify provider details

Modifies basic provider details in the zone.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var providerModifyRequest = new Onepanel.ProviderModifyRequest(); // ProviderModifyRequest | New values for provider configuration parameters which should be changed. 

apiInstance.modifyProvider(providerModifyRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerModifyRequest** | [**ProviderModifyRequest**](ProviderModifyRequest.md)| New values for provider configuration parameters which should be changed.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="modifyStorage"></a>
# **modifyStorage**
> modifyStorage(name, storageModifyRequest)

Modify storage details

Modifies basic storage details, such as operation timeout.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var name = "name_example"; // String | The name of a storage resource, which details should be returned. 

var storageModifyRequest = new Onepanel.StorageModifyRequest(); // StorageModifyRequest | New values for storage configuration parameters which should be changed. 

apiInstance.modifyStorage(name, storageModifyRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of a storage resource, which details should be returned.  | 
 **storageModifyRequest** | [**StorageModifyRequest**](StorageModifyRequest.md)| New values for storage configuration parameters which should be changed.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();
apiInstance.removeProvider().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="revokeSpaceSupport"></a>
# **revokeSpaceSupport**
> revokeSpaceSupport(id)

Revoke space support for a space.

Allows provider to revoke storage support for a specific space. Users with access to this space will no longer be able to store data on the resources of this provider.  

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space to be removed.

apiInstance.revokeSpaceSupport(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a space to be removed. | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which database service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the database service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.startStopProviderDatabase(host, opts).then(function() {
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

<a name="startStopProviderDatabases"></a>
# **startStopProviderDatabases**
> startStopProviderDatabases(opts)

Start/stop provider databases

Starts or stops database service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the database service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.startStopProviderDatabases(opts).then(function() {
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

<a name="startStopProviderManager"></a>
# **startStopProviderManager**
> startStopProviderManager(host, opts)

Start/stop provider cluster manager

Starts or stops cluster manager service on the selected hosts in the local  deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster manager service. The service  will be started or stopped in order to match the requested state. 
};
apiInstance.startStopProviderManager(host, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster manager service status should be changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster manager service. The service  will be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state. 
};
apiInstance.startStopProviderManagers(opts).then(function() {
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

<a name="startStopProviderWorker"></a>
# **startStopProviderWorker**
> startStopProviderWorker(host, opts)

Start/stop provider cluster worker

Starts or stops cluster worker service on the selected host in the  local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be  changed. 

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster worker service. The service will  be started or stopped in order to match the requested state. 
};
apiInstance.startStopProviderWorker(host, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| The name of a host for which cluster worker service status should be  changed.  | 
 **started** | **Boolean**| Defines the intended state of the cluster worker service. The service will  be started or stopped in order to match the requested state.  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Onepanel.OneproviderApi();

var opts = { 
  'started': true // Boolean | Defines the intended state of the cluster worker service. The service  will be started or stopped in order to match the requested state. 
};
apiInstance.startStopProviderWorkers(opts).then(function() {
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

<a name="supportSpace"></a>
# **supportSpace**
> supportSpace(spaceSupportRequest)

Support or create space

Supports an existing space or creates a new space and automatically  supports it. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var spaceSupportRequest = new Onepanel.SpaceSupportRequest(); // SpaceSupportRequest | Specification of the space support request including name of the space, size and support token. 

apiInstance.supportSpace(spaceSupportRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceSupportRequest** | [**SpaceSupportRequest**](SpaceSupportRequest.md)| Specification of the space support request including name of the space, size and support token.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

