/* TAB menu Content */
const tabsBtn = document.querySelectorAll('.menubarall');
const tabsItem = document.querySelectorAll('.contentbar');

tabsBtn.forEach(onTabsClick)


function onTabsClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (! currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      })
  
      tabsItem.forEach(function (item) {
        item.classList.remove('contentbar-active');
      })
  
  
      currentBtn.classList.add('active');
      currentTab.classList.add('contentbar-active');
    }
  })
}
document.querySelector('.menubarall').click(); 
/*  TAB menu Content  END*/


const btnColorOne = document.querySelector('.color-btn-one')
const btnColorTwo = document.querySelector('.color-btn-two')


btnColorOne.addEventListener('click', colorOne)
btnColorTwo.addEventListener('click', colorTwo)

const bodyBg = document.querySelectorAll(':scope .section .dody')

function colorOne() {
    bodyBg.forEach(function(elem) {
      elem.classList.add('color-alll') 
        console.log("+")
  });
}

function colorTwo() {
  bodyBg.forEach(function(elem) {
    elem.classList.remove('color-alll')
  });
}




/* Random peredbachenna */
let random = document.querySelector('.random');
let randomImg = document.querySelector('.images');
random.addEventListener('click', randomInt);

function randomInt() {
    randomImg.innerHTML =  '<' + 'img' + ' ' + 'src' + '=' + './'+'predskaz'+ '/' + getRandomInt() + '.jpg' + ' ' + 'alt' + '=' + 'art' + '>' 
}

function getRandomInt() {
    return Math.floor(Math.random()*64);
}
/* Random peredbachenna END */

/* Big IMG click */
let big = document.querySelectorAll('img');


var cells = document.querySelectorAll('img');
for(var i=0; i<cells.length;i++){
    cells[i].addEventListener('click', selectDate);
}

function selectDate(){
    if(this.classList.contains('imagess')){
        this.classList.remove('imagess');
    }else {
        this.classList.add('imagess');
    }
}
/* Big IMG click  END */

/* Model okno BTN */
let zakazClose = document.querySelector('.zakaz-close')

zakazClose.addEventListener('click', closeZakaz)
let zakaz = document.querySelector('.zakaz')


function closeZakaz() {
  zakaz.classList.remove('open');
}

let buttonZakaz = document.querySelectorAll('.button-zakaz')

for(var i=0; i<buttonZakaz.length;i++){
  buttonZakaz[i].addEventListener('click', zakazButton);
}

function zakazButton() {
    zakaz.classList.add('open')
}
/* Model okno BTN END */