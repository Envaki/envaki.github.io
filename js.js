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


const btnColorOne = document.querySelector('.color-btn-one')
const btnColorTwo = document.querySelector('.color-btn-two')


btnColorOne.addEventListener('click', colorOne)
btnColorTwo.addEventListener('click', colorTwo)

const bodyBg = document.querySelectorAll(':scope .section .dody')

console.log(bodyBg);


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



/* function colorTwo() {
  bodyBg.forEach(function(elem) {
    elem.style.background = "#000"
  });
}
*/
let random = document.querySelector('.random');
let randomImg = document.querySelector('.images');
random.addEventListener('click', randomInt);

function randomInt() {
    randomImg.innerHTML =  '<' + 'img' + ' ' + 'src' + '=' + './'+'predskaz'+ '/' + getRandomInt() + '.jpg' + ' ' + 'alt' + '=' + 'art' + '>' 
}

function getRandomInt() {
    return Math.floor(Math.random()*64);
}