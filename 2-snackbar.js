import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as t}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form"),l=document.querySelector(".input-fulfilled"),f=document.querySelector(".input-rejected");r.addEventListener("submit",u);let e;function u(o){o.preventDefault(),e=Number(o.target.elements.delay.value);const i=new Promise((n,m)=>{l.checked&&setTimeout(()=>{n()},e),f.checked&&setTimeout(()=>{m()},e)}),s={title:"OK",message:`Fulfilled promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#59a10d",position:"bottomCenter",iconUrl:"../img/bi_check2-circle.png"},c={title:"Error",message:`Rejected promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"bottomCenter",iconUrl:"../img/bi_x-octagon.png"};i.then(()=>{t.show(s)}).catch(()=>{t.show(c)}),r.reset()}
//# sourceMappingURL=2-snackbar.js.map
