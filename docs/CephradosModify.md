# Onepanel.CephradosModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the modified storage. Must match the type of existing storage, needed only for OpenAPI polymorphism disambiguation. | 
**username** | **String** | The username of the Ceph cluster administrator. | [optional] 
**key** | **String** | The admin key to access the Ceph cluster. | [optional] 
**monitorHostname** | **String** | The monitor host name. | [optional] 
**clusterName** | **String** | The Ceph cluster name. | [optional] 
**poolName** | **String** | The Ceph pool name. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] 
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `cephrados` (value: `"cephrados"`)




