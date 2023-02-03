import{getData,url} from '../services/services'
import {openModal} from'./modal'
function cards(){
    class Card {
        constructor(image, subtitle, total, parentSelector,...classes) { 
            this.image = image;
            this.subtitle = subtitle;
            this.total = total;
            this.classes = classes;
            this.parentSelector = document.querySelector(parentSelector);
            this.transfer = 30;
            this.convert();
        }
        convert() {
            this.total = this.total * this.transfer;
        }
        createCard() {
            const elem = document.createElement('div');
            if(this.classes.length === 0) {
                elem.classList.add('menu__item');
            }else{
                this.classes.forEach(className => elem.classList.add(className));
            }
            elem.innerHTML = `<div style="color:red;">Акція</div>
                        <img src="${this.image}">
                        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                        <div class="menu__item-price">
                        <div class="menu__item-cost">Ціна:</div>
                        <div class="menu__item-total"><span>${this.total}</span> грн</div>
                      </div>
                      <div class="header__right-block">
                        <button class="btn btn_white"  style="margin:auto">Купити</button>
                      </div>`
            this.parentSelector.append(elem)
        }
    }

    /* -----end ----*/

    getData(url)
        .then (data=> {data.forEach(({image, subtitle, total})=>{  
            new Card(image, subtitle, total, '.parent').createCard()
        })
        })
}
export default cards;