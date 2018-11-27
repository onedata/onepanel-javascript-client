# Onepanel.SwiftModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | 
**authUrl** | **String** | The URL to OpenStack Keystone identity service. | [optional] 
**tenantName** | **String** | The name of the tenant to which the user belongs. | [optional] 
**containerName** | **String** | The name of the Swift storage container. | [optional] 
**username** | **String** | The Keystone authentication username. | [optional] 
**password** | **String** | The Keystone authentication password. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and password) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]


