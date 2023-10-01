import { useSelector, useDispatch } from "react-redux";
import { addtodo ,deletetodo,edittodo,savetodo } from "./redux/todo";
import { MDBInput } from 'mdb-react-ui-kit'
import 'bootstrap/dist/css/bootstrap.min.css';



import "./App.css";
import { useRef } from "react";

function App() {
  const myRef=useRef()
  const todo = useSelector((state) => state.list.todos);
  console.log(todo);
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    const value = e.target.todo.value;
    dispatch(addtodo(value));
    e.target.reset()
    console.log(value);
  };
const save = (id)=>{
  const savevalue = myRef.current.value
  dispatch(savetodo({id:id,value:savevalue}))
}
const reversetodo=[...todo].reverse()




  return (
    
    <div class=" container rounded-3 border border-2 border-white my-5 bg-white" style={{height:"auto;"}}>
  

  <h1 style={{textAlign:'center' }} >TODO APP</h1>

      <form onSubmit={add}>
      <div class=" col-8" >
        <input class=" py-3 form-control shadow" placeholder="add task" id="todo" type="text"  required/>
        </div>

     <br/>
     <br/>
     <div class="col-2">
        <button class=" mt-2 btn btn-primary" type="submit">ADD</button>
        </div>
        <br/>

      </form>
      <ul>
        {reversetodo.map((todos, index) => (
          <li key={todos.id}>
            

          {(todos.editkey==true)?
          <>
           <MDBInput
            value={todos.value} 
          />

            <button class=" mt-2 btn btn-danger" onClick={()=>dispatch(deletetodo(todos.id))}>Delete</button>
            <br/>
            <br/>
        
            <button class=" mt-2 btn btn-success" onClick={()=>dispatch(edittodo(todos.id))}>edit</button>
            </>:<>
          
             <MDBInput  type='text' ref={myRef} />
             <button class=" mt-2 btn btn-success" type="button" onClick={()=>save(todos.id)}>save</button>
            </>
          }</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

