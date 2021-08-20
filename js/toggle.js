const toggle = document.querySelector('.toggle')
const myApp = document.querySelector('.myApp')
toggle.addEventListener('click', () => {
  if (toggle.classList.contains('active')){
    toggle.classList.remove('active')
    myApp.classList.remove('light-theme')
  }
  else{
    toggle.classList.add('active')
    myApp.classList.add('light-theme')
  }
})

