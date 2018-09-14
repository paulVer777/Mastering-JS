const todos = getItemsStorage()
const uid = location.hash.substring(1, )
const id = todos.findIndex((value, index) => value.id === uid)

document.querySelector('.edit').value = todos[id].title


document.querySelector('.edit').addEventListener('input', (e) => {


    todos[id].title = e.target.value
    todos[id].editedAt = moment().valueOf()
    sendToStorage(todos)

})

///// Display information about last edition to user screen
document.querySelector('.editedAt').textContent = lastEditionTime(todos[id].editedAt)