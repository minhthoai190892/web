/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";
import {ripple} from"./utils/ripple.js";
import { addEventListener } from "./utils/event.js";
/**
 * Search in toggle in small devices
 */
const $searchTogglers =document.querySelectorAll("[data-search-toggler]");//NodeList
const $searchView=document.querySelector("[data-search-view]");//NodeElement
// goi ham
addEventListener($searchTogglers,"click",()=>$searchView.classList.toggle("show"));

/**
 * search clear
 */
const $searchField = document.querySelector("[data-search-field]")//NodeElement
const $searchClearBtn = document.querySelector("[data-search-clear-btn]")//NodeElement
$searchClearBtn.addEventListener("click",()=>$searchField.value="");

/**
 * search Type
 */
const $searchSegment= document.querySelector("[data-segment='search']");//NodeElement
const $activeSegment=$searchSegment.querySelector("[data-segment-btn].selected");//NodeElement
window.searchType = $activeSegment.dataset.segmentValue;//
console.log(searchType);
