# Onepanel.S3Get

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;s3\&quot;&#x60;  [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) compatible storage.  | 
**hostname** | **String** | URL of the S3 endpoint. It must include the scheme (http or https) and may include a port after a colon. For the global AWS endpoint (s3.amazonaws.com), the &#x60;region&#x60; field is required, and requests go to that region&#39;s endpoint (e.g. for &#x60;eu-west-3&#x60;, &#x60;https://s3.eu-west-3.amazonaws.com&#x60;).  | 
**bucketName** | **String** | The storage bucket name. | 
**signatureVersion** | **Number** | The version of signature used to sign requests. Only version 4 is supported.  | [optional] 
**verifyServerCertificate** | **Boolean** | Enables or disables verification of the S3 server SSL certificate.  | [optional] 
**region** | **String** | Region of the bucket. Required for the global AWS endpoint (s3.amazonaws.com), so that requests go straight to the right region without an extra lookup. Optional for other endpoints; defaults to us-east-1. A region in the hostname (e.g. s3.eu-west-3.amazonaws.com) takes precedence over this field.  | [optional] 
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




