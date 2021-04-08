/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
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
    define(['ApiClient', 'model/ClusterDetails', 'model/ClusterMembersSummary', 'model/Configuration', 'model/Error', 'model/Host', 'model/HostAddRequest', 'model/InviteToken', 'model/Node', 'model/Progress', 'model/ProgressModify', 'model/TaskStatus', 'model/Token'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClusterDetails'), require('../model/ClusterMembersSummary'), require('../model/Configuration'), require('../model/Error'), require('../model/Host'), require('../model/HostAddRequest'), require('../model/InviteToken'), require('../model/Node'), require('../model/Progress'), require('../model/ProgressModify'), require('../model/TaskStatus'), require('../model/Token'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.ClusterApi = factory(root.Onepanel.ApiClient, root.Onepanel.ClusterDetails, root.Onepanel.ClusterMembersSummary, root.Onepanel.Configuration, root.Onepanel.Error, root.Onepanel.Host, root.Onepanel.HostAddRequest, root.Onepanel.InviteToken, root.Onepanel.Node, root.Onepanel.Progress, root.Onepanel.ProgressModify, root.Onepanel.TaskStatus, root.Onepanel.Token);
  }
}(this, function(ApiClient, ClusterDetails, ClusterMembersSummary, Configuration, Error, Host, HostAddRequest, InviteToken, Node, Progress, ProgressModify, TaskStatus, Token) {
  'use strict';

  /**
   * Cluster service.
   * @module api/ClusterApi
   * @version 21.02.0-alpha6
   */

  /**
   * Constructs a new ClusterApi. 
   * @alias module:api/ClusterApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addClusterHost operation.
     * @callback module:api/ClusterApi~addClusterHostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Host} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add given host to the cluster
     * Adds given host to the current cluster. The host can be specified by any address by which it is reachable. Upon success returns proper hostname used to address the new host in cluster management. 
     * @param {module:model/HostAddRequest} hostAddRequest 
     * @param {module:api/ClusterApi~addClusterHostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Host}
     */
    this.addClusterHost = function(hostAddRequest, callback) {
      var postBody = hostAddRequest;

      // verify the required parameter 'hostAddRequest' is set
      if (hostAddRequest === undefined || hostAddRequest === null) {
        throw new Error("Missing the required parameter 'hostAddRequest' when calling addClusterHost");
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
      var returnType = Host;

      return this.apiClient.callApi(
        '/hosts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createInviteToken operation.
     * @callback module:api/ClusterApi~createInviteTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InviteToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create node invite token
     * Creates node invite token. The token can be used by other nodes to [join cluster](#operation/join_cluster). 
     * @param {module:api/ClusterApi~createInviteTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InviteToken}
     */
    this.createInviteToken = function(callback) {
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
      var returnType = InviteToken;

      return this.apiClient.callApi(
        '/invite_tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserInviteToken operation.
     * @callback module:api/ClusterApi~createUserInviteTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate cluster invitation token for a user
     * Returns a token which can be used to add a Onezone user as a member of this cluster. 
     * @param {module:api/ClusterApi~createUserInviteTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token}
     */
    this.createUserInviteToken = function(callback) {
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
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = Token;

      return this.apiClient.callApi(
        '/cluster/invite_user_token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClusterCookie operation.
     * @callback module:api/ClusterApi~getClusterCookieCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cluster cookie
     * Returns cookie of a cluster this host belongs to. The cookie is a character sequence that is common for all the cluster nodes. The cookies are used for authentication between distributed Erlang Onedata processes. 
     * @param {module:api/ClusterApi~getClusterCookieCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getClusterCookie = function(callback) {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/cookie', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClusterHosts operation.
     * @callback module:api/ClusterApi~getClusterHostsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cluster hosts
     * Returns the list of administrative cluster hosts. 
     * @param {module:api/ClusterApi~getClusterHostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getClusterHosts = function(callback) {
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/hosts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClusterMembersSummary operation.
     * @callback module:api/ClusterApi~getClusterMembersSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterMembersSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get summary of members in this cluster
     * Returns aggregated counts of users and groups belonging to this cluster. 
     * @param {module:api/ClusterApi~getClusterMembersSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterMembersSummary}
     */
    this.getClusterMembersSummary = function(callback) {
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
      var returnType = ClusterMembersSummary;

      return this.apiClient.callApi(
        '/cluster/members_summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfiguration operation.
     * @callback module:api/ClusterApi~getConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Configuration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get public configuration
     * Returns public configuration details.
     * @param {module:api/ClusterApi~getConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Configuration}
     */
    this.getConfiguration = function(callback) {
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
      var returnType = Configuration;

      return this.apiClient.callApi(
        '/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrentCluster operation.
     * @callback module:api/ClusterApi~getCurrentClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of this cluster
     * Returns details of this cluster. 
     * @param {module:api/ClusterApi~getCurrentClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterDetails}
     */
    this.getCurrentCluster = function(callback) {
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
      var returnType = ClusterDetails;

      return this.apiClient.callApi(
        '/cluster', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNode operation.
     * @callback module:api/ClusterApi~getNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Node} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about current onepanel node
     * Returns information about current onepanel node. 
     * @param {module:api/ClusterApi~getNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Node}
     */
    this.getNode = function(callback) {
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
      var returnType = Node;

      return this.apiClient.callApi(
        '/node', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProgress operation.
     * @callback module:api/ClusterApi~getProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Progress} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get deployment progress
     * Returns deployment markers state.
     * @param {module:api/ClusterApi~getProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Progress}
     */
    this.getProgress = function(callback) {
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
      var returnType = Progress;

      return this.apiClient.callApi(
        '/progress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskStatus operation.
     * @callback module:api/ClusterApi~getTaskStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get background task result
     * Returns result of an asynchronous operation, e.g. database service configuration. 
     * @param {String} id The requested task Id.
     * @param {module:api/ClusterApi~getTaskStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskStatus}
     */
    this.getTaskStatus = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTaskStatus");
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
      var returnType = TaskStatus;

      return this.apiClient.callApi(
        '/tasks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the joinCluster operation.
     * @callback module:api/ClusterApi~joinClusterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join existing cluster
     * Adds this host to administrative cluster. The host handling this request has to be newly started or removed from previous cluster. It cannot have emergency passphrase or other configuration data set. Therefore this request does not need authorization. 
     * @param {module:model/InviteToken} inviteToken 
     * @param {module:api/ClusterApi~joinClusterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.joinCluster = function(inviteToken, callback) {
      var postBody = inviteToken;

      // verify the required parameter 'inviteToken' is set
      if (inviteToken === undefined || inviteToken === null) {
        throw new Error("Missing the required parameter 'inviteToken' when calling joinCluster");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/join_cluster', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyProgress operation.
     * @callback module:api/ClusterApi~modifyProgressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify progress markers
     * Sets or unsets markers for completed deployment stages.
     * @param {module:model/ProgressModify} progressModify 
     * @param {module:api/ClusterApi~modifyProgressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyProgress = function(progressModify, callback) {
      var postBody = progressModify;

      // verify the required parameter 'progressModify' is set
      if (progressModify === undefined || progressModify === null) {
        throw new Error("Missing the required parameter 'progressModify' when calling modifyProgress");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/progress', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeClusterHost operation.
     * @callback module:api/ClusterApi~removeClusterHostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove host from cluster
     * Removes a node from the administrative cluster. This operation removes all user and configuration data from the host. 
     * @param {String} host Hostname of a node to be removed from the cluster.
     * @param {module:api/ClusterApi~removeClusterHostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeClusterHost = function(host, callback) {
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling removeClusterHost");
      }


      var pathParams = {
        'host': host
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
        '/hosts/{host}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
