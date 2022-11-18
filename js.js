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



const btnInput = document.querySelector('.btn-parol');

btnInput.addEventListener('click', parolInput)

function parolInput() {
  const inputText = document.querySelector('.parol').value;
  const contentSecret = document.querySelector('.content-secret');
  if (inputText == '123') {
    contentSecret.innerHTML = 'КОнтентище! ОТкрито'
    contentSecret.classList.remove('content-secret_one')
  } else {
    contentSecret.classList.add('content-secret_one')
  }
}

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


/* КАНВАЗ Игра Мяч НАЧАЛО */

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
    } else {
    ctx.stroke();
  }
};

// Конструктор Ball
var Ball = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.speed = 5;
  this.size = 10;
  this.xSpeed = 1;
  this.ySpeed = 0;
};

// Обновляем позицию мяча соответственно его скорости
Ball.prototype.move = function () {
  this.x += this.xSpeed * this.speed;
  this.y += this.ySpeed * this.speed;

  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  } else if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};

// Рисуем мяч в его текущей позиции
Ball.prototype.draw = function () {
  circle(this.x, this.y, this.size, true);
};

// Задаем направление движения по строке с названием действия
Ball.prototype.doAction = function (action) {
  if (action === "вверх") {
    this.xSpeed = 0;
    this.ySpeed = -1;
  } else if (action === "вниз") {
    this.xSpeed = 0;
    this.ySpeed = 1;
  } else if (action === "влево") {
    this.xSpeed = -1;
    this.ySpeed = 0;
  } else if (action === "вправо") {
    this.xSpeed = 1;
    this.ySpeed = 0;
  } else if (action === "стоп") {
    this.xSpeed = 0;
    this.ySpeed = 0;
  } else if (action === "быстрее") {
    this.speed++;
  } else if (action === "медленнее") {
    if (this.speed > 0) {
      this.speed--;
    }
  } else if (action === "меньше") {
    if (this.size > 0) {
      this.size--;
    }
  } else if (action === "больше") {
    this.size++;
  }
};

// Создаем объект-мяч
var ball = new Ball();

// Объект для перевода кодов клавиш в названия действий
var keyActions = {
  32: "стоп",
  37: "влево",
  38: "вверх",
  39: "вправо",
  40: "вниз",
  88: "быстрее",
  90: "медленнее",
  67: "меньше",
  86: "больше"
};

// Обработчик события keydown, будет вызван при каждом нажатии клавиши
let updet = document.querySelector(".dody");

updet.addEventListener('keyup',(event) => {
  var action = keyActions[event.keyCode];
  ball.doAction(action);
});



// Функция анимации, вызывается раз в 30 мс
setInterval(function () {
  ctx.clearRect(0, 0, width, height);

  ball.draw();
  ball.move();

  ctx.strokeRect(0, 0, width, height);
}, 30);
/* КАНВАЗ Игра Мяч Конец*/

/*  Игра Клик по Квадрату */

let vx; //Скорость по горизонтали
let vy; // Скорость по вертикали
let flag; // Флаг попадания в цель

// Функция инициализации
function init(){
    flag=false;  //Сброс флага

    lay.style.backgoundColor='orange'; // Цвет квадрата - оранжевый 

    // Задаем случяйные координати для квадрата в пределах игрового поля
    lay.style.top=Math.random()*450+"px";
    lay.style.left=Math.random()*750+"px";
    // Задаем случяйное значение и направление скоростей
    vx=(Math.random()*10)-5;
    vy=(Math.random()*10)-5;

    move(); //Запуск игрового прцоеса
}
// Функция, реализирующяя перемещение квадрата 
function move(){
    // Если флаг установлен, то новый экземпляр функции не нужен
    if (flag==true){
        return
    }
    // Вспомагательные переменные с координатами квадрата
    let x=lay.style.left+"px";
    let y=lay.style.top+"px";
    //  Случяйное изменение скоростей с 10% вероятностью

    if (Math.random()*1000<10){
        vx = Math.random()*10-5;
        vy = Math.random()*10-5;
    }
    // Изменение координат
    x=parseInt(x)+vx+"px";
    y=parseInt(y)+vy+"px";
    // Проверки на встречу с границей поля
    if (x<=0){
        x=0;
        vx=-vx;
    } 
    if (x>=750){
        x=750;
        vx=-vx;
    }
    if (y<=0){
        y=0;
        vy=-vy;
    }
    if (y>=450){
        y=450;
        vy=-vy;
    }
    // Назначаем новые координати квадрату
    lay.style.left=x+"px";
    lay.style.top=y+"px";
    // Вызов функции через 30мс
    
}
let letsDanse = document.querySelector('#lay')

letsDanse.addEventListener('click', vis)

setTimeout(move(), 1000);
    // Функция, реагирующяя на попадания
    function vis(){
        // Увеличиваем счетчик попаданий
        document.forms[0].Yes.value++;
        // Устанавливаем флаг, чтобы не обрабативалась функция move()
        flag=true;
        //Меняем цвет квадрата
        lay.innerHTML='ПОПАЛ';
        //Через 400мс вновь запускаем игру
        setTimeout(init(), 400)
    }

/* Игра Клик по Квадрату Конец */