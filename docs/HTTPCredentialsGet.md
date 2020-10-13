# Onepanel.HTTPCredentialsGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oauth2IdP** | **String** | In case &#x60;oauth2&#x60; credential type is selected and Onezone is configured with support for multiple external IdP&#39;s, this field must contain the name of the IdP which authenticates requests to the HTTP endpoint. If Onezone has only one external IdP, it will be selected automatically.  | [optional] 
**onedataAccessToken** | **String** | When registering storage with feed of LUMA DB set to&#x60;auto&#x60; and with &#x60;oauth2&#x60; external IdP, this field must contain a valid Onedata access token of the user on whose behalf the HTTP storage will be accessed by all users with access to any space supported by this storage.  | [optional] 


