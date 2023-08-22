import { IoCloseOutline } from "react-icons/io5";
export default function TodoItem({ item, handelClick }) {

  function deleteThisItem() {
    handelClick(item.id);
  }
  return (
    <div className="todo-item" key={item.id}>
      <input type="checkbox" className="todo-checkbox" />
      <span className="todo-item-text">{item.title}</span>
      <a className="todo-item-delete-btn" onClick={deleteThisItem}>
        <IoCloseOutline size="1.5em" color="#333" />
      </a>
    </div>
  );
}
