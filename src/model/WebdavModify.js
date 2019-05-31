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
    define(['ApiClient', 'model/StorageDetailsModify'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StorageDetailsModify'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.WebdavModify = factory(root.Onepanel.ApiClient, root.Onepanel.StorageDetailsModify);
  }
}(this, function(ApiClient, StorageDetailsModify) {
  'use strict';




  /**
   * The WebdavModify model module.
   * @module model/WebdavModify
   * @version 18.02.1
   */

  /**
   * Constructs a new <code>WebdavModify</code>.
   * The WebDAV storage configuration.
   * @alias module:model/WebdavModify
   * @class
   * @extends module:model/StorageDetailsModify
   * @param type {module:model/WebdavModify.TypeEnum} Type of the modified storage. Must match the type of existing storage, needed only for OpenAPI polymorphism disambiguation.
   */
  var exports = function(type) {
    var _this = this;
    StorageDetailsModify.call(_this);
    _this['type'] = type;











  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/WebdavModify} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>WebdavModify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebdavModify} obj Optional instance to populate.
   * @return {module:model/WebdavModify} The populated <code>WebdavModify</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StorageDetailsModify.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('endpoint')) {
        obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
      }
      if (data.hasOwnProperty('verifyServerCertificate')) {
        obj['verifyServerCertificate'] = ApiClient.convertToType(data['verifyServerCertificate'], 'Boolean');
      }
      if (data.hasOwnProperty('credentialsType')) {
        obj['credentialsType'] = ApiClient.convertToType(data['credentialsType'], 'String');
      }
      if (data.hasOwnProperty('credentials')) {
        obj['credentials'] = ApiClient.convertToType(data['credentials'], 'String');
      }
      if (data.hasOwnProperty('authorizationHeader')) {
        obj['authorizationHeader'] = ApiClient.convertToType(data['authorizationHeader'], 'String');
      }
      if (data.hasOwnProperty('rangeWriteSupport')) {
        obj['rangeWriteSupport'] = ApiClient.convertToType(data['rangeWriteSupport'], 'String');
      }
      if (data.hasOwnProperty('connectionPoolSize')) {
        obj['connectionPoolSize'] = ApiClient.convertToType(data['connectionPoolSize'], 'Number');
      }
      if (data.hasOwnProperty('maximumUploadSize')) {
        obj['maximumUploadSize'] = ApiClient.convertToType(data['maximumUploadSize'], 'Number');
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
    }
    return obj;
  }

  exports.prototype = Object.create(StorageDetailsModify.prototype);
  exports.prototype.constructor = exports;

  /**
   * Type of the modified storage. Must match the type of existing storage, needed only for OpenAPI polymorphism disambiguation.
   * @member {module:model/WebdavModify.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Full URL of the WebDAV server, including scheme (http or https) and path. 
   * @member {String} endpoint
   */
  exports.prototype['endpoint'] = undefined;
  /**
   * Determines whether Oneprovider should verify the certificate of the WebDAV server. 
   * @member {Boolean} verifyServerCertificate
   */
  exports.prototype['verifyServerCertificate'] = undefined;
  /**
   * Determines the types of credentials provided in the credentials field. 
   * @member {module:model/WebdavModify.CredentialsTypeEnum} credentialsType
   */
  exports.prototype['credentialsType'] = undefined;
  /**
   * The credentials to authenticate with the WebDAV server. `basic` credentials should be provided in the form `username:password`, for `token` just the token. For `none` this field is ignored. 
   * @member {String} credentials
   */
  exports.prototype['credentials'] = undefined;
  /**
   * The authorization header to be used for passing the access token. This field can contain any prefix that should be added to the header value. Default is `Authorization: Bearer {}`. The token will placed where `{}` is provided. 
   * @member {String} authorizationHeader
   */
  exports.prototype['authorizationHeader'] = undefined;
  /**
   * The type of partial write support enabled in the WebDAV server. Currently 2 types are supported `sabredav` which assumes the server supports the SabreDAV PartialUpdate extension via `PATCH` method, and `moddav` which assumes server supports partial `PUT` requests with `Content-Range` header. If `none` is selected no write support is available for this WebDAV storage. 
   * @member {module:model/WebdavModify.RangeWriteSupportEnum} rangeWriteSupport
   */
  exports.prototype['rangeWriteSupport'] = undefined;
  /**
   * Defines the maximum number of parallel connections for a single WebDAV storage. 
   * @member {Number} connectionPoolSize
   */
  exports.prototype['connectionPoolSize'] = undefined;
  /**
   * Defines the maximum upload size for a single `PUT` or `PATCH` request. If set to 0, assumes that the WebDAV server has no upload limit. 
   * @member {Number} maximumUploadSize
   */
  exports.prototype['maximumUploadSize'] = undefined;
  /**
   * Storage operation timeout in milliseconds.
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;
  /**
   * Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode. 
   * @member {Boolean} insecure
   */
  exports.prototype['insecure'] = undefined;
  /**
   * Defines whether storage is readonly.
   * @member {Boolean} readonly
   */
  exports.prototype['readonly'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "webdav"
     * @const
     */
    "webdav": "webdav"  };

  /**
   * Allowed values for the <code>credentialsType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CredentialsTypeEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "basic"
     * @const
     */
    "basic": "basic",
    /**
     * value: "token"
     * @const
     */
    "token": "token"  };

  /**
   * Allowed values for the <code>rangeWriteSupport</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RangeWriteSupportEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "moddav"
     * @const
     */
    "moddav": "moddav",
    /**
     * value: "sabredav"
     * @const
     */
    "sabredav": "sabredav"  };


  return exports;
}));

