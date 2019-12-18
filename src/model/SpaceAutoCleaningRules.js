/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 19.02.1
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
    define(['ApiClient', 'model/SpaceAutoCleaningRuleSetting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SpaceAutoCleaningRuleSetting'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.SpaceAutoCleaningRules = factory(root.Onepanel.ApiClient, root.Onepanel.SpaceAutoCleaningRuleSetting);
  }
}(this, function(ApiClient, SpaceAutoCleaningRuleSetting) {
  'use strict';




  /**
   * The SpaceAutoCleaningRules model module.
   * @module model/SpaceAutoCleaningRules
   * @version 19.02.1
   */

  /**
   * Constructs a new <code>SpaceAutoCleaningRules</code>.
   * Rules used to select certain list of file replicas that can be evicted by auto-cleaning mechanism. A rule is enabled by setting its &#x60;enabled&#x60; field to &#x60;true&#x60;. By default all rules are disabled (ignored). A rule can be enabled without specifying its value. In that case previous value is used. If the rule is enabled for the first time a default value will be used. All rules&#39; values are inclusive. 
   * @alias module:model/SpaceAutoCleaningRules
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/SpaceAutoCleaningRules} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>SpaceAutoCleaningRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpaceAutoCleaningRules} obj Optional instance to populate.
   * @return {module:model/SpaceAutoCleaningRules} The populated <code>SpaceAutoCleaningRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('maxOpenCount')) {
        obj['maxOpenCount'] = SpaceAutoCleaningRuleSetting.constructFromObject(data['maxOpenCount']);
      }
      if (data.hasOwnProperty('minHoursSinceLastOpen')) {
        obj['minHoursSinceLastOpen'] = SpaceAutoCleaningRuleSetting.constructFromObject(data['minHoursSinceLastOpen']);
      }
      if (data.hasOwnProperty('minFileSize')) {
        obj['minFileSize'] = SpaceAutoCleaningRuleSetting.constructFromObject(data['minFileSize']);
      }
      if (data.hasOwnProperty('maxFileSize')) {
        obj['maxFileSize'] = SpaceAutoCleaningRuleSetting.constructFromObject(data['maxFileSize']);
      }
      if (data.hasOwnProperty('maxHourlyMovingAverage')) {
        obj['maxHourlyMovingAverage'] = SpaceAutoCleaningRuleSetting.constructFromObject(data['maxHourlyMovingAverage']);
      }
      if (data.hasOwnProperty('maxDailyMovingAverage')) {
        obj['maxDailyMovingAverage'] = SpaceAutoCleaningRuleSetting.constructFromObject(data['maxDailyMovingAverage']);
      }
      if (data.hasOwnProperty('maxMonthlyMovingAverage')) {
        obj['maxMonthlyMovingAverage'] = SpaceAutoCleaningRuleSetting.constructFromObject(data['maxMonthlyMovingAverage']);
      }
    }
    return obj;
  }

  /**
   * Informs whether selective rules should be used by auto-cleaning mechanism. 
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * Files that have been opened less than `maxOpenCount` times may be cleaned. The default value is `9007199254740991 (2^53-1)`. 
   * @member {module:model/SpaceAutoCleaningRuleSetting} maxOpenCount
   */
  exports.prototype['maxOpenCount'] = undefined;
  /**
   * Files that haven't been opened for longer than or equal to given period [h] may be cleaned. The default value is `0`. 
   * @member {module:model/SpaceAutoCleaningRuleSetting} minHoursSinceLastOpen
   */
  exports.prototype['minHoursSinceLastOpen'] = undefined;
  /**
   * Only files which size [b] is greater than given value may be cleaned. The default value is `1`. 
   * @member {module:model/SpaceAutoCleaningRuleSetting} minFileSize
   */
  exports.prototype['minFileSize'] = undefined;
  /**
   * Only files which size [b] is less than given value may be cleaned. The default value is `1125899906842624 (1 PiB)`. 
   * @member {module:model/SpaceAutoCleaningRuleSetting} maxFileSize
   */
  exports.prototype['maxFileSize'] = undefined;
  /**
   * Files that have moving average of open operations count per hour less than given value may be cleaned. The average is calculated in 24 hours window. The default value is `9007199254740991 (2^53-1)`. 
   * @member {module:model/SpaceAutoCleaningRuleSetting} maxHourlyMovingAverage
   */
  exports.prototype['maxHourlyMovingAverage'] = undefined;
  /**
   * Files that have moving average of open operations count per day less than given value may be cleaned. The average is calculated in 30 days window. The default value is `9007199254740991 (2^53-1)`. 
   * @member {module:model/SpaceAutoCleaningRuleSetting} maxDailyMovingAverage
   */
  exports.prototype['maxDailyMovingAverage'] = undefined;
  /**
   * Files that have moving average of open operations count per month less than given value may be cleaned. The average is calculated in 12 months window. The default value is `9007199254740991 (2^53-1)`.
   * @member {module:model/SpaceAutoCleaningRuleSetting} maxMonthlyMovingAverage
   */
  exports.prototype['maxMonthlyMovingAverage'] = undefined;



  return exports;
}));


