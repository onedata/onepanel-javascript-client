/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-alpha21
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
    define(['ApiClient', 'model/CephOsd'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CephOsd'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.Loopdevice = factory(root.Onepanel.ApiClient, root.Onepanel.CephOsd);
  }
}(this, function(ApiClient, CephOsd) {
  'use strict';




  /**
   * The Loopdevice model module.
   * @module model/Loopdevice
   * @version 21.02.0-alpha21
   */

  /**
   * Constructs a new <code>Loopdevice</code>.
   * Loopdevice OSD specification. This is a Blockdevice OSD backed by a loopdevice backed by a file in given directory.
   * @alias module:model/Loopdevice
   * @class
   * @extends module:model/CephOsd
   * @param host {String} Host on which given OSD should be deployed. It must be the full host name and not an \"alias\" as used in Oneprovider cluster deployment.
   * @param id {Number} Id of the OSD.
   * @param type {module:model/Loopdevice.TypeEnum} Type of the OSD. Available types are: - blockdevice - formats a raw block device to store the data - loopdevice - stores data in a file mounted as loop device 
   * @param size {Number} Size in bytes of the loopdevice file.
   */
  var exports = function(host, id, type, size) {
    var _this = this;
    CephOsd.call(_this, host, id);
    _this['type'] = type;

    _this['size'] = size;
  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/Loopdevice} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>Loopdevice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Loopdevice} obj Optional instance to populate.
   * @return {module:model/Loopdevice} The populated <code>Loopdevice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      CephOsd.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(CephOsd.prototype);
  exports.prototype.constructor = exports;

  /**
   * Type of the OSD. Available types are: - blockdevice - formats a raw block device to store the data - loopdevice - stores data in a file mounted as loop device 
   * @member {module:model/Loopdevice.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Path of the loopdevice file to be created. If omitted, default path will be generated according to following template: /volumes/persistence/ceph-loopdevices/osd-{uuid}.loop 
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * Size in bytes of the loopdevice file.
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "loopdevice"
     * @const
     */
    "loopdevice": "loopdevice"  };


  return exports;
}));


