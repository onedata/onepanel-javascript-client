# Onepanel.S3Common

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**hostname** | **String** | The hostname of a machine where S3 storage is installed. | [optional] 
**bucketName** | **String** | The storage bucket name. | [optional] 
**signatureVersion** | **Number** | The version of signature used to sign requests. One of: 2, 4. Default: 4.  | [optional] 
**maximumCanonicalObjectSize** | **Number** | Defines the maximum size for objects, which can be modified on the S3 storage in &#x60;canonical&#x60; path mode. In this mode, entire file needs to be downloaded to memory, modified and uploaded back, which is impractical for large files (default 64 MiB).  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0644&#x60;.  | [optional] [default to &#39;0664&#39;]
**dirMode** | **String** | Defines the directory mode which directories imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0775&#x60;.  | [optional] [default to &#39;0775&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `s3` (value: `"s3"`)



