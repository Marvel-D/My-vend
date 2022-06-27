let numbReveal = document.querySelector(".call");

function showNumb() {
    numbReveal.innerHTML = " +1-844-942-2559";
    numbReveal.style.color = "#41af4b";
    numbReveal.style.fontSize = "18px";
    numbReveal.style.fontWeight = "bold";
}

const dropM = document.querySelector(".dropmenu");

function reveal() {
    dropM.classList.toggle("dropmenu");
}

// nav drop ..........................................

const arrowHeadDown = document.querySelectorAll(".fa-chevron-down");

// 1st nav drop ..........................................
const navDrop1 = document.querySelector(".nav-drop-list");

function openNav1() {
    navDrop1.classList.toggle("nav-drop-list");
}

// 2st nav drop ..........................................

const navDrop2 = document.querySelector(".nav-drop-list-2");
const arrow3 = arrowHeadDown[2];

function openNav2() {
    navDrop2.classList.toggle("nav-drop-list-2");
}

// 3st nav drop ..........................................

const navDrop3 = document.querySelector(".nav-drop-list-3");
const arrow4 = arrowHeadDown[3];

function openNav3() {
    navDrop3.classList.toggle("nav-drop-list-3");
}

// 4st nav drop ..........................................

const navDrop4 = document.querySelector(".nav-drop-list-4");
const arrow5 = arrowHeadDown[4];

function openNav4() {
    navDrop4.classList.toggle("nav-drop-list-4");
}

// scroll function ....................................................

window.onscroll = function () {
    slide();
};

const nav = document.querySelector("nav");

function slide() {
    const navM = document.querySelector("#nav-main");
    const logo = document.querySelector(".logo");
    const csp = document.querySelector("#contact-sales-btn");
    const ft = document.querySelector("#free-trial");
    if (document.documentElement.scrollTop > 45 && window.innerWidth >= 1025) {
        nav.style.position = "fixed";
        nav.style.height = "fit-content";

        navM.style.height = "20px";
        navM.style.padding = "15px";

        logo.style.height = "30px";
        logo.style.marginTop = "85px";

        csp.style.height = "fit-content";
        csp.style.border = "none";

        ft.style.width = "0px";
        ft.style.height = "0px";
        ft.style.fontSize = "0px";

        navM.style.transition = "All 1.5s";
        nav.style.transition = "All .5s";
        logo.style.transition = "All .5s";
        csp.style.transition = "All .5s";
        ft.style.transition = "All .5s";
    } else if (
        document.documentElement.scrollTop > 45 &&
        window.innerWidth <= 1024
    ) {
        nav.style.position = "fixed";
    } else {
        nav.style.position = "";
        nav.style.height = "";

        logo.style.height = "";
        logo.style.marginTop = "";

        csp.style.height = "";
        csp.style.border = "";

        ft.style.width = "";
        ft.style.height = "";
        ft.style.fontSize = "";

        navM.style.height = "85px";
        navM.style.transition = "height 1s";
    }
}

if (document.documentElement.scrollTop > 45) {
    nav.style.position = "fixed";
} else {
    nav.style.position = "";
}

nav.addEventListener("scroll", slide());

//menu drop...........
const menuDrop = document.querySelector(".menu-hide");

function revealMenu() {
    menuDrop.classList.toggle("menu-hide");
}

// 1st menu drop ..........................................
const menuDrop1 = document.querySelector(".menu-drop-list");
console.log(menuDrop1);
function openMenu1() {
    menuDrop1.classList.toggle("menu-drop-list");
}

// 2nd menu drop ..........................................
const menuDrop2 = document.querySelector(".menu-drop-list-2");
console.log(menuDrop2);
function openMenu2() {
    menuDrop2.classList.toggle("menu-drop-list-2");
}

// 3nd menu drop ..........................................
const menuDrop3 = document.querySelector(".menu-drop-list-3");

function openMenu3() {
    menuDrop3.classList.toggle("menu-drop-list-3");
}

// 4th menu drop ..........................................
const menuDrop4 = document.querySelector(".menu-drop-list-4");

function openMenu4() {
    menuDrop4.classList.toggle("menu-drop-list-4");
}

//..........................................
const removeS15 = document.querySelector(".S15-top");
const loadVid = document.querySelector(".S15-vid-mid");
function playAdd() {
    loadVid.style.display = "flex";
    removeS15.style.display = "none";
}

//.................................................
const removeD1 = document.querySelector(".remove-D1");
const removeD2 = document.querySelector(".remove-D2");
const removeD3 = document.querySelector(".remove-D3");
const D1 = document.querySelector("#D1");
const D2 = document.querySelector("#D2");
const D3 = document.querySelector("#D3");

if (window.innerWidth >= 990) {
    function disa() {
        D1.style.paddingBottom = "0px";
    }

    function disa2() {
        D2.style.paddingBottom = "0px";
    }

    function disa3() {
        D3.style.paddingBottom = "0px";
    }
}
removeD1.addEventListener("click", disa);
removeD2.addEventListener("click", disa2);
removeD3.addEventListener("click", disa3);

//........................................

const FD1 = document.querySelector("#FDB1");
const FL1 = document.querySelector("#FDL1");

function RFL1() {
    FL1.classList.toggle("VS");
}

//

const FD2 = document.querySelector("#FDB2");
const FL2 = document.querySelector("#FDL2");

function RFL2() {
    FL2.classList.toggle("VS");
}

//

const FD3 = document.querySelector("#FDB3");
const FL3 = document.querySelector("#FDL3");

function RFL3() {
    FL3.classList.toggle("VS");
}

//

const FD4 = document.querySelector("#FDB4");
const FL4 = document.querySelector("#FDL4");

function RFL4() {
    FL4.classList.toggle("VS");
}

//

const FD5 = document.querySelector("#FDB5");
const FL5 = document.querySelector("#FDL5");

function RFL5() {
    FL5.classList.toggle("VS");
}

//

const FD6 = document.querySelector("#FDB6");
const FL6 = document.querySelector("#FDL6");

function RFL6() {
    FL6.classList.toggle("VS");
}

const FCM = document.querySelector(".FCM");
function dropFooterMenu() {
    FCM.classList.toggle("FCM");
}

//image animation 1..........................................
window.onscroll = function () {
    slide2();
};
// or  window.addEventListener("scroll", slide2())
const IA1 = document.querySelector("#IA1");
const IA2 = document.querySelector("#IA2");
const IA3 = document.querySelector("#IA3");
const IA4 = document.querySelector("#IA4");
const IA5 = document.querySelector("#IA5");
const IA6 = document.querySelector("#IA6");
const IA7 = document.querySelector("#IA7");
const IA8 = document.querySelector("#IA8");

if (document.documentElement.scrollTop > 4190) {
    function slide2() {
        IA1.style.height = "50px";
        IA8.style.height = '50px'
        IA7.style.height = '50px'
        IA2.style.height = '50px'
        IA3.style.height = '50px'
        IA4.style.height = '50px'
        IA5.style.height = '50px'
        IA6.style.height = '50px'

        IA1.style.transition = "all 1.5s";
        IA8.style.transition = 'all 3s'
        IA7.style.transition = 'all 4.5s'
        IA4.style.transition = 'all 3s'
        IA5.style.transition = 'all 1.5s'
        IA6.style.transition = 'all 3s'
        IA3.style.transition = 'all 1.5s'
        IA2.style.transition = 'all 3s'
    }     
}

