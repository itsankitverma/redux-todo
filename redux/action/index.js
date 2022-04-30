export const Add_Todo = "Add_Todo"
export const Remove_Todo = "Remove_Todo"


export const addTodo = (data) => {
    return {
        type: Add_Todo,
        payload: {
            data: data,
            id: new Date().getTime().toString()
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: Remove_Todo,
        id
    }
}

