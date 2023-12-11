console.log('hello world')

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');

    let main = document.querySelector('main');
    // main.append(`<h1> hello </h1>`) - this will add text - not html 
    main.innerHTML = `<h1> hello </h1>`;

    const $ = () => document.querySelector.call(this, arguments);
    const $$ = () => document.querySelectorAll.call(this, arguments);
    HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
    HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
    HTMLElement.prototype.$ = (s) => this.querySelector(s);
    HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);

    console.log($);
}) 