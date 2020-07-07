# Onepanel.XRootDCredentials

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the storage. Must be given explicitly and must match the actual type of subject storage - this redundancy is needed due to limitations of OpenAPI polymorphism.  | 
**credentialsType** | **String** | Determines the types of credentials provided in the credentials field.  | [optional] [default to &#39;none&#39;]
**credentials** | **String** | The credentials to authenticate with the XRootD server. For &#x60;pwd&#x60; credentials type, this field should contain simply user and password, e.g. &#x60;admin:password&#x60;. For &#x60;none&#x60; this field is ignored.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `xrootd` (value: `"xrootd"`)




<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `none` (value: `"none"`)

* `pwd` (value: `"pwd"`)




