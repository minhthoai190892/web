//copy menu for mobile
function copyMenu(){
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;
    //copy inside nav to nav
    var mainNav=document.querySelector('.header-nav nav');
    var navPlaced=document.querySelector('.off-canvas nav')
    navPlaced.innerHTML = mainNav.innerHTML;
    //copy .header-top .warapper to .thetop-nav
    var topNav = document.querySelector('.header-top')
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
    console.log(topPlace.innerHTML = topNav.innerHTML)
}
copyMenu();