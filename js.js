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
$("body").keydown(function (event) {
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
