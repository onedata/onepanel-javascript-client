# Onepanel.OneproviderApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProvider**](OneproviderApi.md#deleteProvider) | **DELETE** /provider | Unregister provider
[**deleteProviderSpacesId**](OneproviderApi.md#deleteProviderSpacesId) | **DELETE** /provider/spaces/{id} | Revoke space support
[**getProvider**](OneproviderApi.md#getProvider) | **GET** /provider | Get provider details
[**getProviderConfiguration**](OneproviderApi.md#getProviderConfiguration) | **GET** /provider/configuration | Get provider cluster configuration
[**getProviderDatabases**](OneproviderApi.md#getProviderDatabases) | **GET** /provider/databases | Get provider databases status
[**getProviderDatabasesHost**](OneproviderApi.md#getProviderDatabasesHost) | **GET** /provider/databases/{host} | Get provider database status
[**getProviderManagers**](OneproviderApi.md#getProviderManagers) | **GET** /provider/managers | Get provider cluster managers status
[**getProviderManagersHost**](OneproviderApi.md#getProviderManagersHost) | **GET** /provider/managers/{host} | Get provider cluster manager status
[**getProviderSpaces**](OneproviderApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
[**getProviderSpacesId**](OneproviderApi.md#getProviderSpacesId) | **GET** /provider/spaces/{id} | Get space details
[**getProviderStorages**](OneproviderApi.md#getProviderStorages) | **GET** /provider/storages | Get storages
[**getProviderStoragesName**](OneproviderApi.md#getProviderStoragesName) | **GET** /provider/storages/{name} | Get storage details
[**getProviderWorkers**](OneproviderApi.md#getProviderWorkers) | **GET** /provider/workers | Get provider cluster workers status
[**getProviderWorkersHost**](OneproviderApi.md#getProviderWorkersHost) | **GET** /provider/workers/{host} | Get provider cluster worker status
[**patchProvider**](OneproviderApi.md#patchProvider) | **PATCH** /provider | Modify provider details
[**patchProviderDatabases**](OneproviderApi.md#patchProviderDatabases) | **PATCH** /provider/databases | Start/stop provider databases
[**patchProviderDatabasesHost**](OneproviderApi.md#patchProviderDatabasesHost) | **PATCH** /provider/databases/{host} | Start/stop provider database
[**patchProviderManagers**](OneproviderApi.md#patchProviderManagers) | **PATCH** /provider/managers | Start/stop provider cluster managers
[**patchProviderManagersHost**](OneproviderApi.md#patchProviderManagersHost) | **PATCH** /provider/managers/{host} | Start/stop provider cluster manager
[**patchProviderWorkers**](OneproviderApi.md#patchProviderWorkers) | **PATCH** /provider/workers | Start/stop provider cluster workers
[**patchProviderWorkersHost**](OneproviderApi.md#patchProviderWorkersHost) | **PATCH** /provider/workers/{host} | Start/stop provider cluster worker
[**putProvider**](OneproviderApi.md#putProvider) | **POST** /provider | Register provider
[**putProviderConfiguration**](OneproviderApi.md#putProviderConfiguration) | **POST** /provider/configuration | Configure provider deployment
[**putProviderDatabases**](OneproviderApi.md#putProviderDatabases) | **POST** /provider/databases | Deploy provider databases
[**putProviderManagers**](OneproviderApi.md#putProviderManagers) | **POST** /provider/managers | Deploy provider cluster managers
[**putProviderSpaces**](OneproviderApi.md#putProviderSpaces) | **POST** /provider/spaces | Create or support space
[**putProviderStorages**](OneproviderApi.md#putProviderStorages) | **POST** /provider/storages | Configure storage
[**putProviderWorkers**](OneproviderApi.md#putProviderWorkers) | **POST** /provider/workers | Deploy provider cluster workers


<a name="deleteProvider"></a>
# **deleteProvider**
> deleteProvider()

Unregister provider

Unregisters provider from the zone.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProvider(callback);
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

<a name="deleteProviderSpacesId"></a>
# **deleteProviderSpacesId**
> deleteProviderSpacesId(id)

Revoke space support

Revokes support for a space.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space to be removed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProviderSpacesId(id, callback);
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
 - **Accept**: application/json

<a name="getProvider"></a>
# **getProvider**
> ProviderDetails getProvider()

Get provider details

Returns the basic configuration information of the provider.

### Example
```javascript
var Onepanel = require('onepanel');

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

[**ProviderConfiguration**](ProviderConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderDatabases"></a>
# **getProviderDatabases**
> ServiceStatus getProviderDatabases()

Get provider databases status

Returns status of database service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderDatabases(callback);
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

<a name="getProviderDatabasesHost"></a>
# **getProviderDatabasesHost**
> ServiceStatusHost getProviderDatabasesHost(host)

Get provider database status

Returns status of database service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which database service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderDatabasesHost(host, callback);
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

<a name="getProviderManagers"></a>
# **getProviderManagers**
> ServiceStatus getProviderManagers()

Get provider cluster managers status

Returns status of cluster manager service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderManagers(callback);
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

<a name="getProviderManagersHost"></a>
# **getProviderManagersHost**
> ServiceStatusHost getProviderManagersHost(host)

Get provider cluster manager status

Returns status of cluster manager service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which cluster manager service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderManagersHost(host, callback);
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

<a name="getProviderSpaces"></a>
# **getProviderSpaces**
> ProviderSpaces getProviderSpaces()

Get provider spaces

Returns the collection of spaces supported by a provider.

### Example
```javascript
var Onepanel = require('onepanel');

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviderSpacesId"></a>
# **getProviderSpacesId**
> SpaceDetails getProviderSpacesId(id)

Get space details

Returns space details.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The ID of a space which details should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderSpacesId(id, callback);
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

<a name="getProviderStorages"></a>
# **getProviderStorages**
> [ClusterStorages] getProviderStorages()

Get storages

Returns the list of provider storage resources and their details.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderStorages(callback);
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

<a name="getProviderStoragesName"></a>
# **getProviderStoragesName**
> ClusterStorages getProviderStoragesName(name)

Get storage details

Returns the details of the selected storage.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var name = "name_example"; // String | The name of a storage resource, which details should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderStoragesName(name, callback);
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

<a name="getProviderWorkers"></a>
# **getProviderWorkers**
> ServiceStatus getProviderWorkers()

Get provider cluster workers status

Returns status of cluster worker service on each host where it has been deployed. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderWorkers(callback);
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

<a name="getProviderWorkersHost"></a>
# **getProviderWorkersHost**
> ServiceStatusHost getProviderWorkersHost(host)

Get provider cluster worker status

Returns status of cluster worker service on the selected host.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | The name of a host for which cluster worker service status should be returned. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderWorkersHost(host, callback);
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

<a name="patchProvider"></a>
# **patchProvider**
> patchProvider(providerModifyRequest)

Modify provider details

Modifies basic provider details in the zone.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var providerModifyRequest = new Onepanel.ProviderModifyRequest(); // ProviderModifyRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.patchProvider(providerModifyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerModifyRequest** | [**ProviderModifyRequest**](ProviderModifyRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="patchProviderDatabases"></a>
# **patchProviderDatabases**
> patchProviderDatabases(opts)

Start/stop provider databases

Starts or stops database service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

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
apiInstance.patchProviderDatabases(opts, callback);
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

<a name="patchProviderDatabasesHost"></a>
# **patchProviderDatabasesHost**
> patchProviderDatabasesHost(host, opts)

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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.patchProviderDatabasesHost(host, opts, callback);
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

<a name="patchProviderManagers"></a>
# **patchProviderManagers**
> patchProviderManagers(opts)

Start/stop provider cluster managers

Starts or stops cluster manager service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

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
apiInstance.patchProviderManagers(opts, callback);
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

<a name="patchProviderManagersHost"></a>
# **patchProviderManagersHost**
> patchProviderManagersHost(host, opts)

Start/stop provider cluster manager

Starts or stops cluster manager service on the selected hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

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
apiInstance.patchProviderManagersHost(host, opts, callback);
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

<a name="patchProviderWorkers"></a>
# **patchProviderWorkers**
> patchProviderWorkers(opts)

Start/stop provider cluster workers

Starts or stops cluster worker service on all hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

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
apiInstance.patchProviderWorkers(opts, callback);
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

<a name="patchProviderWorkersHost"></a>
# **patchProviderWorkersHost**
> patchProviderWorkersHost(host, opts)

Start/stop provider cluster worker

Starts or stops cluster worker service on the selected hosts in the local deployment. 

### Example
```javascript
var Onepanel = require('onepanel');

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
apiInstance.patchProviderWorkersHost(host, opts, callback);
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

<a name="putProvider"></a>
# **putProvider**
> putProvider(providerRegisterRequest)

Register provider

Registers provider in the zone.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var providerRegisterRequest = new Onepanel.ProviderRegisterRequest(); // ProviderRegisterRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putProvider(providerRegisterRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerRegisterRequest** | [**ProviderRegisterRequest**](ProviderRegisterRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="putProviderConfiguration"></a>
# **putProviderConfiguration**
> putProviderConfiguration(providerConfiguration)

Configure provider deployment

Configures and starts provider services, such as database, cluster manager and cluster worker. Depending on the configuration, sets up provider storage and registers in the zone.  This request can be executed unauthorized as long as there are no admin users. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var providerConfiguration = new Onepanel.ProviderConfiguration(); // ProviderConfiguration | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putProviderConfiguration(providerConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerConfiguration** | [**ProviderConfiguration**](ProviderConfiguration.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="putProviderDatabases"></a>
# **putProviderDatabases**
> putProviderDatabases(serviceHosts)

Deploy provider databases

Deploys a database service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var serviceHosts = new Onepanel.ServiceDatabases(); // ServiceDatabases | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putProviderDatabases(serviceHosts, callback);
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

<a name="putProviderManagers"></a>
# **putProviderManagers**
> putProviderManagers(managerHosts)

Deploy provider cluster managers

Deploys a cluster manager service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var managerHosts = new Onepanel.ManagerHosts(); // ManagerHosts | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putProviderManagers(managerHosts, callback);
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

<a name="putProviderSpaces"></a>
# **putProviderSpaces**
> putProviderSpaces(spaceSupportRequest)

Create or support space

Supports an existing space or creates a new space and automatically supports it. 

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var spaceSupportRequest = new Onepanel.SpaceSupportRequest(); // SpaceSupportRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putProviderSpaces(spaceSupportRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceSupportRequest** | [**SpaceSupportRequest**](SpaceSupportRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putProviderStorages"></a>
# **putProviderStorages**
> putProviderStorages(clusterStoragesList)

Configure storage

Adds a storage to the provider deployment.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var clusterStoragesList = new Onepanel.ClusterStoragesList(); // ClusterStoragesList | The list of configuration details of storages to be added to the provider deployment. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putProviderStorages(clusterStoragesList, callback);
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

<a name="putProviderWorkers"></a>
# **putProviderWorkers**
> putProviderWorkers(serviceHosts)

Deploy provider cluster workers

Deploys a cluster worker service on provided hosts.

### Example
```javascript
var Onepanel = require('onepanel');

var apiInstance = new Onepanel.OneproviderApi();

var serviceHosts = new Onepanel.ServiceHosts(); // ServiceHosts | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putProviderWorkers(serviceHosts, callback);
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

