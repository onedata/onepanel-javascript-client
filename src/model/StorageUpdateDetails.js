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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.StorageUpdateDetails = factory(root.Onepanel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StorageUpdateDetails model module.
   * @module model/StorageUpdateDetails
   * @version 18.02.1
   */

  /**
   * Constructs a new <code>StorageUpdateDetails</code>.
   * The storage update configuration. Storage update ensures that all changes on storage will be reflected in space. 
   * @alias module:model/StorageUpdateDetails
   * @class
   * @param strategy {String} The update strategy. One of no_update, simple_scan.
   */
  var exports = function(strategy) {
    var _this = this;

    _this['strategy'] = strategy;





  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/StorageUpdateDetails} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>StorageUpdateDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StorageUpdateDetails} obj Optional instance to populate.
   * @return {module:model/StorageUpdateDetails} The populated <code>StorageUpdateDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('strategy')) {
        obj['strategy'] = ApiClient.convertToType(data['strategy'], 'String');
      }
      if (data.hasOwnProperty('maxDepth')) {
        obj['maxDepth'] = ApiClient.convertToType(data['maxDepth'], 'Number');
      }
      if (data.hasOwnProperty('scanInterval')) {
        obj['scanInterval'] = ApiClient.convertToType(data['scanInterval'], 'Number');
      }
      if (data.hasOwnProperty('writeOnce')) {
        obj['writeOnce'] = ApiClient.convertToType(data['writeOnce'], 'Boolean');
      }
      if (data.hasOwnProperty('deleteEnable')) {
        obj['deleteEnable'] = ApiClient.convertToType(data['deleteEnable'], 'Boolean');
      }
      if (data.hasOwnProperty('syncAcl')) {
        obj['syncAcl'] = ApiClient.convertToType(data['syncAcl'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The update strategy. One of no_update, simple_scan.
   * @member {String} strategy
   */
  exports.prototype['strategy'] = undefined;
  /**
   * Maximum depth of filesystem tree that will be traversed during storage synchronization. 
   * @member {Number} maxDepth
   */
  exports.prototype['maxDepth'] = undefined;
  /**
   * Period between subsequent scans in seconds (counted from end of one scan till beginning of the following). 
   * @member {Number} scanInterval
   */
  exports.prototype['scanInterval'] = undefined;
  /**
   * Flag determining that synchronized storage will be treated as immutable (only creations and deletions of files on storage will be detected). 
   * @member {Boolean} writeOnce
   */
  exports.prototype['writeOnce'] = undefined;
  /**
   * Flag determining that deletions of files will be detected. 
   * @member {Boolean} deleteEnable
   */
  exports.prototype['deleteEnable'] = undefined;
  /**
   * Flag that enables synchronization of NFSv4 ACLs. 
   * @member {Boolean} syncAcl
   */
  exports.prototype['syncAcl'] = undefined;



  return exports;
}));


