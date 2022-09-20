import React, {useState, useContext} from "react";
import TodosContext from "../../Context/Todos";



function FormAddToDo(props){

    const [formInput, setFormInput]  = useState("");
    
    const todosContext = useContext(TodosContext);

    const formHandler = e =>{
        e.preventDefault();
        todosContext.add(formInput);
        setFormInput('');
       
      }
    const inputeHandler = e => setFormInput(e.target.value);

    return(
        <form className="row g-3" onSubmit={formHandler}>
           
            <div className="col-auto">
                <input type="text" className="form-control" placeholder="i want to do ..." value={formInput}  onChange={inputeHandler}/> 
            </div>
            <div className="col-auto">
                <button type='submit' className="btn btn-primary">add</button>
            </div>
            
        </form>
    )
}
export default FormAddToDo;