const category = {
  'Burger': [
    {
      name: 'Beef Burger',
      des: 'Onion with cheese',
      price: '$18.00',
      pic: 'pic/1.jpg'
    },
    {
      name: 'Chicken Burger',
      des: 'Cheese with Chicken',
      price: '$11.00',
      pic: 'pic/2.jpg'
    },
    {
      name: 'Classic  Burger',
      des: 'Beef with lettuce',
      price: '$24.00',
      pic: 'pic/3.jpg'
    },
    {
      name: 'Grilled Burger',
      des: 'Grilled Chicken',
      price: '$14.00',
      pic: 'pic/4.jpg'
    }
  ],
  'Pasta': [
    {
      name: 'Beef Pasta',
      des: 'Onion with cheese',
      price: '$18.00',
      pic: 'pic/p1.jpg'
    },
    {
      name: 'Chicken Pasta',
      des: 'Cheese with Chicken',
      price: '$11.00',
      pic: 'pic/p2.jpg'
    },
    {
      name: 'Classic  Pasta',
      des: 'Beef with lettuce',
      price: '$24.00',
      pic: 'pic/p3.jpg'
    },
    {
      name: 'Grilled Pasta',
      des: 'Grilled Chicken',
      price: '$14.00',
      pic: 'pic/p4.jpg'
    }
  ],
  'Salads':
    [
      {
        name: 'Beef salads',
        des: 'Onion with cheese',
        price: '$18.00',
        pic: 'pic/s1.jpg'
      },
      {
        name: 'Chicken salads',
        des: 'Cheese with Chicken',
        price: '$11.00',
        pic: 'pic/s2.jpg'
      },
      {
        name: 'Classic  salads',
        des: 'Beef with lettuce',
        price: '$24.00',
        pic: 'pic/s3.jpg'
      },
      {
        name: 'Grilled salads',
        des: 'Grilled Chicken',
        price: '$14.00',
        pic: 'pic/s4.jpg'
      }
    ],
  '': {}
}

// menu category
const nav_category = document.querySelector('.menu-nav > .nav')

nav_category.innerHTML = Object.keys(category).map((category) => {
  if (category === '') {
    return `<li class="nav-item filter"><i class="fal fa-filter"></i></li>`
  }
  return `<li class="nav-item">${category}</li>`
}).join('')
nav_category.childNodes[0].classList.add('active')

// food show
const menu = document.querySelectorAll('.menu-nav .nav-item')
let foods = document.querySelector('.foods')
let width = menu.length - 1
foods.style.width = 100 * width + '%'
foods.innerHTML = `<div class="food-category"></div>`.repeat(width)



let food_category = document.querySelectorAll('.food-category')

let i = 0
for (const key in category) {
  if (key === '') break
  food_category[i].innerHTML = category[key].map((val) => {
    return `
        <div class="food-box">
          <div class="food-pic">
            <img src="${val.pic}">
          </div>
          <h3 class="food-name">${val.name}</h3>
          <p class="intro">${val.des}</p>
          <span class="price">${val.price}</span>
          <span class="add-to-cart">
            <i class="fal fa-plus"></i>          
          </span>
        </div> `
  }).join('')
  i++
}
let food_name = document.getElementById('food-name')
let current_active = document.querySelector('.menu-nav > .nav > .active')

food_name.innerHTML = current_active.innerHTML

let c = 0

for (let i = 0; i < menu.length - 1; i++) {
  menu[i].addEventListener('click', () => {
    if (!menu[i].classList.contains('active')) {
      current_active.classList.remove('active')
      menu[i].classList.add('active')
    }
    if (menu[i].classList.contains('active')) {
      current_active = menu[i]
    }
    else{
      menu[i].classList.remove('active')
    }

    let w = 0
    w += 33.5 * i
    foods.style.transform = `translate(-${w}%)`
    food_name.innerHTML = current_active.innerHTML
  })
}



function cart() {
  const add_to_cart = document.querySelectorAll('.add-to-cart > i')
  const bag = document.querySelector('.fa-shopping-bag > span')

  for (const item of add_to_cart) {
    item.addEventListener('click', () => {
      if (item.classList.contains('fa-plus')) {
        item.classList.remove('fa-plus')
        item.classList.add('fa-check')
        c++
        bag.innerHTML = c
      }
      else {
        item.classList.add('fa-plus')
        item.classList.remove('fa-check')
        c--
        if (c == 0) {
          bag.style.background = 'none'
          bag.innerHTML = ''
        }
        else {
          bag.innerHTML = c
        }
      }

      if (c > 0) {
        bag.style.background = '#ff304f'
      }
    })
  }
}

