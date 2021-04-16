import React from 'react';
import style from './TaskHeader.module.css'



class TaskHeader extends React.Component {  
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onSubmit(e) {
      e.preventDefault();
      // console.log(e.target[0].value);
      this.props.submitTask(e);
    }
    render() {    
      // console.log(`rendering Createtask InputValue: ${this.props}`)
      return(
        <div className={style.wrapper}>
          <form onSubmit={this.onSubmit}>
            <input 
              className={style.input}
              type="text" 
              placeholder="Type to create a new task..."
              value={this.props.inputValue}          
              onChange={this.props.InputValueChange}>
                
            </input>
            <input
              className={style.button}
              type="submit" 
              value="Create Task"
              >
            </input>
    
          </form>
        </div>
      );
    }
  }
  

  export default TaskHeader;