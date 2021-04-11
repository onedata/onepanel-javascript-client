/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-alpha7
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
    root.Onepanel.AutoStorageImportInfo = factory(root.Onepanel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AutoStorageImportInfo model module.
   * @module model/AutoStorageImportInfo
   * @version 21.02.0-alpha7
   */

  /**
   * Constructs a new <code>AutoStorageImportInfo</code>.
   * Information about current (or last finished) auto storage import scan in given space.
   * @alias module:model/AutoStorageImportInfo
   * @class
   * @param status {module:model/AutoStorageImportInfo.StatusEnum} Describes status of current (or last finished) auto storage import scan in given space.
   * @param start {Number} Time at which current (or last finished) scan has been started.
   * @param stop {Number} Time at which current (or last finished) scan has been stopped.
   * @param createdFiles {Number} Counter of created files (both directories and regular files) that has been detected during current (or last finished) scan.
   * @param modifiedFiles {Number} Counter of modified files (both directories and regular files) that has been detected during current (or last finished) scan.
   * @param deletedFiles {Number} Counter of deleted files (both directories and regular files) that has been detected during current (or last finished) scan.
   * @param unmodifiedFiles {Number} Counter of unmodified files (both directories and regular files) that has been detected during current (or last finished) scan.
   * @param failedFiles {Number} Counter of files (both directories and regular files) for which the processing has failed during current (or last finished) scan.
   * @param totalScans {Number} Total number of performed scans.
   */
  var exports = function(status, start, stop, createdFiles, modifiedFiles, deletedFiles, unmodifiedFiles, failedFiles, totalScans) {
    var _this = this;

    _this['status'] = status;
    _this['start'] = start;
    _this['stop'] = stop;
    _this['createdFiles'] = createdFiles;
    _this['modifiedFiles'] = modifiedFiles;
    _this['deletedFiles'] = deletedFiles;
    _this['unmodifiedFiles'] = unmodifiedFiles;
    _this['failedFiles'] = failedFiles;

    _this['totalScans'] = totalScans;
  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/AutoStorageImportInfo} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>AutoStorageImportInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutoStorageImportInfo} obj Optional instance to populate.
   * @return {module:model/AutoStorageImportInfo} The populated <code>AutoStorageImportInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Number');
      }
      if (data.hasOwnProperty('stop')) {
        obj['stop'] = ApiClient.convertToType(data['stop'], 'Number');
      }
      if (data.hasOwnProperty('createdFiles')) {
        obj['createdFiles'] = ApiClient.convertToType(data['createdFiles'], 'Number');
      }
      if (data.hasOwnProperty('modifiedFiles')) {
        obj['modifiedFiles'] = ApiClient.convertToType(data['modifiedFiles'], 'Number');
      }
      if (data.hasOwnProperty('deletedFiles')) {
        obj['deletedFiles'] = ApiClient.convertToType(data['deletedFiles'], 'Number');
      }
      if (data.hasOwnProperty('unmodifiedFiles')) {
        obj['unmodifiedFiles'] = ApiClient.convertToType(data['unmodifiedFiles'], 'Number');
      }
      if (data.hasOwnProperty('failedFiles')) {
        obj['failedFiles'] = ApiClient.convertToType(data['failedFiles'], 'Number');
      }
      if (data.hasOwnProperty('nextScan')) {
        obj['nextScan'] = ApiClient.convertToType(data['nextScan'], 'Number');
      }
      if (data.hasOwnProperty('totalScans')) {
        obj['totalScans'] = ApiClient.convertToType(data['totalScans'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Describes status of current (or last finished) auto storage import scan in given space.
   * @member {module:model/AutoStorageImportInfo.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Time at which current (or last finished) scan has been started.
   * @member {Number} start
   */
  exports.prototype['start'] = undefined;
  /**
   * Time at which current (or last finished) scan has been stopped.
   * @member {Number} stop
   */
  exports.prototype['stop'] = undefined;
  /**
   * Counter of created files (both directories and regular files) that has been detected during current (or last finished) scan.
   * @member {Number} createdFiles
   */
  exports.prototype['createdFiles'] = undefined;
  /**
   * Counter of modified files (both directories and regular files) that has been detected during current (or last finished) scan.
   * @member {Number} modifiedFiles
   */
  exports.prototype['modifiedFiles'] = undefined;
  /**
   * Counter of deleted files (both directories and regular files) that has been detected during current (or last finished) scan.
   * @member {Number} deletedFiles
   */
  exports.prototype['deletedFiles'] = undefined;
  /**
   * Counter of unmodified files (both directories and regular files) that has been detected during current (or last finished) scan.
   * @member {Number} unmodifiedFiles
   */
  exports.prototype['unmodifiedFiles'] = undefined;
  /**
   * Counter of files (both directories and regular files) for which the processing has failed during current (or last finished) scan.
   * @member {Number} failedFiles
   */
  exports.prototype['failedFiles'] = undefined;
  /**
   * Estimated time at which next scan will be enqueued.
   * @member {Number} nextScan
   */
  exports.prototype['nextScan'] = undefined;
  /**
   * Total number of performed scans.
   * @member {Number} totalScans
   */
  exports.prototype['totalScans'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "enqueued"
     * @const
     */
    "enqueued": "enqueued",
    /**
     * value: "running"
     * @const
     */
    "running": "running",
    /**
     * value: "aborting"
     * @const
     */
    "aborting": "aborting",
    /**
     * value: "completed"
     * @const
     */
    "completed": "completed",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "aborted"
     * @const
     */
    "aborted": "aborted"  };


  return exports;
}));


