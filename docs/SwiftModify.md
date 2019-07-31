# Onepanel.SwiftModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the modified storage. Must match the type of existing storage, needed only for OpenAPI polymorphism disambiguation. | 
**authUrl** | **String** | The URL to OpenStack Keystone identity service. | [optional] 
**tenantName** | **String** | The name of the tenant to which the user belongs. | [optional] 
**containerName** | **String** | The name of the Swift storage container. | [optional] 
**username** | **String** | The Keystone authentication username. | [optional] 
**password** | **String** | The Keystone authentication password. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and password) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `swift` (value: `"swift"`)




