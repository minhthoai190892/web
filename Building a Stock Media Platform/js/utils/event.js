/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";
/**
 * Add event multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type eg. 'click'
 * @param {Functioni} callback callback function
 */
export const addEventListener = function ($elements, eventType, callback) {
    $elements.forEach($element=>$element.addEventListener(eventType, callback));
 };
