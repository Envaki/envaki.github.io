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

