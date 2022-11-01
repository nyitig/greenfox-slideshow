let picsObj=[
   {
     src:"/assets/pic/allatok02.jpg",
     title:"India futókacsák",
     text:"Az indiai futókacsák különösen hasznos állatok. Kedvenc eledelük a spanyol mesztelencsigák, de ezen kívűl mindenféle csigákat és rovarokat esznek"
   },
  {
    src:"/assets/pic/csalamade02.jpg",
    title:"Csalamádé alapanyagok I",
    text:"A házi csalamádénál nincs finomabb! Minél több féle zöldség van benne, annál jobb lesz az eredmény!"
  },
  {
    src:"/assets/pic/csalamade03.jpg",
    title:"Csalamádé alapanyagok II",
    text:"A házi csalamádénál nincs finomabb! A paprika az egyik legfontosabb alapanyaga"
  },
  {
    src:"/assets/pic/himes03.jpg",
    title:"Himesháza utcai dekoráció",
    text:"Himesháza egy baranyai falu. Főleg svábok lakják. Vajon ki született Himesházzán, akit sokan ismernek?  "
  },
  {
    src:"/assets/pic/himes04.jpg",
    title:"Himesháza buszmegálló",
    text:"Ha sokat kellene várni a buszra... .  "
  },
]
// const html tags

const picsContainer=document.getElementById('picsContainer')
const sliders=document.getElementById('slider')
const arrowLeft=document.getElementById('arrowLeft')
const arrowRight=document.getElementById('arrowRight')

let counter=0
let elementNumber=0
let htmlTemplate=``
createBigPicsContainer()
createSliderContainer()
seeActivePics(0)
activatedSilderDivs(0)
addClickEventSliderDivs()
addSliderHover()
addClickEventsLeftArrow()
addClickEventsRightArrow()



function createBigPicsContainer() {
    picsObj.map((picObj)=> {
    htmlTemplate+=`
    <div id="" class="picsItems">
    <div id="" class="bigPics">
      <img src="${picObj.src}" id="" class="bigPicsImg" alt="">
    </div>
    <div id="" class="picsText">
      <h2 id="headerText" class="margin1vh">${picObj.title}</h2>
      <p id="parText" class="margin1vh">${picObj.text}</p>
    </div>
  </div>
`
elementNumber++
}).join('')
  picsContainer.innerHTML=htmlTemplate
  htmlTemplate=``
  elementNumber--
}

function createSliderContainer() {
  picsObj.map((picsObj)=> {
    htmlTemplate+=`
    <div id="" class="sliderPic borderRadius cursorPointer">
    <img src="${picsObj.src}" id="" class="miniPics" alt="">
    <div class="titlePics borderRadius">
      <p>${picsObj.title}</p>
    </div>
  </div>
    `
  }
  ).join('')
  sliders.innerHTML=htmlTemplate
  htmlTemplate=``
}

function seeActivePics(params) {
  const picsItems=document.querySelectorAll('.picsItems')
  for (let index = 0; index < picsItems.length; index++) {
    if (index==params) {
      picsItems[index].classList.add('active')
    }
    else {
      picsItems[index].classList.remove('active')
    }
  }
}

function activatedSilderDivs(params) {
  const sliderPic=document.querySelectorAll('.sliderPic')
  for (let index = 0; index < sliderPic.length; index++) {
    if (index==params) {
      sliderPic[index].classList.add('active')
    }
    else {
      sliderPic[index].classList.remove('active')
    }
  }
}

function addClickEventSliderDivs(params) {
  const sliderPic=document.querySelectorAll('.sliderPic')
  sliderPic.forEach((val, ind) => {
    sliderPic[ind].addEventListener("click",()=>{
      counter=ind
      activatedSilderDivs(ind)
      seeActivePics(ind)
    })
  })
}

function addSliderHover() {
  const sliderPic=document.querySelectorAll('.sliderPic')
  const titlePics=document.querySelectorAll('.titlePics')
  for (let index = 0; index < sliderPic.length; index++) {
    sliderPic[index].addEventListener('mouseover', ()=>{
      for (let a = 0; a < titlePics.length; a++) {
        if (a==index) {
          titlePics[a].classList.add('active')
          }
          else {
            titlePics[a].classList.remove('active')
          }
      }
    })
    sliderPic[index].addEventListener('mouseout', ()=>{
      for (let b = 0; b < titlePics.length; b++) {
        titlePics[b].classList.remove('active')
        
      }
    })
  }
}

function addClickEventsLeftArrow() {
  arrowLeft.addEventListener("click", ()=> {
    if (counter==0) {
      counter=elementNumber
      activatedSilderDivs(counter)
      seeActivePics(counter)
    }
    else {
      counter--
      activatedSilderDivs(counter)
      seeActivePics(counter)
    }
  })
}

function addClickEventsRightArrow() {
  arrowRight.addEventListener("click", ()=> {
    if (counter==elementNumber) {
      counter=0
      activatedSilderDivs(counter)
      seeActivePics(counter)
    }
    else {
      counter++
      activatedSilderDivs(counter)
      seeActivePics(counter)
    }
  })
  
}