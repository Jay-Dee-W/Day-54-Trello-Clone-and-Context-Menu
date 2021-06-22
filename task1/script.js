const clickable = document.getElementById('clickable')
  const menu = document.getElementById('menu')


  clickable.addEventListener('contextmenu', e => {
    e.preventDefault()

    menu.style.top = `${e.clientY}px`
    menu.style.left = `${e.clientX}px`
    menu.classList.toggle('show')
  })

  document.addEventListener('click', () => {
    menu.classList.remove('show')
  })

  document.addEventListener('contextmenu', () => {
    e.preventDefault()
    menu.classList.remove('show')
  })