# Onepanel.S3Get

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;s3\&quot;&#x60;  [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) compatible storage.  | 
**hostname** | **String** | The URL of the S3 service endpoint. It must include the scheme (http or https) and may optionally include a port (after a colon). If the host is s3.amazonaws.com, the global AWS endpoint, &#x60;region&#x60; is required.  | 
**bucketName** | **String** | The storage bucket name. | 
**signatureVersion** | **Number** | The version of signature used to sign requests. Only version 4 is supported.  | [optional] 
**verifyServerCertificate** | **Boolean** | Enables or disables verification of the S3 server SSL certificate.  | [optional] 
**region** | **String** | The S3 region, sent with each request to the S3 server. Required if the host of &#x60;hostname&#x60; is s3.amazonaws.com, the global AWS endpoint, and must then be the region of the bucket: Oneprovider sends its requests straight to that region&#39;s endpoint (e.g. s3.eu-west-3.amazonaws.com for eu-west-3) rather than first asking AWS where the bucket is, which it still does for us-east-1. For other S3 providers it is optional and defaults to us-east-1; a region named in the hostname (e.g. s3.eu-west-3.amazonaws.com) takes precedence over this field.  | [optional] 
**blockSize** | **Number** | Storage block size in bytes i.e. the maximum object size. Files larger than one block will be stripped and stored in a series of objects. Must be more than zero for non-imported storage. To enable import from an S3 storage, block size must be set to zero, together with \&quot;canonical\&quot; path type and the read-only mode.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0644&#x60;.  | [optional] 
**dirMode** | **String** | Defines the directory mode which directories imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0775&#x60;.  | [optional] 
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `s3` (value: `"s3"`)




<a name="StoragePathTypeEnum"></a>
## Enum: StoragePathTypeEnum


* `canonical` (value: `"canonical"`)

* `flat` (value: `"flat"`)




