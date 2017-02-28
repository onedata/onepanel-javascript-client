/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries - [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a Couchbase backend, which can be distributed on any number of nodes, these are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other deployed processes in one site, these are availables under these are available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using which users can login to Onezone service using HTTP Basic authentication without OpenID. This role makes sense only on Onepanel which manages Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`, `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 3.0.0-rc10
 * Contact: info@onedata.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClusterStorages'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClusterStorages'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.Ceph = factory(root.Onepanel.ApiClient, root.Onepanel.ClusterStorages);
  }
}(this, function(ApiClient, ClusterStorages) {
  'use strict';




  /**
   * The Ceph model module.
   * @module model/Ceph
   * @version 3.0.0-rc10
   */

  /**
   * Constructs a new <code>Ceph</code>.
   * The Ceph storage configuration.
   * @alias module:model/Ceph
   * @class
   * @extends module:model/ClusterStorages
   * @param type {module:model/ClusterStorages.TypeEnum} The type of storage.
   * @param username {String} The username for authentication to Ceph cluster.
   * @param key {String} The key to access the Ceph cluster.
   * @param monitorHostname {String} The monitor host name.
   * @param clusterName {String} The Ceph cluster name.
   * @param poolName {String} The Ceph pool name.
   */
  var exports = function(type, username, key, monitorHostname, clusterName, poolName) {
    var _this = this;
    ClusterStorages.call(_this, type);
    _this['username'] = username;
    _this['key'] = key;
    _this['monitorHostname'] = monitorHostname;
    _this['clusterName'] = clusterName;
    _this['poolName'] = poolName;

  };

  /**
   * Constructs a <code>Ceph</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ceph} obj Optional instance to populate.
   * @return {module:model/Ceph} The populated <code>Ceph</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ClusterStorages.constructFromObject(data, obj);
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('monitorHostname')) {
        obj['monitorHostname'] = ApiClient.convertToType(data['monitorHostname'], 'String');
      }
      if (data.hasOwnProperty('clusterName')) {
        obj['clusterName'] = ApiClient.convertToType(data['clusterName'], 'String');
      }
      if (data.hasOwnProperty('poolName')) {
        obj['poolName'] = ApiClient.convertToType(data['poolName'], 'String');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(ClusterStorages.prototype);
  exports.prototype.constructor = exports;

  /**
   * The username for authentication to Ceph cluster.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The key to access the Ceph cluster.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The monitor host name.
   * @member {String} monitorHostname
   */
  exports.prototype['monitorHostname'] = undefined;
  /**
   * The Ceph cluster name.
   * @member {String} clusterName
   */
  exports.prototype['clusterName'] = undefined;
  /**
   * The Ceph pool name.
   * @member {String} poolName
   */
  exports.prototype['poolName'] = undefined;
  /**
   * Storage operation timeout in milliseconds.
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;



  return exports;
}));


