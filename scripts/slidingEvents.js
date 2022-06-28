const navM = document.querySelector("#nav-main");
const logo = document.querySelector(".logo");
const csp = document.querySelector("#contact-sales-btn");
const ft = document.querySelector("#free-trial");


const IA1 = document.querySelector("#IA1");
const IA2 = document.querySelector("#IA2");
const IA3 = document.querySelector("#IA3");
const IA4 = document.querySelector("#IA4");
const IA5 = document.querySelector("#IA5");
const IA6 = document.querySelector("#IA6");
const IA7 = document.querySelector("#IA7");
const IA8 = document.querySelector("#IA8");


const nav = document.querySelector("nav");

function slide() {
    //navBar animation
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


//icon animation


    if (document.documentElement.scrollTop > 4190) {
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


// if (document.documentElement.scrollTop > 45) {
//     nav.style.position = "fixed";
// } else {
//     nav.style.position = "";
// }

window.onscroll = function () {
    slide();
};

// nav.addEventListener("scroll", slide());



































// window.addEventListener("scroll", slide2)
// window.onscroll = function () {
//     slide2();
// };