/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in one of `X-Auth-Token`, `Macaroon` or `Authorization: Bearer` headers. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H 'X-Auth-Token: $TOKEN' https://$HOST:9443/api/v3/onepanel/... curl -H 'Macaroon: $TOKEN' https://$HOST:9443/api/v3/onepanel/... curl -H 'Authorization: Bearer $TOKEN' https://$HOST:9443/api/v3/onepanel/... ```   ### Passphrase authentication  The token authentication requires functional Onezone to succeed. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the only content of base64-encoded string in Basic authorization header, e.g. ```bash $ echo -n TheEmergencyPassphrase | base64 VGhlRW1lcmdlbmN5UGFzc3BocmFzZQ== $ curl -H 'authorization: Basic VGhlRW1lcmdlbmN5UGFzc3BocmFzZQ==' ```  The passphrase is set during deployment. Can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
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
    define(['ApiClient', 'model/ClusterDetails', 'model/ClusterMembersSummary', 'model/Configuration', 'model/CurrentUser', 'model/DnsCheck', 'model/DnsCheckConfiguration', 'model/EmergencyPassphraseChangeRequest', 'model/EmergencyPassphraseStatus', 'model/Error', 'model/Host', 'model/HostAddRequest', 'model/Ids', 'model/JoinClusterRequest', 'model/Node', 'model/Progress', 'model/ProgressModify', 'model/RemoteProviderDetails', 'model/ServiceError', 'model/TaskStatus', 'model/Token', 'model/WebCert', 'model/WebCertModifyRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClusterDetails'), require('../model/ClusterMembersSummary'), require('../model/Configuration'), require('../model/CurrentUser'), require('../model/DnsCheck'), require('../model/DnsCheckConfiguration'), require('../model/EmergencyPassphraseChangeRequest'), require('../model/EmergencyPassphraseStatus'), require('../model/Error'), require('../model/Host'), require('../model/HostAddRequest'), require('../model/Ids'), require('../model/JoinClusterRequest'), require('../model/Node'), require('../model/Progress'), require('../model/ProgressModify'), require('../model/RemoteProviderDetails'), require('../model/ServiceError'), require('../model/TaskStatus'), require('../model/Token'), require('../model/WebCert'), require('../model/WebCertModifyRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.OnepanelApi = factory(root.Onepanel.ApiClient, root.Onepanel.ClusterDetails, root.Onepanel.ClusterMembersSummary, root.Onepanel.Configuration, root.Onepanel.CurrentUser, root.Onepanel.DnsCheck, root.Onepanel.DnsCheckConfiguration, root.Onepanel.EmergencyPassphraseChangeRequest, root.Onepanel.EmergencyPassphraseStatus, root.Onepanel.Error, root.Onepanel.Host, root.Onepanel.HostAddRequest, root.Onepanel.Ids, root.Onepanel.JoinClusterRequest, root.Onepanel.Node, root.Onepanel.Progress, root.Onepanel.ProgressModify, root.Onepanel.RemoteProviderDetails, root.Onepanel.ServiceError, root.Onepanel.TaskStatus, root.Onepanel.Token, root.Onepanel.WebCert, root.Onepanel.WebCertModifyRequest);
  }
}(this, function(ApiClient, ClusterDetails, ClusterMembersSummary, Configuration, CurrentUser, DnsCheck, DnsCheckConfiguration, EmergencyPassphraseChangeRequest, EmergencyPassphraseStatus, Error, Host, HostAddRequest, Ids, JoinClusterRequest, Node, Progress, ProgressModify, RemoteProviderDetails, ServiceError, TaskStatus, Token, WebCert, WebCertModifyRequest) {
  'use strict';

  /**
   * Onepanel service.
   * @module api/OnepanelApi
   * @version 18.02.1
   */

  /**
   * Constructs a new OnepanelApi. 
   * @alias module:api/OnepanelApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addClusterHost operation.
     * @callback module:api/OnepanelApi~addClusterHostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Host} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds given host to the cluster
     * Adds given host to the current cluster. The host can be specified by any address by which it is reachable. Upon success returns proper hostname used to address the new host in cluster management. 
     * @param {module:model/HostAddRequest} hostAddRequest 
     * @param {module:api/OnepanelApi~addClusterHostCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the checkDns operation.
     * @callback module:api/OnepanelApi~checkDnsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DnsCheck} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check correctness of DNS entries for the cluster&#39;s domain.
     * Returns results of the last DNS check, verifying validity of DNS configuration for cluster&#39;s domain. Unless &#39;forceCheck&#39; flag is set, the results may be cached. If the cluster is configured with an IP instead of a domain no results are returned. Settings used for the check, ie. DNS servers used can be modified using the dns_check/configuration endpoint. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceCheck If true the DNS check cache is overridden and check is performed during handling of the request. (default to false)
     * @param {module:api/OnepanelApi~checkDnsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DnsCheck}
     */
    this.checkDns = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'forceCheck': opts['forceCheck']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DnsCheck;

      return this.apiClient.callApi(
        '/dns_check', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserInviteToken operation.
     * @callback module:api/OnepanelApi~createUserInviteTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate cluster invitation token for a user
     * Returns a token which can be used to add a Onezone user as a member of this cluster. 
     * @param {module:api/OnepanelApi~createUserInviteTokenCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getCluster operation.
     * @callback module:api/OnepanelApi~getClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of a user&#39;s cluster
     * Returns details of the specified cluster. 
     * @param {String} id Cluster Id which details should be returned.
     * @param {module:api/OnepanelApi~getClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterDetails}
     */
    this.getCluster = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCluster");
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = ClusterDetails;

      return this.apiClient.callApi(
        '/user/clusters/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClusterCookie operation.
     * @callback module:api/OnepanelApi~getClusterCookieCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cluster cookie
     * Returns cookie of a cluster this host belongs to. The cookie is a character sequence that is common for all the cluster nodes. The cookies are used for authentication between distributed Erlang Onedata processes. 
     * @param {module:api/OnepanelApi~getClusterCookieCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OnepanelApi~getClusterHostsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cluster hosts
     * Returns the list of administrative cluster hosts. 
     * @param {module:api/OnepanelApi~getClusterHostsCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OnepanelApi~getClusterMembersSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterMembersSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get summary of members in this cluster
     * Returns aggregated counts of users and groups belonging to this cluster. 
     * @param {module:api/OnepanelApi~getClusterMembersSummaryCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getClusters operation.
     * @callback module:api/OnepanelApi~getClustersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Ids} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List user&#39;s clusters
     * Lists clusters to which current user belongs. 
     * @param {module:api/OnepanelApi~getClustersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Ids}
     */
    this.getClusters = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = Ids;

      return this.apiClient.callApi(
        '/user/clusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfiguration operation.
     * @callback module:api/OnepanelApi~getConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Configuration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get public configuration
     * Returns public configuration details.
     * @param {module:api/OnepanelApi~getConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OnepanelApi~getCurrentClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of this cluster
     * Returns details of this cluster. 
     * @param {module:api/OnepanelApi~getCurrentClusterCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getCurrentUser operation.
     * @callback module:api/OnepanelApi~getCurrentUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Onepanel user details of currently logged in user.
     * Returns the configuration information of the Onepanel user performing the query. 
     * @param {module:api/OnepanelApi~getCurrentUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentUser}
     */
    this.getCurrentUser = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CurrentUser;

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDnsCheckConfiguration operation.
     * @callback module:api/OnepanelApi~getDnsCheckConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DnsCheckConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return settings used when performing the DNS check.
     * Returns servers queried to check DNS configuration correctness. 
     * @param {module:api/OnepanelApi~getDnsCheckConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DnsCheckConfiguration}
     */
    this.getDnsCheckConfiguration = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DnsCheckConfiguration;

      return this.apiClient.callApi(
        '/dns_check/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmergencyPassphraseStatus operation.
     * @callback module:api/OnepanelApi~getEmergencyPassphraseStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmergencyPassphraseStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get emergency passphrase status
     * Returns information whether emergency passphrase is set.
     * @param {module:api/OnepanelApi~getEmergencyPassphraseStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmergencyPassphraseStatus}
     */
    this.getEmergencyPassphraseStatus = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = EmergencyPassphraseStatus;

      return this.apiClient.callApi(
        '/emergency_passphrase', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNode operation.
     * @callback module:api/OnepanelApi~getNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Node} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about current onepanel node.
     * Returns information about current onepanel node. This request can be executed by unauthorized users only if there are no admin users in the system. 
     * @param {module:api/OnepanelApi~getNodeCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OnepanelApi~getProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Progress} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get deployment progress
     * Returns deployment markers state.
     * @param {module:api/OnepanelApi~getProgressCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getRemoteProvider operation.
     * @callback module:api/OnepanelApi~getRemoteProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoteProviderDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of a remote Oneprovider.
     * Returns the details of given provider. Only users belonging to that Oneprovider&#39;s cluster can fetch its details. 
     * @param {String} id Id of requested Oneprovider.
     * @param {module:api/OnepanelApi~getRemoteProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoteProviderDetails}
     */
    this.getRemoteProvider = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRemoteProvider");
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = RemoteProviderDetails;

      return this.apiClient.callApi(
        '/providers/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskStatus operation.
     * @callback module:api/OnepanelApi~getTaskStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get background task result
     * Returns result of an asynchronous operation, e.g. database service configuration. 
     * @param {String} id The requested task Id.
     * @param {module:api/OnepanelApi~getTaskStatusCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getWebCert operation.
     * @callback module:api/OnepanelApi~getWebCertCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebCert} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about SSL certificates configuration and status.
     * Returns information about SSL certificate status and renewal configuration. 
     * @param {module:api/OnepanelApi~getWebCertCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebCert}
     */
    this.getWebCert = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = WebCert;

      return this.apiClient.callApi(
        '/web_cert', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the joinCluster operation.
     * @callback module:api/OnepanelApi~joinClusterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join existing cluster
     * Adds this host to adminstrative cluster. The host handling this request has to be newly started or removed from previous cluster. It cannot contain any configured user accounts or other configuration data. Therefore this request does not need authorization. 
     * @param {module:model/JoinClusterRequest} joinClusterRequest 
     * @param {module:api/OnepanelApi~joinClusterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.joinCluster = function(joinClusterRequest, callback) {
      var postBody = joinClusterRequest;

      // verify the required parameter 'joinClusterRequest' is set
      if (joinClusterRequest === undefined || joinClusterRequest === null) {
        throw new Error("Missing the required parameter 'joinClusterRequest' when calling joinCluster");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
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
     * Callback function to receive the result of the modifyDnsCheckConfiguration operation.
     * @callback module:api/OnepanelApi~modifyDnsCheckConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure dns check
     * Informs what DNS servers to use for checking external DNS records validity. 
     * @param {module:model/DnsCheckConfiguration} dnsCheckConfiguration The configuration changes.
     * @param {module:api/OnepanelApi~modifyDnsCheckConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyDnsCheckConfiguration = function(dnsCheckConfiguration, callback) {
      var postBody = dnsCheckConfiguration;

      // verify the required parameter 'dnsCheckConfiguration' is set
      if (dnsCheckConfiguration === undefined || dnsCheckConfiguration === null) {
        throw new Error("Missing the required parameter 'dnsCheckConfiguration' when calling modifyDnsCheckConfiguration");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json', 'application/x-yaml'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/dns_check/configuration', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyProgress operation.
     * @callback module:api/OnepanelApi~modifyProgressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify progress markers
     * Sets or unsets markers for completed deployment stages.
     * @param {module:model/ProgressModify} progressModify 
     * @param {module:api/OnepanelApi~modifyProgressCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the modifyWebCert operation.
     * @callback module:api/OnepanelApi~modifyWebCertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify SSL certificate configuration
     * Modifies configuration regarding certificate management. Allows enabling or disabling certificate autorenewal using Let&#39;s Encrypt service. 
     * @param {module:model/WebCertModifyRequest} webCertModifyRequest New values for certificate management configuration. 
     * @param {module:api/OnepanelApi~modifyWebCertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyWebCert = function(webCertModifyRequest, callback) {
      var postBody = webCertModifyRequest;

      // verify the required parameter 'webCertModifyRequest' is set
      if (webCertModifyRequest === undefined || webCertModifyRequest === null) {
        throw new Error("Missing the required parameter 'webCertModifyRequest' when calling modifyWebCert");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/web_cert', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeClusterHost operation.
     * @callback module:api/OnepanelApi~removeClusterHostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove host from cluster
     * Removes a node from the administrative cluster. This operation removes all user and configuration data from the host. 
     * @param {String} host Hostname of a node to be removed from the cluster.
     * @param {module:api/OnepanelApi~removeClusterHostCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/hosts/{host}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setEmergencyPassphrase operation.
     * @callback module:api/OnepanelApi~setEmergencyPassphraseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set emergency passphrase
     * Sets passphrase which can be used to access the Onepanel REST API and emergency Onepanel GUI.
     * @param {module:model/EmergencyPassphraseChangeRequest} emergencyPassphrase 
     * @param {module:api/OnepanelApi~setEmergencyPassphraseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setEmergencyPassphrase = function(emergencyPassphrase, callback) {
      var postBody = emergencyPassphrase;

      // verify the required parameter 'emergencyPassphrase' is set
      if (emergencyPassphrase === undefined || emergencyPassphrase === null) {
        throw new Error("Missing the required parameter 'emergencyPassphrase' when calling setEmergencyPassphrase");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/emergency_passphrase', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
