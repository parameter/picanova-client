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
    instance = new PicanovaApi.InlineResponse2001Data();
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

  describe('InlineResponse2001Data', function() {
    it('should create an instance of InlineResponse2001Data', function() {
      // uncomment below and update the code to test InlineResponse2001Data
      //var instance = new PicanovaApi.InlineResponse2001Data();
      //expect(instance).to.be.a(PicanovaApi.InlineResponse2001Data);
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new PicanovaApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new PicanovaApi.InlineResponse2001Data();
      //expect(instance).to.be();
    });

  });

}));
