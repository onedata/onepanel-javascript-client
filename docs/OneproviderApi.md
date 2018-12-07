# Onepanel.OneproviderApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCephManagers**](OneproviderApi.md#addCephManagers) | **POST** /provider/ceph/managers | Add managers to ceph cluster
[**addCephMonitors**](OneproviderApi.md#addCephMonitors) | **POST** /provider/ceph/monitors | Add monitors to ceph cluster
[**addCephOsds**](OneproviderApi.md#addCephOsds) | **POST** /provider/ceph/osds | Add OSDs to Ceph cluster
[**addProvider**](OneproviderApi.md#addProvider) | **POST** /provider | Register provider
[**addProviderDatabases**](OneproviderApi.md#addProviderDatabases) | **POST** /provider/databases | Deploy provider databases
[**addProviderManagers**](OneproviderApi.md#addProviderManagers) | **POST** /provider/managers | Add provider cluster managers
[**addProviderWorkers**](OneproviderApi.md#addProviderWorkers) | **POST** /provider/workers | Add provider cluster workers
[**addStorage**](OneproviderApi.md#addStorage) | **POST** /provider/storages | Add storage
[**configureCeph**](OneproviderApi.md#configureCeph) | **POST** /provider/ceph/ | Configure Ceph cluster
[**configureProvider**](OneproviderApi.md#configureProvider) | **POST** /provider/configuration | Configure provider deployment
[**getBlockDevices**](OneproviderApi.md#getBlockDevices) | **GET** /provider/ceph/preflight/block_devices | Get block devices for Ceph OSD
[**getCephManager**](OneproviderApi.md#getCephManager) | **GET** /provider/ceph/managers/{id} | Get ceph manager
[**getCephManagers**](OneproviderApi.md#getCephManagers) | **GET** /provider/ceph/managers | Get ceph manager
[**getCephMonitor**](OneproviderApi.md#getCephMonitor) | **GET** /provider/ceph/monitors/{id} | Get ceph monitor
[**getCephMonitors**](OneproviderApi.md#getCephMonitors) | **GET** /provider/ceph/monitors | Get Ceph monitor
[**getCephOsd**](OneproviderApi.md#getCephOsd) | **GET** /provider/ceph/osds/{id} | Get ceph OSD
[**getCephOsdUsage**](OneproviderApi.md#getCephOsdUsage) | **GET** /provider/ceph/osds/{id}/usage | Get space usage details for specific osd.
[**getCephOsds**](OneproviderApi.md#getCephOsds) | **GET** /provider/ceph/osds | Get Ceph OSDs list.
[**getCephParams**](OneproviderApi.md#getCephParams) | **GET** /provider/ceph/ | Get global params
[**getCephPool**](OneproviderApi.md#getCephPool) | **GET** /provider/ceph/pools/{name} | Get details of a Ceph pool.
[**getCephPoolUsage**](OneproviderApi.md#getCephPoolUsage) | **GET** /provider/ceph/pools/{name}/usage | Get space usage details for specific pool.
[**getCephPools**](OneproviderApi.md#getCephPools) | **GET** /provider/ceph/pools | Get list of ceph pools
[**getCephStatus**](OneproviderApi.md#getCephStatus) | **GET** /provider/ceph/status | Get Ceph cluster health
[**getCephUsage**](OneproviderApi.md#getCephUsage) | **GET** /provider/ceph/usage | Get Ceph storage space usage.
[**getNextOsdId**](OneproviderApi.md#getNextOsdId) | **GET** /provider/ceph/preflight/next_osd_id | @fixme
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
[**removeCephManager**](OneproviderApi.md#removeCephManager) | **DELETE** /provider/ceph/managers/{id} | Purge Ceph manager.
[**removeCephMonitor**](OneproviderApi.md#removeCephMonitor) | **DELETE** /provider/ceph/monitors/{id} | Purge Ceph monitor.
[**removeCephOsd**](OneproviderApi.md#removeCephOsd) | **DELETE** /provider/ceph/osds/{id} | Purge Ceph OSD.
[**removeProvider**](OneproviderApi.md#removeProvider) | **DELETE** /provider | Unregister provider
[**revokeSpaceSupport**](OneproviderApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space
[**startStopProviderDatabase**](OneproviderApi.md#startStopProviderDatabase) | **PATCH** /provider/databases/{host} | Start/stop provider database
[**startStopProviderDatabases**](OneproviderApi.md#startStopProviderDatabases) | **PATCH** /provider/databases | Start/stop provider databases
[**startStopProviderManager**](OneproviderApi.md#startStopProviderManager) | **PATCH** /provider/managers/{host} | Start/stop provider cluster manager
[**startStopProviderManagers**](OneproviderApi.md#startStopProviderManagers) | **PATCH** /provider/managers | Start/stop provider cluster managers
[**startStopProviderWorker**](OneproviderApi.md#startStopProviderWorker) | **PATCH** /provider/workers/{host} | Start/stop provider cluster worker
[**startStopProviderWorkers**](OneproviderApi.md#startStopProviderWorkers) | **PATCH** /provider/workers | Start/stop provider cluster workers
[**supportSpace**](OneproviderApi.md#supportSpace) | **POST** /provider/spaces | Support space


<a name="addCephManagers"></a>
# **addCephManagers**
> addCephManagers(serviceHosts)

Add managers to ceph cluster

Deploys ceph manager services on given hosts.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var serviceHosts = new Onepanel.CephManagers(); // CephManagers | The service hosts configuration where managers should be deployed. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCephManagers(serviceHosts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**CephManagers**](CephManagers.md)| The service hosts configuration where managers should be deployed.  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addCephMonitors"></a>
# **addCephMonitors**
> addCephMonitors(serviceHosts)

Add monitors to ceph cluster

Deploys ceph monitor services on given hosts.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var serviceHosts = new Onepanel.CephMonitors(); // CephMonitors | List of Ceph Monitor specifications.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCephMonitors(serviceHosts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceHosts** | [**CephMonitors**](CephMonitors.md)| List of Ceph Monitor specifications. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="addCephOsds"></a>
# **addCephOsds**
> addCephOsds(osds)

Add OSDs to Ceph cluster

Deploys Ceph OSD services in the cluster.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var osds = new Onepanel.CephOsds(); // CephOsds | List of OSD specifications


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCephOsds(osds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **osds** | [**CephOsds**](CephOsds.md)| List of OSD specifications | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

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

<a name="configureCeph"></a>
# **configureCeph**
> configureCeph(cephCluster)

Configure Ceph cluster

Configures Ceph services. Any services and pools specified in the request are deployed. This request IS NOT idempotent.

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var cephCluster = new Onepanel.CephCluster(); // CephCluster | The Ceph cluster specification.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configureCeph(cephCluster, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cephCluster** | [**CephCluster**](CephCluster.md)| The Ceph cluster specification. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
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

<a name="getBlockDevices"></a>
# **getBlockDevices**
> BlockDevices getBlockDevices(host)

Get block devices for Ceph OSD



### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var host = "host_example"; // String | Host for which block devices should be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBlockDevices(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**| Host for which block devices should be returned. | 

### Return type

[**BlockDevices**](BlockDevices.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephManager"></a>
# **getCephManager**
> CephManager getCephManager(id)

Get ceph manager



### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | @fixme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCephManager(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| @fixme | 

### Return type

[**CephManager**](CephManager.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephManagers"></a>
# **getCephManagers**
> CephManagers getCephManagers()

Get ceph manager



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
apiInstance.getCephManagers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CephManagers**](CephManagers.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephMonitor"></a>
# **getCephMonitor**
> CephMonitor getCephMonitor(id)

Get ceph monitor



### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | @fixme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCephMonitor(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| @fixme | 

### Return type

[**CephMonitor**](CephMonitor.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephMonitors"></a>
# **getCephMonitors**
> CephMonitors getCephMonitors()

Get Ceph monitor



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
apiInstance.getCephMonitors(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CephMonitors**](CephMonitors.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephOsd"></a>
# **getCephOsd**
> CephOsd getCephOsd(id)

Get ceph OSD



### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | @fixme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCephOsd(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| @fixme | 

### Return type

[**CephOsd**](CephOsd.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephOsdUsage"></a>
# **getCephOsdUsage**
> DataUsage getCephOsdUsage(id)

Get space usage details for specific osd.

@fixme

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | The id of the OSD for usage check.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCephOsdUsage(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the OSD for usage check. | 

### Return type

[**DataUsage**](DataUsage.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephOsds"></a>
# **getCephOsds**
> CephOsds getCephOsds()

Get Ceph OSDs list.

Return list of Ceph OSD configurations. 

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
apiInstance.getCephOsds(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CephOsds**](CephOsds.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephParams"></a>
# **getCephParams**
> CephGlobalParams getCephParams()

Get global params

@fixme

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
apiInstance.getCephParams(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CephGlobalParams**](CephGlobalParams.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
 - **Accept**: Not defined

<a name="getCephPool"></a>
# **getCephPool**
> CephPool getCephPool(name)

Get details of a Ceph pool.

@fixme

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var name = "name_example"; // String | The name of the pool to describe.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCephPool(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the pool to describe. | 

### Return type

[**CephPool**](CephPool.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephPoolUsage"></a>
# **getCephPoolUsage**
> CephPoolUsage getCephPoolUsage(name)

Get space usage details for specific pool.

@fixme

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var name = "name_example"; // String | The name of the pool for usage check.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCephPoolUsage(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the pool for usage check. | 

### Return type

[**CephPoolUsage**](CephPoolUsage.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephPools"></a>
# **getCephPools**
> CephPools getCephPools()

Get list of ceph pools

@fixme

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
apiInstance.getCephPools(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CephPools**](CephPools.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephStatus"></a>
# **getCephStatus**
> CephStatus getCephStatus()

Get Ceph cluster health

@fixme

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
apiInstance.getCephStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CephStatus**](CephStatus.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCephUsage"></a>
# **getCephUsage**
> CephUsage getCephUsage()

Get Ceph storage space usage.

@fixme

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
apiInstance.getCephUsage(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CephUsage**](CephUsage.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNextOsdId"></a>
# **getNextOsdId**
> &#39;Number&#39; getNextOsdId()

@fixme

@fixme

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
apiInstance.getNextOsdId(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

[basic](../README.md#basic)

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
> SpaceId modifySpace(id, spaceModifyRequest)

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
    console.log('API called successfully. Returned data: ' + data);
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

[**SpaceId**](SpaceId.md)

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

<a name="removeCephManager"></a>
# **removeCephManager**
> removeCephManager(id)

Purge Ceph manager.

@fixme

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | @fixme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeCephManager(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| @fixme | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeCephMonitor"></a>
# **removeCephMonitor**
> removeCephMonitor(id)

Purge Ceph monitor.

@fixme

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | @fixme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeCephMonitor(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| @fixme | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeCephOsd"></a>
# **removeCephOsd**
> removeCephOsd(id)

Purge Ceph OSD.

@fixme

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.OneproviderApi();

var id = "id_example"; // String | @fixme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeCephOsd(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| @fixme | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
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

