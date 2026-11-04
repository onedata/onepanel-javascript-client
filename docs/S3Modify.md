# Onepanel.S3Modify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;s3\&quot;&#x60;  [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) compatible storage.  | 
**hostname** | **String** | URL of the S3 endpoint. It must include the scheme (http or https) and may include a port after a colon. For the global AWS endpoint (s3.amazonaws.com), the &#x60;region&#x60; field is required, and requests go to that region&#39;s endpoint (e.g. for &#x60;eu-west-3&#x60;, &#x60;https://s3.eu-west-3.amazonaws.com&#x60;).  | [optional] 
**bucketName** | **String** | The storage bucket name. | [optional] 
**accessKey** | **String** | The access key to the S3 storage. | [optional] 
**secretKey** | **String** | The secret key to the S3 storage. | [optional] 
**signatureVersion** | **Number** | The version of signature used to sign requests. Only version 4 is supported.  | [optional] 
**verifyServerCertificate** | **Boolean** | Enables or disables verification of the S3 server SSL certificate.  | [optional] 
**region** | **String** | Region of the bucket. Required for the global AWS endpoint (s3.amazonaws.com), so that requests go straight to the right region without an extra lookup. Optional for other endpoints; defaults to us-east-1. A region in the hostname (e.g. s3.eu-west-3.amazonaws.com) takes precedence over this field.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0644&#x60;.  | [optional] 
**dirMode** | **String** | Defines the directory mode which directories imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0775&#x60;.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `s3` (value: `"s3"`)




