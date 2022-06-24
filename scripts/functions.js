let numbReveal = document.querySelector(".call")

function showNumb(){
    numbReveal.innerHTML = " +1-844-942-2559"
    numbReveal.style.color = "#41af4b"
    numbReveal.style.fontSize = "18px"
    numbReveal.style.fontWeight = "bold"
}
// numbReveal.forEach(function rev(e){
//     e.innerHTML = " +1-844-942-2559";
//     e.style.color = "#41af4b"
//     e.style.fontSize = "18px"
//     e.style.fontWeight = "bold"
// });
// numbReveal.addEventListener('click', rev())

// ............................

const dropM = document.querySelector('.dropmenu')

function reveal(){
    dropM.classList.toggle('dropmenu')    
}

// nav drop ..........................................


const arrowHeadDown = document.querySelectorAll('.fa-chevron-down')

// 1st nav drop ..........................................
const navDrop1 = document.querySelector('.nav-drop-list')

function openNav1(){
    navDrop1.classList.toggle('nav-drop-list');
}

// 2st nav drop ..........................................

const navDrop2 = document.querySelector('.nav-drop-list-2')
const arrow3 = arrowHeadDown[2]

function openNav2(){
    navDrop2.classList.toggle('nav-drop-list-2');
}

// 3st nav drop ..........................................

const navDrop3 = document.querySelector('.nav-drop-list-3')
const arrow4 = arrowHeadDown[3]

function openNav3(){
    navDrop3.classList.toggle('nav-drop-list-3');
}

// 4st nav drop ..........................................

const navDrop4 = document.querySelector('.nav-drop-list-4')
const arrow5 = arrowHeadDown[4]

function openNav4(){
    navDrop4.classList.toggle('nav-drop-list-4');
}


// scroll function ....................................................

window.onscroll = function(){slide()}

const nav = document.querySelector("nav")

function slide(){
    const navM = document.querySelector("#nav-main")
    const logo = document.querySelector(".logo")
    const csp = document.querySelector("#contact-sales-btn")
    const ft = document.querySelector("#free-trial")
    if(document.documentElement.scrollTop > 45 && window.innerWidth >= 1025){
        nav.style.position = "fixed";
        nav.style.height = "fit-content"

        navM.style.height = "20px"
        navM.style.padding = "15px"

        logo.style.height = "30px"
        logo.style.marginTop = "85px"

        csp.style.height = "fit-content"
        csp.style.border = "none"

        ft.style.width = "0px"
        ft.style.height = "0px"
        ft.style.fontSize = "0px"

        navM.style.transition = "All 1.5s";
        nav.style.transition = "All .5s";
        logo.style.transition = "All .5s"
        csp.style.transition = "All .5s"
        ft.style.transition = "All .5s"
    }else if(document.documentElement.scrollTop > 45 && window.innerWidth <= 1024){
        nav.style.position = "fixed";
    }
    else{
        nav.style.position = ""
        nav.style.height = ""

        logo.style.height = ""
        logo.style.marginTop = ""

        csp.style.height = ""
        csp.style.border = ""

        ft.style.width = ""
        ft.style.height = ""
        ft.style.fontSize = ""

        navM.style.height = "85px"
        navM.style.transition = "height 1s";
    }
}

if(document.documentElement.scrollTop > 45){
    nav.style.position = "fixed"
}else{
    nav.style.position = ""
}

nav.addEventListener("scroll", slide())















//menu drop...........
const menuDrop = document.querySelector('.menu-hide')

function revealMenu(){
    menuDrop.classList.toggle('menu-hide')
}


// 1st menu drop ..........................................
const menuDrop1 = document.querySelector('.menu-drop-list')
console.log(menuDrop1)
function openMenu1(){
    menuDrop1.classList.toggle('menu-drop-list');
}

// 2nd menu drop ..........................................
const menuDrop2 = document.querySelector('.menu-drop-list-2')
console.log(menuDrop2)
function openMenu2(){
    menuDrop2.classList.toggle('menu-drop-list-2');
}


// 3nd menu drop ..........................................
const menuDrop3 = document.querySelector('.menu-drop-list-3')

function openMenu3(){
    menuDrop3.classList.toggle('menu-drop-list-3');
}

// 4th menu drop ..........................................
const menuDrop4 = document.querySelector('.menu-drop-list-4')

function openMenu4(){
    menuDrop4.classList.toggle('menu-drop-list-4');
}

//..........................................
const removeS15 = document.querySelector('.S15-top') 
const loadVid = document.querySelector('.S15-vid-mid')
function playAdd(){
    loadVid.style.display = 'flex'
    removeS15.style.display = 'none'
}


//.................................................
const removeD3 = document.querySelector('.remove-D3')
const D1 = document.querySelector('#D1')
function disa(){
    D1.style.paddingBottom = '0px'
}
removeD3.addEventListener('click', disa)



// if(window.innerWidth >= 1024){
//     const removeD3 = document.querySelector('#remove-D3')
//     const D1 = document.querySelector('#D1')
//     function disa(){
//         D1.style.paddingBottom = '0px'
//         }
//         removeD3.addEventListener('click', disa)
// }


//..................................................


