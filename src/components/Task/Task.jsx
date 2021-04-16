import style from './task.module.css'

function Task(props) {
    const task = props.task;
    return (
        
        <div className={style.wrapper}>
            <div className={style.task}>
                {task.name}
            </div>
            <div className={style.buttonsarea}>
                <RemoveTask
                onRemove={() => props.onRemove(task.id)}/>
                <EditTask/>
                <HighlightTask/>
            </div>
        </div>
       
   
     );
   
 }
 
 
function RemoveTask(props) {
    return(
      <button
        className={style.button}
        onClick={props.onRemove}>Remove</button>
    )
  }
  
  function EditTask() {
    return(
      <button 
        className={style.button}>Edit
        </button>
    )
  }
  
  function HighlightTask() {
    return(
      <button 
        className={style.button}>
          Highlight
        </button>
    )
  }


  export default Task;