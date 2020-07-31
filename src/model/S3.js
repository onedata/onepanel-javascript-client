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
    define(['ApiClient', 'model/S3Credentials', 'model/StorageCreateDetails', 'model/StorageGetDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./S3Credentials'), require('./StorageCreateDetails'), require('./StorageGetDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.S3 = factory(root.Onepanel.ApiClient, root.Onepanel.S3Credentials, root.Onepanel.StorageCreateDetails, root.Onepanel.StorageGetDetails);
  }
}(this, function(ApiClient, S3Credentials, StorageCreateDetails, StorageGetDetails) {
  'use strict';




  /**
   * The S3 model module.
   * @module model/S3
   * @version 20.02.1
   */

  /**
   * Constructs a new <code>S3</code>.
   * The Simple Storage Service configuration.
   * @alias module:model/S3
   * @class
   * @extends module:model/StorageGetDetails
   * @implements module:model/StorageCreateDetails
   * @implements module:model/S3Credentials
   * @param type {module:model/S3.TypeEnum} The type of storage.
   * @param hostname {String} The hostname of a machine where S3 storage is installed.
   * @param bucketName {String} The storage bucket name.
   */
  var exports = function(type, hostname, bucketName) {
    var _this = this;
    StorageGetDetails.call(_this);
    StorageCreateDetails.call(_this);
    S3Credentials.call(_this, type);
    _this['type'] = type;
    _this['hostname'] = hostname;
    _this['bucketName'] = bucketName;






  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/S3} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>S3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/S3} obj Optional instance to populate.
   * @return {module:model/S3} The populated <code>S3</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StorageGetDetails.constructFromObject(data, obj);
      StorageCreateDetails.constructFromObject(data, obj);
      S3Credentials.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('bucketName')) {
        obj['bucketName'] = ApiClient.convertToType(data['bucketName'], 'String');
      }
      if (data.hasOwnProperty('signatureVersion')) {
        obj['signatureVersion'] = ApiClient.convertToType(data['signatureVersion'], 'Number');
      }
      if (data.hasOwnProperty('blockSize')) {
        obj['blockSize'] = ApiClient.convertToType(data['blockSize'], 'Number');
      }
      if (data.hasOwnProperty('maximumCanonicalObjectSize')) {
        obj['maximumCanonicalObjectSize'] = ApiClient.convertToType(data['maximumCanonicalObjectSize'], 'Number');
      }
      if (data.hasOwnProperty('fileMode')) {
        obj['fileMode'] = ApiClient.convertToType(data['fileMode'], 'String');
      }
      if (data.hasOwnProperty('dirMode')) {
        obj['dirMode'] = ApiClient.convertToType(data['dirMode'], 'String');
      }
      if (data.hasOwnProperty('storagePathType')) {
        obj['storagePathType'] = ApiClient.convertToType(data['storagePathType'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(StorageGetDetails.prototype);
  exports.prototype.constructor = exports;

  /**
   * The type of storage.
   * @member {module:model/S3.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The hostname of a machine where S3 storage is installed.
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * The storage bucket name.
   * @member {String} bucketName
   */
  exports.prototype['bucketName'] = undefined;
  /**
   * The version of signature used to sign requests. One of: 2, 4. Default: 4. 
   * @member {Number} signatureVersion
   */
  exports.prototype['signatureVersion'] = undefined;
  /**
   * Storage block size in bytes. In case the block size is `0` and `canonical` path type is selected, each file is stored in a single S3 object. This value must be set to `0` to enable data import from an existing S3 bucket. 
   * @member {Number} blockSize
   */
  exports.prototype['blockSize'] = undefined;
  /**
   * Defines the maximum size for objects, which can be modified on the S3 storage in `canonical` path mode. In this mode, entire file needs to be downloaded to memory, modified and uploaded back, which is impractical for large files (default 64 MiB). 
   * @member {Number} maximumCanonicalObjectSize
   */
  exports.prototype['maximumCanonicalObjectSize'] = undefined;
  /**
   * Defines the file permissions, which files imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. `0644`. 
   * @member {String} fileMode
   * @default '0664'
   */
  exports.prototype['fileMode'] = '0664';
  /**
   * Defines the directory mode which directories imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. `0775`. 
   * @member {String} dirMode
   * @default '0775'
   */
  exports.prototype['dirMode'] = '0775';
  /**
   * Determines how the logical file paths will be mapped on the storage. 'canonical' paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. 'flat' paths are based on unique file UUID's and do not require on-storage rename when logical file name is changed. 
   * @member {String} storagePathType
   * @default 'flat'
   */
  exports.prototype['storagePathType'] = 'flat';

  // Implement StorageCreateDetails interface:
  /**
   * The type of storage.
   * @member {String} type
   */
exports.prototype['type'] = undefined;

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
   * @member {module:model/StorageCreateDetails.LumaFeedEnum} lumaFeed
   * @default 'auto'
   */
exports.prototype['lumaFeed'] = 'auto';

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

  // Implement S3Credentials interface:
  /**
   * Type of the storage. Must be given explicitly and must match the actual type of subject storage - this redundancy is needed due to limitations of OpenAPI polymorphism. 
   * @member {module:model/S3Credentials.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * The access key to the S3 storage.
   * @member {String} accessKey
   * @default ''
   */
exports.prototype['accessKey'] = '';

  /**
   * The secret key to the S3 storage.
   * @member {String} secretKey
   * @default ''
   */
exports.prototype['secretKey'] = '';


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "s3"
     * @const
     */
    "s3": "s3"  };


  return exports;
}));


