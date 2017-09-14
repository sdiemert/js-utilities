"use strict";

/**
 * Determines if the provided value truthy.
 * @param x {object}
 * @returns {boolean}
 */
function truthy(x){
    return !!x;
}

/**
 *A Determines if the provided value is falsey.
 * @param x {object}
 * @returns {boolean}
 */
function falsy(x){
    return !truthy(x);
}

/**
 * cls is either a class name or a literal ('object', 'string', 'number').
 *
 * @param obj {object} the object to check against the class
 * @param cls {object} the ES6 class to check if obj is instance of
 */
function isInstanceOf(obj, cls){
    if(typeof obj === "object"){
        return obj instanceof cls;
    }else{
        return typeof obj === cls;
    }
}

module.exports = {
    truthy : truthy,
    falsy : falsy,
    isInstanceOf : isInstanceOf
};
