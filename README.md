# onepanel

Onepanel - JavaScript client for onepanel
This is a Javascript client for [Onedata Onepanel](https://onedata.org) service.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 19.02.1
- Package version: 19.02.1
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

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix['X-Auth-Token'] = "Token"

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix['Authorization: Bearer'] = "Token"

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME'
basic.password = 'YOUR PASSWORD'

var api = new Onepanel.OnepanelApi()

var hostAddRequest = new Onepanel.HostAddRequest(); // {HostAddRequest} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addClusterHost(hostAddRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/api/v3/onepanel*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Onepanel.OnepanelApi* | [**addClusterHost**](docs/OnepanelApi.md#addClusterHost) | **POST** /hosts | Adds given host to the cluster
*Onepanel.OnepanelApi* | [**checkDns**](docs/OnepanelApi.md#checkDns) | **GET** /dns_check | Check correctness of DNS entries for the cluster&#39;s domain.
*Onepanel.OnepanelApi* | [**createInviteToken**](docs/OnepanelApi.md#createInviteToken) | **POST** /invite_token | Create node invite token
*Onepanel.OnepanelApi* | [**createUserInviteToken**](docs/OnepanelApi.md#createUserInviteToken) | **POST** /cluster/invite_user_token | Generate cluster invitation token for a user
*Onepanel.OnepanelApi* | [**getCluster**](docs/OnepanelApi.md#getCluster) | **GET** /user/clusters/{id} | Get details of a user&#39;s cluster
*Onepanel.OnepanelApi* | [**getClusterCookie**](docs/OnepanelApi.md#getClusterCookie) | **GET** /cookie | Get cluster cookie
*Onepanel.OnepanelApi* | [**getClusterHosts**](docs/OnepanelApi.md#getClusterHosts) | **GET** /hosts | Get cluster hosts
*Onepanel.OnepanelApi* | [**getClusterMembersSummary**](docs/OnepanelApi.md#getClusterMembersSummary) | **GET** /cluster/members_summary | Get summary of members in this cluster
*Onepanel.OnepanelApi* | [**getClusters**](docs/OnepanelApi.md#getClusters) | **GET** /user/clusters | List user&#39;s clusters
*Onepanel.OnepanelApi* | [**getConfiguration**](docs/OnepanelApi.md#getConfiguration) | **GET** /configuration | Get public configuration
*Onepanel.OnepanelApi* | [**getCurrentCluster**](docs/OnepanelApi.md#getCurrentCluster) | **GET** /cluster | Get details of this cluster
*Onepanel.OnepanelApi* | [**getCurrentUser**](docs/OnepanelApi.md#getCurrentUser) | **GET** /user | Get Onepanel user details of currently logged in user.
*Onepanel.OnepanelApi* | [**getDnsCheckConfiguration**](docs/OnepanelApi.md#getDnsCheckConfiguration) | **GET** /dns_check/configuration | Return settings used when performing the DNS check.
*Onepanel.OnepanelApi* | [**getEmergencyPassphraseStatus**](docs/OnepanelApi.md#getEmergencyPassphraseStatus) | **GET** /emergency_passphrase | Get emergency passphrase status
*Onepanel.OnepanelApi* | [**getNode**](docs/OnepanelApi.md#getNode) | **GET** /node | Get information about current onepanel node.
*Onepanel.OnepanelApi* | [**getProgress**](docs/OnepanelApi.md#getProgress) | **GET** /progress | Get deployment progress
*Onepanel.OnepanelApi* | [**getRemoteProvider**](docs/OnepanelApi.md#getRemoteProvider) | **GET** /providers/{id} | Get details of a remote Oneprovider.
*Onepanel.OnepanelApi* | [**getTaskStatus**](docs/OnepanelApi.md#getTaskStatus) | **GET** /tasks/{id} | Get background task result
*Onepanel.OnepanelApi* | [**getWebCert**](docs/OnepanelApi.md#getWebCert) | **GET** /web_cert | Get information about SSL certificates configuration and status.
*Onepanel.OnepanelApi* | [**joinCluster**](docs/OnepanelApi.md#joinCluster) | **POST** /join_cluster | Join existing cluster
*Onepanel.OnepanelApi* | [**modifyDnsCheckConfiguration**](docs/OnepanelApi.md#modifyDnsCheckConfiguration) | **PATCH** /dns_check/configuration | Configure dns check
*Onepanel.OnepanelApi* | [**modifyProgress**](docs/OnepanelApi.md#modifyProgress) | **PATCH** /progress | Modify progress markers
*Onepanel.OnepanelApi* | [**modifyWebCert**](docs/OnepanelApi.md#modifyWebCert) | **PATCH** /web_cert | Modify SSL certificate configuration
*Onepanel.OnepanelApi* | [**removeClusterHost**](docs/OnepanelApi.md#removeClusterHost) | **DELETE** /hosts/{host} | Remove host from cluster
*Onepanel.OnepanelApi* | [**setEmergencyPassphrase**](docs/OnepanelApi.md#setEmergencyPassphrase) | **PUT** /emergency_passphrase | Set emergency passphrase
*Onepanel.OnepanelApi* | [**testImage**](docs/OnepanelApi.md#testImage) | **GET** /test_image | Get test image
*Onepanel.OneproviderApi* | [**addCephManagers**](docs/OneproviderApi.md#addCephManagers) | **POST** /provider/ceph/managers | Add managers to ceph cluster
*Onepanel.OneproviderApi* | [**addCephMonitors**](docs/OneproviderApi.md#addCephMonitors) | **POST** /provider/ceph/monitors | Add monitors to Ceph cluster
*Onepanel.OneproviderApi* | [**addCephOsds**](docs/OneproviderApi.md#addCephOsds) | **POST** /provider/ceph/osds | Add OSDs to Ceph cluster
*Onepanel.OneproviderApi* | [**addProvider**](docs/OneproviderApi.md#addProvider) | **POST** /provider | Register provider
*Onepanel.OneproviderApi* | [**addProviderDatabases**](docs/OneproviderApi.md#addProviderDatabases) | **POST** /provider/databases | Deploy provider databases
*Onepanel.OneproviderApi* | [**addProviderManagers**](docs/OneproviderApi.md#addProviderManagers) | **POST** /provider/managers | Add provider cluster managers
*Onepanel.OneproviderApi* | [**addProviderWorkers**](docs/OneproviderApi.md#addProviderWorkers) | **POST** /provider/workers | Add provider cluster workers
*Onepanel.OneproviderApi* | [**addStorage**](docs/OneproviderApi.md#addStorage) | **POST** /provider/storages | Add storage
*Onepanel.OneproviderApi* | [**configureCeph**](docs/OneproviderApi.md#configureCeph) | **POST** /provider/ceph | Configure Ceph cluster
*Onepanel.OneproviderApi* | [**configureFilePopularity**](docs/OneproviderApi.md#configureFilePopularity) | **PATCH** /provider/spaces/{id}/file-popularity/configuration | Configure file-popularity mechanism in the space.
*Onepanel.OneproviderApi* | [**configureProvider**](docs/OneproviderApi.md#configureProvider) | **POST** /provider/configuration | Configure provider deployment
*Onepanel.OneproviderApi* | [**configureSpaceAutoCleaning**](docs/OneproviderApi.md#configureSpaceAutoCleaning) | **PATCH** /provider/spaces/{id}/auto-cleaning/configuration | Configure space auto-cleaning mechanism
*Onepanel.OneproviderApi* | [**getBlockDevices**](docs/OneproviderApi.md#getBlockDevices) | **GET** /provider/ceph/preflight/block_devices | Get block devices for Ceph OSD
*Onepanel.OneproviderApi* | [**getCephManager**](docs/OneproviderApi.md#getCephManager) | **GET** /provider/ceph/managers/{id} | Get Ceph manager
*Onepanel.OneproviderApi* | [**getCephManagers**](docs/OneproviderApi.md#getCephManagers) | **GET** /provider/ceph/managers | List Ceph managers
*Onepanel.OneproviderApi* | [**getCephMonitor**](docs/OneproviderApi.md#getCephMonitor) | **GET** /provider/ceph/monitors/{id} | Get Ceph monitor
*Onepanel.OneproviderApi* | [**getCephMonitors**](docs/OneproviderApi.md#getCephMonitors) | **GET** /provider/ceph/monitors | List Ceph monitors
*Onepanel.OneproviderApi* | [**getCephOsd**](docs/OneproviderApi.md#getCephOsd) | **GET** /provider/ceph/osds/{id} | Get Ceph OSD
*Onepanel.OneproviderApi* | [**getCephOsdUsage**](docs/OneproviderApi.md#getCephOsdUsage) | **GET** /provider/ceph/osds/{id}/usage | Get storage space usage details for specific OSD.
*Onepanel.OneproviderApi* | [**getCephOsds**](docs/OneproviderApi.md#getCephOsds) | **GET** /provider/ceph/osds | Get Ceph OSDs list.
*Onepanel.OneproviderApi* | [**getCephParams**](docs/OneproviderApi.md#getCephParams) | **GET** /provider/ceph | Get global Ceph params
*Onepanel.OneproviderApi* | [**getCephPool**](docs/OneproviderApi.md#getCephPool) | **GET** /provider/ceph/pools/{name} | Get details of a Ceph pool.
*Onepanel.OneproviderApi* | [**getCephPoolUsage**](docs/OneproviderApi.md#getCephPoolUsage) | **GET** /provider/ceph/pools/{name}/usage | Get storage space usage details for specific pool.
*Onepanel.OneproviderApi* | [**getCephPools**](docs/OneproviderApi.md#getCephPools) | **GET** /provider/ceph/pools | List Ceph pools
*Onepanel.OneproviderApi* | [**getCephStatus**](docs/OneproviderApi.md#getCephStatus) | **GET** /provider/ceph/status | Get Ceph cluster health
*Onepanel.OneproviderApi* | [**getCephUsage**](docs/OneproviderApi.md#getCephUsage) | **GET** /provider/ceph/usage | Get Ceph storage space usage.
*Onepanel.OneproviderApi* | [**getFilePopularityConfiguration**](docs/OneproviderApi.md#getFilePopularityConfiguration) | **GET** /provider/spaces/{id}/file-popularity/configuration | Get file-popularity configuration
*Onepanel.OneproviderApi* | [**getOnezoneInfo**](docs/OneproviderApi.md#getOnezoneInfo) | **GET** /provider/onezone_info | Get Onezone information
*Onepanel.OneproviderApi* | [**getProvider**](docs/OneproviderApi.md#getProvider) | **GET** /provider | Get provider details
*Onepanel.OneproviderApi* | [**getProviderClusterIps**](docs/OneproviderApi.md#getProviderClusterIps) | **GET** /provider/cluster_ips | Get provider cluster nodes IPs
*Onepanel.OneproviderApi* | [**getProviderConfiguration**](docs/OneproviderApi.md#getProviderConfiguration) | **GET** /provider/configuration | Get provider cluster configuration
*Onepanel.OneproviderApi* | [**getProviderDatabaseStatus**](docs/OneproviderApi.md#getProviderDatabaseStatus) | **GET** /provider/databases/{host} | Get provider database status
*Onepanel.OneproviderApi* | [**getProviderDatabasesStatus**](docs/OneproviderApi.md#getProviderDatabasesStatus) | **GET** /provider/databases | Get provider databases status
*Onepanel.OneproviderApi* | [**getProviderManagerStatus**](docs/OneproviderApi.md#getProviderManagerStatus) | **GET** /provider/managers/{host} | Get provider cluster manager status
*Onepanel.OneproviderApi* | [**getProviderManagersStatus**](docs/OneproviderApi.md#getProviderManagersStatus) | **GET** /provider/managers | Get provider cluster managers status
*Onepanel.OneproviderApi* | [**getProviderNagiosReport**](docs/OneproviderApi.md#getProviderNagiosReport) | **GET** /provider/nagios | Get provider nagios report
*Onepanel.OneproviderApi* | [**getProviderSpaceAutoCleaningReport**](docs/OneproviderApi.md#getProviderSpaceAutoCleaningReport) | **GET** /provider/spaces/{id}/auto-cleaning/reports/{report_id} | Get the report from a space auto-cleaning run
*Onepanel.OneproviderApi* | [**getProviderSpaceAutoCleaningReports**](docs/OneproviderApi.md#getProviderSpaceAutoCleaningReports) | **GET** /provider/spaces/{id}/auto-cleaning/reports | Get Ids of of the space auto-cleaning reports
*Onepanel.OneproviderApi* | [**getProviderSpaceAutoCleaningStatus**](docs/OneproviderApi.md#getProviderSpaceAutoCleaningStatus) | **GET** /provider/spaces/{id}/auto-cleaning/status | Get status of space auto-cleaning mechanism
*Onepanel.OneproviderApi* | [**getProviderSpaceSyncStats**](docs/OneproviderApi.md#getProviderSpaceSyncStats) | **GET** /provider/spaces/{id}/sync | Get statistics of storage synchronization
*Onepanel.OneproviderApi* | [**getProviderSpaces**](docs/OneproviderApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
*Onepanel.OneproviderApi* | [**getProviderWorkerStatus**](docs/OneproviderApi.md#getProviderWorkerStatus) | **GET** /provider/workers/{host} | Get provider cluster worker status
*Onepanel.OneproviderApi* | [**getProviderWorkersStatus**](docs/OneproviderApi.md#getProviderWorkersStatus) | **GET** /provider/workers | Get provider cluster workers status
*Onepanel.OneproviderApi* | [**getSpaceAutoCleaningConfiguration**](docs/OneproviderApi.md#getSpaceAutoCleaningConfiguration) | **GET** /provider/spaces/{id}/auto-cleaning/configuration | Get space auto-cleaning configuration
*Onepanel.OneproviderApi* | [**getSpaceDetails**](docs/OneproviderApi.md#getSpaceDetails) | **GET** /provider/spaces/{id} | Get space details
*Onepanel.OneproviderApi* | [**getStorageDetails**](docs/OneproviderApi.md#getStorageDetails) | **GET** /provider/storages/{id} | Get storage details
*Onepanel.OneproviderApi* | [**getStorages**](docs/OneproviderApi.md#getStorages) | **GET** /provider/storages | Get storages
*Onepanel.OneproviderApi* | [**getTransfersMock**](docs/OneproviderApi.md#getTransfersMock) | **GET** /provider/debug/transfers_mock | Get transfers mock status
*Onepanel.OneproviderApi* | [**invalidateLumaCache**](docs/OneproviderApi.md#invalidateLumaCache) | **PATCH** /provider/storages/{id}/invalidate_luma | Invalidate LUMA cache
*Onepanel.OneproviderApi* | [**modifyCephPool**](docs/OneproviderApi.md#modifyCephPool) | **PATCH** /provider/ceph/pools/{name} | Modify pool params
*Onepanel.OneproviderApi* | [**modifyProvider**](docs/OneproviderApi.md#modifyProvider) | **PATCH** /provider | Modify provider details
*Onepanel.OneproviderApi* | [**modifyProviderClusterIps**](docs/OneproviderApi.md#modifyProviderClusterIps) | **PATCH** /provider/cluster_ips | Set external IPs of nodes in application config
*Onepanel.OneproviderApi* | [**modifySpace**](docs/OneproviderApi.md#modifySpace) | **PATCH** /provider/spaces/{id} | Modify space details
*Onepanel.OneproviderApi* | [**modifyStorage**](docs/OneproviderApi.md#modifyStorage) | **PATCH** /provider/storages/{id} | Modify storage config
*Onepanel.OneproviderApi* | [**modifyTransfersMock**](docs/OneproviderApi.md#modifyTransfersMock) | **PATCH** /provider/debug/transfers_mock | Modify transfers mock
*Onepanel.OneproviderApi* | [**removeProvider**](docs/OneproviderApi.md#removeProvider) | **DELETE** /provider | Unregister provider
*Onepanel.OneproviderApi* | [**removeStorage**](docs/OneproviderApi.md#removeStorage) | **DELETE** /provider/storages/{id} | Remove storage
*Onepanel.OneproviderApi* | [**revokeSpaceSupport**](docs/OneproviderApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space
*Onepanel.OneproviderApi* | [**startStopProviderDatabase**](docs/OneproviderApi.md#startStopProviderDatabase) | **PATCH** /provider/databases/{host} | Start/stop provider database
*Onepanel.OneproviderApi* | [**startStopProviderDatabases**](docs/OneproviderApi.md#startStopProviderDatabases) | **PATCH** /provider/databases | Start/stop provider databases
*Onepanel.OneproviderApi* | [**startStopProviderManager**](docs/OneproviderApi.md#startStopProviderManager) | **PATCH** /provider/managers/{host} | Start/stop provider cluster manager
*Onepanel.OneproviderApi* | [**startStopProviderManagers**](docs/OneproviderApi.md#startStopProviderManagers) | **PATCH** /provider/managers | Start/stop provider cluster managers
*Onepanel.OneproviderApi* | [**startStopProviderWorker**](docs/OneproviderApi.md#startStopProviderWorker) | **PATCH** /provider/workers/{host} | Start/stop provider cluster worker
*Onepanel.OneproviderApi* | [**startStopProviderWorkers**](docs/OneproviderApi.md#startStopProviderWorkers) | **PATCH** /provider/workers | Start/stop provider cluster workers
*Onepanel.OneproviderApi* | [**supportSpace**](docs/OneproviderApi.md#supportSpace) | **POST** /provider/spaces | Support space
*Onepanel.OneproviderApi* | [**triggerAutoCleaning**](docs/OneproviderApi.md#triggerAutoCleaning) | **POST** /provider/spaces/{id}/auto-cleaning/start | Triggers space auto-cleaning
*Onepanel.OnezoneApi* | [**addOnezoneUser**](docs/OnezoneApi.md#addOnezoneUser) | **POST** /zone/users | Create Onezone user
*Onepanel.OnezoneApi* | [**addZoneDatabases**](docs/OnezoneApi.md#addZoneDatabases) | **POST** /zone/databases | Add zone databases
*Onepanel.OnezoneApi* | [**addZoneManagers**](docs/OnezoneApi.md#addZoneManagers) | **POST** /zone/managers | Add zone cluster managers
*Onepanel.OnezoneApi* | [**addZoneWorkers**](docs/OnezoneApi.md#addZoneWorkers) | **POST** /zone/workers | Add zone cluster workers
*Onepanel.OnezoneApi* | [**changeUserPassword**](docs/OnezoneApi.md#changeUserPassword) | **PATCH** /zone/users/{id} | Set password for Onezone user
*Onepanel.OnezoneApi* | [**configureZone**](docs/OnezoneApi.md#configureZone) | **POST** /zone/configuration | Configure zone deployment
*Onepanel.OnezoneApi* | [**getGuiMessage**](docs/OnezoneApi.md#getGuiMessage) | **GET** /zone/gui_messages/{id} | Get settings of a Onezone GUI message.
*Onepanel.OnezoneApi* | [**getOnezoneUser**](docs/OnezoneApi.md#getOnezoneUser) | **GET** /zone/users/{id} | Get Onezone user details
*Onepanel.OnezoneApi* | [**getOnezoneUsers**](docs/OnezoneApi.md#getOnezoneUsers) | **GET** /zone/users | List Onezone users
*Onepanel.OnezoneApi* | [**getZoneClusterIps**](docs/OnezoneApi.md#getZoneClusterIps) | **GET** /zone/cluster_ips | Get zone cluster nodes IPs
*Onepanel.OnezoneApi* | [**getZoneConfiguration**](docs/OnezoneApi.md#getZoneConfiguration) | **GET** /zone/configuration | Get zone cluster configuration
*Onepanel.OnezoneApi* | [**getZoneDatabaseStatus**](docs/OnezoneApi.md#getZoneDatabaseStatus) | **GET** /zone/databases/{host} | Get zone database status
*Onepanel.OnezoneApi* | [**getZoneDatabasesStatus**](docs/OnezoneApi.md#getZoneDatabasesStatus) | **GET** /zone/databases | Get zone databases status
*Onepanel.OnezoneApi* | [**getZoneManagerStatus**](docs/OnezoneApi.md#getZoneManagerStatus) | **GET** /zone/managers/{host} | Get zone cluster manager status
*Onepanel.OnezoneApi* | [**getZoneManagersStatus**](docs/OnezoneApi.md#getZoneManagersStatus) | **GET** /zone/managers | Get zone cluster managers status
*Onepanel.OnezoneApi* | [**getZoneNagiosReport**](docs/OnezoneApi.md#getZoneNagiosReport) | **GET** /zone/nagios | Get zone nagios report
*Onepanel.OnezoneApi* | [**getZonePolicies**](docs/OnezoneApi.md#getZonePolicies) | **GET** /zone/policies | Get Onezone policies.
*Onepanel.OnezoneApi* | [**getZoneWorkerStatus**](docs/OnezoneApi.md#getZoneWorkerStatus) | **GET** /zone/workers/{host} | Get zone cluster worker status
*Onepanel.OnezoneApi* | [**getZoneWorkersStatus**](docs/OnezoneApi.md#getZoneWorkersStatus) | **GET** /zone/workers | Get zone cluster workers status
*Onepanel.OnezoneApi* | [**modifyGuiMessage**](docs/OnezoneApi.md#modifyGuiMessage) | **PATCH** /zone/gui_messages/{id} | Modify settings of a Onezone GUI message.
*Onepanel.OnezoneApi* | [**modifyZoneClusterIps**](docs/OnezoneApi.md#modifyZoneClusterIps) | **PATCH** /zone/cluster_ips | Set external IPs of nodes in application config
*Onepanel.OnezoneApi* | [**modifyZonePolicies**](docs/OnezoneApi.md#modifyZonePolicies) | **PATCH** /zone/policies | Modify current Onezone policies
*Onepanel.OnezoneApi* | [**startStopZoneDatabases**](docs/OnezoneApi.md#startStopZoneDatabases) | **PATCH** /zone/databases | Start/stop zone databases
*Onepanel.OnezoneApi* | [**startStopZoneDatabasesHost**](docs/OnezoneApi.md#startStopZoneDatabasesHost) | **PATCH** /zone/databases/{host} | Start/stop zone database
*Onepanel.OnezoneApi* | [**startStopZoneManager**](docs/OnezoneApi.md#startStopZoneManager) | **PATCH** /zone/managers/{host} | Start/stop zone cluster manager
*Onepanel.OnezoneApi* | [**startStopZoneManagers**](docs/OnezoneApi.md#startStopZoneManagers) | **PATCH** /zone/managers | Start/stop zone cluster managers
*Onepanel.OnezoneApi* | [**startStopZoneWorker**](docs/OnezoneApi.md#startStopZoneWorker) | **PATCH** /zone/workers/{host} | Start/stop zone cluster worker
*Onepanel.OnezoneApi* | [**startStopZoneWorkers**](docs/OnezoneApi.md#startStopZoneWorkers) | **PATCH** /zone/workers | Start/stop zone cluster workers


## Documentation for Models

 - [Onepanel.BlockDevices](docs/BlockDevices.md)
 - [Onepanel.BlockDevicesBlockDevices](docs/BlockDevicesBlockDevices.md)
 - [Onepanel.CephGlobalParams](docs/CephGlobalParams.md)
 - [Onepanel.CephManager](docs/CephManager.md)
 - [Onepanel.CephManagers](docs/CephManagers.md)
 - [Onepanel.CephMonitor](docs/CephMonitor.md)
 - [Onepanel.CephMonitors](docs/CephMonitors.md)
 - [Onepanel.CephOsd](docs/CephOsd.md)
 - [Onepanel.CephOsds](docs/CephOsds.md)
 - [Onepanel.CephPool](docs/CephPool.md)
 - [Onepanel.CephPoolUsage](docs/CephPoolUsage.md)
 - [Onepanel.CephPools](docs/CephPools.md)
 - [Onepanel.CephStatus](docs/CephStatus.md)
 - [Onepanel.CephUsage](docs/CephUsage.md)
 - [Onepanel.ClusterConfigurationDetails](docs/ClusterConfigurationDetails.md)
 - [Onepanel.ClusterDatabases](docs/ClusterDatabases.md)
 - [Onepanel.ClusterDetails](docs/ClusterDetails.md)
 - [Onepanel.ClusterIps](docs/ClusterIps.md)
 - [Onepanel.ClusterManagers](docs/ClusterManagers.md)
 - [Onepanel.ClusterMembersSummary](docs/ClusterMembersSummary.md)
 - [Onepanel.ClusterWorkers](docs/ClusterWorkers.md)
 - [Onepanel.Configuration](docs/Configuration.md)
 - [Onepanel.CurrentUser](docs/CurrentUser.md)
 - [Onepanel.DataUsage](docs/DataUsage.md)
 - [Onepanel.DatabaseHosts](docs/DatabaseHosts.md)
 - [Onepanel.DnsCheck](docs/DnsCheck.md)
 - [Onepanel.DnsCheckConfiguration](docs/DnsCheckConfiguration.md)
 - [Onepanel.DnsCheckResult](docs/DnsCheckResult.md)
 - [Onepanel.EmergencyPassphraseChangeRequest](docs/EmergencyPassphraseChangeRequest.md)
 - [Onepanel.EmergencyPassphraseStatus](docs/EmergencyPassphraseStatus.md)
 - [Onepanel.Error](docs/Error.md)
 - [Onepanel.ErrorError](docs/ErrorError.md)
 - [Onepanel.GuiMessage](docs/GuiMessage.md)
 - [Onepanel.Host](docs/Host.md)
 - [Onepanel.HostAddRequest](docs/HostAddRequest.md)
 - [Onepanel.Id](docs/Id.md)
 - [Onepanel.Ids](docs/Ids.md)
 - [Onepanel.InlineResponse202](docs/InlineResponse202.md)
 - [Onepanel.InviteToken](docs/InviteToken.md)
 - [Onepanel.ManagerHosts](docs/ManagerHosts.md)
 - [Onepanel.ModifyClusterIps](docs/ModifyClusterIps.md)
 - [Onepanel.Node](docs/Node.md)
 - [Onepanel.OnezoneInfo](docs/OnezoneInfo.md)
 - [Onepanel.OnezoneUser](docs/OnezoneUser.md)
 - [Onepanel.OnezoneUserCreateRequest](docs/OnezoneUserCreateRequest.md)
 - [Onepanel.PanelConfiguration](docs/PanelConfiguration.md)
 - [Onepanel.PasswordChangeRequest](docs/PasswordChangeRequest.md)
 - [Onepanel.Progress](docs/Progress.md)
 - [Onepanel.ProgressModify](docs/ProgressModify.md)
 - [Onepanel.ProviderClusterConfiguration](docs/ProviderClusterConfiguration.md)
 - [Onepanel.ProviderConfiguration](docs/ProviderConfiguration.md)
 - [Onepanel.ProviderConfigurationDetails](docs/ProviderConfigurationDetails.md)
 - [Onepanel.ProviderConfigurationDetailsOneprovider](docs/ProviderConfigurationDetailsOneprovider.md)
 - [Onepanel.ProviderConfigurationOneprovider](docs/ProviderConfigurationOneprovider.md)
 - [Onepanel.ProviderDetails](docs/ProviderDetails.md)
 - [Onepanel.ProviderModifyRequest](docs/ProviderModifyRequest.md)
 - [Onepanel.ProviderRegisterRequest](docs/ProviderRegisterRequest.md)
 - [Onepanel.ProviderSpaces](docs/ProviderSpaces.md)
 - [Onepanel.ProviderStorages](docs/ProviderStorages.md)
 - [Onepanel.RemoteProviderDetails](docs/RemoteProviderDetails.md)
 - [Onepanel.ServiceDatabases](docs/ServiceDatabases.md)
 - [Onepanel.ServiceHosts](docs/ServiceHosts.md)
 - [Onepanel.ServiceStatus](docs/ServiceStatus.md)
 - [Onepanel.ServiceStatusHost](docs/ServiceStatusHost.md)
 - [Onepanel.SpaceAutoCleaningConfiguration](docs/SpaceAutoCleaningConfiguration.md)
 - [Onepanel.SpaceAutoCleaningReport](docs/SpaceAutoCleaningReport.md)
 - [Onepanel.SpaceAutoCleaningReports](docs/SpaceAutoCleaningReports.md)
 - [Onepanel.SpaceAutoCleaningRuleSetting](docs/SpaceAutoCleaningRuleSetting.md)
 - [Onepanel.SpaceAutoCleaningRules](docs/SpaceAutoCleaningRules.md)
 - [Onepanel.SpaceAutoCleaningStatus](docs/SpaceAutoCleaningStatus.md)
 - [Onepanel.SpaceDetails](docs/SpaceDetails.md)
 - [Onepanel.SpaceFilePopularityConfiguration](docs/SpaceFilePopularityConfiguration.md)
 - [Onepanel.SpaceModifyRequest](docs/SpaceModifyRequest.md)
 - [Onepanel.SpaceSupportRequest](docs/SpaceSupportRequest.md)
 - [Onepanel.SpaceSyncStats](docs/SpaceSyncStats.md)
 - [Onepanel.StorageCreateDetails](docs/StorageCreateDetails.md)
 - [Onepanel.StorageCreateRequest](docs/StorageCreateRequest.md)
 - [Onepanel.StorageGetDetails](docs/StorageGetDetails.md)
 - [Onepanel.StorageImportDetails](docs/StorageImportDetails.md)
 - [Onepanel.StorageModifyDetails](docs/StorageModifyDetails.md)
 - [Onepanel.StorageModifyRequest](docs/StorageModifyRequest.md)
 - [Onepanel.StorageUpdateDetails](docs/StorageUpdateDetails.md)
 - [Onepanel.TaskId](docs/TaskId.md)
 - [Onepanel.TaskStatus](docs/TaskStatus.md)
 - [Onepanel.TimeStats](docs/TimeStats.md)
 - [Onepanel.TimeStatsCollection](docs/TimeStatsCollection.md)
 - [Onepanel.Token](docs/Token.md)
 - [Onepanel.TransfersMock](docs/TransfersMock.md)
 - [Onepanel.VersionInfo](docs/VersionInfo.md)
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
 - [Onepanel.ZonePolicies](docs/ZonePolicies.md)
 - [Onepanel.Blockdevice](docs/Blockdevice.md)
 - [Onepanel.Ceph](docs/Ceph.md)
 - [Onepanel.CephCluster](docs/CephCluster.md)
 - [Onepanel.CephModify](docs/CephModify.md)
 - [Onepanel.Cephrados](docs/Cephrados.md)
 - [Onepanel.CephradosModify](docs/CephradosModify.md)
 - [Onepanel.Glusterfs](docs/Glusterfs.md)
 - [Onepanel.GlusterfsModify](docs/GlusterfsModify.md)
 - [Onepanel.Localceph](docs/Localceph.md)
 - [Onepanel.LocalcephModify](docs/LocalcephModify.md)
 - [Onepanel.Loopdevice](docs/Loopdevice.md)
 - [Onepanel.Nulldevice](docs/Nulldevice.md)
 - [Onepanel.NulldeviceModify](docs/NulldeviceModify.md)
 - [Onepanel.OpConfiguration](docs/OpConfiguration.md)
 - [Onepanel.OzConfiguration](docs/OzConfiguration.md)
 - [Onepanel.Posix](docs/Posix.md)
 - [Onepanel.PosixModify](docs/PosixModify.md)
 - [Onepanel.S3](docs/S3.md)
 - [Onepanel.S3Modify](docs/S3Modify.md)
 - [Onepanel.Swift](docs/Swift.md)
 - [Onepanel.SwiftModify](docs/SwiftModify.md)
 - [Onepanel.Webdav](docs/Webdav.md)
 - [Onepanel.WebdavModify](docs/WebdavModify.md)


## Documentation for Authorization


### api_key1

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

### api_key2

- **Type**: API key
- **API key parameter name**: Authorization: Bearer
- **Location**: HTTP header

### basic

- **Type**: HTTP basic authentication

