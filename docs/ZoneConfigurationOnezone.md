# Onepanel.ZoneConfigurationOnezone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domainName** | **String** | The domain of Onezone cluster. | [optional] 
**name** | **String** | The Onezone cluster name. | [optional] 
**letsEncryptEnabled** | **Boolean** | If enabled the zone will use Let&#39;s Encrypt service to obtain SSL certificates. Otherwise certificates must be manually provided. By enabling this option you agree to the Let&#39;s Encrypt Subscriber Agreement.  | [optional] [default to false]
**builtInDnsServer** | **Boolean** | If true, DNS check will verify that control of DNS zone for Onezone&#39;s domain was delegated to the DNS server built into Onezone service.  | [optional] 
**policies** | [**ZonePolicies**](ZonePolicies.md) |  | [optional] 
**users** | [**[ZoneConfigurationOnezoneUsers]**](ZoneConfigurationOnezoneUsers.md) | Onezone users to be created. | [optional] 


