import PropTypes from "prop-types";
import Todoitem from "./Todoitem.jsx";
function Todolist({todos, handleChangeStatus, handleDeleteTodo}) {
    return (
        <ul className="todos-list">
            {todos.map((task) => (
                <Todoitem
                    key={task.id}
                 handleChangeStatus={handleChangeStatus}
                 handleDeleteTodo={handleDeleteTodo}
                 task={task}
                />
            ))}
        </ul>
    );
}
Todolist.propTypes = {
    todos: PropTypes.array.isRequired,
    handleChangeStatus: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired
}

export default Todolist;