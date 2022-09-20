import React, {useState, useContext} from "react";

import Todo from './Todo'

import TodosContext from "../../Context/Todos";

function TodoList(props){
    
    const [statuse, setStatuse] = useState(false)

    const todosContext = useContext(TodosContext)

    let {todos} = todosContext;

    let filterTodos = todos.filter(item => item.done === statuse)

    return(
        <>
            <div className="col-6 mb-3">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                    <a className={`nav-link ${!statuse  ? 'active' : ''}`} aria-current="page" onClick={() => setStatuse(false)}>undone  <span className="badge bg-secondary">{todos.filter(item => item.done === false).length}</span></a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link ${statuse  ? 'active' : ''}`} aria-current="page" onClick={() => setStatuse(true)}>done  <span className="badge bg-success">{todos.filter(item => item.done === true).length}</span></a>
                    </li>
                </ul>
            </div>
            {
                filterTodos.length === 0
                ? <p>khaliyeeeeeeeeee</p>
                : filterTodos.map(item => <Todo key={item.key} item ={item} delete={props.delete} done={props.done} edit={props.edit}/>)
            }
        </>
    )
}
export default TodoList