export default function TodoItem({
  todo,
  onDeleteTodo,
  onToggleDone,
  onSaveTodoEdit,
  onEditingTodo,
  setTodoEdit,
  todoEdit,
}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggleDone(todo.id)}
      />
      {todoEdit && todoEdit.id === todo.id ? (
        <>
          <input
            value={todoEdit.title}
            onChange={(e) =>
              setTodoEdit({
                ...todoEdit,
                title: e.target.value,
              })
            }
          />
          <button onClick={() => onSaveTodoEdit(todo.id)}>Save</button>
        </>
      ) : (
        <>
          {todo.title}
          <button onClick={() => onEditingTodo(todo.id)}>Edit</button>
        </>
      )}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </label>
  );
}
