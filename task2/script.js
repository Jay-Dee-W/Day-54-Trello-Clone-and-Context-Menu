const allContainers = document.querySelectorAll('.container')
const allCards = document.querySelectorAll('.drag-item')

allCards.forEach(card => {
    card.addEventListener('dragstart', () => {
        card.classList.add('dragging')
    })
    card.addEventListener('dragend', () => {
        card.classList.remove('dragging')
    })
})

allContainers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        let currentDraggedCard = document.querySelector(".dragging")
        let closestCard = getClosestCard(container, e.clientY)

        if (closestCard === undefined ) {
            container.appendChild(currentDraggedCard)
        } else {
            container.insertBefore( currentDraggedCard,  closestCard )
        }

    })
})

function getClosestCard( container, mouseY) {
  const draggable =  [...container.querySelectorAll('.drag-item:not(.dragging)') ]

  return draggable.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = mouseY - box.top - box.height / 2

    if (offset < 0 && offset > closest.offset ) {
        return { offset: offset, element: child }
    } else {
        return closest
    }

  }, { offset: Number.NEGATIVE_INFINITY } ).element
   
}