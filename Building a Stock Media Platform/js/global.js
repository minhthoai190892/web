/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";
/**
 * Import
 */
import { ripple } from "./utils/ripple.js";   
/**
 * header on-scoll state
 */
const $header = document.querySelector("[data-header]");
console.log($header)
// thanh trượt trong trang
window.addEventListener("scroll",()=>{ 
    $header.classList[window.scrollY>50?"add":"remove"]("active");
})

/**
 * Add ripple effect
 */
const $rippleElems = document.querySelectorAll("[data-ripple]");//{NodeList}
$rippleElems.forEach($rippleElem =>ripple($rippleElem));