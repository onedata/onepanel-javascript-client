/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 18.02.0-rc2
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
    define(['ApiClient', 'model/StorageDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StorageDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.Cephrados = factory(root.Onepanel.ApiClient, root.Onepanel.StorageDetails);
  }
}(this, function(ApiClient, StorageDetails) {
  'use strict';




  /**
   * The Cephrados model module.
   * @module model/Cephrados
   * @version 18.02.0-rc2
   */

  /**
   * Constructs a new <code>Cephrados</code>.
   * The Ceph storage configuration (uses librados).
   * @alias module:model/Cephrados
   * @class
   * @extends module:model/StorageDetails
   * @param type {module:model/StorageDetails.TypeEnum} The type of storage.
   * @param username {String} The username of the Ceph cluster administrator.
   * @param key {String} The admin key to access the Ceph cluster.
   * @param monitorHostname {String} The monitor host name.
   * @param clusterName {String} The Ceph cluster name.
   * @param poolName {String} The Ceph pool name.
   */
  var exports = function(type, username, key, monitorHostname, clusterName, poolName) {
    var _this = this;
    StorageDetails.call(_this, type);
    _this['username'] = username;
    _this['key'] = key;
    _this['monitorHostname'] = monitorHostname;
    _this['clusterName'] = clusterName;
    _this['poolName'] = poolName;





  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/Cephrados} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>Cephrados</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cephrados} obj Optional instance to populate.
   * @return {module:model/Cephrados} The populated <code>Cephrados</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StorageDetails.constructFromObject(data, obj);
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
      if (data.hasOwnProperty('blockSize')) {
        obj['blockSize'] = ApiClient.convertToType(data['blockSize'], 'Number');
      }
      if (data.hasOwnProperty('insecure')) {
        obj['insecure'] = ApiClient.convertToType(data['insecure'], 'Boolean');
      }
      if (data.hasOwnProperty('readonly')) {
        obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
      }
      if (data.hasOwnProperty('storagePathType')) {
        obj['storagePathType'] = ApiClient.convertToType(data['storagePathType'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(StorageDetails.prototype);
  exports.prototype.constructor = exports;

  /**
   * The username of the Ceph cluster administrator.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The admin key to access the Ceph cluster.
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
  /**
   * Storage block size in bytes.
   * @member {Number} blockSize
   */
  exports.prototype['blockSize'] = undefined;
  /**
   * Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode. 
   * @member {Boolean} insecure
   * @default false
   */
  exports.prototype['insecure'] = false;
  /**
   * Defines whether storage is readonly.
   * @member {Boolean} readonly
   * @default false
   */
  exports.prototype['readonly'] = false;
  /**
   * Determines how the logical file paths will be mapped on the storage. 'canonical' paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. 'flat' paths are based on unique file UUID's and do not require on-storage rename when logical file name is changed. 
   * @member {String} storagePathType
   * @default 'flat'
   */
  exports.prototype['storagePathType'] = 'flat';



  return exports;
}));

