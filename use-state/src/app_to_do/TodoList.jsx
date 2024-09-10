import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onDeleteTodo,
  onToggleDone,
  onSaveTodoEdit,
  onEditingTodo,
  todoEdit,
  setTodoEdit,
}) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> 
            <TodoItem
              todo={todo}
              onDeleteTodo={onDeleteTodo} 
              onToggleDone={onToggleDone}
              onSaveTodoEdit={onSaveTodoEdit}
              onEditingTodo={onEditingTodo}
              setTodoEdit={setTodoEdit}
              todoEdit={todoEdit}
            />
          </li>
        ))}
      </ul>
    </>
  );
}