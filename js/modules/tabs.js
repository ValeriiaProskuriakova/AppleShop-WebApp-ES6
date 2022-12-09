function tabs(tabsParentSelector,tabsSelector,tabsContentSelector){
    let btns = document.querySelector(tabsParentSelector) //родітель
    let btn = document.querySelectorAll(tabsSelector) //деті
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
    close()
    open()

    btns.addEventListener('click' , (e) => {
        if(e.target && e.target.classList.contains(tabsSelector.slice(1))) { //тут e.target єто ребенок = обьект на которий кликнули
            //если у родителя вообще есть дети И если етот ребенок имеет етот класс
            btn.forEach((item, i) => {
                if(e.target === item) {
                    close()
                    open(i)//значеніе кот передаем в параметр приоритетнее чем то кот вписанное в ф-цию
                }
            })
        }
    })


}
export default tabs;