function tabs(tabsParentSelector,tabsSelector,tabsContentSelector){
    let btns = document.querySelector(tabsParentSelector) 
    let btn = document.querySelectorAll(tabsSelector) 
    let content = document.querySelectorAll(tabsContentSelector)

    function open (i = 0) {
        content[i].classList.add('open');
        content[i].classList.remove('close');
    }
    function close () {
        content.forEach(item => {
            item.classList.add('close') ;
            item.classList.remove('open') ;
        })
    }
    function removeClasses () {
        btn.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }
    close()
    open()

    btns.addEventListener('click' , (e) => {
        if(e.target && e.target.classList.contains(tabsSelector.slice(1))) { 
            btn.forEach((item, i) => {
                if(e.target === item) {
                    close()
                    open(i)
                    removeClasses()
                    item.classList.add('tabheader__item_active')
                }
            })
        }
    })
}
export default tabs;