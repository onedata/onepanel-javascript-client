/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X POST -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 18.02.1
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
    root.Onepanel.Glusterfs = factory(root.Onepanel.ApiClient, root.Onepanel.StorageDetails);
  }
}(this, function(ApiClient, StorageDetails) {
  'use strict';




  /**
   * The Glusterfs model module.
   * @module model/Glusterfs
   * @version 18.02.1
   */

  /**
   * Constructs a new <code>Glusterfs</code>.
   * The GlusterFS storage configuration.
   * @alias module:model/Glusterfs
   * @class
   * @extends module:model/StorageDetails
   * @param type {String} The type of storage.
   * @param volume {String} The name of the volume to use as a storage backend.
   * @param hostname {String} The hostname (IP address or FQDN) of GlusterFS volume server.
   */
  var exports = function(type, volume, hostname) {
    var _this = this;
    StorageDetails.call(_this);
    _this['type'] = type;
    _this['volume'] = volume;
    _this['hostname'] = hostname;








  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/Glusterfs} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>Glusterfs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Glusterfs} obj Optional instance to populate.
   * @return {module:model/Glusterfs} The populated <code>Glusterfs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StorageDetails.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'String');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('transport')) {
        obj['transport'] = ApiClient.convertToType(data['transport'], 'String');
      }
      if (data.hasOwnProperty('mountPoint')) {
        obj['mountPoint'] = ApiClient.convertToType(data['mountPoint'], 'String');
      }
      if (data.hasOwnProperty('xlatorOptions')) {
        obj['xlatorOptions'] = ApiClient.convertToType(data['xlatorOptions'], 'String');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
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
   * The type of storage.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The name of the volume to use as a storage backend.
   * @member {String} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * The hostname (IP address or FQDN) of GlusterFS volume server.
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * The GlusterFS port on volume server.
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * The transport protocol to use to connect to the volume server.
   * @member {module:model/Glusterfs.TransportEnum} transport
   * @default 'tcp'
   */
  exports.prototype['transport'] = 'tcp';
  /**
   * Relative mountpoint within the volume which should be used by Oneprovider.
   * @member {String} mountPoint
   * @default ''
   */
  exports.prototype['mountPoint'] = '';
  /**
   * Volume specific GlusterFS translator options, in the format:   TRANSLATOR1.OPTION1=VALUE1;TRANSLATOR2.OPTION2=VALUE2;... 
   * @member {String} xlatorOptions
   * @default ''
   */
  exports.prototype['xlatorOptions'] = '';
  /**
   * Storage operation timeout in milliseconds.
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;
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
   * @default 'canonical'
   */
  exports.prototype['storagePathType'] = 'canonical';


  /**
   * Allowed values for the <code>transport</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TransportEnum = {
    /**
     * value: "tcp"
     * @const
     */
    "tcp": "tcp",
    /**
     * value: "rdma"
     * @const
     */
    "rdma": "rdma",
    /**
     * value: "socket"
     * @const
     */
    "socket": "socket"  };


  return exports;
}));


