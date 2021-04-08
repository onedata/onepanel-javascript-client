/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-alpha6
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
    define(['ApiClient', 'model/Error', 'model/ProviderStorages', 'model/StorageCreateRequest', 'model/StorageCreateResponse', 'model/StorageGetDetails', 'model/StorageModifyDetails', 'model/StorageModifyRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/ProviderStorages'), require('../model/StorageCreateRequest'), require('../model/StorageCreateResponse'), require('../model/StorageGetDetails'), require('../model/StorageModifyDetails'), require('../model/StorageModifyRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.StoragesApi = factory(root.Onepanel.ApiClient, root.Onepanel.Error, root.Onepanel.ProviderStorages, root.Onepanel.StorageCreateRequest, root.Onepanel.StorageCreateResponse, root.Onepanel.StorageGetDetails, root.Onepanel.StorageModifyDetails, root.Onepanel.StorageModifyRequest);
  }
}(this, function(ApiClient, Error, ProviderStorages, StorageCreateRequest, StorageCreateResponse, StorageGetDetails, StorageModifyDetails, StorageModifyRequest) {
  'use strict';

  /**
   * Storages service.
   * @module api/StoragesApi
   * @version 21.02.0-alpha6
   */

  /**
   * Constructs a new StoragesApi. 
   * @alias module:api/StoragesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addStorage operation.
     * @callback module:api/StoragesApi~addStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StorageCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add storage
     * Adds additional storage resources to the provider.  ***Example cURL requests***  **Add storage** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X POST https://$HOST/api/v3/onepanel/provider/storages \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;My S3 Storage\&quot;: {         \&quot;type\&quot;: \&quot;s3\&quot;,         \&quot;hostname\&quot;: \&quot;iam.example.com\&quot;,         \&quot;bucketName\&quot;: \&quot;bucket1.iam.example.com\&quot;,         \&quot;skipStorageDetection\&quot;: true     },     \&quot;My Posix Storage\&quot;: {         \&quot;type\&quot;: \&quot;posix\&quot;,         \&quot;mountPoint\&quot;: \&quot;/volumes/inexistent/path\&quot;     } }&#39;  {   \&quot;My S3 Storage\&quot;: {       \&quot;id\&quot;: \&quot;f891d1ddf693232bbf0c11fe3cd9f7e7cheda9\&quot;   },   \&quot;My Posix Storage\&quot;: {       \&quot;error\&quot;: {           \&quot;id\&quot;: \&quot;storageTestFailed\&quot;,           \&quot;description\&quot;: \&quot;Failed to write test file on storage.\&quot;,           \&quot;details\&quot;: {               \&quot;operation\&quot;: \&quot;write\&quot;           }       }   } } &#x60;&#x60;&#x60; 
     * @param {module:model/StorageCreateRequest} storageCreateRequest The configuration details of storage resources to be added to the provider deployment. Must be an object with unique names for the storages as keys and their corresponding configuration (objects) as values - see the request body example. 
     * @param {module:api/StoragesApi~addStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StorageCreateResponse}
     */
    this.addStorage = function(storageCreateRequest, callback) {
      var postBody = storageCreateRequest;

      // verify the required parameter 'storageCreateRequest' is set
      if (storageCreateRequest === undefined || storageCreateRequest === null) {
        throw new Error("Missing the required parameter 'storageCreateRequest' when calling addStorage");
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
      var returnType = StorageCreateResponse;

      return this.apiClient.callApi(
        '/provider/storages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorageDetails operation.
     * @callback module:api/StoragesApi~getStorageDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StorageGetDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storage details
     * Returns the details of the selected storage.  ***Example cURL requests***  **Get Storage Details** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https:/$HOST/api/v3/onepanel/provider/storages/$STORAGE_ID  {     \&quot;type\&quot;: \&quot;s3\&quot;,     \&quot;storagePathType\&quot;: \&quot;flat\&quot;,     \&quot;skipStorageDetection\&quot;: true,     \&quot;signatureVersion\&quot;: 4,     \&quot;scheme\&quot;: \&quot;http\&quot;,     \&quot;readonly\&quot;: false,     \&quot;qosParameters\&quot;:{         \&quot;storageId\&quot;: \&quot;05b6c0a9b72e475c9d5061b0b7e16947chbcdc\&quot;,         \&quot;providerId\&quot;: \&quot;03c7e42a793912307b01b1bbb72a3a6bch4c1c\&quot;     },     \&quot;name\&quot;: \&quot;My S3 Storage\&quot;,     \&quot;maximumCanonicalObjectSize\&quot;: 67108864,     \&quot;lumaFeed\&quot;: \&quot;auto\&quot;,     \&quot;importedStorage\&quot;: false,     \&quot;id\&quot;: \&quot;05b6c0a9b72e475c9d5061b0b7e16947chbcdc\&quot;,     \&quot;hostname\&quot;: \&quot;iam.exampele.com:80/\&quot;,     \&quot;fileMode\&quot;: \&quot;0664\&quot;,     \&quot;dirMode\&quot;: \&quot;0775\&quot;,     \&quot;bucketName\&quot;: \&quot;bucket1.iam.examplee.com\&quot;,     \&quot;blockSize\&quot;: 10485760,     \&quot;accessKey\&quot;: \&quot;\&quot; } &#x60;&#x60;&#x60; 
     * @param {String} id The Id of a storage resource, which details should be returned. 
     * @param {module:api/StoragesApi~getStorageDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StorageGetDetails}
     */
    this.getStorageDetails = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStorageDetails");
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
      var returnType = StorageGetDetails;

      return this.apiClient.callApi(
        '/provider/storages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorages operation.
     * @callback module:api/StoragesApi~getStoragesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderStorages} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storages
     * Returns the list of provider storage resources and their details.  ***Example cURL requests***  **Get provider storage ids** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$HOST/api/v3/onepanel/provider/storages  {     \&quot;ids\&quot;: [         \&quot;18a42a43b1b2d92455ffa09e9a15df7fch4f82\&quot;,         \&quot;0a26877440f6ce457106c6958dfe7ecbch0ac6\&quot;,         \&quot;b3d7d10504393556d9b1631a74c34520ch8359\&quot;     ] } &#x60;&#x60;&#x60; 
     * @param {module:api/StoragesApi~getStoragesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProviderStorages}
     */
    this.getStorages = function(callback) {
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
      var returnType = ProviderStorages;

      return this.apiClient.callApi(
        '/provider/storages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyStorage operation.
     * @callback module:api/StoragesApi~modifyStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StorageModifyDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify storage config
     * Modifies storage configuration.  ***Example cURL requests***  **Modify storage name. Notice, that current storage name is the map key.** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X PATCH https://$HOST/api/v3/onepanel/provider/storages/$STORAGE_ID \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;My S3 Storage\&quot;: {         \&quot;type\&quot;:\&quot;s3\&quot;,         \&quot;name\&quot;: \&quot;My S3 Storage Updated\&quot;     } }&#39;  {     \&quot;type\&quot;: \&quot;s3\&quot;,     \&quot;storagePathType\&quot;: \&quot;flat\&quot;,     \&quot;skipStorageDetection\&quot;: \&quot;true\&quot;,     \&quot;signatureVersion\&quot;: \&quot;4\&quot;,     \&quot;scheme\&quot;: \&quot;http\&quot;,     \&quot;readonly\&quot;: false,     \&quot;qosParameters\&quot;: {         \&quot;storageId\&quot;: \&quot;2456aa013af797dbef27743790a5f12cche680\&quot;,         \&quot;providerId\&quot;: \&quot;03c7e42a793912307b01b1bbb72a3a6bch4c1c\&quot;     },     \&quot;name\&quot;: \&quot;My S3 Storage Updated\&quot;,     \&quot;maximumCanonicalObjectSize\&quot;: \&quot;67108864\&quot;,     \&quot;lumaFeed\&quot;: \&quot;auto\&quot;,     \&quot;importedStorage\&quot;: false,     \&quot;id\&quot;: \&quot;2456aa013af797dbef27743790a5f12cche680\&quot;,     \&quot;hostname\&quot;: \&quot;iam.exampele.com:80/\&quot;,     \&quot;fileMode\&quot;: \&quot;0664\&quot;,     \&quot;dirMode\&quot;: \&quot;0775\&quot;,     \&quot;bucketName\&quot;: \&quot;bucket1.iam.examplee.com\&quot;,     \&quot;blockSize\&quot;: \&quot;10485760\&quot;,     \&quot;accessKey\&quot;: \&quot;\&quot; } &#x60;&#x60;&#x60; 
     * @param {String} id The Id of the storage resource which details should be modified. 
     * @param {module:model/StorageModifyRequest} storageModifyRequest An object with one key - the current name of the storage that is being modified - and its value set to an object with updated parameters. 
     * @param {module:api/StoragesApi~modifyStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StorageModifyDetails}
     */
    this.modifyStorage = function(id, storageModifyRequest, callback) {
      var postBody = storageModifyRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling modifyStorage");
      }

      // verify the required parameter 'storageModifyRequest' is set
      if (storageModifyRequest === undefined || storageModifyRequest === null) {
        throw new Error("Missing the required parameter 'storageModifyRequest' when calling modifyStorage");
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
      var returnType = StorageModifyDetails;

      return this.apiClient.callApi(
        '/provider/storages/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeStorage operation.
     * @callback module:api/StoragesApi~removeStorageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove storage
     * Removes storage from the cluster. Only storage not supporting any spaces can be removed.  ***Example cURL requests***  **Remove storage** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X DELETE https://$HOST/api/v3/onepanel/provider/storages/$STORAGE_ID &#x60;&#x60;&#x60; 
     * @param {String} id The Id of the storage to remove.
     * @param {module:api/StoragesApi~removeStorageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeStorage = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeStorage");
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
        '/provider/storages/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
