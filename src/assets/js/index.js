import './../sass/style.scss';
import { nav } from './modules/nav';
import { optionHover } from './modules/option';

window.addEventListener('DOMContentLoaded', () => {

    // HEADER NAVIGATION 
    nav();
    optionHover();
});