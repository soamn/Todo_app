import Todocard from "./Todocard"


export default function TodoList(props){
   const { todos}=props;
    return(
        <>

         <div className="todo-list-box">
            <h1>TodoList</h1>
            <ul>
    {todos.map((item,itemIndex)=>{
       return(
           <Todocard {...props} index={itemIndex} key={itemIndex}>
            <p>{item}</p>
           </Todocard>  
    );
    })}
</ul>

        </div>
        </>
       
    )
}