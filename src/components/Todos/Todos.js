import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const renderTodos = (props) =>
  props.todos.map((elem) => {
    return (
      <TodoItem
        key={elem.id}
        todo={elem}
        toggleCompletion={(id) => props.toggleCompletion(id)}
        deleteTodo={(id) => props.deleteTodo(id)}
      />
    );
  });

const Todos = (props) => {
  return <div>{renderTodos(props)}</div>;
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todos;
