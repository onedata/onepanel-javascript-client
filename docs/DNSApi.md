# Onepanel.DNSApi

All URIs are relative to *https://localhost/api/v3/onepanel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkDns**](DNSApi.md#checkDns) | **GET** /dns_check | Check correctness of DNS entries for the cluster&#39;s domain
[**getDnsCheckConfiguration**](DNSApi.md#getDnsCheckConfiguration) | **GET** /dns_check/configuration | Return settings used when performing the DNS check
[**modifyDnsCheckConfiguration**](DNSApi.md#modifyDnsCheckConfiguration) | **PATCH** /dns_check/configuration | Configure dns check


<a name="checkDns"></a>
# **checkDns**
> DnsCheck checkDns(opts)

Check correctness of DNS entries for the cluster&#39;s domain

Returns results of the last DNS check, verifying the validity of DNS configuration for cluster&#39;s domain. Unless &#39;forceCheck&#39; flag is set, the results may be cached. If the cluster is configured with an IP instead of a domain no results are returned. Settings used for the check, ie. DNS servers used can be modified using the dns_check/configuration endpoint. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.DNSApi();

var opts = { 
  'forceCheck': false // Boolean | If true the DNS check cache is overridden and check is performed during handling of the request.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkDns(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forceCheck** | **Boolean**| If true the DNS check cache is overridden and check is performed during handling of the request. | [optional] [default to false]

### Return type

[**DnsCheck**](DnsCheck.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDnsCheckConfiguration"></a>
# **getDnsCheckConfiguration**
> DnsCheckConfiguration getDnsCheckConfiguration()

Return settings used when performing the DNS check

Returns servers queried to check DNS configuration correctness. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.DNSApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDnsCheckConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DnsCheckConfiguration**](DnsCheckConfiguration.md)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyDnsCheckConfiguration"></a>
# **modifyDnsCheckConfiguration**
> modifyDnsCheckConfiguration(dnsCheckConfiguration)

Configure dns check

Informs what DNS servers to use for checking external DNS records validity. 

### Example
```javascript
var Onepanel = require('onepanel');
var defaultClient = Onepanel.ApiClient.instance;

// Configure API key authorization: api_key1
var api_key1 = defaultClient.authentications['api_key1'];
api_key1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key1.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key2
var api_key2 = defaultClient.authentications['api_key2'];
api_key2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key2.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new Onepanel.DNSApi();

var dnsCheckConfiguration = new Onepanel.DnsCheckConfiguration(); // DnsCheckConfiguration | The configuration changes.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyDnsCheckConfiguration(dnsCheckConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dnsCheckConfiguration** | [**DnsCheckConfiguration**](DnsCheckConfiguration.md)| The configuration changes. | 

### Return type

null (empty response body)

### Authorization

[api_key1](../README.md#api_key1), [api_key2](../README.md#api_key2), [basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml
 - **Accept**: Not defined

