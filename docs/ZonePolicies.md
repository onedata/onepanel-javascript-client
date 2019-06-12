# Onepanel.ZonePolicies

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subdomainDelegation** | **Boolean** | If true, Oneproviders are allowed to request subdomains of the Onezone domain for use as their domains. | [optional] 
**guiPackageVerification** | **Boolean** | When this value is true, GUI packages uploaded by services operating under Onezone or by harvester admins are checked against known SHA-256 check-sums using the compatibility registry. Setting this value to false disables the verification. WARNING: disabling GUI package verification poses a severe security threat, allowing Oneprovider owners to upload arbitrary GUI to Onezone (which is then hosted in Onezone&#39;s domain).  | [optional] [default to true]
**harvesterGuiPackageVerification** | **Boolean** | This policy can be used to disable GUI package verification for harvester plugins only. See \&quot;guiPackageVerification\&quot; for detailed description. This setting has no effect if \&quot;guiPackageVerification\&quot; is set to false.  | [optional] [default to true]


