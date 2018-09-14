const todos = getItemsStorage()


const filters = {
    filter: '',
    hideCompleted: false,
    sortBy: 'alphabetically'
}

renderFilteredTodos(todos)

////// INPUT FOR FILTERING

document.querySelector('.find').addEventListener('input', (e) => {

    filters.filter = e.target.value
    renderFilteredTodos(todos)
})

//////// FORM LISTENER

document.querySelector('.form').addEventListener('submit', (e) => {

    e.preventDefault() // prevents against default behaviour of submit (refreshing page and adding data to url)

    addItem(e.target.elements.input1.value) // todos ++
    e.target.elements.input1.value = '' // cleans the input
    renderFilteredTodos(todos) // renders updated todos to users screen
    sendToStorage(todos) // send new todos to l.storage
})


document.querySelector('.input-completed').addEventListener('click', (e) => {

    filters.hideCompleted = e.target.checked
    renderFilteredTodos(todos)

})


document.querySelector('.sorting').addEventListener('change', (e) => {


    filters.sortBy = e.target.value
    renderFilteredTodos(todos)
    console.log(filters)
})
getQuote().catch((e)=>alert(e))