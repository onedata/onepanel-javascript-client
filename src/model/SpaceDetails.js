/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 20.02.16
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
    define(['ApiClient', 'model/StorageImport'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StorageImport'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.SpaceDetails = factory(root.Onepanel.ApiClient, root.Onepanel.StorageImport);
  }
}(this, function(ApiClient, StorageImport) {
  'use strict';




  /**
   * The SpaceDetails model module.
   * @module model/SpaceDetails
   * @version 20.02.16
   */

  /**
   * Constructs a new <code>SpaceDetails</code>.
   * The space details.
   * @alias module:model/SpaceDetails
   * @class
   * @param id {String} The Id of the space.
   * @param name {String} The name of the space.
   * @param storageId {String} Id of storage that supports this space on provider that is associated with this panel. 
   * @param localStorages {Array.<String>} The list of IDs of cluster storage resources.
   * @param supportingProviders {Object.<String, Number>} The collection of provider IDs with associated supported storage space in bytes. 
   * @param spaceOccupancy {Number} Amount of storage [b] used by data from given space on that storage.
   */
  var exports = function(id, name, storageId, localStorages, supportingProviders, spaceOccupancy) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['storageId'] = storageId;
    _this['localStorages'] = localStorages;
    _this['supportingProviders'] = supportingProviders;

    _this['spaceOccupancy'] = spaceOccupancy;
  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/SpaceDetails} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>SpaceDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpaceDetails} obj Optional instance to populate.
   * @return {module:model/SpaceDetails} The populated <code>SpaceDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('storageId')) {
        obj['storageId'] = ApiClient.convertToType(data['storageId'], 'String');
      }
      if (data.hasOwnProperty('localStorages')) {
        obj['localStorages'] = ApiClient.convertToType(data['localStorages'], ['String']);
      }
      if (data.hasOwnProperty('supportingProviders')) {
        obj['supportingProviders'] = ApiClient.convertToType(data['supportingProviders'], {'String': 'Number'});
      }
      if (data.hasOwnProperty('storageImport')) {
        obj['storageImport'] = StorageImport.constructFromObject(data['storageImport']);
      }
      if (data.hasOwnProperty('spaceOccupancy')) {
        obj['spaceOccupancy'] = ApiClient.convertToType(data['spaceOccupancy'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Id of the space.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the space.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Id of storage that supports this space on provider that is associated with this panel. 
   * @member {String} storageId
   */
  exports.prototype['storageId'] = undefined;
  /**
   * The list of IDs of cluster storage resources.
   * @member {Array.<String>} localStorages
   */
  exports.prototype['localStorages'] = undefined;
  /**
   * The collection of provider IDs with associated supported storage space in bytes. 
   * @member {Object.<String, Number>} supportingProviders
   */
  exports.prototype['supportingProviders'] = undefined;
  /**
   * @member {module:model/StorageImport} storageImport
   */
  exports.prototype['storageImport'] = undefined;
  /**
   * Amount of storage [b] used by data from given space on that storage.
   * @member {Number} spaceOccupancy
   */
  exports.prototype['spaceOccupancy'] = undefined;



  return exports;
}));


