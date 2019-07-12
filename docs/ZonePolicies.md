# Onepanel.ZonePolicies

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oneproviderRegistration** | **String** | Indicates policy enforced during provider registration. Possible options are: open - anyone can acquire a registration token and register a new Oneprovider restricted - requires an administrative privilege &#39;oz_providers_invite&#39;              to generate a Oneprovider registration token. The token              can be issued for someone else.  | [optional] 
**subdomainDelegation** | **Boolean** | If true, Oneproviders are allowed to request subdomains of the Onezone domain for use as their domains. | [optional] 
**guiPackageVerification** | **Boolean** | When this value is true, GUI packages uploaded by services operating under Onezone or by harvester admins are checked against known SHA-256 check-sums using the compatibility registry. Setting this value to false disables the verification. WARNING: disabling GUI package verification poses a severe security threat, allowing Oneprovider owners to upload arbitrary GUI to Onezone (which is then hosted in Onezone&#39;s domain).  | [optional] [default to true]
**harvesterGuiPackageVerification** | **Boolean** | This policy can be used to disable GUI package verification for harvester plugins only. See \&quot;guiPackageVerification\&quot; for detailed description. This setting has no effect if \&quot;guiPackageVerification\&quot; is set to false.  | [optional] [default to true]


<a name="OneproviderRegistrationEnum"></a>
## Enum: OneproviderRegistrationEnum


* `open` (value: `"open"`)

* `restricted` (value: `"restricted"`)




