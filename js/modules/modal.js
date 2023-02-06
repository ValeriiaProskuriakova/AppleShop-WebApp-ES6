
function closeModal(modalSelector) {
    const modal=document.querySelector(modalSelector)
    modal.classList.remove('open')
    modal.classList.add('close')
}
function openModal(modalSelector,modalTimerId) {
    const modal=document.querySelector(modalSelector)
    modal.classList.add('open')
    modal.classList.remove('close')
    if(modalTimerId){
        clearTimeout(modalTimerId)
    }
}
function modal(triggerSelector,modalSelector,crossSelector,modalTimerId){
    let btnRequest = document.querySelector('.'+ triggerSelector);
    let cardBtnsContainer = document.querySelector('.parent')
    let modal = document.querySelector(modalSelector);
    let cross = document.querySelector(crossSelector);
    btnRequest.addEventListener('click', () => {
            openModal(modalSelector,modalTimerId) 
    });
    cardBtnsContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('btn_white')) {
            openModal(modalSelector,modalTimerId)
        }
    })
    cross.addEventListener('click', () => {
        closeModal(modalSelector)
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')){ 
            closeModal(modalSelector)
        }
    })
    modal.addEventListener("click", (e) => {
        if(e.target === modal) {
            closeModal(modalSelector)
        }
    })
    function ShowModalByScroll(){
        if(document.documentElement.scrollTop + document.documentElement.clientHeight === document.documentElement.scrollHeight)
        {
            openModal(modalSelector,modalTimerId)
            window.removeEventListener('scroll',ShowModalByScroll)
        }
    }

    window.addEventListener('scroll', ShowModalByScroll)

}
export default modal;
export{closeModal}
export{openModal}