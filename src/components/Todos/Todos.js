import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


const displayTodos = (todos) => todos.map(elem => <TodoItem key={elem.id} todo={elem} />)

const Todos = ({ todos }) => {
    return (
        <div>
            <h1>Todos</h1>
            {displayTodos(todos)}
        </div>
    );
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
