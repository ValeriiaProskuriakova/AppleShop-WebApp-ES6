function slider({container,slide,next_slide,prev_slide,current_slide,total_slide,wrapper,slide_fild}){

    let slides = document.querySelectorAll(slide);
    let next = document.querySelector(next_slide);
    let prev = document.querySelector(prev_slide);
    let current = document.querySelector(current_slide);
    let total = document.querySelector(total_slide);
    let slider_wrapper = document.querySelector(wrapper);
    let width = window.getComputedStyle(slider_wrapper).width; //650px
    let slidesField = document.querySelector(slide_fild);
    let slider=document.querySelector(container);
    let dots=[]
    let offset = 0;
    let slideIndex = 1;



    slidesField.style.width = slides.length * 100 + '%';
    slidesField.style.display = 'flex';
    slider_wrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    })
    if(slides.length < 10) {
        current.textContent = `0${slideIndex}`
        total.textContent = `0${slides.length}`
    }else {
        current.textContent = slideIndex
        total.textContent = slides.length
    }




    /*NavBAR*/
    slider.style.position='relative';
    const indicator=document.createElement('ul');
    indicator.style.cssText=`position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;`

    slider.append(indicator)

    for(let i=0;i<slides.length;i++){
        const dot=document.createElement('li');
        dot.setAttribute('data-slide-to',i+1)
        dot.style.cssText=`box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #b8b8b8;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;`;
        if(i===0){
            dot.style.opacity=1;
        }
        indicator.append(dot)
        dots.push(dot)
    }

    next.addEventListener('click', ()=> {

        if(offset === (+width.slice(0,width.length-2)*(slides.length-1))){
            offset = 0;
        }
        else {
            offset += +width.slice(0,width.length-2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if(slideIndex === slides.length) {
            slideIndex = 1;
        }
        else{
            slideIndex++;
        }
        if(slides.length < 10) {
            current.textContent = `0${slideIndex}`
        }else {
            current.textContent = slideIndex
        }
        dots.forEach(dot=>dot.style.opacity='.5')
        dots[slideIndex-1].style.opacity=1;
    })
    prev.addEventListener('click', ()=> {

        if(offset === 0) {
            offset = +width.slice(0,width.length-2)*(slides.length-1)
        }
        else {
            offset -= +width.slice(0,width.length-2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if(slideIndex === 1) {
            slideIndex = slides.length;
        }
        else {
            slideIndex--;
        }


        if(slides.length < 10) {
            current.textContent = `0${slideIndex}`
        }
        else {
            current.textContent = slideIndex
        }

        dots.forEach(dot=>dot.style.opacity='.5')
        dots[slideIndex-1].style.opacity=1;
    })
    dots.forEach(dot=>{
        dot.addEventListener('click',e=>{
            const slideTo=e.target.getAttribute('data-slide-to');
            slideIndex=slideTo;
            offset = +width.slice(0,width.length-2)*(slideTo-1)
            slidesField.style.transform = `translateX(-${offset}px)`
            if(slides.length < 10) {
                current.textContent = `0${slideIndex}`
            }
            else {
                current.textContent = slideIndex
            }
            dots.forEach(dot=>dot.style.opacity='.5')
            dots[slideIndex-1].style.opacity=1;
        })
    })


}
export default slider;