let x = document.querySelector('.red');
x.addEventListener("click", red);

let k = document.querySelector('.open')

function red() {
    let r = document.querySelector('.body')
    r.style.background = 'url(https://envaki.github.io/img/img1.jpg) no-repeat center/100%'
    k.style.border = '4px solid red'
    k.style.color = 'red'
    x.style.background = "green"
    e.style.background = "red"
        x.innerHTML="Красний(activ)"
        e.innerHTML="Зелений"
        k.innerHTML="АКТИВНИЙ Красний. Тут RTX 3090"
}

let e = document.querySelector('.green');
e.addEventListener("click", green);

function green() {
    let t = document.querySelector('.body')
    t.style.background = 'url(https://envaki.github.io/img/img2.jpg) no-repeat center/100%'
    k.style.border = '4px solid green'
    k.style.color = 'green'
    e.style.background = "green"
    x.style.background = "red"
        e.innerHTML="Зелений(activ)"
        x.innerHTML="Красний"
        k.innerHTML="АКТИВНИЙ Зелений. Тут RTX 3050"
}

let zero = document.querySelector('.zero')
zero.addEventListener('click', zeroNum);

function zeroNum() {
    let number = +event.target.textContent;
    number++;
    event.target.textContent = number;
    pidrah()
    if (zero.textContent==8) {
        zero.innerHTML="DONE";
        zero.disabled = true;
        console.log("done")
    }
}

function pidrah() {
   console.log(zero.textContent);
}







