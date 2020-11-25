import PropTypes from 'prop-types';

const getStyle = (todo) => {
    if (todo.completed) {
        return {
            textDecoration: 'line-through'
        }
    } else {
        return {
            textDecoration: 'none'
        }
    }
}

const TodoItem = ({ todo }) => {
    return (
        <div style={getStyle(todo)}>
            <p>{todo.title}</p>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
