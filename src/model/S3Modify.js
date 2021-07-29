/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-alpha20
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
    define(['ApiClient', 'model/StorageModifyDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StorageModifyDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.S3Modify = factory(root.Onepanel.ApiClient, root.Onepanel.StorageModifyDetails);
  }
}(this, function(ApiClient, StorageModifyDetails) {
  'use strict';




  /**
   * The S3Modify model module.
   * @module model/S3Modify
   * @version 21.02.0-alpha20
   */

  /**
   * Constructs a new <code>S3Modify</code>.
   * The Simple Storage Service configuration.
   * @alias module:model/S3Modify
   * @class
   * @extends module:model/StorageModifyDetails
   * @param type {module:model/S3Modify.TypeEnum} The type of storage.  `type = \"s3\"`  [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) compatible storage. 
   */
  var exports = function(type) {
    var _this = this;
    StorageModifyDetails.call(_this);
    _this['type'] = type;








  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/S3Modify} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>S3Modify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/S3Modify} obj Optional instance to populate.
   * @return {module:model/S3Modify} The populated <code>S3Modify</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StorageModifyDetails.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('bucketName')) {
        obj['bucketName'] = ApiClient.convertToType(data['bucketName'], 'String');
      }
      if (data.hasOwnProperty('accessKey')) {
        obj['accessKey'] = ApiClient.convertToType(data['accessKey'], 'String');
      }
      if (data.hasOwnProperty('secretKey')) {
        obj['secretKey'] = ApiClient.convertToType(data['secretKey'], 'String');
      }
      if (data.hasOwnProperty('signatureVersion')) {
        obj['signatureVersion'] = ApiClient.convertToType(data['signatureVersion'], 'Number');
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
    }
    return obj;
  }

  exports.prototype = Object.create(StorageModifyDetails.prototype);
  exports.prototype.constructor = exports;

  /**
   * The type of storage.  `type = \"s3\"`  [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) compatible storage. 
   * @member {module:model/S3Modify.TypeEnum} type
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
   * The access key to the S3 storage.
   * @member {String} accessKey
   */
  exports.prototype['accessKey'] = undefined;
  /**
   * The secret key to the S3 storage.
   * @member {String} secretKey
   */
  exports.prototype['secretKey'] = undefined;
  /**
   * The version of signature used to sign requests. Only version 4 is supported. 
   * @member {Number} signatureVersion
   */
  exports.prototype['signatureVersion'] = undefined;
  /**
   * Defines the maximum size for objects, which can be modified on the S3 storage in `canonical` path mode. In this mode, entire file needs to be downloaded to memory, modified and uploaded back, which is impractical for large files (default 64 MiB). 
   * @member {Number} maximumCanonicalObjectSize
   */
  exports.prototype['maximumCanonicalObjectSize'] = undefined;
  /**
   * Defines the file permissions, which files imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. `0644`. 
   * @member {String} fileMode
   */
  exports.prototype['fileMode'] = undefined;
  /**
   * Defines the directory mode which directories imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. `0775`. 
   * @member {String} dirMode
   */
  exports.prototype['dirMode'] = undefined;


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


