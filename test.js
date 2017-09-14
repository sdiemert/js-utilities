"use strict";
/**
 * Create by sdiemert on 2017-09-12
 *
 */

var assert        = require('assert');
var util = require('./index');

class Foo{
    constructor(){

    }
}

class Bar extends Foo{
    constructor(){
        super();
    }
}

class Baz extends Foo{
   constructor(){
       super();
   }
}

describe("js-utilities", function () {

    describe("#truthy", function () {

        it("should return true for true", function () {
            assert.equal(util.truthy(true), true);
        });

        it("should return true for object", function(){
            assert.equal(util.truthy({}), true);
            assert.equal(util.truthy({ foo : "bar"}), true);
        });

        it("should return true for empty array", function(){
            assert.equal(util.truthy([]), true);
            assert.equal(util.truthy([1,2,3]), true);
        });

        it("should return true for number non-zero", function(){
          assert.equal(util.truthy(1), true);
            assert.equal(util.truthy(2), true);
            assert.equal(util.truthy(100000), true);
            assert.equal(util.truthy(-1), true);
        });

        it("should return true for non-empty string", function(){
           assert.equal(util.truthy("foo"), true);
        });

        it("should return false for number zero", function(){
            assert.equal(util.truthy(0), false);
        });

        it("should return true for infinity numbers", function(){
           assert.equal(util.truthy(Infinity), true);
            assert.equal(util.truthy(-Infinity), true);
        });


        // ------- Inverse (False) -----------

        it("should return false for undefined", function(){
            assert.equal(util.truthy(undefined), false);
        });

        it("should return false for null", function(){
            assert.equal(util.truthy(null), false);
        });

        it("should return false NaN", function(){
            assert.equal(util.truthy(NaN), false);
        });

        it("should return false for empty string", function(){
            assert.equal(util.truthy(""), false);
            assert.equal(util.truthy(''), false);
        });

    });

    describe("#falsy", function(){

        it("should return true for null", function(){
            assert.equal(util.falsy(null), true);
        });
        it("should return true for undefined", function(){
            assert.equal(util.falsy(undefined), true);
        });
        it("should return true for number zero", function(){
            assert.equal(util.falsy(0), true);
        });
        it("should return true for NaN", function(){
            assert.equal(util.falsy(NaN), true);
        });
        it("should return true for false", function(){
            assert.equal(util.falsy(false), true);
        });
        it("should return true for empty string", function(){
            assert.equal(util.falsy(""), true);
            assert.equal(util.falsy(''), true);
        });


        it("should return false for true", function(){
            assert.equal(util.falsy(true), false);
        });
        it("should return false for non-zero numbers", function(){
            assert.equal(util.falsy(1), false);
            assert.equal(util.falsy(-1), false);
            assert.equal(util.falsy(2), false);
            assert.equal(util.falsy(1000), false);
            assert.equal(util.falsy(Infinity), false);
            assert.equal(util.falsy(-Infinity), false);
        });

        it("should return false for array", function(){
            assert.equal(util.falsy([]), false);
            assert.equal(util.falsy([1,2,3]), false);
        });

        it("should return false for object", function(){
            assert.equal(util.falsy({}), false);
            assert.equal(util.falsy({foo : 1}), false);
        });

        it("should return false for nonempty string", function(){
            assert.equal(util.falsy("hi"), false);
            assert.equal(util.falsy("0"), false);
        });

    });

    describe("#isInstanceOf", function(){


        it("should recognize direct children", function(){
            assert.equal(util.isInstanceOf(new Foo(), Foo), true);
        });

        it("should recognize parent types", function(){
            assert.equal(util.isInstanceOf(new Bar(), Foo), true);
        });

        it("should return false for different classes", function(){
            assert.equal(util.isInstanceOf(new Bar(), Baz), false);
        });

        it("should work for native types", function(){
            assert.equal(util.isInstanceOf("foo", "string"), true);
            assert.equal(util.isInstanceOf(1, "number"), true);
        });

        it("should identify objects", function(){
            assert.equal(util.isInstanceOf(new Bar(), Object), true);
        });


    });

});
