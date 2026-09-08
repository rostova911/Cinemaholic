const buttonMenu = document.querySelector('.button-menu') 
const hiddenMenu = document.querySelector('.hidden-menu')

const sliderOuter = document.querySelector('.slider-outer-block')
const slider = document.querySelector('.slider')
const shorts = Array.from(document.querySelectorAll('#shorts'))
let i 
let fullShort
const closeButton = document.querySelector('.close-button')
const playDiscHollywood = document.querySelector('.play-button')
const rotateBlock = document.querySelector('.hollywood-img')                      
const ghostFly = document.querySelector('.ghost-fly')
const ghostCrawl = document.querySelector('.ghost-crawl')



buttonMenu.addEventListener('click', (e)=> { 
    e.stopPropagation()   //кнопка открыть/закрыть меню
    hiddenMenu.classList.toggle('hidden')        
})


document.body.addEventListener('click', (e)=>{      //событие для боди чтобы закрыть меню вне кнопки меню                            
    if(!hiddenMenu.classList.contains('hidden')){
    hiddenMenu.classList.toggle('hidden')
    }
})



for( const pic of shorts) {               //открыть слайдер нажав на картинку
    pic.addEventListener('click', (e)=>{
    i = shorts.indexOf(pic)
    fullShort = shorts[i].cloneNode()
    fullShort.style.width = '100%'
    slider.prepend(fullShort)
    sliderOuter.classList.toggle('hidden')   
    console.log(slider)     
    })
}

slider.addEventListener('click', (e)=>{       //чтобы слайдер закрывался кликом НЕ по картинке, а по его родителю
e.stopPropagation()
})



sliderOuter.addEventListener('click',(e)=>{          //закрыть слайдер кликом вне картинки
if(!sliderOuter.classList.contains('hidden')) {
    sliderOuter.classList.toggle('hidden')
    fullShort.remove()
}})   


closeButton.addEventListener('click', (e)=>{          // закрыть слайдер по кнопочке крестик
    sliderOuter.classList.toggle('hidden') 
    fullShort.remove()
})

playDiscHollywood.addEventListener('click', (e)=>{
    rotateBlock.classList.toggle('rotate')
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
