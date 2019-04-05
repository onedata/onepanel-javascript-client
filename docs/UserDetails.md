# Onepanel.UserDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user Id. | 
**username** | **String** | The user name. | 
**userRole** | **String** | The user role, one of &#x60;admin&#x60; or &#x60;regular&#x60;. | 
**clusterPrivileges** | **[String]** | List of cluster privileges possessed by the user. This field is returned only to a Onezone user fetching information about himself. | [optional] 


<a name="UserRoleEnum"></a>
## Enum: UserRoleEnum


* `admin` (value: `"admin"`)

* `regular` (value: `"regular"`)




<a name="[ClusterPrivilegesEnum]"></a>
## Enum: [ClusterPrivilegesEnum]


* `view` (value: `"cluster_view"`)

* `update` (value: `"cluster_update"`)

* `delete` (value: `"cluster_delete"`)

* `view_privileges` (value: `"cluster_view_privileges"`)

* `set_privileges` (value: `"cluster_set_privileges"`)

* `add_user` (value: `"cluster_add_user"`)

* `remove_user` (value: `"cluster_remove_user"`)

* `add_group` (value: `"cluster_add_group"`)

* `remove_group` (value: `"cluster_remove_group"`)




