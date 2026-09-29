const buttonMenu = document.querySelector('.button-menu') 
const hiddenMenu = document.querySelector('.hidden-menu')

// const sliderOuter = document.querySelector('.slider-outer-block')
// const slider = document.querySelector('.slider')
// const shorts = Array.from(document.querySelectorAll('#shorts'))
// let i 
// let fullShort
// const closeButton = document.querySelector('.close-button')
                     
const ghostFly = document.querySelector('.ghost-fly')
const ghostCrawl = document.querySelector('.ghost-crawl')
const btnToTop = document.querySelector('.up')




window.addEventListener('scroll',()=>{
    const scrollParams = window.scrollY || document.documentElement.scrollTop
    if(scrollParams > 300){
        btnToTop.style.display='block'             // чтобы кнопка наверх появлялась после прокрутки на 300 пикселей скролла
        btnToTop.style.cursor='pointer'       
    }
    else{
        btnToTop.style.display='none'
    }
})


btnToTop.addEventListener('click',()=>{           
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


buttonMenu.addEventListener('click', (e)=> { 
    e.stopPropagation()   //кнопка открыть/закрыть меню
    hiddenMenu.classList.toggle('hidden')        
})


document.body.addEventListener('click', (e)=>{      //событие для боди чтобы закрыть меню вне кнопки меню                            
    if(!hiddenMenu.classList.contains('hidden')){
    hiddenMenu.classList.toggle('hidden')
    }
})




//__________________________________СЛАЙДЕР___________________________________________

const shorts = Array.from(document.querySelectorAll('.shorts img'));
const shorts1 = Array.from(document.querySelectorAll('.shorts1'));
const shorts2 = Array.from(document.querySelectorAll('.shorts2'));
const shorts3 = Array.from(document.querySelectorAll('.shorts3'));
const slider = document.querySelector('.slider_bgrnd')
const boxForImg = document.querySelector('.slider_img')
let img
let imgIndex

const backSlide = document.querySelector('.slide_back')
const nextSlide = document.querySelector('.slide_next')

//_____ОТКРЫТЬ СЛАЙДЕР_____________________________

function openSlider(i){

 slider.classList.remove('hidden')
 imgIndex = i
 img = shorts[i].cloneNode()
 boxForImg.prepend(img)

}

shorts.forEach((el,i) => { 
    el.addEventListener('click', ()=> {
        openSlider(i)
    })
})

//_______ПЕРЕКЛЮЧАТЕЛИ СЛАЙДОВ___________________

function toLeft(){                   //левый
    
    if(img.classList.contains('shorts1')){    //условия для переключения слайдов только в их блоках
          if (imgIndex <= 0) {                  
              console.log('return shorts1')
              return
          }
    }

    if(img.classList.contains('shorts2')){
          if (imgIndex <= 6) {
              console.log('return shorts2')
              return
          }
    }

     if(img.classList.contains('shorts3')){
          if (imgIndex <= 12) {
              console.log('return shorts3')
              return
          }
    }

    imgIndex = imgIndex - 1
    boxForImg.removeChild(img)
    img = shorts[imgIndex].cloneNode()
    boxForImg.prepend(img)
}




function toRight(){                   //правый
    
     if(img.classList.contains('shorts1')){    //условия для переключения слайдов только в их блоках
          if (imgIndex >= 5) {                 
              return
          }
    }

    if(img.classList.contains('shorts2')){
          if (imgIndex >= 11) {
              return
          }
    }

     if(img.classList.contains('shorts3')){
          if (imgIndex >= 17) {
              return
          }
    }

    imgIndex = imgIndex + 1
    boxForImg.removeChild(img)
    img = shorts[imgIndex].cloneNode()
    boxForImg.prepend(img)
}


backSlide.addEventListener('click', toLeft)
nextSlide.addEventListener('click', toRight)




//-------------ЗАКРЫТЬ СЛАЙДЕР--------------

const backImgNext = document.querySelector('.back_img_next')

slider.addEventListener('click', (e)=> {             

    if(e.target.classList.contains('slider_bgrnd')){    //чтобы слайдер закрывался именно кликом
        e.stopPropagation()                             //на серую зону бекграйунд
        slider.classList.add('hidden')
        boxForImg.removeChild(img)
        console.log(boxForImg)
    }
})

//___________________________________ПЛАСТИНКА__________________________________________

const playButton = document.querySelector('.play-button')
const disc = document.querySelector('.hollywood-box-disc') 

playButton.addEventListener('click', (e)=>{    //крутящийся диск
    disc.classList.toggle('rotate')
    
})


setTimeout( ()=>{                                   //всплывающие приведения
    ghostFly.classList.add('ghost-fly-anim')
}, 10000 )

setTimeout( ()=>{
    ghostCrawl.classList.add('ghost-crawl-anim')
    
}, 20000 )

setInterval( ()=>{
    ghostFly.classList.toggle('ghost-fly-anim')
}, 33000 )

setInterval( ()=>{
    ghostCrawl.classList.toggle('ghost-crawl-anim')
}, 40000 )
