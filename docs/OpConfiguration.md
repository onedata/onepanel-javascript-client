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


<a name="ServiceTypeEnum"></a>
## Enum: ServiceTypeEnum


* `oneprovider` (value: `"oneprovider"`)




