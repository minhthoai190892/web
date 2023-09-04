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
    $rippleElem.addEventListener("pointerdown", function (e) {
        e.stopImmediatePropagation();
        const $ripple = document.createElement("div");
        $ripple.classList.add("ripple");
        this.appendChild($ripple);
        const removeRipple = () => {
            $ripple.animate({
                opacity: 0
            }, { fil: "forwards", duration: 200 });
            setTimeout(() => {
                $ripple.remove();
            },1000)
        }
        this.addEventListener("pointerup",removeRipple);
        this.addEventListener("pointerleave",removeRipple);
        const /**{Boolean} */ isNotIconButton = !this.classList.contains("icon-btn");
        if (isNotIconButton) {
            const /**{Number} */rippleSize = Math.max(this.clientWidth, this.clientHeight);
            $ripple.style.top=`${e.layerY}px`;
            $ripple.style.left=`${e.layerY}px`;
            $ripple.style.width=`${e.layerY}px`;
            $ripple.style.height=`${e.layerY}px`;
        }
    });

}


