// import logo from './logo.svg';
import React from 'react';
import Task from './components/Task/Task'
import './App.css';
import TaskHeader from './components/TaskHeader/Taskheader';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          {name: "Create todo app on React", id: 1}, 
          {name: "Create better UI for this app", id: 2}
        ],
      newTask: "",
    }
    this.submitNewTask = this.submitNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {     
    this.setState({
      newTask: e.target.value
    });    
  }

  removeTask(id) {
    // console.log('remove task');
    let tasklist = this.state.tasks;
    tasklist.splice(tasklist.findIndex(task => task.id === id), 1)    
    this.setState({
      tasks: tasklist
    })
    // console.log(this.state);

  }

  submitNewTask(e) {    
    console.log(e.target[0].value);
    let tasklist = this.state.tasks;
    tasklist.push({name: e.target[0].value, id: 3});
    this.setState ({
      tasks: tasklist,
      newTask: ""
    });
    // console.log(this.state.tasks);
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        <TaskHeader 
            submitTask={this.submitNewTask}
            InputValueChange={this.inputChange}
            inputValue={this.state.newTask}
            />
          {this.state.tasks.map((task) => {
            return (
              <Task 
                key={task.id} 
                task={task} 
                onRemove={this.removeTask}/>
            )              
          })}
          
        </header>
        
      </div>
    );
    };
  
}

export default App;
