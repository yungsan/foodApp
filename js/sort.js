const filter = document.querySelector('.filter')
const sort = document.querySelector('.sort-box')
const box = document.querySelectorAll('.foods > .food-category')

let foodWithPrice = []
for (const item of box) {
  foodWithPrice.push([item.querySelector('.food-name').innerHTML, item.querySelector('.price').innerHTML.split('$').join('')])
}


filter.addEventListener('click', () => {
  if (!sort.classList.contains('active')) {
 
    sort.classList.add('active')

    let btn = sort.querySelectorAll('.btn')
    btn[0].addEventListener('click', () => {
      let current_category_index = Array.prototype.slice.call(document.querySelector('.menu-nav > .nav').children).indexOf(document.querySelector('.menu-nav > .nav > .active'));
      asc(current_category_index)
    })
    btn[1].addEventListener('click', () => {
      let current_category_index = Array.prototype.slice.call(document.querySelector('.menu-nav > .nav').children).indexOf(document.querySelector('.menu-nav > .nav > .active'));
      desc(current_category_index)
    })
  }
  else if (sort.classList.contains('active')) {
    sort.classList.remove('active')
  }

})



function asc(index) {
  const len = box[index].querySelectorAll('.food-box').length
  for (let i = 0; i < len; i++) {
    let price1 = box[index].querySelectorAll('.price')[i].innerHTML.split('$').join('')
    
    for (let j = i; j < len; j++) {
      let price2 = box[index].querySelectorAll('.price')[j].innerHTML.split('$').join('')

      if (price1 > price2) {
        let temp = box[index].querySelectorAll('.food-box')[i].innerHTML
        box[index].querySelectorAll('.food-box')[i].innerHTML = box[index].querySelectorAll('.food-box')[j].innerHTML
        box[index].querySelectorAll('.food-box')[j].innerHTML = temp
      }
    }
  }
}

function desc(index) {
  const len = box[index].querySelectorAll('.food-box').length
  for (let i = 0; i < len; i++) {
    let price1 = box[index].querySelectorAll('.price')[i].innerHTML.split('$').join('')
    for (let j = i; j < len; j++) {
      let price2 = box[index].querySelectorAll('.price')[j].innerHTML.split('$').join('')

      if (price1 < price2) {
        let temp = box[index].querySelectorAll('.food-box')[i].innerHTML
        box[index].querySelectorAll('.food-box')[i].innerHTML = box[index].querySelectorAll('.food-box')[j].innerHTML
        box[index].querySelectorAll('.food-box')[j].innerHTML = temp
      }
    }
  }
}





