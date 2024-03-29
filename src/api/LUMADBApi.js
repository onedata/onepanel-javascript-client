/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.4
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
    define(['ApiClient', 'model/Error', 'model/LumaConfig', 'model/LumaOnedataGroup', 'model/LumaOnedataUser', 'model/LumaStorageUser', 'model/PosixCompatibleCredentials'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/LumaConfig'), require('../model/LumaOnedataGroup'), require('../model/LumaOnedataUser'), require('../model/LumaStorageUser'), require('../model/PosixCompatibleCredentials'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.LUMADBApi = factory(root.Onepanel.ApiClient, root.Onepanel.Error, root.Onepanel.LumaConfig, root.Onepanel.LumaOnedataGroup, root.Onepanel.LumaOnedataUser, root.Onepanel.LumaStorageUser, root.Onepanel.PosixCompatibleCredentials);
  }
}(this, function(ApiClient, Error, LumaConfig, LumaOnedataGroup, LumaOnedataUser, LumaStorageUser, PosixCompatibleCredentials) {
  'use strict';

  /**
   * LUMADB service.
   * @module api/LUMADBApi
   * @version 21.02.4
   */

  /**
   * Constructs a new LUMADBApi. 
   * @alias module:api/LUMADBApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the lumaClearDb operation.
     * @callback module:api/LUMADBApi~lumaClearDbCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clear LUMA DB
     * Clears all LUMA DB entries for given storage. LUMA DB will be repopulated using currently setup feed. 
     * @param {String} id The Id of a storage for which LUMA DB will be cleared
     * @param {module:api/LUMADBApi~lumaClearDbCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lumaClearDb = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaClearDb");
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
        '/provider/storages/{id}/luma/db', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaGetAclGroupToOnedataGroupMapping operation.
     * @callback module:api/LUMADBApi~lumaGetAclGroupToOnedataGroupMappingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LumaOnedataGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lookup mapping of ACL group
     * Returns mapping of ACL group on the specific storage to Onedata group stored in LUMA DB. This endpoint is relevant **only for POSIX compatible storages**. 
     * @param {String} id The Id of a storage constituting space support for which onedata group mapping should be returned. 
     * @param {Number} groupname The ACL name of the group on the storage. 
     * @param {module:api/LUMADBApi~lumaGetAclGroupToOnedataGroupMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LumaOnedataGroup}
     */
    this.lumaGetAclGroupToOnedataGroupMapping = function(id, groupname, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaGetAclGroupToOnedataGroupMapping");
      }

      // verify the required parameter 'groupname' is set
      if (groupname === undefined || groupname === null) {
        throw new Error("Missing the required parameter 'groupname' when calling lumaGetAclGroupToOnedataGroupMapping");
      }


      var pathParams = {
        'id': id,
        'groupname': groupname
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
      var returnType = LumaOnedataGroup;

      return this.apiClient.callApi(
        '/provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaGetAclUserToOnedataUserMapping operation.
     * @callback module:api/LUMADBApi~lumaGetAclUserToOnedataUserMappingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LumaOnedataUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lookup mapping of ACL user
     * Returns mapping of ACL user on the specific storage to Onedata user stored in LUMA DB. Mapping will be acquired again using currently setup LUMA feed. This endpoint is relevant **only for POSIX compatible storages**. 
     * @param {String} id The Id of a storage constituting space support for which onedata user mapping should be returned. 
     * @param {Number} username The ACL name of the user on the storage. 
     * @param {module:api/LUMADBApi~lumaGetAclUserToOnedataUserMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LumaOnedataUser}
     */
    this.lumaGetAclUserToOnedataUserMapping = function(id, username, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaGetAclUserToOnedataUserMapping");
      }

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling lumaGetAclUserToOnedataUserMapping");
      }


      var pathParams = {
        'id': id,
        'username': username
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
      var returnType = LumaOnedataUser;

      return this.apiClient.callApi(
        '/provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_user_to_onedata_user/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaGetConfig operation.
     * @callback module:api/LUMADBApi~lumaGetConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LumaConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get LUMA DB configuration
     * Returns configuration of Local User Mapping database (LUMA DB) for the storage. 
     * @param {String} id The Id of a storage for which LUMA DB configuration should be returned.
     * @param {module:api/LUMADBApi~lumaGetConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LumaConfig}
     */
    this.lumaGetConfig = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaGetConfig");
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
      var returnType = LumaConfig;

      return this.apiClient.callApi(
        '/provider/storages/{id}/luma/config', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaGetDefaultPosixCredentials operation.
     * @callback module:api/LUMADBApi~lumaGetDefaultPosixCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosixCompatibleCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lookup default posix credentials
     * Returns default storage credentials for the space supported by POSIX-compatible storage that are stored in LUMA DB. GID will be used as a component of storage credentials for each member of the space. Both UID and GID will be used as to represent owner of the space directory on storage. This endpoint is relevant **only for POSIX compatible storages**. 
     * @param {String} id The Id of a storage constituting space support for which default storage credentials should be returned. 
     * @param {String} spaceId The Id of a space constituting space support for which default storage credentials should be returned. 
     * @param {module:api/LUMADBApi~lumaGetDefaultPosixCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosixCompatibleCredentials}
     */
    this.lumaGetDefaultPosixCredentials = function(id, spaceId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaGetDefaultPosixCredentials");
      }

      // verify the required parameter 'spaceId' is set
      if (spaceId === undefined || spaceId === null) {
        throw new Error("Missing the required parameter 'spaceId' when calling lumaGetDefaultPosixCredentials");
      }


      var pathParams = {
        'id': id,
        'space_id': spaceId
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
      var returnType = PosixCompatibleCredentials;

      return this.apiClient.callApi(
        '/provider/storages/{id}/luma/db/storage_access/posix_compatible/default_credentials/{space_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaGetDisplayCredentials operation.
     * @callback module:api/LUMADBApi~lumaGetDisplayCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosixCompatibleCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lookup default display credentials
     * Returns default display credentials for the space support that are stored in LUMA DB. These are POSIX credentials (UID &amp; GID) which are returned in getattr response. They are used to present file owners in the result of e.g. &#x60;ls&#x60; or &#x60;stat&#x60; operation in Oneclient or when fetching file attributes via REST API. 
     * @param {String} id The Id of a storage constituting space support for which default display credentials should be returned. 
     * @param {String} spaceId The Id of a space constituting space support for which default display credentials should be returned. 
     * @param {module:api/LUMADBApi~lumaGetDisplayCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosixCompatibleCredentials}
     */
    this.lumaGetDisplayCredentials = function(id, spaceId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaGetDisplayCredentials");
      }

      // verify the required parameter 'spaceId' is set
      if (spaceId === undefined || spaceId === null) {
        throw new Error("Missing the required parameter 'spaceId' when calling lumaGetDisplayCredentials");
      }


      var pathParams = {
        'id': id,
        'space_id': spaceId
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
      var returnType = PosixCompatibleCredentials;

      return this.apiClient.callApi(
        '/provider/storages/{id}/luma/db/display_credentials/all/default/{space_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaGetOnedataUserToCredentialsMapping operation.
     * @callback module:api/LUMADBApi~lumaGetOnedataUserToCredentialsMappingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LumaStorageUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lookup Onedata user to credentials mapping
     * Returns mapping of the Onedata user to user on the specific storage stored in LUMA DB. 
     * @param {String} id The Id of a storage for which user mapping should be returned. 
     * @param {String} onedataUserId The Id of a user for which mapping should be returned. 
     * @param {module:api/LUMADBApi~lumaGetOnedataUserToCredentialsMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LumaStorageUser}
     */
    this.lumaGetOnedataUserToCredentialsMapping = function(id, onedataUserId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaGetOnedataUserToCredentialsMapping");
      }

      // verify the required parameter 'onedataUserId' is set
      if (onedataUserId === undefined || onedataUserId === null) {
        throw new Error("Missing the required parameter 'onedataUserId' when calling lumaGetOnedataUserToCredentialsMapping");
      }


      var pathParams = {
        'id': id,
        'onedata_user_id': onedataUserId
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
      var returnType = LumaStorageUser;

      return this.apiClient.callApi(
        '/provider/storages/{id}/luma/db/storage_access/all/onedata_user_to_credentials/{onedata_user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaGetUidToOnedataUserMapping operation.
     * @callback module:api/LUMADBApi~lumaGetUidToOnedataUserMappingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LumaOnedataUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lookup mapping of UID
     * Returns mapping of UID on the specific storage to Onedata user stored in LUMA DB. Mapping will be acquired again using currently setup LUMA feed. This endpoint is relevant **only for POSIX compatible storages**. 
     * @param {String} id The Id of a storage constituting space support for which onedata user mapping should be returned. 
     * @param {Number} uid The UID of the user on the storage. 
     * @param {module:api/LUMADBApi~lumaGetUidToOnedataUserMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LumaOnedataUser}
     */
    this.lumaGetUidToOnedataUserMapping = function(id, uid, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaGetUidToOnedataUserMapping");
      }

      // verify the required parameter 'uid' is set
      if (uid === undefined || uid === null) {
        throw new Error("Missing the required parameter 'uid' when calling lumaGetUidToOnedataUserMapping");
      }


      var pathParams = {
        'id': id,
        'uid': uid
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
      var returnType = LumaOnedataUser;

      return this.apiClient.callApi(
        '/provider/storages/{id}/luma/db/storage_import/posix_compatible/uid_to_onedata_user/{uid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaRemoveAclGroupToOnedataGroupMapping operation.
     * @callback module:api/LUMADBApi~lumaRemoveAclGroupToOnedataGroupMappingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove mapping of ACL group
     * Removes mapping of ACL group on the specific storage to Onedata group from LUMA DB. Mapping will be acquired again using currently setup LUMA feed. This endpoint is relevant **only for POSIX compatible storages**. 
     * @param {String} id The Id of a storage constituting space support for which onedata group mapping should be removed. 
     * @param {Number} groupname The ACL name of the group on the storage. 
     * @param {module:api/LUMADBApi~lumaRemoveAclGroupToOnedataGroupMappingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lumaRemoveAclGroupToOnedataGroupMapping = function(id, groupname, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaRemoveAclGroupToOnedataGroupMapping");
      }

      // verify the required parameter 'groupname' is set
      if (groupname === undefined || groupname === null) {
        throw new Error("Missing the required parameter 'groupname' when calling lumaRemoveAclGroupToOnedataGroupMapping");
      }


      var pathParams = {
        'id': id,
        'groupname': groupname
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
        '/provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_group_to_onedata_group/{groupname}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaRemoveAclUserToOnedataUserMapping operation.
     * @callback module:api/LUMADBApi~lumaRemoveAclUserToOnedataUserMappingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove mapping of ACL user
     * Removes mapping of ACL user on the specific storage to Onedata user from LUMA DB. This endpoint is relevant **only for POSIX compatible storages**. 
     * @param {String} id The Id of a storage constituting space support for which onedata user mapping should be removed. 
     * @param {Number} username The ACL name of the user on the storage. 
     * @param {module:api/LUMADBApi~lumaRemoveAclUserToOnedataUserMappingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lumaRemoveAclUserToOnedataUserMapping = function(id, username, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaRemoveAclUserToOnedataUserMapping");
      }

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling lumaRemoveAclUserToOnedataUserMapping");
      }


      var pathParams = {
        'id': id,
        'username': username
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
        '/provider/storages/{id}/luma/db/storage_import/posix_compatible/acl_user_to_onedata_user/{username}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaRemoveDefaultPosixCredentials operation.
     * @callback module:api/LUMADBApi~lumaRemoveDefaultPosixCredentialsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove default posix credentials
     * Removes default storage credentials for the space supported by POSIX-compatible storage from LUMA DB. Default storage credentials will be acquired again using currently setup LUMA feed. This endpoint is relevant **only for POSIX compatible storages**. 
     * @param {String} id The Id of a storage constituting space support for which default storage credentials should be removed. 
     * @param {String} spaceId The Id of a space constituting space support for which default storage credentials should be removed. 
     * @param {module:api/LUMADBApi~lumaRemoveDefaultPosixCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lumaRemoveDefaultPosixCredentials = function(id, spaceId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaRemoveDefaultPosixCredentials");
      }

      // verify the required parameter 'spaceId' is set
      if (spaceId === undefined || spaceId === null) {
        throw new Error("Missing the required parameter 'spaceId' when calling lumaRemoveDefaultPosixCredentials");
      }


      var pathParams = {
        'id': id,
        'space_id': spaceId
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
        '/provider/storages/{id}/luma/db/storage_access/posix_compatible/default_credentials/{space_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaRemoveDisplayCredentials operation.
     * @callback module:api/LUMADBApi~lumaRemoveDisplayCredentialsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove default display credentials
     * Removes default display credentials for the space support from LUMA DB. Default display credentials will be acquired again using currently setup LUMA feed. 
     * @param {String} id The Id of a storage constituting space support for which default display credentials should be removed. 
     * @param {String} spaceId The Id of a space constituting space support for which default display credentials should be removed. 
     * @param {module:api/LUMADBApi~lumaRemoveDisplayCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lumaRemoveDisplayCredentials = function(id, spaceId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaRemoveDisplayCredentials");
      }

      // verify the required parameter 'spaceId' is set
      if (spaceId === undefined || spaceId === null) {
        throw new Error("Missing the required parameter 'spaceId' when calling lumaRemoveDisplayCredentials");
      }


      var pathParams = {
        'id': id,
        'space_id': spaceId
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
        '/provider/storages/{id}/luma/db/display_credentials/all/default/{space_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaRemoveOnedataUserToCredentialsMapping operation.
     * @callback module:api/LUMADBApi~lumaRemoveOnedataUserToCredentialsMappingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Onedata user to credentials mapping
     * Removes mapping of the Onedata user to user on the specific storage from LUMA DB. Mapping will be acquired again using currently setup LUMA feed. 
     * @param {String} id The Id of a storage for which user mapping should be removed. 
     * @param {String} onedataUserId The Id of a user for which mapping should be removed. 
     * @param {module:api/LUMADBApi~lumaRemoveOnedataUserToCredentialsMappingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lumaRemoveOnedataUserToCredentialsMapping = function(id, onedataUserId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaRemoveOnedataUserToCredentialsMapping");
      }

      // verify the required parameter 'onedataUserId' is set
      if (onedataUserId === undefined || onedataUserId === null) {
        throw new Error("Missing the required parameter 'onedataUserId' when calling lumaRemoveOnedataUserToCredentialsMapping");
      }


      var pathParams = {
        'id': id,
        'onedata_user_id': onedataUserId
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
        '/provider/storages/{id}/luma/db/storage_access/all/onedata_user_to_credentials/{onedata_user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lumaRemoveUidToOnedataUserMapping operation.
     * @callback module:api/LUMADBApi~lumaRemoveUidToOnedataUserMappingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove mapping of UID
     * Removes mapping of UID on the specific storage to Onedata user from LUMA DB. This endpoint is relevant **only for POSIX compatible storages**. 
     * @param {String} id The Id of a storage constituting space support for which onedata user mapping should be removed. 
     * @param {Number} uid The UID of the user on the storage. 
     * @param {module:api/LUMADBApi~lumaRemoveUidToOnedataUserMappingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lumaRemoveUidToOnedataUserMapping = function(id, uid, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lumaRemoveUidToOnedataUserMapping");
      }

      // verify the required parameter 'uid' is set
      if (uid === undefined || uid === null) {
        throw new Error("Missing the required parameter 'uid' when calling lumaRemoveUidToOnedataUserMapping");
      }


      var pathParams = {
        'id': id,
        'uid': uid
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
        '/provider/storages/{id}/luma/db/storage_import/posix_compatible/uid_to_onedata_user/{uid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
