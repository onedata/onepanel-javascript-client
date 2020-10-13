/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 20.02.1
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
    define(['ApiClient', 'model/GlusterfsCommon', 'model/StorageCommonPathTypeCanonical', 'model/StorageGetDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GlusterfsCommon'), require('./StorageCommonPathTypeCanonical'), require('./StorageGetDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.Glusterfs = factory(root.Onepanel.ApiClient, root.Onepanel.GlusterfsCommon, root.Onepanel.StorageCommonPathTypeCanonical, root.Onepanel.StorageGetDetails);
  }
}(this, function(ApiClient, GlusterfsCommon, StorageCommonPathTypeCanonical, StorageGetDetails) {
  'use strict';




  /**
   * The Glusterfs model module.
   * @module model/Glusterfs
   * @version 20.02.1
   */

  /**
   * Constructs a new <code>Glusterfs</code>.
   * The GlusterFS storage configuration.
   * @alias module:model/Glusterfs
   * @class
   * @extends module:model/StorageGetDetails
   * @implements module:model/GlusterfsCommon
   * @implements module:model/StorageCommonPathTypeCanonical
   * @param type {String} The type of this storage.
   */
  var exports = function(type) {
    var _this = this;
    StorageGetDetails.call(_this);
    GlusterfsCommon.call(_this, type);
    StorageCommonPathTypeCanonical.call(_this);
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
      StorageGetDetails.constructFromObject(data, obj);
      GlusterfsCommon.constructFromObject(data, obj);
      StorageCommonPathTypeCanonical.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(StorageGetDetails.prototype);
  exports.prototype.constructor = exports;


  // Implement GlusterfsCommon interface:
  /**
   * @member {module:model/GlusterfsCommon.TypeEnum} type
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
   * @member {module:model/GlusterfsCommon.TransportEnum} transport
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

  // Implement StorageCommonPathTypeCanonical interface:
  /**
   * Determines how the logical file paths will be mapped on the storage. 'canonical' paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. 'flat' paths are based on unique file UUID's and do not require on-storage rename when logical file name is changed. 
   * @member {String} storagePathType
   * @default 'canonical'
   */
exports.prototype['storagePathType'] = 'canonical';



  return exports;
}));


