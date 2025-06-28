document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header')
  const burger = document.getElementById('burger')
  const navMenu = document.getElementById('navMenu')
  const menuItems = document.querySelectorAll('.header__menu > li')

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuItems.forEach((el) => el.classList.remove('active'))
      item.classList.add('active')
    })
  })

  burger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active')
    header?.classList.toggle('active')
  })

  document.querySelectorAll('.header__menu a').forEach((link) =>
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active')
      header?.classList.remove('active')
    })
  )

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('activeScroll')
    } else {
      header?.classList.remove('activeScroll')
    }
  })
})
