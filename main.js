const todos = getItemsStorage()


const filters = {


}

renderFilteredTodos(todos)


document.querySelector('.form').addEventListener('submit', (e) => {

    e.preventDefault() // prevents against default behaviour of submit (refreshing page and adding data to url)

    addItem(e.target.elements.input1.value) // todos ++
    e.target.elements.input1.value = '' // cleans the input
    renderFilteredTodos(todos)
    sendToStorage(todos) // send new todos to l.storage
})

