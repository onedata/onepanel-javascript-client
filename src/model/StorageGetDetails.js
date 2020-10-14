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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.StorageGetDetails = factory(root.Onepanel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StorageGetDetails model module.
   * @module model/StorageGetDetails
   * @version 20.02.1
   */

  /**
   * Constructs a new <code>StorageGetDetails</code>.
   * The storage configuration.
   * @alias module:model/StorageGetDetails
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/StorageGetDetails} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    return 'type';
  };

  /**
   * Constructs a <code>StorageGetDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StorageGetDetails} obj Optional instance to populate.
   * @return {module:model/StorageGetDetails} The populated <code>StorageGetDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
      }
      if (data.hasOwnProperty('skipStorageDetection')) {
        obj['skipStorageDetection'] = ApiClient.convertToType(data['skipStorageDetection'], 'Boolean');
      }
      if (data.hasOwnProperty('lumaFeed')) {
        obj['lumaFeed'] = ApiClient.convertToType(data['lumaFeed'], 'String');
      }
      if (data.hasOwnProperty('lumaFeedUrl')) {
        obj['lumaFeedUrl'] = ApiClient.convertToType(data['lumaFeedUrl'], 'String');
      }
      if (data.hasOwnProperty('lumaFeedApiKey')) {
        obj['lumaFeedApiKey'] = ApiClient.convertToType(data['lumaFeedApiKey'], 'String');
      }
      if (data.hasOwnProperty('qosParameters')) {
        obj['qosParameters'] = ApiClient.convertToType(data['qosParameters'], {'String': 'String'});
      }
      if (data.hasOwnProperty('importedStorage')) {
        obj['importedStorage'] = ApiClient.convertToType(data['importedStorage'], 'Boolean');
      }
      if (data.hasOwnProperty('readonly')) {
        obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The type of this storage.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The Id of storage.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of storage.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Storage operation timeout in milliseconds.
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;
  /**
   * If true, detecting whether storage is directly accessible by the Oneclient will not be performed. This option should be set to true on readonly storages. 
   * @member {Boolean} skipStorageDetection
   * @default false
   */
  exports.prototype['skipStorageDetection'] = false;
  /**
   * Type of feed for LUMA DB. Feed is a source of user/group mappings used to populate the LUMA DB. For more info please read: https://onedata.org/#/home/documentation/doc/administering_onedata/luma.html 
   * @member {module:model/StorageGetDetails.LumaFeedEnum} lumaFeed
   */
  exports.prototype['lumaFeed'] = undefined;
  /**
   * URL of external feed for LUMA DB. Relevant only if lumaFeed equals `external`.
   * @member {String} lumaFeedUrl
   */
  exports.prototype['lumaFeedUrl'] = undefined;
  /**
   * API key checked by external service used as feed for LUMA DB. Relevant only if lumaFeed equals `external`. 
   * @member {String} lumaFeedApiKey
   */
  exports.prototype['lumaFeedApiKey'] = undefined;
  /**
   * Map with key-value pairs used for describing storage QoS parameters.
   * @member {Object.<String, String>} qosParameters
   */
  exports.prototype['qosParameters'] = undefined;
  /**
   * Defines whether storage contains existing data to be imported.
   * @member {Boolean} importedStorage
   * @default false
   */
  exports.prototype['importedStorage'] = false;
  /**
   * Defines whether the storage is readonly. If enabled, Oneprovider will block any operation that writes, modifies or deletes data on the storage. Such storage can only be used to import data into the space. Mandatory to ensure proper behaviour if the backend storage is actually configured as readonly. This option is available only for imported storages.
   * @member {Boolean} readonly
   * @default false
   */
  exports.prototype['readonly'] = false;


  /**
   * Allowed values for the <code>lumaFeed</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LumaFeedEnum = {
    /**
     * value: "auto"
     * @const
     */
    "auto": "auto",
    /**
     * value: "local"
     * @const
     */
    "local": "local",
    /**
     * value: "external"
     * @const
     */
    "external": "external"  };


  return exports;
}));


