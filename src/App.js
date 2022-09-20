import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

//import component
import Header from './Components/Layout/Header'
import FormAddToDo from './Components/Todo/FormAddToDo'
import TodoList from './Components/Todo/TodoList'

//import Context

import TodosContext from './Context/Todos'



function App() {

 
  const [todos, setTodos] = useState([]);
  

  function addTodo (formInput){
    setTodos(prevState => [...prevState,  {key : Date.now(), done: false, formInput}]);
  }

  function editTodo(key,text){
    let todo = todos.find(item => item.key=== key);
    todo.formInput = text;
    let newTodos = todos.filter(item => item.key !== todo.key)
    setTodos([...newTodos, todo])
  }

  function deleteTodo(key){
    setTodos(todos.filter(item => item.key !== key))
  }

 

  function togelTodo(key){
    let todo = todos.find(item => item.key=== key);
    todo.done = !todo.done;
    let newTodos = todos.filter(item => item.key !== todo.key)
    setTodos([...newTodos, todo])
  }
  


 

  return (
    <TodosContext.Provider value={{
      todos,
      add : addTodo,
      done : togelTodo,
      delete : deleteTodo,
      edit : editTodo

    }}>
        <div className="App">
          <Header/>
          <main>
            <section className="jumbotron">
              <div className="container d-flex flex-column align-items-center">
                  <h1 className="jumbotron-heading">Welcome!</h1>
                  <p className="lead text-muted">To get started, add some items to your list:</p>
                  <FormAddToDo/>
              </div>
            </section>
            <div className="todosList">
                  <div className="container">
                      <div className="d-flex flex-column align-items-center ">
                          <TodoList/>
                          
                      </div>
                
                  </div>
            </div>
          </main>
      </div>
    </TodosContext.Provider>
    
   
  );
}

export default App;
