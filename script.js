'use strict';

const mySkills = document.querySelectorAll("#mySkills__h2");


window.addEventListener("scroll",() => {
    const caja = document.querySelector("#mySkills__flex");
    let pos = caja.getBoundingClientRect().top;
    let pantalla = window.innerHeight/2;
    console.log(pos);
    if(pos < pantalla){
        caja.className = `#mySkills__flex animate__animated animate__fadeIn`;
    }
    // if (window.scrollY > 60) {
    //     mySkills.forEach(element => {
    //         element.className = `animate__animated animate__fadeIn`;
    //     });
    // }
    // if (window.scrollY > 80) {
    //     caja.forEach(element => {
    //         element.className = `caja animate__animated animate__fadeIn`;
    //     });
    // }
});