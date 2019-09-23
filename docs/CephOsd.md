# Onepanel.CephOsd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **String** | Host on which given OSD should be deployed. It must be the full host name and not an \&quot;alias\&quot; as used in Oneprovider cluster deployment. | 
**id** | **Number** | Id of the OSD. | 
**uuid** | **String** | UUID of the OSD daemon. If provided, will be used to skip deployment of existing OSDs (identified by the UUID). Must be a 32-character hex string. By default will be generated automatically. | [optional] 


