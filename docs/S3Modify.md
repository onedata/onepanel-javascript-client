# Onepanel.S3Modify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the modified storage. Must match the type of existing storage, needed only for OpenAPI polymorphism disambiguation. | 
**hostname** | **String** | The hostname of a machine where S3 storage is installed. | [optional] 
**bucketName** | **String** | The storage bucket name. | [optional] 
**accessKey** | **String** | The access key to the S3 storage. | [optional] 
**secretKey** | **String** | The secret key to the S3 storage. | [optional] 
**signatureVersion** | **Number** | The version of signature used to sign requests. One of: 2, 4. Default: 4.  | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (accessKey and secretKey) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] 
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `s3` (value: `"s3"`)




