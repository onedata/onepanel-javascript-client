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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.ProviderRegisterRequest = factory(root.Onepanel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProviderRegisterRequest model module.
   * @module model/ProviderRegisterRequest
   * @version 19.02.1
   */

  /**
   * Constructs a new <code>ProviderRegisterRequest</code>.
   * The storage provider configuration details required for registration process. 
   * @alias module:model/ProviderRegisterRequest
   * @class
   * @param name {String} The name under which the provider should be registered in a zone. 
   * @param token {String} Registration token obtained from Onezone. This token identifies Onezone to be used and authorizes the registration request. 
   * @param subdomainDelegation {Boolean} If enabled, the storage provider will be assigned a subdomain in onezone's domain and 'subdomain' property must be provided. If disabled, 'domain' property should be provided. 
   * @param adminEmail {String} Email address of the Oneprovider administrator.
   */
  var exports = function(name, token, subdomainDelegation, adminEmail) {
    var _this = this;

    _this['name'] = name;
    _this['token'] = token;
    _this['subdomainDelegation'] = subdomainDelegation;




    _this['adminEmail'] = adminEmail;
  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/ProviderRegisterRequest} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>ProviderRegisterRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProviderRegisterRequest} obj Optional instance to populate.
   * @return {module:model/ProviderRegisterRequest} The populated <code>ProviderRegisterRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('subdomainDelegation')) {
        obj['subdomainDelegation'] = ApiClient.convertToType(data['subdomainDelegation'], 'Boolean');
      }
      if (data.hasOwnProperty('subdomain')) {
        obj['subdomain'] = ApiClient.convertToType(data['subdomain'], 'String');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('geoLongitude')) {
        obj['geoLongitude'] = ApiClient.convertToType(data['geoLongitude'], 'Number');
      }
      if (data.hasOwnProperty('geoLatitude')) {
        obj['geoLatitude'] = ApiClient.convertToType(data['geoLatitude'], 'Number');
      }
      if (data.hasOwnProperty('adminEmail')) {
        obj['adminEmail'] = ApiClient.convertToType(data['adminEmail'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name under which the provider should be registered in a zone. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Registration token obtained from Onezone. This token identifies Onezone to be used and authorizes the registration request. 
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * If enabled, the storage provider will be assigned a subdomain in onezone's domain and 'subdomain' property must be provided. If disabled, 'domain' property should be provided. 
   * @member {Boolean} subdomainDelegation
   * @default false
   */
  exports.prototype['subdomainDelegation'] = false;
  /**
   * Unique subdomain in onezone's domain for the storage provider. Required if subdomain delegation is enabled. 
   * @member {String} subdomain
   */
  exports.prototype['subdomain'] = undefined;
  /**
   * The fully qualified domain name of the storage provider or its IP address (only for single-node deployments or clusters with a reverse proxy). Required if subdomain delegation is disabled. 
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * The geographical longitude of the storage provider. 
   * @member {Number} geoLongitude
   */
  exports.prototype['geoLongitude'] = undefined;
  /**
   * The geographical latitude of the storage provider. 
   * @member {Number} geoLatitude
   */
  exports.prototype['geoLatitude'] = undefined;
  /**
   * Email address of the Oneprovider administrator.
   * @member {String} adminEmail
   */
  exports.prototype['adminEmail'] = undefined;



  return exports;
}));


