import { useState } from "react";
import PropTypes from "prop-types";

import "./AddTodo.css";

const emptyState = {
  title: "",
};

const submitState = (props, elem, { title }) => {
  elem.preventDefault();
  props.addTodo(title);

  return emptyState;
};

const updateState = (target) => {
  return { [target.name]: target.value };
};

const AddTodo = (props) => {
  const [state, setState] = useState(emptyState);

  return (
    <div>
      <form onSubmit={(e) => setState(submitState(props, e, state))}>
        <input
          type="text"
          name="title"
          placeholder="New todo..."
          className="add-text"
          value={state.title}
          autoComplete="false"
          onChange={(e) => setState(updateState(e.target))}
        />
        <input type="submit" value="Add" className="add-btn" />
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
