///////////SENDS ITEMS TO LOCAL STORAGE///////

const sendToStorage = (item) => {

    const parsedItem = JSON.stringify(item)

    localStorage.setItem('List', parsedItem)

}

///////////GETS ITEMS FROM LOCAL STORAGE////////////

const getItemsStorage = () => {

    const items = localStorage.getItem('List')

    return items ? JSON.parse(items) : []
}

///////// ADDS ITEMS TO ARRAY OF TODOS ///////////////////

const addItem = (title) => {

    todos.push({
        title,
        id: uuidv4(),
        completed: false,
        createdAt: moment().valueOf(),
        editedAt: null
    })
}

/////// RENDERS TODOS TO USER SCREEN ///////////////

const renderFilteredTodos = (arr) => {


    let filteredTodos = sorting(arr, filters.sortBy)


    filteredTodos = arr.filter((value, index) => value.title.toLowerCase().includes(filters.filter.toLocaleLowerCase()))

    filteredTodos = filteredTodos.filter((value, index) => filters.hideCompleted ? !value.completed : true)


    document.querySelector('.todos').innerHTML = ''


        !filteredTodos.length ? document.querySelector('.todos').textContent = 'Nothing found' : ''


    filteredTodos.forEach((value, index) => {

        const element = createDOMItem(value)
        document.querySelector('.todos').appendChild(element)
    })

}

///////////// CREATES DOM ITEM //////////////////////

const createDOMItem = item => {

    const div = document.createElement('div')
    const span = document.createElement('span')
    const button = document.createElement('button')
    const checkbox = document.createElement('input')
    const button1 = document.createElement('button')


    span.textContent = item.title

    button.textContent = 'x'
    button.addEventListener('click', () => {

        removeItem(item.id)
        sendToStorage(todos)
        renderFilteredTodos(todos)
    })

    checkbox.setAttribute('type', 'checkbox')
    item.completed ? checkbox.setAttribute('checked', 'checked') : ''

    checkbox.addEventListener('click', (e) => {

        const index = todos.findIndex((value, index) => value.id === item.id)
        todos[index].completed = e.target.checked
        sendToStorage(todos)
    })
    button1.textContent = 'EDIT'
    button1.addEventListener('click', (e) => {
        location.assign(`/edit.html#${item.id}`)

    })



    div.appendChild(button)
    div.appendChild(span)
    div.appendChild(checkbox)
    div.appendChild(button1)
    return div

}

//////////////////REMOVES ITEM FROM AN ARRAY//////////////////////////////////

const removeItem = (id) => {

    const index = todos.findIndex((value, index) => id == value.id)
    todos.splice(index, 1)

}

///CALCULATES HOW MANY TIME PASSED SINCE LAST EDITION  ////////////

const lastEditionTime = (time) => time ? `The last edition was ${moment(time).fromNow()}` : ` This item hasn't been edited yet`

////SORTING FUNCTION

sorting = (arr, filter) => {

    return arr.sort((a, b) => {

        if (filter === 'alphabetically') return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        if (filter === 'created') return a.createdAt < b.createdAt ? -1 : 1
        if (filter === 'last-edited') return a.editedAt > b.editedAt ? -1 : 1
    })

}



const tablica = [3, 2, 6, 1]

tablica.sort((a, b) => {
    a < b ? -1 : 1
})

console.log(tablica)


////Downloads quotes

const getQuote = async () => {

    const response = await fetch('https://talaikis.com/api/quotes/random/')

    if (response.status === 200) {

        const quote = await response.json()
        document.querySelector('.quote').textContent=quote.quote
        
    } else {
        throw new Error('upsy')
    }
}


