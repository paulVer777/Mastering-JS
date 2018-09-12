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

/////  ADDS ITEMS TO ARRAY OF TODOS 

const addItem = (title) => {

    todos.push({
        title,
        id: uuidv4(),
        completed: false,
        createdAt: null,
        editedAt: null
    })
}


/////// RENDERS TODOS TO USER SCREEN

const renderFilteredTodos = (arr) => {

    document.querySelector('.todos').innerHTML=''

    arr.forEach((value, index) => {

        const element = createDOMItem(value)
        document.querySelector('.todos').appendChild(element)

    })
}

///////////// CREATES DOM ITEM

const createDOMItem = item => {

    const div = document.createElement('div')
    const span = document.createElement('span')
    const button = document.createElement('button')

    span.textContent = item.title

    button.textContent = 'x'
    button.addEventListener('click', ()=> removeItem(item.id))

    div.appendChild(span)
    div.appendChild(button)
    return div

}


//////DELETES TODO FROM AN ARRAY///////////


