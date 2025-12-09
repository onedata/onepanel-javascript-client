# Onepanel.OpConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceType** | **String** | Indicates that this is Oneprovider&#39;s panel. | 
**providerId** | **String** | This cluster&#39;s Oneprovider Id. &#x60;null&#x60; if the Oneprovider is not registered or Oneprovider worker is down.  | 
**providerName** | **String** | The name of this Oneprovider. If the cluster is not configured or malfunctioning (e.g. the op-worker service is down), the value may be &#x60;null&#x60;.  | 
**providerDomain** | **String** | The domain of this Oneprovider. If the cluster is not configured or malfunctioning (e.g. the op-worker service is down), the value may be &#x60;null&#x60;.  | 
**zoneDomain** | **String** | The domain of the Onezone where this Oneprovider is registered. &#x60;null&#x60; if the Oneprovider is not registered.  | 
**isRegistered** | **Boolean** | True if the Oneprovider has been registered at a Onezone.  | [optional] 
**oneS3Enabled** | **Boolean** | True if the OneS3 service is deployed (provides an S3-compliant data access endpoint).  | 
**oneS3Domain** | **String** | The domain at which the S3 endpoint is available, or &#x60;null&#x60; if &#x60;oneS3Enabled &#x3D;&#x3D; false&#x60;.  | 
**oneS3Port** | **Number** | The port at which the S3 endpoint is available, or &#x60;null&#x60; if &#x60;oneS3Enabled &#x3D;&#x3D; false&#x60;.  | 


<a name="ServiceTypeEnum"></a>
## Enum: ServiceTypeEnum


* `oneprovider` (value: `"oneprovider"`)




