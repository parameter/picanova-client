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
    instance = new PicanovaApi.SingleOrder();
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

  describe('SingleOrder', function() {
    it('should create an instance of SingleOrder', function() {
      // uncomment below and update the code to test SingleOrder
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be.a(PicanovaApi.SingleOrder);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "external_id")', function() {
      // uncomment below and update the code to test the property externalId
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property isTest (base name: "is_test")', function() {
      // uncomment below and update the code to test the property isTest
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property shippingMethod (base name: "shipping_method")', function() {
      // uncomment below and update the code to test the property shippingMethod
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property statusLabel (base name: "status_label")', function() {
      // uncomment below and update the code to test the property statusLabel
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

    it('should have the property totals (base name: "totals")', function() {
      // uncomment below and update the code to test the property totals
      //var instance = new PicanovaApi.SingleOrder();
      //expect(instance).to.be();
    });

  });

}));
