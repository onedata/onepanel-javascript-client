# Onepanel.UserCreateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **String** | The user name. It must be at least 4 characters long and contain only alphanumeric characters [a-zA-Z0-9].  | 
**password** | **String** | The user password. It must be at least 8 characters long and contain a minimum of 1 lower case letter [a-z] and a minimum of 1 upper case letter [A-Z] and a minimum of 1 numeric character [0-9]. The Password must not contain a colon character [:].  | 
**userRole** | **String** | The user role, one of &#39;admin&#39; or &#39;regular&#39;. | 


<a name="UserRoleEnum"></a>
## Enum: UserRoleEnum


* `admin` (value: `"admin"`)

* `regular` (value: `"regular"`)




