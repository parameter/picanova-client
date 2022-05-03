/**
 * Picanova API
 * Picanova API documentation
 *
 * OpenAPI spec version: 
 * Contact: apirequest@picanova.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PicanovaApi);
  }
}(this, function(expect, PicanovaApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PicanovaApi.SingleOrderTotalsTotalAmountDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SingleOrderTotalsTotalAmountDetails', function() {
    it('should create an instance of SingleOrderTotalsTotalAmountDetails', function() {
      // uncomment below and update the code to test SingleOrderTotalsTotalAmountDetails
      //var instance = new PicanovaApi.SingleOrderTotalsTotalAmountDetails();
      //expect(instance).to.be.a(PicanovaApi.SingleOrderTotalsTotalAmountDetails);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new PicanovaApi.SingleOrderTotalsTotalAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property formatted (base name: "formatted")', function() {
      // uncomment below and update the code to test the property formatted
      //var instance = new PicanovaApi.SingleOrderTotalsTotalAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property inSubunit (base name: "in_subunit")', function() {
      // uncomment below and update the code to test the property inSubunit
      //var instance = new PicanovaApi.SingleOrderTotalsTotalAmountDetails();
      //expect(instance).to.be();
    });

  });

}));
