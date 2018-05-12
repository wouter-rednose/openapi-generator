(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenAPIPetstore);
  }
}(this, function(expect, OpenAPIPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenAPIPetstore.FormatTest();
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

  describe('FormatTest', function() {
    it('should create an instance of FormatTest', function() {
      // uncomment below and update the code to test FormatTest
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be.a(OpenAPIPetstore.FormatTest);
    });

    it('should have the property integer (base name: "integer")', function() {
      // uncomment below and update the code to test the property integer
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property int32 (base name: "int32")', function() {
      // uncomment below and update the code to test the property int32
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property int64 (base name: "int64")', function() {
      // uncomment below and update the code to test the property int64
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property _float (base name: "float")', function() {
      // uncomment below and update the code to test the property _float
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property _double (base name: "double")', function() {
      // uncomment below and update the code to test the property _double
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property _string (base name: "string")', function() {
      // uncomment below and update the code to test the property _string
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property _byte (base name: "byte")', function() {
      // uncomment below and update the code to test the property _byte
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property binary (base name: "binary")', function() {
      // uncomment below and update the code to test the property binary
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property dateTime (base name: "dateTime")', function() {
      // uncomment below and update the code to test the property dateTime
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new OpenAPIPetstore.FormatTest();
      //expect(instance).to.be();
    });

  });

}));
