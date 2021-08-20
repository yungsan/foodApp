const add_to_cart = document.querySelectorAll('.add-to-cart > i')
const bag = document.querySelector('.fa-shopping-bag > span')

let count = 0


for (const item of add_to_cart) {
  item.addEventListener('click', () => {
    console.log('clicked');
    if (item.classList.contains('fa-plus')) {
      item.classList.remove('fa-plus')
      item.classList.add('fa-check')
      count++
      bag.innerHTML = count
    }
    else{
      item.classList.add('fa-plus')
      item.classList.remove('fa-check')
      count--
      if (count == 0) {
        bag.style.background = 'none'
        bag.innerHTML = ''
      }
      else{
        bag.innerHTML = count
      }
    }

    if (count > 0){
      bag.style.background = '#ff304f'
    }
  })
}
