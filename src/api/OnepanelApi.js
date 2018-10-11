/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 18.02.0-rc2
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
    define(['ApiClient', 'model/DnsCheck', 'model/DnsCheckConfiguration', 'model/Error', 'model/Host', 'model/HostAddRequest', 'model/JoinClusterRequest', 'model/Node', 'model/ServiceError', 'model/SessionDetails', 'model/TaskStatus', 'model/UserCreateRequest', 'model/UserDetails', 'model/UserModifyRequest', 'model/Users', 'model/WebCert', 'model/WebCertModifyRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DnsCheck'), require('../model/DnsCheckConfiguration'), require('../model/Error'), require('../model/Host'), require('../model/HostAddRequest'), require('../model/JoinClusterRequest'), require('../model/Node'), require('../model/ServiceError'), require('../model/SessionDetails'), require('../model/TaskStatus'), require('../model/UserCreateRequest'), require('../model/UserDetails'), require('../model/UserModifyRequest'), require('../model/Users'), require('../model/WebCert'), require('../model/WebCertModifyRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.OnepanelApi = factory(root.Onepanel.ApiClient, root.Onepanel.DnsCheck, root.Onepanel.DnsCheckConfiguration, root.Onepanel.Error, root.Onepanel.Host, root.Onepanel.HostAddRequest, root.Onepanel.JoinClusterRequest, root.Onepanel.Node, root.Onepanel.ServiceError, root.Onepanel.SessionDetails, root.Onepanel.TaskStatus, root.Onepanel.UserCreateRequest, root.Onepanel.UserDetails, root.Onepanel.UserModifyRequest, root.Onepanel.Users, root.Onepanel.WebCert, root.Onepanel.WebCertModifyRequest);
  }
}(this, function(ApiClient, DnsCheck, DnsCheckConfiguration, Error, Host, HostAddRequest, JoinClusterRequest, Node, ServiceError, SessionDetails, TaskStatus, UserCreateRequest, UserDetails, UserModifyRequest, Users, WebCert, WebCertModifyRequest) {
  'use strict';

  /**
   * Onepanel service.
   * @module api/OnepanelApi
   * @version 18.02.0-rc2
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
     * Callback function to receive the result of the addUser operation.
     * @callback module:api/OnepanelApi~addUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Onepanel user
     * Creates a new Onepanel user account.
     * @param {module:model/UserCreateRequest} userCreateRequest The user configuration details.
     * @param {module:api/OnepanelApi~addUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addUser = function(userCreateRequest, callback) {
      var postBody = userCreateRequest;

      // verify the required parameter 'userCreateRequest' is set
      if (userCreateRequest === undefined || userCreateRequest === null) {
        throw new Error("Missing the required parameter 'userCreateRequest' when calling addUser");
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
        '/users', 'POST',
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
     * @param {Boolean} opts.forceCheck If true the DNS check cache is overriden and check is performed during handling of the request. (default to false)
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
     * Callback function to receive the result of the createSession operation.
     * @callback module:api/OnepanelApi~createSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SessionDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Onepanel user session
     * Creates a new Onepanel user session.
     * @param {module:api/OnepanelApi~createSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SessionDetails}
     */
    this.createSession = function(callback) {
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
      var returnType = SessionDetails;

      return this.apiClient.callApi(
        '/session', 'POST',
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
     * Callback function to receive the result of the getSession operation.
     * @callback module:api/OnepanelApi~getSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SessionDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Onepanel user session
     * Returns details of a Onepanel user session associated with the request. 
     * @param {module:api/OnepanelApi~getSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SessionDetails}
     */
    this.getSession = function(callback) {
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
      var returnType = SessionDetails;

      return this.apiClient.callApi(
        '/session', 'GET',
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
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/OnepanelApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Onepanel user details
     * Returns the configuration information of the Onepanel user. 
     * @param {String} username The name of the user whose details should be returned.
     * @param {module:api/OnepanelApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDetails}
     */
    this.getUser = function(username, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUser");
      }


      var pathParams = {
        'username': username
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
      var returnType = UserDetails;

      return this.apiClient.callApi(
        '/users/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/OnepanelApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List onepanel users
     * Lists all usernames. This request can be executed by unauthorized users only if there are no admin users in the system. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.role If present, query returns only users with specified role.
     * @param {module:api/OnepanelApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Users}
     */
    this.getUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'role': opts['role']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = Users;

      return this.apiClient.callApi(
        '/users', 'GET',
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
     * Callback function to receive the result of the modifyUser operation.
     * @callback module:api/OnepanelApi~modifyUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Onepanel user details
     * Modifies the Onepanel user password. 
     * @param {String} username The user name.
     * @param {module:model/UserModifyRequest} userModifyRequest 
     * @param {module:api/OnepanelApi~modifyUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyUser = function(username, userModifyRequest, callback) {
      var postBody = userModifyRequest;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling modifyUser");
      }

      // verify the required parameter 'userModifyRequest' is set
      if (userModifyRequest === undefined || userModifyRequest === null) {
        throw new Error("Missing the required parameter 'userModifyRequest' when calling modifyUser");
      }


      var pathParams = {
        'username': username
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
        '/users/{username}', 'PATCH',
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
     * Callback function to receive the result of the removeSession operation.
     * @callback module:api/OnepanelApi~removeSessionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Onepanel user session
     * Removes the Onepanel user session. 
     * @param {module:api/OnepanelApi~removeSessionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeSession = function(callback) {
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/session', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeUser operation.
     * @callback module:api/OnepanelApi~removeUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Onepanel user
     * Removes the Onepanel user account. 
     * @param {String} username The name of the user to be removed.
     * @param {module:api/OnepanelApi~removeUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeUser = function(username, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling removeUser");
      }


      var pathParams = {
        'username': username
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
        '/users/{username}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
