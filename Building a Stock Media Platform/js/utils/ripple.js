/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";
/**
 * Add ripple effect on an element
 * @param {Node} $rippleElem The element for ripple effect
 */
export const ripple = function ($rippleElem) {
    console.log($rippleElem)
    $rippleElem.addEventListener("pointerdown", function(e) {
        e.stopImmediatePropagation();
    });
}


