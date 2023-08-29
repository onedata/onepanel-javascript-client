/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.3
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
    root.Onepanel.AutoStorageImportConfig = factory(root.Onepanel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AutoStorageImportConfig model module.
   * @module model/AutoStorageImportConfig
   * @version 21.02.3
   */

  /**
   * Constructs a new <code>AutoStorageImportConfig</code>.
   * Configuration of auto storage import mechanism. The auto import is based on scans - gradual traversing of the file system and registration of files and directories. 
   * @alias module:model/AutoStorageImportConfig
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/AutoStorageImportConfig} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>AutoStorageImportConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutoStorageImportConfig} obj Optional instance to populate.
   * @return {module:model/AutoStorageImportConfig} The populated <code>AutoStorageImportConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maxDepth')) {
        obj['maxDepth'] = ApiClient.convertToType(data['maxDepth'], 'Number');
      }
      if (data.hasOwnProperty('syncAcl')) {
        obj['syncAcl'] = ApiClient.convertToType(data['syncAcl'], 'Boolean');
      }
      if (data.hasOwnProperty('continuousScan')) {
        obj['continuousScan'] = ApiClient.convertToType(data['continuousScan'], 'Boolean');
      }
      if (data.hasOwnProperty('scanInterval')) {
        obj['scanInterval'] = ApiClient.convertToType(data['scanInterval'], 'Number');
      }
      if (data.hasOwnProperty('detectModifications')) {
        obj['detectModifications'] = ApiClient.convertToType(data['detectModifications'], 'Boolean');
      }
      if (data.hasOwnProperty('detectDeletions')) {
        obj['detectDeletions'] = ApiClient.convertToType(data['detectDeletions'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Maximum depth of filesystem tree that will be traversed during the scan. 
   * @member {Number} maxDepth
   */
  exports.prototype['maxDepth'] = undefined;
  /**
   * Flag that enables synchronization of NFSv4 ACLs. 
   * @member {Boolean} syncAcl
   * @default false
   */
  exports.prototype['syncAcl'] = false;
  /**
   * With this option enabled the storage will be scanned periodically and direct changes on the storage will be reflected in the assigned Onedata space (upon the consecutive scan). 
   * @member {Boolean} continuousScan
   * @default false
   */
  exports.prototype['continuousScan'] = false;
  /**
   * Period between subsequent scans in seconds (counted from end of one scan till beginning of the following). This parameter is relevant only for continuous scans. 
   * @member {Number} scanInterval
   */
  exports.prototype['scanInterval'] = undefined;
  /**
   * Flag determining that modifications of files on the synchronized storage will be detected. If disabled, the storage will be treated as immutable (only creations and deletions of files on storage will be detected). This parameter is relevant only for continuous scans. 
   * @member {Boolean} detectModifications
   * @default true
   */
  exports.prototype['detectModifications'] = true;
  /**
   * Flag determining that deletions of files from the synchronized storage will be detected. This parameter is relevant only for continuous scans. 
   * @member {Boolean} detectDeletions
   * @default true
   */
  exports.prototype['detectDeletions'] = true;



  return exports;
}));


