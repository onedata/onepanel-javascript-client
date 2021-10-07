# Onepanel.OpConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceType** | **String** | Indicates that this is Oneprovider&#39;s panel. | 
**providerId** | **String** | This cluster&#39;s Oneprovider Id. &#x60;null&#x60; if the Oneprovider is not registered or Oneprovider worker is down.  | 
**providerName** | **String** | Name of this Oneprovider. &#x60;null&#x60; if the Oneprovider is not configured.  | 
**providerDomain** | **String** | The domain of this Oneprovider cluster. &#x60;null&#x60; before cluster is configured.  | 
**zoneDomain** | **String** | The domain of the Onezone where this Oneprovider is registered. &#x60;null&#x60; if the Oneprovider is not registered.  | 
**isRegistered** | **Boolean** | True if the Oneprovider has been registered at a Onezone.  | [optional] 


<a name="ServiceTypeEnum"></a>
## Enum: ServiceTypeEnum


* `oneprovider` (value: `"oneprovider"`)




