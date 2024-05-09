let text = document.getElementById('text');
let hap = document.getElementById('hap');
let hap4 = document.getElementById('hap4');
let hap5 = document.getElementById('hap5');
let hapstay = document.getElementById('hapstay');
let text1 = document.getElementById('text1');

window.addEventListener('scroll',()=> {
    let value = window.scrollY;
    text1.style.marginTop= value *1.6 + 'px';
    text.style.marginTop= value *1.6 + 'px';
    hap4.style.left = value * -2.7 + 'px';
    hap5.style.left = value * 3.2 + 'px';
    hapstay.style.left = value * - 2.7 + 'px';
});