# onepanel

Onepanel - JavaScript client for onepanel
This is a Javascript client for [Onedata Onepanel](https://onedata.org) service.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 21.02.4
- Package version: 21.02.4
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
//api_key2.apiKeyPrefix['Authorization'] = "Token"

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME'
basic.password = 'YOUR PASSWORD'

var api = new Onepanel.AutoCleaningApi()

var id = "id_example"; // {String} The Id of a space.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.cancelAutoCleaning(id, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/api/v3/onepanel*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Onepanel.AutoCleaningApi* | [**cancelAutoCleaning**](docs/AutoCleaningApi.md#cancelAutoCleaning) | **POST** /provider/spaces/{id}/auto-cleaning/cancel | Cancel space auto-cleaning
*Onepanel.AutoCleaningApi* | [**configureSpaceAutoCleaning**](docs/AutoCleaningApi.md#configureSpaceAutoCleaning) | **PATCH** /provider/spaces/{id}/auto-cleaning/configuration | Configure space auto-cleaning mechanism
*Onepanel.AutoCleaningApi* | [**getProviderSpaceAutoCleaningReport**](docs/AutoCleaningApi.md#getProviderSpaceAutoCleaningReport) | **GET** /provider/spaces/{id}/auto-cleaning/reports/{report_id} | Get the report from a space auto-cleaning run
*Onepanel.AutoCleaningApi* | [**getProviderSpaceAutoCleaningReports**](docs/AutoCleaningApi.md#getProviderSpaceAutoCleaningReports) | **GET** /provider/spaces/{id}/auto-cleaning/reports | Get Ids of of the space auto-cleaning reports
*Onepanel.AutoCleaningApi* | [**getProviderSpaceAutoCleaningStatus**](docs/AutoCleaningApi.md#getProviderSpaceAutoCleaningStatus) | **GET** /provider/spaces/{id}/auto-cleaning/status | Get status of space auto-cleaning mechanism
*Onepanel.AutoCleaningApi* | [**getSpaceAutoCleaningConfiguration**](docs/AutoCleaningApi.md#getSpaceAutoCleaningConfiguration) | **GET** /provider/spaces/{id}/auto-cleaning/configuration | Get space auto-cleaning configuration
*Onepanel.AutoCleaningApi* | [**triggerAutoCleaning**](docs/AutoCleaningApi.md#triggerAutoCleaning) | **POST** /provider/spaces/{id}/auto-cleaning/start | Trigger space auto-cleaning
*Onepanel.ClusterApi* | [**addClusterHost**](docs/ClusterApi.md#addClusterHost) | **POST** /hosts | Add given host to the cluster
*Onepanel.ClusterApi* | [**createInviteToken**](docs/ClusterApi.md#createInviteToken) | **POST** /invite_tokens | Create node invite token
*Onepanel.ClusterApi* | [**createUserInviteToken**](docs/ClusterApi.md#createUserInviteToken) | **POST** /cluster/invite_user_token | Generate cluster invitation token for a user
*Onepanel.ClusterApi* | [**getClusterCookie**](docs/ClusterApi.md#getClusterCookie) | **GET** /cookie | Get cluster cookie
*Onepanel.ClusterApi* | [**getClusterHosts**](docs/ClusterApi.md#getClusterHosts) | **GET** /hosts | Get cluster hosts
*Onepanel.ClusterApi* | [**getClusterMembersSummary**](docs/ClusterApi.md#getClusterMembersSummary) | **GET** /cluster/members_summary | Get summary of members in this cluster
*Onepanel.ClusterApi* | [**getConfiguration**](docs/ClusterApi.md#getConfiguration) | **GET** /configuration | Get public configuration
*Onepanel.ClusterApi* | [**getCurrentCluster**](docs/ClusterApi.md#getCurrentCluster) | **GET** /cluster | Get details of this cluster
*Onepanel.ClusterApi* | [**getNode**](docs/ClusterApi.md#getNode) | **GET** /node | Get information about current onepanel node
*Onepanel.ClusterApi* | [**getProgress**](docs/ClusterApi.md#getProgress) | **GET** /progress | Get deployment progress
*Onepanel.ClusterApi* | [**getTaskStatus**](docs/ClusterApi.md#getTaskStatus) | **GET** /tasks/{id} | Get background task result
*Onepanel.ClusterApi* | [**joinCluster**](docs/ClusterApi.md#joinCluster) | **POST** /join_cluster | Join existing cluster
*Onepanel.ClusterApi* | [**modifyProgress**](docs/ClusterApi.md#modifyProgress) | **PATCH** /progress | Modify progress markers
*Onepanel.ClusterApi* | [**removeClusterHost**](docs/ClusterApi.md#removeClusterHost) | **DELETE** /hosts/{host} | Remove host from cluster
*Onepanel.CurrentUserApi* | [**getCluster**](docs/CurrentUserApi.md#getCluster) | **GET** /user/clusters/{id} | Get details of a user&#39;s cluster
*Onepanel.CurrentUserApi* | [**getClusters**](docs/CurrentUserApi.md#getClusters) | **GET** /user/clusters | List user&#39;s clusters
*Onepanel.CurrentUserApi* | [**getCurrentUser**](docs/CurrentUserApi.md#getCurrentUser) | **GET** /user | Get details of authenticated user
*Onepanel.DNSApi* | [**checkDns**](docs/DNSApi.md#checkDns) | **GET** /dns_check | Check correctness of DNS entries for the cluster&#39;s domain
*Onepanel.DNSApi* | [**getDnsCheckConfiguration**](docs/DNSApi.md#getDnsCheckConfiguration) | **GET** /dns_check/configuration | Return settings used when performing the DNS check
*Onepanel.DNSApi* | [**modifyDnsCheckConfiguration**](docs/DNSApi.md#modifyDnsCheckConfiguration) | **PATCH** /dns_check/configuration | Configure dns check
*Onepanel.DebugApi* | [**getTransfersMock**](docs/DebugApi.md#getTransfersMock) | **GET** /provider/debug/transfers_mock | Get transfers mock status
*Onepanel.DebugApi* | [**modifyTransfersMock**](docs/DebugApi.md#modifyTransfersMock) | **PATCH** /provider/debug/transfers_mock | Modify transfers mock
*Onepanel.FilePopularityApi* | [**configureFilePopularity**](docs/FilePopularityApi.md#configureFilePopularity) | **PATCH** /provider/spaces/{id}/file-popularity/configuration | Configure file popularity mechanism in the space
*Onepanel.FilePopularityApi* | [**getFilePopularityConfiguration**](docs/FilePopularityApi.md#getFilePopularityConfiguration) | **GET** /provider/spaces/{id}/file-popularity/configuration | Get file popularity configuration
*Onepanel.InternalApi* | [**getRemoteProvider**](docs/InternalApi.md#getRemoteProvider) | **GET** /providers/{id} | Get details of a remote Oneprovider
*Onepanel.InternalApi* | [**health**](docs/InternalApi.md#health) | **GET** /health | Check cluster health
*Onepanel.InternalApi* | [**testImage**](docs/InternalApi.md#testImage) | **GET** /test_image | Get test image
*Onepanel.LUMADBApi* | [**lumaClearDb**](docs/LUMADBApi.md#lumaClearDb) | **DELETE** /provider/storages/{id}/luma/db | Clear LUMA DB
*Onepanel.LUMADBApi* | [**lumaGetAclGroupToOnedataGroupMapping**](docs/LUMADBApi.md#lumaGetAclGroupToOnedataGroupMapping) | **GET** /provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname} | Lookup mapping of ACL group
*Onepanel.LUMADBApi* | [**lumaGetAclUserToOnedataUserMapping**](docs/LUMADBApi.md#lumaGetAclUserToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_user_to_onedata_user/{username} | Lookup mapping of ACL user
*Onepanel.LUMADBApi* | [**lumaGetConfig**](docs/LUMADBApi.md#lumaGetConfig) | **GET** /provider/storages/{id}/luma/config | Get LUMA DB configuration
*Onepanel.LUMADBApi* | [**lumaGetDefaultPosixCredentials**](docs/LUMADBApi.md#lumaGetDefaultPosixCredentials) | **GET** /provider/storages/{id}/luma/db/storage_access/posix_compatible/default_credentials/{space_id} | Lookup default posix credentials
*Onepanel.LUMADBApi* | [**lumaGetDisplayCredentials**](docs/LUMADBApi.md#lumaGetDisplayCredentials) | **GET** /provider/storages/{id}/luma/db/display_credentials/all/default/{space_id} | Lookup default display credentials
*Onepanel.LUMADBApi* | [**lumaGetOnedataUserToCredentialsMapping**](docs/LUMADBApi.md#lumaGetOnedataUserToCredentialsMapping) | **GET** /provider/storages/{id}/luma/db/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Lookup Onedata user to credentials mapping
*Onepanel.LUMADBApi* | [**lumaGetUidToOnedataUserMapping**](docs/LUMADBApi.md#lumaGetUidToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/db/storage_import/posix_compatible/uid_to_onedata_user/{uid} | Lookup mapping of UID
*Onepanel.LUMADBApi* | [**lumaRemoveAclGroupToOnedataGroupMapping**](docs/LUMADBApi.md#lumaRemoveAclGroupToOnedataGroupMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname} | Remove mapping of ACL group
*Onepanel.LUMADBApi* | [**lumaRemoveAclUserToOnedataUserMapping**](docs/LUMADBApi.md#lumaRemoveAclUserToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_user_to_onedata_user/{username} | Remove mapping of ACL user
*Onepanel.LUMADBApi* | [**lumaRemoveDefaultPosixCredentials**](docs/LUMADBApi.md#lumaRemoveDefaultPosixCredentials) | **DELETE** /provider/storages/{id}/luma/db/storage_access/posix_compatible/default_credentials/{space_id} | Remove default posix credentials
*Onepanel.LUMADBApi* | [**lumaRemoveDisplayCredentials**](docs/LUMADBApi.md#lumaRemoveDisplayCredentials) | **DELETE** /provider/storages/{id}/luma/db/display_credentials/all/default/{space_id} | Remove default display credentials
*Onepanel.LUMADBApi* | [**lumaRemoveOnedataUserToCredentialsMapping**](docs/LUMADBApi.md#lumaRemoveOnedataUserToCredentialsMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Remove Onedata user to credentials mapping
*Onepanel.LUMADBApi* | [**lumaRemoveUidToOnedataUserMapping**](docs/LUMADBApi.md#lumaRemoveUidToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/db/storage_import/posix_compatible/uid_to_onedata_user/{uid} | Remove mapping of UID
*Onepanel.LUMADBLocalFeedApi* | [**localFeedAddOnedataUserToCredentialsMapping**](docs/LUMADBLocalFeedApi.md#localFeedAddOnedataUserToCredentialsMapping) | **POST** /provider/storages/{id}/luma/local_feed/storage_access/all/onedata_user_to_credentials | Insert Onedata user to credentials mapping into local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedGetAclGroupToOnedataGroupMapping**](docs/LUMADBLocalFeedApi.md#localFeedGetAclGroupToOnedataGroupMapping) | **GET** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname} | Lookup mapping of ACL group in local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedGetAclUserToOnedataUserMapping**](docs/LUMADBLocalFeedApi.md#localFeedGetAclUserToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/acl_user_to_onedata_user/{username} | Lookup mapping of ACL user in local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedGetDefaultPosixCredentials**](docs/LUMADBLocalFeedApi.md#localFeedGetDefaultPosixCredentials) | **GET** /provider/storages/{id}/luma/local_feed/storage_access/posix_compatible/default_credentials/{space_id} | Lookup default posix credentials in local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedGetDisplayCredentials**](docs/LUMADBLocalFeedApi.md#localFeedGetDisplayCredentials) | **GET** /provider/storages/{id}/luma/local_feed/display_credentials/all/default/{space_id} | Lookup default display credentials in local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedGetOnedataUserToCredentialsMapping**](docs/LUMADBLocalFeedApi.md#localFeedGetOnedataUserToCredentialsMapping) | **GET** /provider/storages/{id}/luma/local_feed/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Lookup Onedata user to credentials mapping in local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedGetUidToOnedataUserMapping**](docs/LUMADBLocalFeedApi.md#localFeedGetUidToOnedataUserMapping) | **GET** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/uid_to_onedata_user/{uid} | Lookup mapping of UID in local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedModifyOnedataUserToCredentialsMapping**](docs/LUMADBLocalFeedApi.md#localFeedModifyOnedataUserToCredentialsMapping) | **PATCH** /provider/storages/{id}/luma/local_feed/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Update Onedata user to credentials mapping in local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedRemoveAclGroupToOnedataGroupMapping**](docs/LUMADBLocalFeedApi.md#localFeedRemoveAclGroupToOnedataGroupMapping) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname} | Remove mapping of ACL group from local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedRemoveAclUserToOnedataUserMapping**](docs/LUMADBLocalFeedApi.md#localFeedRemoveAclUserToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/acl_user_to_onedata_user/{username} | Remove mapping of ACL user from local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedRemoveDefaultPosixCredentials**](docs/LUMADBLocalFeedApi.md#localFeedRemoveDefaultPosixCredentials) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_access/posix_compatible/default_credentials/{space_id} | Remove default posix credentials from local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedRemoveDisplayCredentials**](docs/LUMADBLocalFeedApi.md#localFeedRemoveDisplayCredentials) | **DELETE** /provider/storages/{id}/luma/local_feed/display_credentials/all/default/{space_id} | Remove default display credentials from local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedRemoveOnedataUserToCredentialsMapping**](docs/LUMADBLocalFeedApi.md#localFeedRemoveOnedataUserToCredentialsMapping) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_access/all/onedata_user_to_credentials/{onedata_user_id} | Remove Onedata user to credentials mapping from local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedRemoveUidToOnedataUserMapping**](docs/LUMADBLocalFeedApi.md#localFeedRemoveUidToOnedataUserMapping) | **DELETE** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/uid_to_onedata_user/{uid} | Remove mapping of UID from local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedSetAclGroupToOnedataGroupMapping**](docs/LUMADBLocalFeedApi.md#localFeedSetAclGroupToOnedataGroupMapping) | **PUT** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname} | Insert mapping of ACL group into local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedSetAclUserToOnedataUserMapping**](docs/LUMADBLocalFeedApi.md#localFeedSetAclUserToOnedataUserMapping) | **PUT** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/acl_user_to_onedata_user/{username} | Insert mapping of ACL user into local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedSetDefaultPosixCredentials**](docs/LUMADBLocalFeedApi.md#localFeedSetDefaultPosixCredentials) | **PUT** /provider/storages/{id}/luma/local_feed/storage_access/posix_compatible/default_credentials/{space_id} | Insert default posix credentials into local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedSetDisplayCredentials**](docs/LUMADBLocalFeedApi.md#localFeedSetDisplayCredentials) | **PUT** /provider/storages/{id}/luma/local_feed/display_credentials/all/default/{space_id} | Insert default display credentials into local feed
*Onepanel.LUMADBLocalFeedApi* | [**localFeedSetUidToOnedataUserMapping**](docs/LUMADBLocalFeedApi.md#localFeedSetUidToOnedataUserMapping) | **PUT** /provider/storages/{id}/luma/local_feed/storage_import/posix_compatible/uid_to_onedata_user/{uid} | Insert mapping of UID into local feed
*Onepanel.OneproviderClusterApi* | [**addProviderDatabases**](docs/OneproviderClusterApi.md#addProviderDatabases) | **POST** /provider/databases | Deploy provider databases
*Onepanel.OneproviderClusterApi* | [**addProviderManagers**](docs/OneproviderClusterApi.md#addProviderManagers) | **POST** /provider/managers | Add provider cluster managers
*Onepanel.OneproviderClusterApi* | [**addProviderWorkers**](docs/OneproviderClusterApi.md#addProviderWorkers) | **POST** /provider/workers | Add provider cluster workers
*Onepanel.OneproviderClusterApi* | [**configureProvider**](docs/OneproviderClusterApi.md#configureProvider) | **POST** /provider/configuration | Configure provider deployment
*Onepanel.OneproviderClusterApi* | [**getProviderClusterIps**](docs/OneproviderClusterApi.md#getProviderClusterIps) | **GET** /provider/cluster_ips | Get provider cluster nodes IPs
*Onepanel.OneproviderClusterApi* | [**getProviderConfiguration**](docs/OneproviderClusterApi.md#getProviderConfiguration) | **GET** /provider/configuration | Get provider cluster configuration
*Onepanel.OneproviderClusterApi* | [**getProviderDatabaseStatus**](docs/OneproviderClusterApi.md#getProviderDatabaseStatus) | **GET** /provider/databases/{host} | Get provider database status
*Onepanel.OneproviderClusterApi* | [**getProviderDatabasesStatus**](docs/OneproviderClusterApi.md#getProviderDatabasesStatus) | **GET** /provider/databases | Get provider databases status
*Onepanel.OneproviderClusterApi* | [**getProviderManagerStatus**](docs/OneproviderClusterApi.md#getProviderManagerStatus) | **GET** /provider/managers/{host} | Get provider cluster manager status
*Onepanel.OneproviderClusterApi* | [**getProviderManagersStatus**](docs/OneproviderClusterApi.md#getProviderManagersStatus) | **GET** /provider/managers | Get provider cluster managers status
*Onepanel.OneproviderClusterApi* | [**getProviderNagiosReport**](docs/OneproviderClusterApi.md#getProviderNagiosReport) | **GET** /provider/nagios | Get provider nagios report
*Onepanel.OneproviderClusterApi* | [**getProviderWorkerStatus**](docs/OneproviderClusterApi.md#getProviderWorkerStatus) | **GET** /provider/workers/{host} | Get provider cluster worker status
*Onepanel.OneproviderClusterApi* | [**getProviderWorkersStatus**](docs/OneproviderClusterApi.md#getProviderWorkersStatus) | **GET** /provider/workers | Get provider cluster workers status
*Onepanel.OneproviderClusterApi* | [**modifyProviderClusterIps**](docs/OneproviderClusterApi.md#modifyProviderClusterIps) | **PATCH** /provider/cluster_ips | Set external IPs of nodes in application config
*Onepanel.OneproviderClusterApi* | [**startStopProviderDatabase**](docs/OneproviderClusterApi.md#startStopProviderDatabase) | **PATCH** /provider/databases/{host} | Start/stop provider database
*Onepanel.OneproviderClusterApi* | [**startStopProviderDatabases**](docs/OneproviderClusterApi.md#startStopProviderDatabases) | **PATCH** /provider/databases | Start/stop provider databases
*Onepanel.OneproviderClusterApi* | [**startStopProviderManager**](docs/OneproviderClusterApi.md#startStopProviderManager) | **PATCH** /provider/managers/{host} | Start/stop provider cluster manager
*Onepanel.OneproviderClusterApi* | [**startStopProviderManagers**](docs/OneproviderClusterApi.md#startStopProviderManagers) | **PATCH** /provider/managers | Start/stop provider cluster managers
*Onepanel.OneproviderClusterApi* | [**startStopProviderWorker**](docs/OneproviderClusterApi.md#startStopProviderWorker) | **PATCH** /provider/workers/{host} | Start/stop provider cluster worker
*Onepanel.OneproviderClusterApi* | [**startStopProviderWorkers**](docs/OneproviderClusterApi.md#startStopProviderWorkers) | **PATCH** /provider/workers | Start/stop provider cluster workers
*Onepanel.OneproviderIdentityApi* | [**addProvider**](docs/OneproviderIdentityApi.md#addProvider) | **POST** /provider | Register provider
*Onepanel.OneproviderIdentityApi* | [**getOnezoneInfo**](docs/OneproviderIdentityApi.md#getOnezoneInfo) | **GET** /provider/onezone_info | Get Onezone information
*Onepanel.OneproviderIdentityApi* | [**getProvider**](docs/OneproviderIdentityApi.md#getProvider) | **GET** /provider | Get provider details
*Onepanel.OneproviderIdentityApi* | [**modifyProvider**](docs/OneproviderIdentityApi.md#modifyProvider) | **PATCH** /provider | Modify provider details
*Onepanel.OneproviderIdentityApi* | [**removeProvider**](docs/OneproviderIdentityApi.md#removeProvider) | **DELETE** /provider | Unregister provider
*Onepanel.OnezoneClusterApi* | [**addZoneDatabases**](docs/OnezoneClusterApi.md#addZoneDatabases) | **POST** /zone/databases | Add zone databases
*Onepanel.OnezoneClusterApi* | [**addZoneManagers**](docs/OnezoneClusterApi.md#addZoneManagers) | **POST** /zone/managers | Add zone cluster managers
*Onepanel.OnezoneClusterApi* | [**addZoneWorkers**](docs/OnezoneClusterApi.md#addZoneWorkers) | **POST** /zone/workers | Add zone cluster workers
*Onepanel.OnezoneClusterApi* | [**configureZone**](docs/OnezoneClusterApi.md#configureZone) | **POST** /zone/configuration | Configure zone deployment
*Onepanel.OnezoneClusterApi* | [**getZoneClusterIps**](docs/OnezoneClusterApi.md#getZoneClusterIps) | **GET** /zone/cluster_ips | Get zone cluster nodes IPs
*Onepanel.OnezoneClusterApi* | [**getZoneConfiguration**](docs/OnezoneClusterApi.md#getZoneConfiguration) | **GET** /zone/configuration | Get zone cluster configuration
*Onepanel.OnezoneClusterApi* | [**getZoneDatabaseStatus**](docs/OnezoneClusterApi.md#getZoneDatabaseStatus) | **GET** /zone/databases/{host} | Get zone database status
*Onepanel.OnezoneClusterApi* | [**getZoneDatabasesStatus**](docs/OnezoneClusterApi.md#getZoneDatabasesStatus) | **GET** /zone/databases | Get zone databases status
*Onepanel.OnezoneClusterApi* | [**getZoneManagerStatus**](docs/OnezoneClusterApi.md#getZoneManagerStatus) | **GET** /zone/managers/{host} | Get zone cluster manager status
*Onepanel.OnezoneClusterApi* | [**getZoneManagersStatus**](docs/OnezoneClusterApi.md#getZoneManagersStatus) | **GET** /zone/managers | Get zone cluster managers status
*Onepanel.OnezoneClusterApi* | [**getZoneNagiosReport**](docs/OnezoneClusterApi.md#getZoneNagiosReport) | **GET** /zone/nagios | Get zone nagios report
*Onepanel.OnezoneClusterApi* | [**getZoneWorkerStatus**](docs/OnezoneClusterApi.md#getZoneWorkerStatus) | **GET** /zone/workers/{host} | Get zone cluster worker status
*Onepanel.OnezoneClusterApi* | [**getZoneWorkersStatus**](docs/OnezoneClusterApi.md#getZoneWorkersStatus) | **GET** /zone/workers | Get zone cluster workers status
*Onepanel.OnezoneClusterApi* | [**modifyZoneClusterIps**](docs/OnezoneClusterApi.md#modifyZoneClusterIps) | **PATCH** /zone/cluster_ips | Set external IPs of nodes in application config
*Onepanel.OnezoneClusterApi* | [**startStopZoneDatabases**](docs/OnezoneClusterApi.md#startStopZoneDatabases) | **PATCH** /zone/databases | Start/stop zone databases
*Onepanel.OnezoneClusterApi* | [**startStopZoneDatabasesHost**](docs/OnezoneClusterApi.md#startStopZoneDatabasesHost) | **PATCH** /zone/databases/{host} | Start/stop zone database
*Onepanel.OnezoneClusterApi* | [**startStopZoneManager**](docs/OnezoneClusterApi.md#startStopZoneManager) | **PATCH** /zone/managers/{host} | Start/stop zone cluster manager
*Onepanel.OnezoneClusterApi* | [**startStopZoneManagers**](docs/OnezoneClusterApi.md#startStopZoneManagers) | **PATCH** /zone/managers | Start/stop zone cluster managers
*Onepanel.OnezoneClusterApi* | [**startStopZoneWorker**](docs/OnezoneClusterApi.md#startStopZoneWorker) | **PATCH** /zone/workers/{host} | Start/stop zone cluster worker
*Onepanel.OnezoneClusterApi* | [**startStopZoneWorkers**](docs/OnezoneClusterApi.md#startStopZoneWorkers) | **PATCH** /zone/workers | Start/stop zone cluster workers
*Onepanel.SecurityApi* | [**getEmergencyPassphraseStatus**](docs/SecurityApi.md#getEmergencyPassphraseStatus) | **GET** /emergency_passphrase | Get emergency passphrase status
*Onepanel.SecurityApi* | [**getWebCert**](docs/SecurityApi.md#getWebCert) | **GET** /web_cert | Get information about SSL certificates configuration and status
*Onepanel.SecurityApi* | [**modifyWebCert**](docs/SecurityApi.md#modifyWebCert) | **PATCH** /web_cert | Modify SSL certificate configuration
*Onepanel.SecurityApi* | [**setEmergencyPassphrase**](docs/SecurityApi.md#setEmergencyPassphrase) | **PUT** /emergency_passphrase | Set emergency passphrase
*Onepanel.ServiceConfigurationApi* | [**getGuiMessage**](docs/ServiceConfigurationApi.md#getGuiMessage) | **GET** /zone/gui_messages/{id} | Get settings of a Onezone GUI message
*Onepanel.ServiceConfigurationApi* | [**getZonePolicies**](docs/ServiceConfigurationApi.md#getZonePolicies) | **GET** /zone/policies | Get Onezone policies
*Onepanel.ServiceConfigurationApi* | [**modifyGuiMessage**](docs/ServiceConfigurationApi.md#modifyGuiMessage) | **PATCH** /zone/gui_messages/{id} | Modify settings of a Onezone GUI message
*Onepanel.ServiceConfigurationApi* | [**modifyZonePolicies**](docs/ServiceConfigurationApi.md#modifyZonePolicies) | **PATCH** /zone/policies | Modify current Onezone policies
*Onepanel.SpaceSupportApi* | [**getProviderSpaces**](docs/SpaceSupportApi.md#getProviderSpaces) | **GET** /provider/spaces | Get provider spaces
*Onepanel.SpaceSupportApi* | [**getSpaceDetails**](docs/SpaceSupportApi.md#getSpaceDetails) | **GET** /provider/spaces/{id} | Get space details
*Onepanel.SpaceSupportApi* | [**modifySpace**](docs/SpaceSupportApi.md#modifySpace) | **PATCH** /provider/spaces/{id} | Modify space details
*Onepanel.SpaceSupportApi* | [**revokeSpaceSupport**](docs/SpaceSupportApi.md#revokeSpaceSupport) | **DELETE** /provider/spaces/{id} | Revoke space support for a space
*Onepanel.SpaceSupportApi* | [**supportSpace**](docs/SpaceSupportApi.md#supportSpace) | **POST** /provider/spaces | Support space
*Onepanel.StorageImportApi* | [**forceStartAutoStorageImportScan**](docs/StorageImportApi.md#forceStartAutoStorageImportScan) | **POST** /provider/spaces/{id}/storage-import/auto/force-start | Force start auto storage import scan
*Onepanel.StorageImportApi* | [**forceStopAutoStorageImportScan**](docs/StorageImportApi.md#forceStopAutoStorageImportScan) | **POST** /provider/spaces/{id}/storage-import/auto/force-stop | Force stop auto storage import scan
*Onepanel.StorageImportApi* | [**getAutoStorageImportInfo**](docs/StorageImportApi.md#getAutoStorageImportInfo) | **GET** /provider/spaces/{id}/storage-import/auto/info | Get information about auto storage import scan
*Onepanel.StorageImportApi* | [**getAutoStorageImportStats**](docs/StorageImportApi.md#getAutoStorageImportStats) | **GET** /provider/spaces/{id}/storage-import/auto/stats | Get statistics of auto storage import mechanism
*Onepanel.StorageImportApi* | [**getManualStorageImportExample**](docs/StorageImportApi.md#getManualStorageImportExample) | **GET** /provider/spaces/{id}/storage-import/manual/example | Get manual storage import example
*Onepanel.StoragesApi* | [**addStorage**](docs/StoragesApi.md#addStorage) | **POST** /provider/storages | Add storage
*Onepanel.StoragesApi* | [**getStorageDetails**](docs/StoragesApi.md#getStorageDetails) | **GET** /provider/storages/{id} | Get storage details
*Onepanel.StoragesApi* | [**getStorages**](docs/StoragesApi.md#getStorages) | **GET** /provider/storages | Get storages
*Onepanel.StoragesApi* | [**modifyStorage**](docs/StoragesApi.md#modifyStorage) | **PATCH** /provider/storages/{id} | Modify storage config
*Onepanel.StoragesApi* | [**removeStorage**](docs/StoragesApi.md#removeStorage) | **DELETE** /provider/storages/{id} | Remove storage
*Onepanel.UserManagementApi* | [**addOnezoneUser**](docs/UserManagementApi.md#addOnezoneUser) | **POST** /zone/users | Create Onezone user
*Onepanel.UserManagementApi* | [**changeUserPassword**](docs/UserManagementApi.md#changeUserPassword) | **PATCH** /zone/users/{id} | Set password for Onezone user
*Onepanel.UserManagementApi* | [**getOnezoneUser**](docs/UserManagementApi.md#getOnezoneUser) | **GET** /zone/users/{id} | Get Onezone user details
*Onepanel.UserManagementApi* | [**getOnezoneUsers**](docs/UserManagementApi.md#getOnezoneUsers) | **GET** /zone/users | List Onezone users


## Documentation for Models

 - [Onepanel.AutoStorageImportConfig](docs/AutoStorageImportConfig.md)
 - [Onepanel.AutoStorageImportInfo](docs/AutoStorageImportInfo.md)
 - [Onepanel.AutoStorageImportStats](docs/AutoStorageImportStats.md)
 - [Onepanel.BlockDevices](docs/BlockDevices.md)
 - [Onepanel.BlockDevicesBlockDevices](docs/BlockDevicesBlockDevices.md)
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
 - [Onepanel.ErrorDetails](docs/ErrorDetails.md)
 - [Onepanel.GuiMessage](docs/GuiMessage.md)
 - [Onepanel.Host](docs/Host.md)
 - [Onepanel.HostAddRequest](docs/HostAddRequest.md)
 - [Onepanel.Id](docs/Id.md)
 - [Onepanel.Ids](docs/Ids.md)
 - [Onepanel.InlineResponse202](docs/InlineResponse202.md)
 - [Onepanel.InviteToken](docs/InviteToken.md)
 - [Onepanel.LumaConfig](docs/LumaConfig.md)
 - [Onepanel.LumaOnedataGroup](docs/LumaOnedataGroup.md)
 - [Onepanel.LumaOnedataUser](docs/LumaOnedataUser.md)
 - [Onepanel.LumaStorageCredentials](docs/LumaStorageCredentials.md)
 - [Onepanel.LumaStorageUser](docs/LumaStorageUser.md)
 - [Onepanel.LumaUserMapping](docs/LumaUserMapping.md)
 - [Onepanel.ManagerHosts](docs/ManagerHosts.md)
 - [Onepanel.ManualStorageImportExample](docs/ManualStorageImportExample.md)
 - [Onepanel.ModifyClusterIps](docs/ModifyClusterIps.md)
 - [Onepanel.Node](docs/Node.md)
 - [Onepanel.OnezoneInfo](docs/OnezoneInfo.md)
 - [Onepanel.OnezoneUser](docs/OnezoneUser.md)
 - [Onepanel.OnezoneUserCreateRequest](docs/OnezoneUserCreateRequest.md)
 - [Onepanel.PanelConfiguration](docs/PanelConfiguration.md)
 - [Onepanel.PasswordChangeRequest](docs/PasswordChangeRequest.md)
 - [Onepanel.PosixCompatibleCredentials](docs/PosixCompatibleCredentials.md)
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
 - [Onepanel.StorageCreateDetails](docs/StorageCreateDetails.md)
 - [Onepanel.StorageCreateRequest](docs/StorageCreateRequest.md)
 - [Onepanel.StorageCreateResponse](docs/StorageCreateResponse.md)
 - [Onepanel.StorageGetDetails](docs/StorageGetDetails.md)
 - [Onepanel.StorageImport](docs/StorageImport.md)
 - [Onepanel.StorageModifyDetails](docs/StorageModifyDetails.md)
 - [Onepanel.StorageModifyRequest](docs/StorageModifyRequest.md)
 - [Onepanel.TaskId](docs/TaskId.md)
 - [Onepanel.TaskStatus](docs/TaskStatus.md)
 - [Onepanel.TimeStats](docs/TimeStats.md)
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
 - [Onepanel.Ceph](docs/Ceph.md)
 - [Onepanel.CephCredentials](docs/CephCredentials.md)
 - [Onepanel.CephModify](docs/CephModify.md)
 - [Onepanel.Cephrados](docs/Cephrados.md)
 - [Onepanel.CephradosCredentials](docs/CephradosCredentials.md)
 - [Onepanel.CephradosModify](docs/CephradosModify.md)
 - [Onepanel.Glusterfs](docs/Glusterfs.md)
 - [Onepanel.GlusterfsCredentials](docs/GlusterfsCredentials.md)
 - [Onepanel.GlusterfsModify](docs/GlusterfsModify.md)
 - [Onepanel.HTTP](docs/HTTP.md)
 - [Onepanel.HTTPCredentials](docs/HTTPCredentials.md)
 - [Onepanel.HTTPModify](docs/HTTPModify.md)
 - [Onepanel.LumaIdpEntitlementScheme](docs/LumaIdpEntitlementScheme.md)
 - [Onepanel.LumaIdpUserScheme](docs/LumaIdpUserScheme.md)
 - [Onepanel.LumaOnedataGroupScheme](docs/LumaOnedataGroupScheme.md)
 - [Onepanel.LumaOnedataUserScheme](docs/LumaOnedataUserScheme.md)
 - [Onepanel.NFS](docs/NFS.md)
 - [Onepanel.NFSCredentials](docs/NFSCredentials.md)
 - [Onepanel.NFSModify](docs/NFSModify.md)
 - [Onepanel.Nulldevice](docs/Nulldevice.md)
 - [Onepanel.NulldeviceCredentials](docs/NulldeviceCredentials.md)
 - [Onepanel.NulldeviceModify](docs/NulldeviceModify.md)
 - [Onepanel.OpConfiguration](docs/OpConfiguration.md)
 - [Onepanel.OzConfiguration](docs/OzConfiguration.md)
 - [Onepanel.Posix](docs/Posix.md)
 - [Onepanel.PosixCredentials](docs/PosixCredentials.md)
 - [Onepanel.PosixModify](docs/PosixModify.md)
 - [Onepanel.S3](docs/S3.md)
 - [Onepanel.S3Credentials](docs/S3Credentials.md)
 - [Onepanel.S3Modify](docs/S3Modify.md)
 - [Onepanel.Swift](docs/Swift.md)
 - [Onepanel.SwiftCredentials](docs/SwiftCredentials.md)
 - [Onepanel.SwiftModify](docs/SwiftModify.md)
 - [Onepanel.Webdav](docs/Webdav.md)
 - [Onepanel.WebdavCredentials](docs/WebdavCredentials.md)
 - [Onepanel.WebdavModify](docs/WebdavModify.md)
 - [Onepanel.XRootD](docs/XRootD.md)
 - [Onepanel.XRootDCredentials](docs/XRootDCredentials.md)
 - [Onepanel.XRootDModify](docs/XRootDModify.md)


## Documentation for Authorization


### api_key1

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

### api_key2

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### basic

- **Type**: HTTP basic authentication

