const todos = getItemsStorage()


const filters = {
    filter: ''

}

renderFilteredTodos(todos)



document.querySelector('.find').addEventListener('input', (e) => {

    filters.filter = e.target.value
    renderFilteredTodos(todos)
})

document.querySelector('.form').addEventListener('submit', (e) => {

    e.preventDefault() // prevents against default behaviour of submit (refreshing page and adding data to url)

    addItem(e.target.elements.input1.value) // todos ++
    e.target.elements.input1.value = '' // cleans the input
    renderFilteredTodos(todos) // renders updated todos to users screen
    sendToStorage(todos) // send new todos to l.storage
})