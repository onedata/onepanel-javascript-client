/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X POST -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
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
    root.Onepanel.RemoteProviderDetails = factory(root.Onepanel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoteProviderDetails model module.
   * @module model/RemoteProviderDetails
   * @version 18.02.1
   */

  /**
   * Constructs a new <code>RemoteProviderDetails</code>.
   * Information about another Oneprovider.
   * @alias module:model/RemoteProviderDetails
   * @class
   * @param id {String} The Oneprovider Id assigned by Onezone.
   * @param name {String} The name under which the Oneprovider has been registered in Onezone.
   * @param domain {String} The fully qualified domain name of the Oneprovider.
   * @param geoLongitude {Number} The geographical longitude of the provider.
   * @param geoLatitude {Number} The geographical latitude of the provider.
   * @param cluster {String} The Id of the corresponding cluster record.
   * @param online {Boolean} Indicates if the Oneprovider is currently online.
   */
  var exports = function(id, name, domain, geoLongitude, geoLatitude, cluster, online) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['domain'] = domain;
    _this['geoLongitude'] = geoLongitude;
    _this['geoLatitude'] = geoLatitude;
    _this['cluster'] = cluster;
    _this['online'] = online;
  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/RemoteProviderDetails} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>RemoteProviderDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoteProviderDetails} obj Optional instance to populate.
   * @return {module:model/RemoteProviderDetails} The populated <code>RemoteProviderDetails</code> instance.
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
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('geoLongitude')) {
        obj['geoLongitude'] = ApiClient.convertToType(data['geoLongitude'], 'Number');
      }
      if (data.hasOwnProperty('geoLatitude')) {
        obj['geoLatitude'] = ApiClient.convertToType(data['geoLatitude'], 'Number');
      }
      if (data.hasOwnProperty('cluster')) {
        obj['cluster'] = ApiClient.convertToType(data['cluster'], 'String');
      }
      if (data.hasOwnProperty('online')) {
        obj['online'] = ApiClient.convertToType(data['online'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The Oneprovider Id assigned by Onezone.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name under which the Oneprovider has been registered in Onezone.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The fully qualified domain name of the Oneprovider.
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * The geographical longitude of the provider.
   * @member {Number} geoLongitude
   */
  exports.prototype['geoLongitude'] = undefined;
  /**
   * The geographical latitude of the provider.
   * @member {Number} geoLatitude
   */
  exports.prototype['geoLatitude'] = undefined;
  /**
   * The Id of the corresponding cluster record.
   * @member {String} cluster
   */
  exports.prototype['cluster'] = undefined;
  /**
   * Indicates if the Oneprovider is currently online.
   * @member {Boolean} online
   */
  exports.prototype['online'] = undefined;



  return exports;
}));


