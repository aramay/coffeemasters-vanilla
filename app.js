import Store from './services/Store.js';
import API from './services/API.js'
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';


console.log('hello world')
// link components
import { MenuPage } from './components/MenuPage.js'
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';

window.app = {}
app.store = Store;
app.router = Router;




window.addEventListener('DOMContentLoaded', async() => {
    // const menu = await API.fetchMenu(); instead of doing this - make it modular

    // modular design
    loadData();
    app.router.init();
}) 

/*
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
}) */