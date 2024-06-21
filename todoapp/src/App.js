import { useEffect, useState } from "react";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/Todolist";

export default function App() {

const [todos,setTodos]= useState([]);
const [todoValue, settodoValue]=useState('');
    function persistData(newList){
      localStorage.setItem('todos',JSON.stringify( {todos: newList }))
    }
    function handleAddTodo(newTodo){
     if(newTodo){
        const newTodoList =[...todos, newTodo];
        persistData(newTodoList);
        setTodos(newTodoList)
     }
     else{
      alert("no value entered");
     }
    }

    function handleDelte(index){
        const newTodoList= todos.filter((todos, todoIndex)=>
          todoIndex!= index);
        setTodos(newTodoList);
    }
    function handleEdit(index){
          const valueToBeEdited= todos[index];
          settodoValue(valueToBeEdited);
          handleDelte(index);
    }

    useEffect(()=>{
      if(!localStorage){
        return;
      }
      let localTodos = localStorage.getItem('todos')
      if(localTodos){
        localTodos=JSON.parse(localTodos).todos
        setTodos(localTodos)
      }

    },[])

  return (
   <>
  <TodoInput todoValue={todoValue} settodoValue={settodoValue} handleAddTodo={handleAddTodo}/>
  <TodoList handleDelete={handleDelte} handleEdit={handleEdit} todos={todos}/>
   </>
  );
}


