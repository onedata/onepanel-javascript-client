# Onepanel.S3Create

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | 
**hostname** | **String** | The hostname of a machine where S3 storage is installed. | 
**bucketName** | **String** | The storage bucket name. | 
**accessKey** | **String** | The access key to the S3 storage. | 
**secretKey** | **String** | The secret key to the S3 storage. | 
**signatureVersion** | **Number** | The version of signature used to sign requests. One of: 2, 4. Default: 4.  | [optional] 
**blockSize** | **Number** | Storage block size in bytes. In case the block size is &#x60;0&#x60; and &#x60;canonical&#x60; path type is selected, each file is stored in a single S3 object. This value must be set to &#x60;0&#x60; to enable data import from an existing S3 bucket.  | [optional] 
**maximumCanonicalObjectSize** | **Number** | Defines the maximum size for objects, which can be modified on the S3 storage in &#x60;canonical&#x60; path mode. In this mode, entire file needs to be downloaded to memory, modified and uploaded back, which is impractical for large files (default 64 MiB).  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0644&#x60;.  | [optional] [default to &#39;0644&#39;]
**dirMode** | **String** | Defines the directory mode which directories imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0775&#x60;.  | [optional] [default to &#39;0775&#39;]
**insecure** | **Boolean** | Defines whether storage administrator credentials (accessKey and secretKey) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;flat&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `s3` (value: `"s3"`)




