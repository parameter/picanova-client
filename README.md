# picanova_api

PicanovaApi - JavaScript client for picanova_api
Picanova API documentation
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install picanova_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your picanova_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('picanova_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/picanova_api
then install it via:

```shell
    npm install YOUR_USERNAME/picanova_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PicanovaApi = require('picanova_api');

var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new PicanovaApi.CountryApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.countriesGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/api/beta*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PicanovaApi.CountryApi* | [**countriesGet**](docs/CountryApi.md#countriesGet) | **GET** /countries | Get list of countries with name and country_id
*PicanovaApi.OrdersApi* | [**ordersGet**](docs/OrdersApi.md#ordersGet) | **GET** /orders | Show a list of all orders
*PicanovaApi.OrdersApi* | [**ordersOrderIdDelete**](docs/OrdersApi.md#ordersOrderIdDelete) | **DELETE** /orders/{order_id} | Cancel an order
*PicanovaApi.OrdersApi* | [**ordersOrderIdGet**](docs/OrdersApi.md#ordersOrderIdGet) | **GET** /orders/{order_id} | Show an order
*PicanovaApi.OrdersApi* | [**ordersPost**](docs/OrdersApi.md#ordersPost) | **POST** /orders | Create an order
*PicanovaApi.ProductsApi* | [**productsGet**](docs/ProductsApi.md#productsGet) | **GET** /products | Show products
*PicanovaApi.ProductsApi* | [**productsProductIdGet**](docs/ProductsApi.md#productsProductIdGet) | **GET** /products/{product_id} | Show product&#39;s variants
*PicanovaApi.RegionApi* | [**regionsCountryIdGet**](docs/RegionApi.md#regionsCountryIdGet) | **GET** /regions/{country_id} | Get list of regions with name and country_id
*PicanovaApi.ShippingApi* | [**shippingMethodsGet**](docs/ShippingApi.md#shippingMethodsGet) | **GET** /shipping/methods | Show a list of all shipping methods
*PicanovaApi.ShippingApi* | [**shippingRatesPost**](docs/ShippingApi.md#shippingRatesPost) | **POST** /shipping/rates | Calculate shipping rates
*PicanovaApi.ShippingApi* | [**shippingTypesGet**](docs/ShippingApi.md#shippingTypesGet) | **GET** /shipping/types | Show a list of all shipping types


## Documentation for Models

 - [PicanovaApi.InlineResponse200](docs/InlineResponse200.md)
 - [PicanovaApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [PicanovaApi.InlineResponse2001Data](docs/InlineResponse2001Data.md)
 - [PicanovaApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [PicanovaApi.InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [PicanovaApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [PicanovaApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [PicanovaApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [PicanovaApi.InlineResponse2005Data](docs/InlineResponse2005Data.md)
 - [PicanovaApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [PicanovaApi.InlineResponse2006Data](docs/InlineResponse2006Data.md)
 - [PicanovaApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [PicanovaApi.InlineResponse2007Data](docs/InlineResponse2007Data.md)
 - [PicanovaApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [PicanovaApi.InlineResponse2008Data](docs/InlineResponse2008Data.md)
 - [PicanovaApi.InlineResponse200Data](docs/InlineResponse200Data.md)
 - [PicanovaApi.OrderPost](docs/OrderPost.md)
 - [PicanovaApi.OrderPostItems](docs/OrderPostItems.md)
 - [PicanovaApi.OrderPostOptions](docs/OrderPostOptions.md)
 - [PicanovaApi.OrderPostShipping](docs/OrderPostShipping.md)
 - [PicanovaApi.ShippingItem](docs/ShippingItem.md)
 - [PicanovaApi.ShippingPost](docs/ShippingPost.md)
 - [PicanovaApi.ShippingPostShipping](docs/ShippingPostShipping.md)
 - [PicanovaApi.SingleOrder](docs/SingleOrder.md)
 - [PicanovaApi.SingleOrderCreatedAt](docs/SingleOrderCreatedAt.md)
 - [PicanovaApi.SingleOrderItems](docs/SingleOrderItems.md)
 - [PicanovaApi.SingleOrderOptions](docs/SingleOrderOptions.md)
 - [PicanovaApi.SingleOrderPriceDetails](docs/SingleOrderPriceDetails.md)
 - [PicanovaApi.SingleOrderShippingMethod](docs/SingleOrderShippingMethod.md)
 - [PicanovaApi.SingleOrderTotals](docs/SingleOrderTotals.md)
 - [PicanovaApi.SingleOrderTotalsCustomsShippingCostsDetails](docs/SingleOrderTotalsCustomsShippingCostsDetails.md)
 - [PicanovaApi.SingleOrderTotalsShippingAmountDetails](docs/SingleOrderTotalsShippingAmountDetails.md)
 - [PicanovaApi.SingleOrderTotalsTotalAmountDetails](docs/SingleOrderTotalsTotalAmountDetails.md)
 - [PicanovaApi.SingleOrderValue](docs/SingleOrderValue.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication

