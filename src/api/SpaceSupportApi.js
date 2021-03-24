/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-alpha5
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
    define(['ApiClient', 'model/Error', 'model/Id', 'model/ProviderSpaces', 'model/SpaceDetails', 'model/SpaceModifyRequest', 'model/SpaceSupportRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Id'), require('../model/ProviderSpaces'), require('../model/SpaceDetails'), require('../model/SpaceModifyRequest'), require('../model/SpaceSupportRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.SpaceSupportApi = factory(root.Onepanel.ApiClient, root.Onepanel.Error, root.Onepanel.Id, root.Onepanel.ProviderSpaces, root.Onepanel.SpaceDetails, root.Onepanel.SpaceModifyRequest, root.Onepanel.SpaceSupportRequest);
  }
}(this, function(ApiClient, Error, Id, ProviderSpaces, SpaceDetails, SpaceModifyRequest, SpaceSupportRequest) {
  'use strict';

  /**
   * SpaceSupport service.
   * @module api/SpaceSupportApi
   * @version 21.02.0-alpha5
   */

  /**
   * Constructs a new SpaceSupportApi. 
   * @alias module:api/SpaceSupportApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getProviderSpaces operation.
     * @callback module:api/SpaceSupportApi~getProviderSpacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderSpaces} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider spaces
     * Returns the list of spaces supported by the provider.  ***Example cURL requests***  **Get provider space ids** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$HOST/api/v3/onepanel/provider/spaces  {     \&quot;ids\&quot;: [         \&quot;0614a7a1512271ceeae95539872eeeabched69\&quot;,         \&quot;06911eba60e6ba947f86f799ce975042chad21\&quot;,         \&quot;109b7d84c00cd45a88b6cdb852dba5b3ch84db\&quot;     ] } &#x60;&#x60;&#x60; 
     * @param {module:api/SpaceSupportApi~getProviderSpacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProviderSpaces}
     */
    this.getProviderSpaces = function(callback) {
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
      var returnType = ProviderSpaces;

      return this.apiClient.callApi(
        '/provider/spaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSpaceDetails operation.
     * @callback module:api/SpaceSupportApi~getSpaceDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get space details
     * Returns details of space specified by space Id in the path.  ***Example cURL requests***  **Get space details** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X GET https://$HOST/api/v3/onepanel/provider/spaces/$SPACE_ID  {     \&quot;supportingProviders\&quot;: {         \&quot;03c7e42a793912307b01b1bbb72a3a6bch4c1c\&quot;: 10000000     },     \&quot;storageId\&quot;: \&quot;18a42a43b1b2d92455ffa09e9a15df7fch4f82\&quot;,     \&quot;spaceOccupancy\&quot;: 0,     \&quot;name\&quot;: \&quot;someSpace\&quot;,     \&quot;localStorages\&quot;: [\&quot;18a42a43b1b2d92455ffa09e9a15df7fch4f82\&quot;],     \&quot;importedStorage\&quot;: false,     \&quot;id\&quot;: \&quot;16403a6c45105010dc7103e31874cb3echac41\&quot; } &#x60;&#x60;&#x60; 
     * @param {String} id The Id of a space which details should be returned.
     * @param {module:api/SpaceSupportApi~getSpaceDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceDetails}
     */
    this.getSpaceDetails = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSpaceDetails");
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
      var returnType = SpaceDetails;

      return this.apiClient.callApi(
        '/provider/spaces/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifySpace operation.
     * @callback module:api/SpaceSupportApi~modifySpaceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify space details
     * Modifies the space import/update strategies.  ***Example cURL requests***  **Modify space support size** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X PATCH https://$HOST/api/v3/onepanel/provider/spaces/$SPACE_ID \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{\&quot;size\&quot;: \&quot;30000000\&quot;}&#39; &#x60;&#x60;&#x60; 
     * @param {String} id The Id of a space which details should be modified.
     * @param {module:model/SpaceModifyRequest} spaceModifyRequest 
     * @param {module:api/SpaceSupportApi~modifySpaceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifySpace = function(id, spaceModifyRequest, callback) {
      var postBody = spaceModifyRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling modifySpace");
      }

      // verify the required parameter 'spaceModifyRequest' is set
      if (spaceModifyRequest === undefined || spaceModifyRequest === null) {
        throw new Error("Missing the required parameter 'spaceModifyRequest' when calling modifySpace");
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
        '/provider/spaces/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeSpaceSupport operation.
     * @callback module:api/SpaceSupportApi~revokeSpaceSupportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke space support for a space
     * Allows provider to revoke storage support for a specific space. Users with access to this space will no longer be able to store data on the resources of this provider.  ***Example cURL requests***  **Revoke space support** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X DELETE https://$HOST/api/v3/onepanel/provider/spaces/$SPACE_ID &#x60;&#x60;&#x60; 
     * @param {String} id The Id of a space to be removed.
     * @param {module:api/SpaceSupportApi~revokeSpaceSupportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.revokeSpaceSupport = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling revokeSpaceSupport");
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/spaces/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the supportSpace operation.
     * @callback module:api/SpaceSupportApi~supportSpaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Id} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Support space
     * Supports an existing space.  ***Example cURL requests***  **Support space** &#x60;&#x60;&#x60;bash curl -H \&quot;X-Auth-Token: $TOKEN\&quot; -X POST https://$HOST/api/v3/onepanel/provider/spaces \\ -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;token\&quot;: \&quot;MDAU02QHLaaJ00go\&quot;,     \&quot;size\&quot;: \&quot;10000000\&quot;,     \&quot;storageId\&quot;: \&quot;18a42a43b1b2d9e9a1f82\&quot; }&#39;  {     \&quot;id\&quot;: \&quot;16403a6c45105010dc7103e31874cb3echac41\&quot; } &#x60;&#x60;&#x60; 
     * @param {module:model/SpaceSupportRequest} spaceSupportRequest Specification of the space support request including support size and token. 
     * @param {module:api/SpaceSupportApi~supportSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Id}
     */
    this.supportSpace = function(spaceSupportRequest, callback) {
      var postBody = spaceSupportRequest;

      // verify the required parameter 'spaceSupportRequest' is set
      if (spaceSupportRequest === undefined || spaceSupportRequest === null) {
        throw new Error("Missing the required parameter 'spaceSupportRequest' when calling supportSpace");
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
        '/provider/spaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
