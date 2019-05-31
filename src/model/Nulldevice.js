/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in one of `X-Auth-Token`, `Macaroon` or `Authorization: Bearer` headers. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H 'X-Auth-Token: $TOKEN' https://$HOST:9443/api/v3/onepanel/... curl -H 'Macaroon: $TOKEN' https://$HOST:9443/api/v3/onepanel/... curl -H 'Authorization: Bearer $TOKEN' https://$HOST:9443/api/v3/onepanel/... ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
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
    root.Onepanel.Nulldevice = factory(root.Onepanel.ApiClient, root.Onepanel.StorageDetails);
  }
}(this, function(ApiClient, StorageDetails) {
  'use strict';




  /**
   * The Nulldevice model module.
   * @module model/Nulldevice
   * @version 18.02.1
   */

  /**
   * Constructs a new <code>Nulldevice</code>.
   * The Null Device storage configuration.
   * @alias module:model/Nulldevice
   * @class
   * @extends module:model/StorageDetails
   * @param type {module:model/Nulldevice.TypeEnum} The type of storage.
   */
  var exports = function(type) {
    var _this = this;
    StorageDetails.call(_this);
    _this['type'] = type;








  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/Nulldevice} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>Nulldevice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Nulldevice} obj Optional instance to populate.
   * @return {module:model/Nulldevice} The populated <code>Nulldevice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StorageDetails.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('latencyMin')) {
        obj['latencyMin'] = ApiClient.convertToType(data['latencyMin'], 'Number');
      }
      if (data.hasOwnProperty('latencyMax')) {
        obj['latencyMax'] = ApiClient.convertToType(data['latencyMax'], 'Number');
      }
      if (data.hasOwnProperty('timeoutProbability')) {
        obj['timeoutProbability'] = ApiClient.convertToType(data['timeoutProbability'], 'Number');
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
      }
      if (data.hasOwnProperty('storagePathType')) {
        obj['storagePathType'] = ApiClient.convertToType(data['storagePathType'], 'String');
      }
      if (data.hasOwnProperty('simulatedFilesystemParameters')) {
        obj['simulatedFilesystemParameters'] = ApiClient.convertToType(data['simulatedFilesystemParameters'], 'String');
      }
      if (data.hasOwnProperty('simulatedFilesystemGrowSpeed')) {
        obj['simulatedFilesystemGrowSpeed'] = ApiClient.convertToType(data['simulatedFilesystemGrowSpeed'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(StorageDetails.prototype);
  exports.prototype.constructor = exports;

  /**
   * The type of storage.
   * @member {module:model/Nulldevice.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Minimum latency in milliseconds, which should be simulated for selected operations. 
   * @member {Number} latencyMin
   */
  exports.prototype['latencyMin'] = undefined;
  /**
   * Maximum latency in milliseconds, which should be simulated for selected operations. 
   * @member {Number} latencyMax
   */
  exports.prototype['latencyMax'] = undefined;
  /**
   * Probability (0.0, 1.0), with which an operation should return a timeout error. 
   * @member {Number} timeoutProbability
   * @default 0.0
   */
  exports.prototype['timeoutProbability'] = 0.0;
  /**
   * Comma-separated list of filesystem operations, for which latency and timeout should be simulated. Empty or '*' mean all operations will be affected. 
   * @member {String} filter
   * @default '*'
   */
  exports.prototype['filter'] = '*';
  /**
   * Storage operation timeout in milliseconds.
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;
  /**
   * Determines how the logical file paths will be mapped on the storage. 'canonical' paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. 'flat' paths are based on unique file UUID's and do not require on-storage rename when logical file name is changed. 
   * @member {String} storagePathType
   * @default 'canonical'
   */
  exports.prototype['storagePathType'] = 'canonical';
  /**
   * Specifies the parameters for a simulated null device filesystem. For example `2-2:2-2:0-1` will generate a filesystem tree which has 2 directories (`0` and `1`) and 2 files (`2` and `3`) in the root of the filesystem, each of these directories will have 2 subdirectories (`0` and `1`) and 2 files (`2` and `3`) and each of these subdirectories has only a single file (`0`). Default empty string disables the simulated filesystem feature. 
   * @member {String} simulatedFilesystemParameters
   * @default ''
   */
  exports.prototype['simulatedFilesystemParameters'] = '';
  /**
   * Determines the simulated filesystem grow rate. Default 0.0 value will cause all the files and directories defined by the `simulatedFilesystemParameters` specification to be visible immediately. For example value of 0.01 will increase the number of the visible filesystem entries by 1 file per 100 seconds, while 100.0 will increase it by 100 files per second. 
   * @member {Number} simulatedFilesystemGrowSpeed
   * @default 0.0
   */
  exports.prototype['simulatedFilesystemGrowSpeed'] = 0.0;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "nulldevice"
     * @const
     */
    "nulldevice": "nulldevice"  };


  return exports;
}));


