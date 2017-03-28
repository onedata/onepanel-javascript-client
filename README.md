# onepanel

Onepanel - JavaScript client for onepanel
# Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0.0-dev
- Package version: 3.0.0-dev
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
*Onepanel.OnepanelApi* | [**getClusterCookie**](docs/OnepanelApi.md#getClusterCookie) | **GET** /cookie | Get cluster cookie
*Onepanel.OnepanelApi* | [**getClusterHosts**](docs/OnepanelApi.md#getClusterHosts) | **GET** /hosts | Get cluster or discovered hosts
*Onepanel.OnepanelApi* | [**getTaskStatus**](docs/OnepanelApi.md#getTaskStatus) | **GET** /tasks/{id} | Get background task result
*Onepanel.OnepanelApi* | [**getUser**](docs/OnepanelApi.md#getUser) | **GET** /users/{username} | Get Onepanel user details
*Onepanel.OnepanelApi* | [**modifyUser**](docs/OnepanelApi.md#modifyUser) | **PATCH** /users/{username} | Modify Onepanel user details
*Onepanel.OnepanelApi* | [**removeClusterHost**](docs/OnepanelApi.md#removeClusterHost) | **DELETE** /hosts/{host} | Remove host from cluster
*Onepanel.OnepanelApi* | [**removeUser**](docs/OnepanelApi.md#removeUser) | **DELETE** /users/{username} | Remove Onepanel user
*Onepanel.OneproviderApi* | [**addProvider**](docs/OneproviderApi.md#addProvider) | **POST** /provider | Register provider
*Onepanel.OneproviderApi* | [**addProviderDatabases**](docs/OneproviderApi.md#addProviderDatabases) | **POST** /provider/databases | Deploy provider databases
*Onepanel.OneproviderApi* | [**addProviderManagers**](docs/OneproviderApi.md#addProviderManagers) | **POST** /provider/managers | Add provider cluster managers
*Onepanel.OneproviderApi* | [**addProviderWorkers**](docs/OneproviderApi.md#addProviderWorkers) | **POST** /provider/workers | Add provider cluster workers
*Onepanel.OneproviderApi* | [**addStorage**](docs/OneproviderApi.md#addStorage) | **POST** /provider/storages | Add storage.
*Onepanel.OneproviderApi* | [**configureProvider**](docs/OneproviderApi.md#configureProvider) | **POST** /provider/configuration | Configure provider deployment
*Onepanel.OneproviderApi* | [**getProvider**](docs/OneproviderApi.md#getProvider) | **GET** /provider | Get provider details
*Onepanel.OneproviderApi* | [**getProviderConfiguration**](docs/OneproviderApi.md#getProviderConfiguration) | **GET** /provider/configuration | Get provider cluster configuration
*Onepanel.OneproviderApi* | [**getProviderDatabaseStatus**](docs/OneproviderApi.md#getProviderDatabaseStatus) | **GET** /provider/databases/{host} | Get provider database status
*Onepanel.OneproviderApi* | [**getProviderDatabasesStatus**](docs/OneproviderApi.md#getProviderDatabasesStatus) | **GET** /provider/databases | Get provider databases status
*Onepanel.OneproviderApi* | [**getProviderManagerStatus**](docs/OneproviderApi.md#getProviderManagerStatus) | **GET** /provider/managers/{host} | Get provider cluster manager status
*Onepanel.OneproviderApi* | [**getProviderManagersStatus**](docs/OneproviderApi.md#getProviderManagersStatus) | **GET** /provider/managers | Get provider cluster managers status
*Onepanel.OneproviderApi* | [**getProviderNagiosReport**](docs/OneproviderApi.md#getProviderNagiosReport) | **GET** /provider/nagios | Get provider nagios report
*Onepanel.OneproviderApi* | [**getProviderSpaces**](docs/OneproviderApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
*Onepanel.OneproviderApi* | [**getProviderWorkerStatus**](docs/OneproviderApi.md#getProviderWorkerStatus) | **GET** /provider/workers/{host} | Get provider cluster worker status
*Onepanel.OneproviderApi* | [**getProviderWorkersStatus**](docs/OneproviderApi.md#getProviderWorkersStatus) | **GET** /provider/workers | Get provider cluster workers status
*Onepanel.OneproviderApi* | [**getSpaceDetails**](docs/OneproviderApi.md#getSpaceDetails) | **GET** /provider/spaces/{id} | Get space details
*Onepanel.OneproviderApi* | [**getStorageDetails**](docs/OneproviderApi.md#getStorageDetails) | **GET** /provider/storages/{name} | Get storage details
*Onepanel.OneproviderApi* | [**getStorages**](docs/OneproviderApi.md#getStorages) | **GET** /provider/storages | Get storages
*Onepanel.OneproviderApi* | [**modifyProvider**](docs/OneproviderApi.md#modifyProvider) | **PATCH** /provider | Modify provider details
*Onepanel.OneproviderApi* | [**modifyStorage**](docs/OneproviderApi.md#modifyStorage) | **PATCH** /provider/storages/{name} | Modify storage details
*Onepanel.OneproviderApi* | [**removeProvider**](docs/OneproviderApi.md#removeProvider) | **DELETE** /provider | Unregister provider
*Onepanel.OneproviderApi* | [**revokeSpaceSupport**](docs/OneproviderApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space.
*Onepanel.OneproviderApi* | [**startStopProviderDatabase**](docs/OneproviderApi.md#startStopProviderDatabase) | **PATCH** /provider/databases/{host} | Start/stop provider database
*Onepanel.OneproviderApi* | [**startStopProviderDatabases**](docs/OneproviderApi.md#startStopProviderDatabases) | **PATCH** /provider/databases | Start/stop provider databases
*Onepanel.OneproviderApi* | [**startStopProviderManager**](docs/OneproviderApi.md#startStopProviderManager) | **PATCH** /provider/managers/{host} | Start/stop provider cluster manager
*Onepanel.OneproviderApi* | [**startStopProviderManagers**](docs/OneproviderApi.md#startStopProviderManagers) | **PATCH** /provider/managers | Start/stop provider cluster managers
*Onepanel.OneproviderApi* | [**startStopProviderWorker**](docs/OneproviderApi.md#startStopProviderWorker) | **PATCH** /provider/workers/{host} | Start/stop provider cluster worker
*Onepanel.OneproviderApi* | [**startStopProviderWorkers**](docs/OneproviderApi.md#startStopProviderWorkers) | **PATCH** /provider/workers | Start/stop provider cluster workers
*Onepanel.OneproviderApi* | [**supportSpace**](docs/OneproviderApi.md#supportSpace) | **POST** /provider/spaces | Create or support space
*Onepanel.OnezoneApi* | [**addZoneDatabases**](docs/OnezoneApi.md#addZoneDatabases) | **POST** /zone/databases | Add zone databases
*Onepanel.OnezoneApi* | [**addZoneManagers**](docs/OnezoneApi.md#addZoneManagers) | **POST** /zone/managers | Add zone cluster managers
*Onepanel.OnezoneApi* | [**addZoneWorkers**](docs/OnezoneApi.md#addZoneWorkers) | **POST** /zone/workers | Add zone cluster workers
*Onepanel.OnezoneApi* | [**configureZone**](docs/OnezoneApi.md#configureZone) | **POST** /zone/configuration | Configure zone deployment
*Onepanel.OnezoneApi* | [**getZoneConfiguration**](docs/OnezoneApi.md#getZoneConfiguration) | **GET** /zone/configuration | Get zone cluster configuration
*Onepanel.OnezoneApi* | [**getZoneDatabaseStatus**](docs/OnezoneApi.md#getZoneDatabaseStatus) | **GET** /zone/databases/{host} | Get zone database status
*Onepanel.OnezoneApi* | [**getZoneDatabasesStatus**](docs/OnezoneApi.md#getZoneDatabasesStatus) | **GET** /zone/databases | Get zone databases status
*Onepanel.OnezoneApi* | [**getZoneManagerStatus**](docs/OnezoneApi.md#getZoneManagerStatus) | **GET** /zone/managers/{host} | Get zone cluster manager status
*Onepanel.OnezoneApi* | [**getZoneManagersStatus**](docs/OnezoneApi.md#getZoneManagersStatus) | **GET** /zone/managers | Get zone cluster managers status
*Onepanel.OnezoneApi* | [**getZoneNagiosReport**](docs/OnezoneApi.md#getZoneNagiosReport) | **GET** /zone/nagios | Get zone nagios report
*Onepanel.OnezoneApi* | [**getZoneWorkerStatus**](docs/OnezoneApi.md#getZoneWorkerStatus) | **GET** /zone/workers/{host} | Get zone cluster worker status
*Onepanel.OnezoneApi* | [**getZoneWorkersStatus**](docs/OnezoneApi.md#getZoneWorkersStatus) | **GET** /zone/workers | Get zone cluster workers status
*Onepanel.OnezoneApi* | [**startStopZoneDatabases**](docs/OnezoneApi.md#startStopZoneDatabases) | **PATCH** /zone/databases | Start/stop zone databases
*Onepanel.OnezoneApi* | [**startStopZoneDatabasesHost**](docs/OnezoneApi.md#startStopZoneDatabasesHost) | **PATCH** /zone/databases/{host} | Start/stop zone database
*Onepanel.OnezoneApi* | [**startStopZoneManager**](docs/OnezoneApi.md#startStopZoneManager) | **PATCH** /zone/managers/{host} | Start/stop zone cluster manager
*Onepanel.OnezoneApi* | [**startStopZoneManagers**](docs/OnezoneApi.md#startStopZoneManagers) | **PATCH** /zone/managers | Start/stop zone cluster managers
*Onepanel.OnezoneApi* | [**startStopZoneWorker**](docs/OnezoneApi.md#startStopZoneWorker) | **PATCH** /zone/workers/{host} | Start/stop zone cluster worker
*Onepanel.OnezoneApi* | [**startStopZoneWorkers**](docs/OnezoneApi.md#startStopZoneWorkers) | **PATCH** /zone/workers | Start/stop zone cluster workers


## Documentation for Models

 - [Onepanel.Ceph](docs/Ceph.md)
 - [Onepanel.ClusterDatabases](docs/ClusterDatabases.md)
 - [Onepanel.ClusterManagers](docs/ClusterManagers.md)
 - [Onepanel.ClusterStorages](docs/ClusterStorages.md)
 - [Onepanel.ClusterStoragesList](docs/ClusterStoragesList.md)
 - [Onepanel.ClusterWorkers](docs/ClusterWorkers.md)
 - [Onepanel.Cookie](docs/Cookie.md)
 - [Onepanel.Error](docs/Error.md)
 - [Onepanel.ManagerHosts](docs/ManagerHosts.md)
 - [Onepanel.POSIX](docs/POSIX.md)
 - [Onepanel.PanelConfiguration](docs/PanelConfiguration.md)
 - [Onepanel.PanelConfigurationUsers](docs/PanelConfigurationUsers.md)
 - [Onepanel.ProviderClusterConfiguration](docs/ProviderClusterConfiguration.md)
 - [Onepanel.ProviderConfiguration](docs/ProviderConfiguration.md)
 - [Onepanel.ProviderConfigurationOneprovider](docs/ProviderConfigurationOneprovider.md)
 - [Onepanel.ProviderConfigurationOnezone](docs/ProviderConfigurationOnezone.md)
 - [Onepanel.ProviderDetails](docs/ProviderDetails.md)
 - [Onepanel.ProviderModifyRequest](docs/ProviderModifyRequest.md)
 - [Onepanel.ProviderRegisterRequest](docs/ProviderRegisterRequest.md)
 - [Onepanel.ProviderSpaces](docs/ProviderSpaces.md)
 - [Onepanel.S3](docs/S3.md)
 - [Onepanel.ServiceDatabases](docs/ServiceDatabases.md)
 - [Onepanel.ServiceError](docs/ServiceError.md)
 - [Onepanel.ServiceHosts](docs/ServiceHosts.md)
 - [Onepanel.ServiceStatus](docs/ServiceStatus.md)
 - [Onepanel.ServiceStatusHost](docs/ServiceStatusHost.md)
 - [Onepanel.SpaceDetails](docs/SpaceDetails.md)
 - [Onepanel.SpaceSupportRequest](docs/SpaceSupportRequest.md)
 - [Onepanel.StorageModifyRequest](docs/StorageModifyRequest.md)
 - [Onepanel.Swift](docs/Swift.md)
 - [Onepanel.TaskStatus](docs/TaskStatus.md)
 - [Onepanel.UserCreateRequest](docs/UserCreateRequest.md)
 - [Onepanel.UserDetails](docs/UserDetails.md)
 - [Onepanel.UserModifyRequest](docs/UserModifyRequest.md)
 - [Onepanel.ZoneClusterConfiguration](docs/ZoneClusterConfiguration.md)
 - [Onepanel.ZoneClusterConfigurationNodes](docs/ZoneClusterConfigurationNodes.md)
 - [Onepanel.ZoneConfiguration](docs/ZoneConfiguration.md)
 - [Onepanel.ZoneConfigurationOnezone](docs/ZoneConfigurationOnezone.md)


## Documentation for Authorization


### basic

- **Type**: HTTP basic authentication

