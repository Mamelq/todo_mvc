import {useState} from "react";
import "./App.scss";

function App() {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [filters, setFilters] = useState('all')


    function getNewId() {
        if (todos.length === 0) {
            return 1;
        }
        return Math.max(...todos.map((todo) => todo.id)) + 1;
    }

    // todos = [{id: 1, name: 'a', status: 'active'}, {id: 2, name: 'b', status: 'active'}]
    // map => [1, 2]
    // ... => 1, 2
    // Math.max(1, 2) => 2
    // + 1 => 3

    function handleValue(event) {
        setValue(event.target.value);
    }

    function handleAddTodo(event) {
        if (event.key === 'Enter') {
            setTodos([...todos, {
                id: getNewId(),
                name: value,
                status: 'active',

            }]);
            setValue('');
        }
    }


    function handleChangeStatus(todo) {
        todo.status = todo.status === 'active' ? 'done' : "active";
        setTodos([...todos]);
    }


    function handleDeleteTodo(task) {
        setTodos(todos.filter((todo)=> todo !== task));

    }
    function handleDeleteAllDoneTodos() {
        setTodos(todos.filter((todo) => todo.status !=='done'))

    }

    return (
        <div>
            <h1>todos</h1>
            <input
                type="text"
                value={value}
                onChange={handleValue} // dodanie zdarzenia na dana funkcje
                onKeyUp={handleAddTodo}
            />
            <ul className="todos">
                {todos
                    .filter((todo) => filters === 'all' ? true: filters === todos.status)
                    .map((todo) => (
                    <li className="todo" key={todo.id}>
                        <span
                            className={todo.status === 'active' ? 'status'  : 'status done'}
                              onClick={() => handleChangeStatus(todo)}

                        ></span>
                        <span>{todo.name}</span>
                        <button
                            className="btn-delete"
                                onClick={()=>handleDeleteTodo(todo)}
                        >Delete
                        </button>
                    </li>
                ))}
            </ul>
            <p> {todos.filter((todo) => todo.status === 'active').length} items left </p>

            <div>
                <button className={filters === 'all' ? 'current': ''} onClick={() => setFilters('all')}>ALl</button>
                <button className={filters === 'active' ? 'current': ''} onClick={() => setFilters('active')}>Active</button>
                <button className={filters === 'done' ? 'current': ''} onClick={() => setFilters('done')}>Done</button>
            </div>
            {!!todos.filter((todo) => todo.status === 'done').length && (
                <button onClick={handleDeleteAllDoneTodos}> Clear completed </button>
            )}

        </div>
    );
}

export default App;