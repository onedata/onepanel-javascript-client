# Onepanel.S3Modify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;s3\&quot;&#x60;  [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) compatible storage.  | 
**hostname** | **String** | The URL of the S3 service endpoint. It must include the scheme (http or https) and may optionally include a port (after a colon). If the hostname is s3.amazonaws.com, the \&quot;Region\&quot; field becomes mandatory; the region is then automatically prepended to the hostname (e.g. providing eu-west-3 for https://s3.amazonaws.com results in https://eu-west-3.s3.amazonaws.com).  | [optional] 
**bucketName** | **String** | The storage bucket name. | [optional] 
**accessKey** | **String** | The access key to the S3 storage. | [optional] 
**secretKey** | **String** | The secret key to the S3 storage. | [optional] 
**signatureVersion** | **Number** | The version of signature used to sign requests. Only version 4 is supported.  | [optional] 
**verifyServerCertificate** | **Boolean** | Enables or disables verification of the S3 server SSL certificate.  | [optional] 
**region** | **String** | The S3 region, sent with each request to the S3 server. Required if the endpoint hostname is s3.amazonaws.com, in which case the region is also prepended to the hostname. For other S3 providers it is optional and defaults to us-east-1.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0644&#x60;.  | [optional] 
**dirMode** | **String** | Defines the directory mode which directories imported from S3 storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0775&#x60;.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `s3` (value: `"s3"`)




