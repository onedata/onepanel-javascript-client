/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate > client libraries - [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a Couchbase backend, which can be distributed on any number of nodes, these are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other deployed processes in one site, these are availables under these are available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using which users can login to Onezone service using HTTP Basic authentication without OpenID. This role makes sense only on Onepanel which manages Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`, `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 3.0.0-rc9
 * Contact: info@onedata.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClusterDatabases', 'model/ClusterManagers', 'model/ClusterStorages', 'model/ClusterWorkers', 'model/ZoneClusterConfigurationNodes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClusterDatabases'), require('./ClusterManagers'), require('./ClusterStorages'), require('./ClusterWorkers'), require('./ZoneClusterConfigurationNodes'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.ProviderClusterConfiguration = factory(root.Onepanel.ApiClient, root.Onepanel.ClusterDatabases, root.Onepanel.ClusterManagers, root.Onepanel.ClusterStorages, root.Onepanel.ClusterWorkers, root.Onepanel.ZoneClusterConfigurationNodes);
  }
}(this, function(ApiClient, ClusterDatabases, ClusterManagers, ClusterStorages, ClusterWorkers, ZoneClusterConfigurationNodes) {
  'use strict';




  /**
   * The ProviderClusterConfiguration model module.
   * @module model/ProviderClusterConfiguration
   * @version 3.0.0-rc9
   */

  /**
   * Constructs a new <code>ProviderClusterConfiguration</code>.
   * The provider cluster configuration.
   * @alias module:model/ProviderClusterConfiguration
   * @class
   * @param domainName {String} The name of a domain common for all services in the cluster. Together with a node hostname constitutes a fully qualified domain name (FDQN) of the node. 
   * @param nodes {Object.<String, module:model/ZoneClusterConfigurationNodes>} The collection of nodes aliases associated with nodes properties.
   * @param databases {module:model/ClusterDatabases} 
   * @param managers {module:model/ClusterManagers} 
   * @param workers {module:model/ClusterWorkers} 
   */
  var exports = function(domainName, nodes, databases, managers, workers) {
    var _this = this;


    _this['domainName'] = domainName;
    _this['nodes'] = nodes;
    _this['databases'] = databases;
    _this['managers'] = managers;
    _this['workers'] = workers;

  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/ProviderClusterConfiguration} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>ProviderClusterConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProviderClusterConfiguration} obj Optional instance to populate.
   * @return {module:model/ProviderClusterConfiguration} The populated <code>ProviderClusterConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('autoDeploy')) {
        obj['autoDeploy'] = ApiClient.convertToType(data['autoDeploy'], 'Boolean');
      }
      if (data.hasOwnProperty('domainName')) {
        obj['domainName'] = ApiClient.convertToType(data['domainName'], 'String');
      }
      if (data.hasOwnProperty('nodes')) {
        obj['nodes'] = ApiClient.convertToType(data['nodes'], {'String': ZoneClusterConfigurationNodes});
      }
      if (data.hasOwnProperty('databases')) {
        obj['databases'] = ClusterDatabases.constructFromObject(data['databases']);
      }
      if (data.hasOwnProperty('managers')) {
        obj['managers'] = ClusterManagers.constructFromObject(data['managers']);
      }
      if (data.hasOwnProperty('workers')) {
        obj['workers'] = ClusterWorkers.constructFromObject(data['workers']);
      }
      if (data.hasOwnProperty('storages')) {
        obj['storages'] = ApiClient.convertToType(data['storages'], {'String': ClusterStorages});
      }
    }
    return obj;
  }

  /**
   * Defines whether administrative cluster should be created from the list of provided cluster nodes. 
   * @member {Boolean} autoDeploy
   */
  exports.prototype['autoDeploy'] = undefined;
  /**
   * The name of a domain common for all services in the cluster. Together with a node hostname constitutes a fully qualified domain name (FDQN) of the node. 
   * @member {String} domainName
   */
  exports.prototype['domainName'] = undefined;
  /**
   * The collection of nodes aliases associated with nodes properties.
   * @member {Object.<String, module:model/ZoneClusterConfigurationNodes>} nodes
   */
  exports.prototype['nodes'] = undefined;
  /**
   * @member {module:model/ClusterDatabases} databases
   */
  exports.prototype['databases'] = undefined;
  /**
   * @member {module:model/ClusterManagers} managers
   */
  exports.prototype['managers'] = undefined;
  /**
   * @member {module:model/ClusterWorkers} workers
   */
  exports.prototype['workers'] = undefined;
  /**
   * The cluster storage configuration.
   * @member {Object.<String, module:model/ClusterStorages>} storages
   */
  exports.prototype['storages'] = undefined;



  return exports;
}));


