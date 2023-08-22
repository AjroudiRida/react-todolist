import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, deleteItem }) {
  return (
    <div className="todolist">
      {todoItems.map((item) => {
        return <TodoItem item={item} handelClick={deleteItem} />;
      })}
    </div>
  );
}