# PicanovaApi.ShippingApi

All URIs are relative to *https://localhost/api/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shippingMethodsGet**](ShippingApi.md#shippingMethodsGet) | **GET** /shipping/methods | Show a list of all shipping methods
[**shippingRatesPost**](ShippingApi.md#shippingRatesPost) | **POST** /shipping/rates | Calculate shipping rates
[**shippingTypesGet**](ShippingApi.md#shippingTypesGet) | **GET** /shipping/types | Show a list of all shipping types


<a name="shippingMethodsGet"></a>
# **shippingMethodsGet**
> InlineResponse2002 shippingMethodsGet()

Show a list of all shipping methods

Returns the available shipping methods

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.ShippingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shippingMethodsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="shippingRatesPost"></a>
# **shippingRatesPost**
> InlineResponse200 shippingRatesPost(body)

Calculate shipping rates

Returns the calculated shipping rates for the given items and shipping info

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.ShippingApi();

var body = new PicanovaApi.ShippingPost(); // ShippingPost | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shippingRatesPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShippingPost**](ShippingPost.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="shippingTypesGet"></a>
# **shippingTypesGet**
> InlineResponse2001 shippingTypesGet()

Show a list of all shipping types

Returns the available shipping types

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.ShippingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shippingTypesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

