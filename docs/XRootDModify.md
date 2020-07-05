# Onepanel.XRootDModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the modified storage. Must be given explicitly and must match the actual type of subject storage - this redundancy is needed due to limitations of OpenAPI polymorphism.  | 
**url** | **String** | Full URL of the XRootD server, including scheme (root or http) and path, e.g. &#x60;root://192.168.0.1//data&#x60;. Please note, that XRootD URL format requires double slash after host to indicate absolute path.  | [optional] 
**credentialsType** | **String** | Determines the types of credentials provided in the credentials field.  | [optional] 
**credentials** | **String** | The credentials to authenticate with the XRootD server. For &#x60;pwd&#x60; credentials type, this field should contain simply user and password, e.g. &#x60;admin:password&#x60;. For &#x60;none&#x60; this field is ignored.  | [optional] 
**fileModeMask** | **String** | Defines the file permissions mask, which is used to map XRootD file mode to POSIX mode. For instance a fileModeMask &#x60;0664&#x60; for readable file on XRootD would result in a file which is readable for all users, but file which is writeable in XRootD will be only writeable by user and group.  | [optional] 
**dirModeMask** | **String** | Defines the directory permissions mask, which is used to map XRootD dir mode to POSIX mode. For instance a dirModeMask &#x60;0770&#x60; for readable directory on XRootD would result in a directory which is readable for owner and group but not for others.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `xrootd` (value: `"xrootd"`)




<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `none` (value: `"none"`)

* `pwd` (value: `"pwd"`)




