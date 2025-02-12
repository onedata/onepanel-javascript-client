# Onepanel.CephModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the modified storage. Must be given explicitly and must match the actual type of subject storage - this redundancy is needed due to limitations of OpenAPI polymorphism.  &#x60;type &#x3D; \&quot;ceph\&quot;&#x60;  (**DEPRECATED** - use Ceph RADOS instead) storage backend compatible with [Ceph](http://ceph.com/ceph-storage/) object storage, using the deprecated &#x60;libradosstriper&#x60; library.  | 
**username** | **String** | The username of the Ceph cluster administrator. | [optional] 
**key** | **String** | The admin key to access the Ceph cluster. | [optional] 
**monitorHostname** | **String** | The monitor hostname. | [optional] 
**clusterName** | **String** | The Ceph cluster name. | [optional] 
**poolName** | **String** | The Ceph pool name. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ceph` (value: `"ceph"`)




