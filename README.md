# onepanel

Onepanel - JavaScript client for onepanel
This is a Javascript client for [Onedata Onepanel](https://onedata.org) service.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 18.02.0-rc2
- Package version: 18.02.0-rc2
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://onedata.org/support](https://onedata.org/support)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install onepanel --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Onepanel = require('onepanel');

var defaultClient = Onepanel.ApiClient.instance;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME'
basic.password = 'YOUR PASSWORD'

var api = new Onepanel.OnepanelApi()

var userCreateRequest = new Onepanel.UserCreateRequest(); // {UserCreateRequest} The user configuration details.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addUser(userCreateRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/api/v3/onepanel*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Onepanel.OnepanelApi* | [**addUser**](docs/OnepanelApi.md#addUser) | **POST** /users | Create Onepanel user
*Onepanel.OnepanelApi* | [**createCluster**](docs/OnepanelApi.md#createCluster) | **POST** /hosts | Create or join cluster
*Onepanel.OnepanelApi* | [**createSession**](docs/OnepanelApi.md#createSession) | **POST** /session | Create Onepanel user session
*Onepanel.OnepanelApi* | [**getClusterCookie**](docs/OnepanelApi.md#getClusterCookie) | **GET** /cookie | Get cluster cookie
*Onepanel.OnepanelApi* | [**getClusterHosts**](docs/OnepanelApi.md#getClusterHosts) | **GET** /hosts | Get cluster or discovered hosts
*Onepanel.OnepanelApi* | [**getSession**](docs/OnepanelApi.md#getSession) | **GET** /session | Get Onepanel user session
*Onepanel.OnepanelApi* | [**getTaskStatus**](docs/OnepanelApi.md#getTaskStatus) | **GET** /tasks/{id} | Get background task result
*Onepanel.OnepanelApi* | [**getUser**](docs/OnepanelApi.md#getUser) | **GET** /users/{username} | Get Onepanel user details
*Onepanel.OnepanelApi* | [**getWebCert**](docs/OnepanelApi.md#getWebCert) | **GET** /web_cert | Get information about SSL certificates configuration and status.
*Onepanel.OnepanelApi* | [**modifyUser**](docs/OnepanelApi.md#modifyUser) | **PATCH** /users/{username} | Modify Onepanel user details
*Onepanel.OnepanelApi* | [**modifyWebCert**](docs/OnepanelApi.md#modifyWebCert) | **PATCH** /web_cert | Modify SSL certificate configuration
*Onepanel.OnepanelApi* | [**removeClusterHost**](docs/OnepanelApi.md#removeClusterHost) | **DELETE** /hosts/{host} | Remove host from cluster
*Onepanel.OnepanelApi* | [**removeSession**](docs/OnepanelApi.md#removeSession) | **DELETE** /session | Remove Onepanel user session
*Onepanel.OnepanelApi* | [**removeUser**](docs/OnepanelApi.md#removeUser) | **DELETE** /users/{username} | Remove Onepanel user
*Onepanel.OneproviderApi* | [**addProvider**](docs/OneproviderApi.md#addProvider) | **POST** /provider | Register provider
*Onepanel.OneproviderApi* | [**addProviderDatabases**](docs/OneproviderApi.md#addProviderDatabases) | **POST** /provider/databases | Deploy provider databases
*Onepanel.OneproviderApi* | [**addProviderManagers**](docs/OneproviderApi.md#addProviderManagers) | **POST** /provider/managers | Add provider cluster managers
*Onepanel.OneproviderApi* | [**addProviderWorkers**](docs/OneproviderApi.md#addProviderWorkers) | **POST** /provider/workers | Add provider cluster workers
*Onepanel.OneproviderApi* | [**addStorage**](docs/OneproviderApi.md#addStorage) | **POST** /provider/storages | Add storage
*Onepanel.OneproviderApi* | [**configureProvider**](docs/OneproviderApi.md#configureProvider) | **POST** /provider/configuration | Configure provider deployment
*Onepanel.OneproviderApi* | [**getProvider**](docs/OneproviderApi.md#getProvider) | **GET** /provider | Get provider details
*Onepanel.OneproviderApi* | [**getProviderClusterIps**](docs/OneproviderApi.md#getProviderClusterIps) | **GET** /provider/cluster_ips | Get provider cluster nodes IPs
*Onepanel.OneproviderApi* | [**getProviderConfiguration**](docs/OneproviderApi.md#getProviderConfiguration) | **GET** /provider/configuration | Get provider cluster configuration
*Onepanel.OneproviderApi* | [**getProviderDatabaseStatus**](docs/OneproviderApi.md#getProviderDatabaseStatus) | **GET** /provider/databases/{host} | Get provider database status
*Onepanel.OneproviderApi* | [**getProviderDatabasesStatus**](docs/OneproviderApi.md#getProviderDatabasesStatus) | **GET** /provider/databases | Get provider databases status
*Onepanel.OneproviderApi* | [**getProviderManagerStatus**](docs/OneproviderApi.md#getProviderManagerStatus) | **GET** /provider/managers/{host} | Get provider cluster manager status
*Onepanel.OneproviderApi* | [**getProviderManagersStatus**](docs/OneproviderApi.md#getProviderManagersStatus) | **GET** /provider/managers | Get provider cluster managers status
*Onepanel.OneproviderApi* | [**getProviderNagiosReport**](docs/OneproviderApi.md#getProviderNagiosReport) | **GET** /provider/nagios | Get provider nagios report
*Onepanel.OneproviderApi* | [**getProviderSpaceAutoCleaningReports**](docs/OneproviderApi.md#getProviderSpaceAutoCleaningReports) | **GET** /provider/spaces/{id}/auto_cleaning_reports | Get reports of space auto cleaning
*Onepanel.OneproviderApi* | [**getProviderSpaceAutoCleaningStatus**](docs/OneproviderApi.md#getProviderSpaceAutoCleaningStatus) | **GET** /provider/spaces/{id}/auto_cleaning_status | Get status of space auto cleaning
*Onepanel.OneproviderApi* | [**getProviderSpaceSyncStats**](docs/OneproviderApi.md#getProviderSpaceSyncStats) | **GET** /provider/spaces/{id}/sync | Get statistics of storage synchronization
*Onepanel.OneproviderApi* | [**getProviderSpaces**](docs/OneproviderApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
*Onepanel.OneproviderApi* | [**getProviderWorkerStatus**](docs/OneproviderApi.md#getProviderWorkerStatus) | **GET** /provider/workers/{host} | Get provider cluster worker status
*Onepanel.OneproviderApi* | [**getProviderWorkersStatus**](docs/OneproviderApi.md#getProviderWorkersStatus) | **GET** /provider/workers | Get provider cluster workers status
*Onepanel.OneproviderApi* | [**getSpaceDetails**](docs/OneproviderApi.md#getSpaceDetails) | **GET** /provider/spaces/{id} | Get space details
*Onepanel.OneproviderApi* | [**getStorageDetails**](docs/OneproviderApi.md#getStorageDetails) | **GET** /provider/storages/{id} | Get storage details
*Onepanel.OneproviderApi* | [**getStorages**](docs/OneproviderApi.md#getStorages) | **GET** /provider/storages | Get storages
*Onepanel.OneproviderApi* | [**modifyProvider**](docs/OneproviderApi.md#modifyProvider) | **PATCH** /provider | Modify provider details
*Onepanel.OneproviderApi* | [**modifyProviderClusterIps**](docs/OneproviderApi.md#modifyProviderClusterIps) | **PATCH** /provider/cluster_ips | Set external IPs of nodes in application config
*Onepanel.OneproviderApi* | [**modifySpace**](docs/OneproviderApi.md#modifySpace) | **PATCH** /provider/spaces/{id} | Modify space details
*Onepanel.OneproviderApi* | [**modifyStorage**](docs/OneproviderApi.md#modifyStorage) | **PATCH** /provider/storages/{id} | Modify storage details
*Onepanel.OneproviderApi* | [**providerSpaceStartCleaning**](docs/OneproviderApi.md#providerSpaceStartCleaning) | **POST** /provider/spaces/{id}/start_cleaning | Start space cleaning
*Onepanel.OneproviderApi* | [**removeProvider**](docs/OneproviderApi.md#removeProvider) | **DELETE** /provider | Unregister provider
*Onepanel.OneproviderApi* | [**revokeSpaceSupport**](docs/OneproviderApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space
*Onepanel.OneproviderApi* | [**startStopProviderDatabase**](docs/OneproviderApi.md#startStopProviderDatabase) | **PATCH** /provider/databases/{host} | Start/stop provider database
*Onepanel.OneproviderApi* | [**startStopProviderDatabases**](docs/OneproviderApi.md#startStopProviderDatabases) | **PATCH** /provider/databases | Start/stop provider databases
*Onepanel.OneproviderApi* | [**startStopProviderManager**](docs/OneproviderApi.md#startStopProviderManager) | **PATCH** /provider/managers/{host} | Start/stop provider cluster manager
*Onepanel.OneproviderApi* | [**startStopProviderManagers**](docs/OneproviderApi.md#startStopProviderManagers) | **PATCH** /provider/managers | Start/stop provider cluster managers
*Onepanel.OneproviderApi* | [**startStopProviderWorker**](docs/OneproviderApi.md#startStopProviderWorker) | **PATCH** /provider/workers/{host} | Start/stop provider cluster worker
*Onepanel.OneproviderApi* | [**startStopProviderWorkers**](docs/OneproviderApi.md#startStopProviderWorkers) | **PATCH** /provider/workers | Start/stop provider cluster workers
*Onepanel.OneproviderApi* | [**supportSpace**](docs/OneproviderApi.md#supportSpace) | **POST** /provider/spaces | Support space
*Onepanel.OnezoneApi* | [**addZoneDatabases**](docs/OnezoneApi.md#addZoneDatabases) | **POST** /zone/databases | Add zone databases
*Onepanel.OnezoneApi* | [**addZoneManagers**](docs/OnezoneApi.md#addZoneManagers) | **POST** /zone/managers | Add zone cluster managers
*Onepanel.OnezoneApi* | [**addZoneWorkers**](docs/OnezoneApi.md#addZoneWorkers) | **POST** /zone/workers | Add zone cluster workers
*Onepanel.OnezoneApi* | [**configureZone**](docs/OnezoneApi.md#configureZone) | **POST** /zone/configuration | Configure zone deployment
*Onepanel.OnezoneApi* | [**getZoneClusterIps**](docs/OnezoneApi.md#getZoneClusterIps) | **GET** /zone/cluster_ips | Get zone cluster nodes IPs
*Onepanel.OnezoneApi* | [**getZoneConfiguration**](docs/OnezoneApi.md#getZoneConfiguration) | **GET** /zone/configuration | Get zone cluster configuration
*Onepanel.OnezoneApi* | [**getZoneDatabaseStatus**](docs/OnezoneApi.md#getZoneDatabaseStatus) | **GET** /zone/databases/{host} | Get zone database status
*Onepanel.OnezoneApi* | [**getZoneDatabasesStatus**](docs/OnezoneApi.md#getZoneDatabasesStatus) | **GET** /zone/databases | Get zone databases status
*Onepanel.OnezoneApi* | [**getZoneManagerStatus**](docs/OnezoneApi.md#getZoneManagerStatus) | **GET** /zone/managers/{host} | Get zone cluster manager status
*Onepanel.OnezoneApi* | [**getZoneManagersStatus**](docs/OnezoneApi.md#getZoneManagersStatus) | **GET** /zone/managers | Get zone cluster managers status
*Onepanel.OnezoneApi* | [**getZoneNagiosReport**](docs/OnezoneApi.md#getZoneNagiosReport) | **GET** /zone/nagios | Get zone nagios report
*Onepanel.OnezoneApi* | [**getZoneWorkerStatus**](docs/OnezoneApi.md#getZoneWorkerStatus) | **GET** /zone/workers/{host} | Get zone cluster worker status
*Onepanel.OnezoneApi* | [**getZoneWorkersStatus**](docs/OnezoneApi.md#getZoneWorkersStatus) | **GET** /zone/workers | Get zone cluster workers status
*Onepanel.OnezoneApi* | [**modifyZoneClusterIps**](docs/OnezoneApi.md#modifyZoneClusterIps) | **PATCH** /zone/cluster_ips | Set external IPs of nodes in application config
*Onepanel.OnezoneApi* | [**startStopZoneDatabases**](docs/OnezoneApi.md#startStopZoneDatabases) | **PATCH** /zone/databases | Start/stop zone databases
*Onepanel.OnezoneApi* | [**startStopZoneDatabasesHost**](docs/OnezoneApi.md#startStopZoneDatabasesHost) | **PATCH** /zone/databases/{host} | Start/stop zone database
*Onepanel.OnezoneApi* | [**startStopZoneManager**](docs/OnezoneApi.md#startStopZoneManager) | **PATCH** /zone/managers/{host} | Start/stop zone cluster manager
*Onepanel.OnezoneApi* | [**startStopZoneManagers**](docs/OnezoneApi.md#startStopZoneManagers) | **PATCH** /zone/managers | Start/stop zone cluster managers
*Onepanel.OnezoneApi* | [**startStopZoneWorker**](docs/OnezoneApi.md#startStopZoneWorker) | **PATCH** /zone/workers/{host} | Start/stop zone cluster worker
*Onepanel.OnezoneApi* | [**startStopZoneWorkers**](docs/OnezoneApi.md#startStopZoneWorkers) | **PATCH** /zone/workers | Start/stop zone cluster workers


## Documentation for Models

 - [Onepanel.ClusterConfigurationDetails](docs/ClusterConfigurationDetails.md)
 - [Onepanel.ClusterDatabases](docs/ClusterDatabases.md)
 - [Onepanel.ClusterIps](docs/ClusterIps.md)
 - [Onepanel.ClusterManagers](docs/ClusterManagers.md)
 - [Onepanel.ClusterWorkers](docs/ClusterWorkers.md)
 - [Onepanel.Cookie](docs/Cookie.md)
 - [Onepanel.DatabaseHosts](docs/DatabaseHosts.md)
 - [Onepanel.Error](docs/Error.md)
 - [Onepanel.ManagerHosts](docs/ManagerHosts.md)
 - [Onepanel.ModifyClusterIps](docs/ModifyClusterIps.md)
 - [Onepanel.PanelConfiguration](docs/PanelConfiguration.md)
 - [Onepanel.PanelConfigurationUsers](docs/PanelConfigurationUsers.md)
 - [Onepanel.ProviderClusterConfiguration](docs/ProviderClusterConfiguration.md)
 - [Onepanel.ProviderConfiguration](docs/ProviderConfiguration.md)
 - [Onepanel.ProviderConfigurationDetails](docs/ProviderConfigurationDetails.md)
 - [Onepanel.ProviderConfigurationDetailsOneprovider](docs/ProviderConfigurationDetailsOneprovider.md)
 - [Onepanel.ProviderConfigurationOneprovider](docs/ProviderConfigurationOneprovider.md)
 - [Onepanel.ProviderConfigurationOnezone](docs/ProviderConfigurationOnezone.md)
 - [Onepanel.ProviderDetails](docs/ProviderDetails.md)
 - [Onepanel.ProviderModifyRequest](docs/ProviderModifyRequest.md)
 - [Onepanel.ProviderRegisterRequest](docs/ProviderRegisterRequest.md)
 - [Onepanel.ProviderSpaces](docs/ProviderSpaces.md)
 - [Onepanel.ProviderStorages](docs/ProviderStorages.md)
 - [Onepanel.ServiceDatabases](docs/ServiceDatabases.md)
 - [Onepanel.ServiceError](docs/ServiceError.md)
 - [Onepanel.ServiceHosts](docs/ServiceHosts.md)
 - [Onepanel.ServiceStatus](docs/ServiceStatus.md)
 - [Onepanel.ServiceStatusHost](docs/ServiceStatusHost.md)
 - [Onepanel.SessionDetails](docs/SessionDetails.md)
 - [Onepanel.SpaceAutoCleaning](docs/SpaceAutoCleaning.md)
 - [Onepanel.SpaceAutoCleaningReport](docs/SpaceAutoCleaningReport.md)
 - [Onepanel.SpaceAutoCleaningReportCollection](docs/SpaceAutoCleaningReportCollection.md)
 - [Onepanel.SpaceAutoCleaningSettings](docs/SpaceAutoCleaningSettings.md)
 - [Onepanel.SpaceAutoCleaningStatus](docs/SpaceAutoCleaningStatus.md)
 - [Onepanel.SpaceDetails](docs/SpaceDetails.md)
 - [Onepanel.SpaceFilesPopularity](docs/SpaceFilesPopularity.md)
 - [Onepanel.SpaceModifyRequest](docs/SpaceModifyRequest.md)
 - [Onepanel.SpaceSupportRequest](docs/SpaceSupportRequest.md)
 - [Onepanel.SpaceSyncStats](docs/SpaceSyncStats.md)
 - [Onepanel.StorageCreateRequest](docs/StorageCreateRequest.md)
 - [Onepanel.StorageDetails](docs/StorageDetails.md)
 - [Onepanel.StorageImportDetails](docs/StorageImportDetails.md)
 - [Onepanel.StorageModifyRequest](docs/StorageModifyRequest.md)
 - [Onepanel.StorageUpdateDetails](docs/StorageUpdateDetails.md)
 - [Onepanel.TaskStatus](docs/TaskStatus.md)
 - [Onepanel.TimeStats](docs/TimeStats.md)
 - [Onepanel.TimeStatsCollection](docs/TimeStatsCollection.md)
 - [Onepanel.UserCreateRequest](docs/UserCreateRequest.md)
 - [Onepanel.UserDetails](docs/UserDetails.md)
 - [Onepanel.UserModifyRequest](docs/UserModifyRequest.md)
 - [Onepanel.WebCert](docs/WebCert.md)
 - [Onepanel.WebCertModifyRequest](docs/WebCertModifyRequest.md)
 - [Onepanel.WebCertPaths](docs/WebCertPaths.md)
 - [Onepanel.WorkerHosts](docs/WorkerHosts.md)
 - [Onepanel.ZoneClusterConfiguration](docs/ZoneClusterConfiguration.md)
 - [Onepanel.ZoneClusterConfigurationNodes](docs/ZoneClusterConfigurationNodes.md)
 - [Onepanel.ZoneConfiguration](docs/ZoneConfiguration.md)
 - [Onepanel.ZoneConfigurationDetails](docs/ZoneConfigurationDetails.md)
 - [Onepanel.ZoneConfigurationDetailsOnezone](docs/ZoneConfigurationDetailsOnezone.md)
 - [Onepanel.ZoneConfigurationOnezone](docs/ZoneConfigurationOnezone.md)
 - [Onepanel.Ceph](docs/Ceph.md)
 - [Onepanel.Glusterfs](docs/Glusterfs.md)
 - [Onepanel.Nulldevice](docs/Nulldevice.md)
 - [Onepanel.Posix](docs/Posix.md)
 - [Onepanel.S3](docs/S3.md)
 - [Onepanel.Swift](docs/Swift.md)


## Documentation for Authorization


### basic

- **Type**: HTTP basic authentication

