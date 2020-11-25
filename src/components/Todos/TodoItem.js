import PropTypes from "prop-types";

import "./TodoItem.css";

const TodoItem = (props) => {
  const { id, title, completed, created } = props.todo;

  return (
    <div className={completed ? "todo todo-done" : "todo"}>
      <p>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => props.toggleCompletion(id)}
        />{" "}
        {title} <span className="date"> {created}</span>
        <button className="delete-btn" onClick={() => props.deleteTodo(id)}>
          delete
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
