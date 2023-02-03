
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
    let btnWhite = document.getElementsByClassName(triggerSelector);
    let modal = document.querySelector(modalSelector);
    let cross = document.querySelector(crossSelector)

    Array.from(btnWhite).forEach(function(item) {
        item.addEventListener('click', () => {
            console.log(item)
            openModal(modalSelector,modalTimerId) 
        })
    });
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