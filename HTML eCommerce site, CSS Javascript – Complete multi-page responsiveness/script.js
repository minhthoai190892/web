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
    var topNav = document.querySelector('.header-top .wrapper')
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
    console.log(topPlace.innerHTML = topNav.innerHTML)
}
copyMenu();
// show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu)=>menu.addEventListener('click',toggle));
function toggle(e) {
    e.preventDefault();
    submenu.forEach((item)=> item !=this?item.closest('.has-child').classList.remove('expand'):null);
    if (this.closest('.has-child').classList!='expand') {
        this.closest('.has-child').classList.toggle('expand')
    }
}

// show mobile menu
const menuButton = document.querySelector(".trigger"),closeButton = document.querySelector(".t-close"),addclass = document.querySelector(".site");
menuButton.addEventListener("click",function(){
    addclass.classList.toggle('showmenu');
})
closeButton.addEventListener('click',function(){
    addclass.classList.remove('showmenu');
})