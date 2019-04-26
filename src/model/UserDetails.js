/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
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
    root.Onepanel.UserDetails = factory(root.Onepanel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserDetails model module.
   * @module model/UserDetails
   * @version 18.02.1
   */

  /**
   * Constructs a new <code>UserDetails</code>.
   * The user configuration details.
   * @alias module:model/UserDetails
   * @class
   * @param userId {String} The user Id.
   * @param username {String} The user name.
   * @param userRole {module:model/UserDetails.UserRoleEnum} The user role, one of `admin` or `regular`.
   */
  var exports = function(userId, username, userRole) {
    var _this = this;

    _this['userId'] = userId;
    _this['username'] = username;
    _this['userRole'] = userRole;

  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/UserDetails} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>UserDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDetails} obj Optional instance to populate.
   * @return {module:model/UserDetails} The populated <code>UserDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('userRole')) {
        obj['userRole'] = ApiClient.convertToType(data['userRole'], 'String');
      }
      if (data.hasOwnProperty('clusterPrivileges')) {
        obj['clusterPrivileges'] = ApiClient.convertToType(data['clusterPrivileges'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The user Id.
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * The user name.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The user role, one of `admin` or `regular`.
   * @member {module:model/UserDetails.UserRoleEnum} userRole
   */
  exports.prototype['userRole'] = undefined;
  /**
   * List of cluster privileges held by the user. This field is returned only to a Onezone user fetching information about himself.
   * @member {Array.<module:model/UserDetails.ClusterPrivilegesEnum>} clusterPrivileges
   */
  exports.prototype['clusterPrivileges'] = undefined;


  /**
   * Allowed values for the <code>userRole</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UserRoleEnum = {
    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",
    /**
     * value: "regular"
     * @const
     */
    "regular": "regular"  };

  /**
   * Allowed values for the <code>clusterPrivileges</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ClusterPrivilegesEnum = {
    /**
     * value: "cluster_view"
     * @const
     */
    "view": "cluster_view",
    /**
     * value: "cluster_update"
     * @const
     */
    "update": "cluster_update",
    /**
     * value: "cluster_delete"
     * @const
     */
    "delete": "cluster_delete",
    /**
     * value: "cluster_view_privileges"
     * @const
     */
    "view_privileges": "cluster_view_privileges",
    /**
     * value: "cluster_set_privileges"
     * @const
     */
    "set_privileges": "cluster_set_privileges",
    /**
     * value: "cluster_add_user"
     * @const
     */
    "add_user": "cluster_add_user",
    /**
     * value: "cluster_remove_user"
     * @const
     */
    "remove_user": "cluster_remove_user",
    /**
     * value: "cluster_add_group"
     * @const
     */
    "add_group": "cluster_add_group",
    /**
     * value: "cluster_remove_group"
     * @const
     */
    "remove_group": "cluster_remove_group"  };


  return exports;
}));


