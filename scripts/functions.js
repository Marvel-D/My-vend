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

