/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 3.0.0-dev
 * Contact: info@onedata.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Ceph', 'model/ClusterDatabases', 'model/ClusterManagers', 'model/ClusterWorkers', 'model/Cookie', 'model/Error', 'model/ManagerHosts', 'model/POSIX', 'model/PanelConfiguration', 'model/PanelConfigurationUsers', 'model/ProviderClusterConfiguration', 'model/ProviderConfiguration', 'model/ProviderConfigurationOneprovider', 'model/ProviderConfigurationOnezone', 'model/ProviderDetails', 'model/ProviderModifyRequest', 'model/ProviderRegisterRequest', 'model/ProviderSpaces', 'model/ProviderStorages', 'model/S3', 'model/ServiceDatabases', 'model/ServiceError', 'model/ServiceHosts', 'model/ServiceStatus', 'model/ServiceStatusHost', 'model/SessionDetails', 'model/SpaceDetails', 'model/SpaceSupportRequest', 'model/StorageCreateRequest', 'model/StorageDetails', 'model/StorageModifyRequest', 'model/Swift', 'model/TaskStatus', 'model/UserCreateRequest', 'model/UserDetails', 'model/UserModifyRequest', 'model/ZoneClusterConfiguration', 'model/ZoneClusterConfigurationNodes', 'model/ZoneConfiguration', 'model/ZoneConfigurationOnezone', 'api/OnepanelApi', 'api/OneproviderApi', 'api/OnezoneApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Ceph'), require('./model/ClusterDatabases'), require('./model/ClusterManagers'), require('./model/ClusterWorkers'), require('./model/Cookie'), require('./model/Error'), require('./model/ManagerHosts'), require('./model/POSIX'), require('./model/PanelConfiguration'), require('./model/PanelConfigurationUsers'), require('./model/ProviderClusterConfiguration'), require('./model/ProviderConfiguration'), require('./model/ProviderConfigurationOneprovider'), require('./model/ProviderConfigurationOnezone'), require('./model/ProviderDetails'), require('./model/ProviderModifyRequest'), require('./model/ProviderRegisterRequest'), require('./model/ProviderSpaces'), require('./model/ProviderStorages'), require('./model/S3'), require('./model/ServiceDatabases'), require('./model/ServiceError'), require('./model/ServiceHosts'), require('./model/ServiceStatus'), require('./model/ServiceStatusHost'), require('./model/SessionDetails'), require('./model/SpaceDetails'), require('./model/SpaceSupportRequest'), require('./model/StorageCreateRequest'), require('./model/StorageDetails'), require('./model/StorageModifyRequest'), require('./model/Swift'), require('./model/TaskStatus'), require('./model/UserCreateRequest'), require('./model/UserDetails'), require('./model/UserModifyRequest'), require('./model/ZoneClusterConfiguration'), require('./model/ZoneClusterConfigurationNodes'), require('./model/ZoneConfiguration'), require('./model/ZoneConfigurationOnezone'), require('./api/OnepanelApi'), require('./api/OneproviderApi'), require('./api/OnezoneApi'));
  }
}(function(ApiClient, Ceph, ClusterDatabases, ClusterManagers, ClusterWorkers, Cookie, Error, ManagerHosts, POSIX, PanelConfiguration, PanelConfigurationUsers, ProviderClusterConfiguration, ProviderConfiguration, ProviderConfigurationOneprovider, ProviderConfigurationOnezone, ProviderDetails, ProviderModifyRequest, ProviderRegisterRequest, ProviderSpaces, ProviderStorages, S3, ServiceDatabases, ServiceError, ServiceHosts, ServiceStatus, ServiceStatusHost, SessionDetails, SpaceDetails, SpaceSupportRequest, StorageCreateRequest, StorageDetails, StorageModifyRequest, Swift, TaskStatus, UserCreateRequest, UserDetails, UserModifyRequest, ZoneClusterConfiguration, ZoneClusterConfigurationNodes, ZoneConfiguration, ZoneConfigurationOnezone, OnepanelApi, OneproviderApi, OnezoneApi) {
  'use strict';

  /**
   * This is a Javascript client for [Onedata Onepanel](https://onedata.org) service, automatically generated using [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Onepanel = require('index'); // See note below*.
   * var xxxSvc = new Onepanel.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Onepanel.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Onepanel.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Onepanel.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.0.0-dev
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Ceph model constructor.
     * @property {module:model/Ceph}
     */
    Ceph: Ceph,
    /**
     * The ClusterDatabases model constructor.
     * @property {module:model/ClusterDatabases}
     */
    ClusterDatabases: ClusterDatabases,
    /**
     * The ClusterManagers model constructor.
     * @property {module:model/ClusterManagers}
     */
    ClusterManagers: ClusterManagers,
    /**
     * The ClusterWorkers model constructor.
     * @property {module:model/ClusterWorkers}
     */
    ClusterWorkers: ClusterWorkers,
    /**
     * The Cookie model constructor.
     * @property {module:model/Cookie}
     */
    Cookie: Cookie,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ManagerHosts model constructor.
     * @property {module:model/ManagerHosts}
     */
    ManagerHosts: ManagerHosts,
    /**
     * The POSIX model constructor.
     * @property {module:model/POSIX}
     */
    POSIX: POSIX,
    /**
     * The PanelConfiguration model constructor.
     * @property {module:model/PanelConfiguration}
     */
    PanelConfiguration: PanelConfiguration,
    /**
     * The PanelConfigurationUsers model constructor.
     * @property {module:model/PanelConfigurationUsers}
     */
    PanelConfigurationUsers: PanelConfigurationUsers,
    /**
     * The ProviderClusterConfiguration model constructor.
     * @property {module:model/ProviderClusterConfiguration}
     */
    ProviderClusterConfiguration: ProviderClusterConfiguration,
    /**
     * The ProviderConfiguration model constructor.
     * @property {module:model/ProviderConfiguration}
     */
    ProviderConfiguration: ProviderConfiguration,
    /**
     * The ProviderConfigurationOneprovider model constructor.
     * @property {module:model/ProviderConfigurationOneprovider}
     */
    ProviderConfigurationOneprovider: ProviderConfigurationOneprovider,
    /**
     * The ProviderConfigurationOnezone model constructor.
     * @property {module:model/ProviderConfigurationOnezone}
     */
    ProviderConfigurationOnezone: ProviderConfigurationOnezone,
    /**
     * The ProviderDetails model constructor.
     * @property {module:model/ProviderDetails}
     */
    ProviderDetails: ProviderDetails,
    /**
     * The ProviderModifyRequest model constructor.
     * @property {module:model/ProviderModifyRequest}
     */
    ProviderModifyRequest: ProviderModifyRequest,
    /**
     * The ProviderRegisterRequest model constructor.
     * @property {module:model/ProviderRegisterRequest}
     */
    ProviderRegisterRequest: ProviderRegisterRequest,
    /**
     * The ProviderSpaces model constructor.
     * @property {module:model/ProviderSpaces}
     */
    ProviderSpaces: ProviderSpaces,
    /**
     * The ProviderStorages model constructor.
     * @property {module:model/ProviderStorages}
     */
    ProviderStorages: ProviderStorages,
    /**
     * The S3 model constructor.
     * @property {module:model/S3}
     */
    S3: S3,
    /**
     * The ServiceDatabases model constructor.
     * @property {module:model/ServiceDatabases}
     */
    ServiceDatabases: ServiceDatabases,
    /**
     * The ServiceError model constructor.
     * @property {module:model/ServiceError}
     */
    ServiceError: ServiceError,
    /**
     * The ServiceHosts model constructor.
     * @property {module:model/ServiceHosts}
     */
    ServiceHosts: ServiceHosts,
    /**
     * The ServiceStatus model constructor.
     * @property {module:model/ServiceStatus}
     */
    ServiceStatus: ServiceStatus,
    /**
     * The ServiceStatusHost model constructor.
     * @property {module:model/ServiceStatusHost}
     */
    ServiceStatusHost: ServiceStatusHost,
    /**
     * The SessionDetails model constructor.
     * @property {module:model/SessionDetails}
     */
    SessionDetails: SessionDetails,
    /**
     * The SpaceDetails model constructor.
     * @property {module:model/SpaceDetails}
     */
    SpaceDetails: SpaceDetails,
    /**
     * The SpaceSupportRequest model constructor.
     * @property {module:model/SpaceSupportRequest}
     */
    SpaceSupportRequest: SpaceSupportRequest,
    /**
     * The StorageCreateRequest model constructor.
     * @property {module:model/StorageCreateRequest}
     */
    StorageCreateRequest: StorageCreateRequest,
    /**
     * The StorageDetails model constructor.
     * @property {module:model/StorageDetails}
     */
    StorageDetails: StorageDetails,
    /**
     * The StorageModifyRequest model constructor.
     * @property {module:model/StorageModifyRequest}
     */
    StorageModifyRequest: StorageModifyRequest,
    /**
     * The Swift model constructor.
     * @property {module:model/Swift}
     */
    Swift: Swift,
    /**
     * The TaskStatus model constructor.
     * @property {module:model/TaskStatus}
     */
    TaskStatus: TaskStatus,
    /**
     * The UserCreateRequest model constructor.
     * @property {module:model/UserCreateRequest}
     */
    UserCreateRequest: UserCreateRequest,
    /**
     * The UserDetails model constructor.
     * @property {module:model/UserDetails}
     */
    UserDetails: UserDetails,
    /**
     * The UserModifyRequest model constructor.
     * @property {module:model/UserModifyRequest}
     */
    UserModifyRequest: UserModifyRequest,
    /**
     * The ZoneClusterConfiguration model constructor.
     * @property {module:model/ZoneClusterConfiguration}
     */
    ZoneClusterConfiguration: ZoneClusterConfiguration,
    /**
     * The ZoneClusterConfigurationNodes model constructor.
     * @property {module:model/ZoneClusterConfigurationNodes}
     */
    ZoneClusterConfigurationNodes: ZoneClusterConfigurationNodes,
    /**
     * The ZoneConfiguration model constructor.
     * @property {module:model/ZoneConfiguration}
     */
    ZoneConfiguration: ZoneConfiguration,
    /**
     * The ZoneConfigurationOnezone model constructor.
     * @property {module:model/ZoneConfigurationOnezone}
     */
    ZoneConfigurationOnezone: ZoneConfigurationOnezone,
    /**
     * The OnepanelApi service constructor.
     * @property {module:api/OnepanelApi}
     */
    OnepanelApi: OnepanelApi,
    /**
     * The OneproviderApi service constructor.
     * @property {module:api/OneproviderApi}
     */
    OneproviderApi: OneproviderApi,
    /**
     * The OnezoneApi service constructor.
     * @property {module:api/OnezoneApi}
     */
    OnezoneApi: OnezoneApi
  };

  return exports;
}));
