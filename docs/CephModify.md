# Onepanel.CephModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;ceph\&quot;&#x60;  (**DEPRECATED** - use Ceph RADOS instead) storage backend compatible with [Ceph](http://ceph.com/ceph-storage/) object storage, using the deprecated &#x60;libradosstriper&#x60; library.  | 
**monitorHostname** | **String** | The hostname (IP address or FQDN) of the Ceph monitor service.  | [optional] 
**clusterName** | **String** | The name of the Ceph storage cluster. | [optional] 
**poolName** | **String** | The name of the Ceph pool – the logical partition for object storage.  | [optional] 
**username** | **String** | The username of the Ceph cluster administrator. | [optional] 
**key** | **String** | The admin key to access the Ceph cluster. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ceph` (value: `"ceph"`)




