

export default function TodoCard(props){
    const {children, handleDelete,index,handleEdit}= props;
   
    return (
<>
<li className="taskItems">
            {children}
            <div className="icon-btns">
                <button onClick={()=>handleEdit(index)}>
            <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button onClick={()=>{
                handleDelete(index)
            }}
            > 
            <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
        </li>
</>

    );
}