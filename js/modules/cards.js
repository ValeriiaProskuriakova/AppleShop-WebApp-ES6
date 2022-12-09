import{getData,url} from '../services/services'
import {openModal} from'./modal'
function cards(){
    class Card {
        constructor(image, subtitle, total, parentSelector,...classes) { //принимает параметри при создании єкземпляра обьекта
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
            elem.innerHTML = `<div style="color:red;">Акция</div>
                        <img src="${this.image}">
                        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                        <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.total}</span> грн</div>
                      </div>
                      <div class="header__right-block">
                        <button class="btn btn_white" onclick="openModal()" style="margin:auto">Купить</button>
                      </div>`
            this.parentSelector.append(elem)
        }

    }

    /* получение данних с сервера */

    /* -----end ----*/

//создали запрос на базу данних и розпарсили полученное в формат JS
    getData(url)
        .then (data=> {data.forEach(({image, subtitle, total})=>{  //object item деструктурізіровали сразу
            new Card(image, subtitle, total, '.parent').createCard()
        })
        })

}
export default cards;