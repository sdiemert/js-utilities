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

module.exports = {
    truthy : truthy,
    falsy : falsy
};