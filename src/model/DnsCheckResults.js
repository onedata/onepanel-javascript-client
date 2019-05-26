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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.DnsCheckResults = factory(root.Onepanel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DnsCheckResults model module.
   * @module model/DnsCheckResults
   * @version 18.02.0-rc2
   */

  /**
   * Constructs a new <code>DnsCheckResults</code>.
   * Describes results of a dns configuration check. 
   * @alias module:model/DnsCheckResults
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Provides basic polymorphism support by returning discriminator type for
   * Swagger base classes. If type is not polymorphic returns 'undefined'.
   *
   * @return {module:model/DnsCheckResults} The value of 'discriminator' field or undefined.
   */
  exports.__swaggerDiscriminator = function() {
    ;
  };

  /**
   * Constructs a <code>DnsCheckResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DnsCheckResults} obj Optional instance to populate.
   * @return {module:model/DnsCheckResults} The populated <code>DnsCheckResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('dnsZone')) {
        obj['dnsZone'] = ApiClient.convertToType(data['dnsZone'], 'String');
      }
    }
    return obj;
  }

  /**
   * Describes the cluster domain name status in public dns. Possible values: - \"unresolvable\" - no A records can be found for the domain - \"missing_ips\" - no A records can be found for the domain - \"unknown_ips\" - IPs returned by dns servers are not the cluster external IPs as configured in onepanel - \"ok\" - The domain is configured correctly 
   * @member {module:model/DnsCheckResults.DomainEnum} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * Checks if management of the cluster's domain and its subdomains was delegated to the built-in dns server. This field is returned only in the Onezone onepanel. Possible values: - \"no_ns_records\" - no NS records could be resolved - \"bad_ns_ips\" - nameserver IPs resolved by global dns servers are not the cluster exteanl IPs as configured in onepanel - \"ok\" - The dns zone delegation is configured correctly 
   * @member {module:model/DnsCheckResults.DnsZoneEnum} dnsZone
   */
  exports.prototype['dnsZone'] = undefined;


  /**
   * Allowed values for the <code>domain</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DomainEnum = {
    /**
     * value: "unresolvable"
     * @const
     */
    "unresolvable": "unresolvable",
    /**
     * value: "missing_ips"
     * @const
     */
    "missing_ips": "missing_ips",
    /**
     * value: "foreing_ips"
     * @const
     */
    "foreing_ips": "foreing_ips",
    /**
     * value: "ok"
     * @const
     */
    "ok": "ok"  };

  /**
   * Allowed values for the <code>dnsZone</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DnsZoneEnum = {
    /**
     * value: "no_ns_records"
     * @const
     */
    "no_ns_records": "no_ns_records",
    /**
     * value: "bad_ns_ips"
     * @const
     */
    "bad_ns_ips": "bad_ns_ips",
    /**
     * value: "ok"
     * @const
     */
    "ok": "ok"  };


  return exports;
}));


