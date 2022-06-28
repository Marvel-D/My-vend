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
