import {closeModal} from './modal';
import{postData} from '../services/services'

function forms(formSelector){
    let forma = document.querySelector(formSelector);
    const message = {
        loading: './img/spinner.svg',
        success: 'Дякуємо, вашу форму відправлено, чекайте на дзвінок',
        error:'Щось пішло не так...',
    }

    /* -----end ----*/

    function BindPostData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let spinner = document.createElement('img');
            spinner.style.margin = 'auto';
            spinner.style.display = 'block';
            spinner.src = message.loading;
            form.append(spinner);
            let formArr = new FormData(form);
            let obj = {}
            formArr.forEach((item, i) => {
                obj[i] = item
            })
            postData('http://localhost:3000/requests', JSON.stringify(obj))
                .then(()=>{
                    ShowThanksModal(message.success)
                }).catch(()=> {
                ShowThanksModal(message.error)
            }).finally(() => {
                form.reset();
                spinner.remove()
            })
        })
    }

    function ShowThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')
        prevModalDialog.classList.add('close')
        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML=`<div class="modal__content">
                                  <div class="modal__close">&times;</div>
                                  <div class="modal__title">${message}</div>
                          </div>`
        document.querySelector('.modal').append(thanksModal)
        document.addEventListener("click", function(e){
            const target = e.target.closest(".modal__close"); // Or any other selector.
            if(target){
                closeModal('.modal')
            }
          });
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('open')
            prevModalDialog.classList.remove('close')
            closeModal('.modal')
        }, 4000)
    }

    BindPostData(forma);

}

export default forms;