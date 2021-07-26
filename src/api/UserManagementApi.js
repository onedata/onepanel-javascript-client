/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-alpha19
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
    define(['ApiClient', 'model/Error', 'model/Id', 'model/Ids', 'model/OnezoneUser', 'model/OnezoneUserCreateRequest', 'model/PasswordChangeRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Id'), require('../model/Ids'), require('../model/OnezoneUser'), require('../model/OnezoneUserCreateRequest'), require('../model/PasswordChangeRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.UserManagementApi = factory(root.Onepanel.ApiClient, root.Onepanel.Error, root.Onepanel.Id, root.Onepanel.Ids, root.Onepanel.OnezoneUser, root.Onepanel.OnezoneUserCreateRequest, root.Onepanel.PasswordChangeRequest);
  }
}(this, function(ApiClient, Error, Id, Ids, OnezoneUser, OnezoneUserCreateRequest, PasswordChangeRequest) {
  'use strict';

  /**
   * UserManagement service.
   * @module api/UserManagementApi
   * @version 21.02.0-alpha19
   */

  /**
   * Constructs a new UserManagementApi. 
   * @alias module:api/UserManagementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOnezoneUser operation.
     * @callback module:api/UserManagementApi~addOnezoneUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Id} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Onezone user
     * Creates a new Onezone user account with Basic (username &amp; password) authentication enabled.  ***Example cURL requests***  **Create Onezone user with username &amp; password** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X POST https://$OZ_PANEL_HOST/api/v3/onepanel/zone/users \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;username\&quot;: \&quot;someUser\&quot;,     \&quot;password\&quot;: \&quot;somePassword\&quot; }&#39;  {     \&quot;id\&quot;: \&quot;b519b3ac46823b2b83b6cb85e1b16f4fchaa0f\&quot; } &#x60;&#x60;&#x60; 
     * @param {module:model/OnezoneUserCreateRequest} userCreateRequest The user configuration details.
     * @param {module:api/UserManagementApi~addOnezoneUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Id}
     */
    this.addOnezoneUser = function(userCreateRequest, callback) {
      var postBody = userCreateRequest;

      // verify the required parameter 'userCreateRequest' is set
      if (userCreateRequest === undefined || userCreateRequest === null) {
        throw new Error("Missing the required parameter 'userCreateRequest' when calling addOnezoneUser");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = Id;

      return this.apiClient.callApi(
        '/zone/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the changeUserPassword operation.
     * @callback module:api/UserManagementApi~changeUserPasswordCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set password for Onezone user
     * Sets a new password for a Onezone user using Basic authentication.  ***Example cURL requests***  **Set Onezone user password** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X PATCH https://$OZ_PANEL_HOST/api/v3/onepanel/zone/users/$USER_ID \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{\&quot;newPassword\&quot;: \&quot;someNewPassword\&quot;}&#39; &#x60;&#x60;&#x60; 
     * @param {String} id Id of the user whose password is changed.
     * @param {module:model/PasswordChangeRequest} passwordChangeRequest 
     * @param {module:api/UserManagementApi~changeUserPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.changeUserPassword = function(id, passwordChangeRequest, callback) {
      var postBody = passwordChangeRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling changeUserPassword");
      }

      // verify the required parameter 'passwordChangeRequest' is set
      if (passwordChangeRequest === undefined || passwordChangeRequest === null) {
        throw new Error("Missing the required parameter 'passwordChangeRequest' when calling changeUserPassword");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/users/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOnezoneUser operation.
     * @callback module:api/UserManagementApi~getOnezoneUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OnezoneUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Onezone user details
     * Returns the configuration information of the Onezone user.  ***Example cURL requests***  **Get Onezone user details** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$OZ_PANEL_HOST/api/v3/onepanel/zone/users/$USER_ID  {     \&quot;username\&quot;: \&quot;someUser\&quot;,     \&quot;userId\&quot;: \&quot;b519b3ac46823b2b83b6cb85e1b16f4fchaa0f\&quot;,     \&quot;fullName\&quot;: \&quot;Unnamed User\&quot; } &#x60;&#x60;&#x60; 
     * @param {String} id Id of the user to be described.
     * @param {module:api/UserManagementApi~getOnezoneUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OnezoneUser}
     */
    this.getOnezoneUser = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOnezoneUser");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = OnezoneUser;

      return this.apiClient.callApi(
        '/zone/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOnezoneUsers operation.
     * @callback module:api/UserManagementApi~getOnezoneUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Ids} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Onezone users
     * List Ids of Onezone users.  ***Example cURL requests***  **Get Onezone user ids** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$OZ_PANEL_HOST/api/v3/onepanel/zone/users  {     \&quot;ids\&quot;: [         \&quot;f891d1ddf693232bbf0c11fe3cd9f7e7cheda9\&quot;,         \&quot;eefc8a11e1776d0797969ccf0b59c6dcch73dc\&quot;,         \&quot;ec0a39261b325cdc74e9c2d6b54fa786ch0419\&quot;     ] } &#x60;&#x60;&#x60; 
     * @param {module:api/UserManagementApi~getOnezoneUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Ids}
     */
    this.getOnezoneUsers = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Ids;

      return this.apiClient.callApi(
        '/zone/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
