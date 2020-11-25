import { useState, useEffect } from "react";

import Todos from "../Todos/Todos";
import AddTodo from "../Todos/AddTodo";
import Header from "./Header";

import {
  retrieveId,
  retrieveTodos,
  storeState,
  getCurrentDate,
} from "./TodoUtil";

import "./App.css";

const toggleTodo = (state, id) => {
  return {
    todos: state.todos.map((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }

      return elem;
    }),
    lastId: state.lastId,
  };
};

const deleteTodo = (state, id) => {
  localStorage.removeItem(id.toString());

  return {
    todos: state.todos.filter((elem) => elem.id !== id),
    lastId: state.lastId,
  };
};

const addTodo = (state, title) => {
  return {
    todos: [
      ...state.todos,
      {
        id: state.lastId + 1,
        title: title,
        completed: false,
        created: getCurrentDate(),
      },
    ],
    lastId: state.lastId + 1,
  };
};

const App = () => {
  const initId = retrieveId();

  const [state, setState] = useState({
    lastId: initId,
    todos: retrieveTodos(initId),
  });

  useEffect(() => storeState(state), [state]);

  return (
    <div>
      <Header />
      <div className="container">
        <Todos
          todos={state.todos}
          toggleCompletion={(id) => setState(toggleTodo(state, id))}
          deleteTodo={(id) => setState(deleteTodo(state, id))}
        />
      </div>
      <footer>
        <AddTodo addTodo={(title) => setState(addTodo(state, title))} />
      </footer>
    </div>
  );
};

export default App;
