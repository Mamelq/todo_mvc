import PropTypes from "prop-types";

function Todoitem({task, handleChangeStatus, handleDeleteTodo}) {
    return (
        <li
            className="todos-item"
            key={task.id}
        >
                            <span
                                className={task.status === 'in progress' ? 'status' : 'status done'}
                                onClick={() => handleChangeStatus(task)}
                            ></span>
            <span>{task.title}</span>
            <button
                className="btn-delete"
                onClick={() => handleDeleteTodo(task)}
            >delete
            </button>
        </li>
    );
}

Todoitem.propTypes = {
    task: PropTypes.shape({
        status: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    handleChangeStatus: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired

}



export default Todoitem;