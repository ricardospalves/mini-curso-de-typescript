type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

// Readonly
const todo: Readonly<Todo> = {
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor amet sit',
  completed: false,
}

console.log(todo)

// todo.completed = true

// Partial
const updateTodo = (todo: Todo, fieldToUpdate: Partial<Todo>) => {
  return {
    ...todo,
    ...fieldToUpdate,
  }
}

const updatedTodo = updateTodo(todo, {
  completed: true
})

console.log(updatedTodo)

//// Pick
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todoPreview: TodoPreview = {
  title: 'Lorem',
  completed: false
}

console.log(todoPreview)

//// Omit
type TodoLorem = Omit<Todo, 'completed'>

const todoLorem: TodoLorem = {
  title: 'Lorem',
  description: 'lorem ipsum'
}

console.log(todoLorem)
