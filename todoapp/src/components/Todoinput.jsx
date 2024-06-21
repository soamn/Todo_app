

export default function TodoInput(props){
    const { handleAddTodo, todoValue, settodoValue}= props;
  
    return (
       <>
       <div className="head">
        <label htmlFor='todo-input'>Enter Your Todo</label>
       <input 
       value={todoValue}
        onChange={(e)=>settodoValue(e.target.value)}  
        type='text' id='todoIinput'
        className='todoInput'
         placeholder="Enter tasks..."
         onKeyDown={(e)=>{
            if(e.key === "Enter"){
                handleAddTodo(todoValue);
                settodoValue('');
            }
         }}
         />
       <button onClick={ 
        ()=>{
            handleAddTodo(todoValue)
            settodoValue('')
       }}
      className="add-btn">Add</button>
       </div>
       </>
    );
}