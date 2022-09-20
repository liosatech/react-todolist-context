import React,{useState, useContext} from "react";
import TodoEdite from "./TodoEdite";
import TodosContext from "../../Context/Todos";

function Todo(props){
    const todosContext = useContext(TodosContext)
    
    const [edit, setEdit] = useState(false)

    const {item} = props;

    const editHandler = text => {
        todosContext.edit(item.key,text)
        setEdit(false)
    }
    return(
        <>
            {
                !edit
                ? (
                    <div className="col-6 mb-2">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                            {item.formInput}
                            </div>
                            <div>
                                <button type="button" className="btn btn-info" onClick={()=>setEdit(true)}>edit</button>
                                <button type="button" className={`btn m-3 ${!item.done ? 'btn-success' : 'btn-warning'}` } onClick={() => todosContext.done(item.key)}>{item.done ? 'undone' : 'done'}</button>
                                <button type="button" className="btn btn-danger m-3" onClick={() => todosContext.delete(item.key)}>delete</button>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <TodoEdite key={item.key} item ={item} edit={editHandler}/>
                )
            }
        </>
   
)
}

export default Todo