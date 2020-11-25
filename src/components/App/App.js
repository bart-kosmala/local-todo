import Todos from '../Todos/Todos'

import './App.css';

const state = {
  todos: [
    {
      id: 1,
      title: 'test1',
      completed: false
    },
    {
      id: 2,
      title: 'test2',
      completed: true
    }
  ]
}

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Todos todos={state.todos} />
    </div>
  );
}

export default App;
