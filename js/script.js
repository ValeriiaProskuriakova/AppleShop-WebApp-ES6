'use strict';
require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import forms from './modules/forms';
import cards from './modules/cards';
import timer from './modules/timer';
import modal from'./modules/modal';
import slider from'./modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded',()=>{
  const modalTimerId = setTimeout(()=>openModal('.modal',modalTimerId),5000)
  cards();
  tabs('.tabheader__items','.tabheader__item','.tabcontent');
  timer('2023-10-01');
  
  modal('btn_white','.modal','.modal__close',modalTimerId);
  forms('form');
  slider({
    container:'.offer__slider',
    slide:'.offer__slide',
    next_slide:'.offer__slider-next',
    prev_slide:'.offer__slider-prev',
    current_slide:'#current',
    total_slide:'#total',
    wrapper:'.offer__slider-wrapper',
    slide_fild:'.slides_f'
  });


})
