# PicanovaApi.CountryApi

All URIs are relative to *https://localhost/api/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesGet**](CountryApi.md#countriesGet) | **GET** /countries | Get list of countries with name and country_id


<a name="countriesGet"></a>
# **countriesGet**
> InlineResponse2007 countriesGet()

Get list of countries with name and country_id

Get all countries

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.CountryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

