import React from "react";
import NavBar from "./Navbar";
import TodoList from "./TodoList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddTask from "./AddTask";
import initial_data from "../initial_data";
import uniqueId from "uniqueid";
import Fetching from "./Fetching";

class App extends React.Component {
  state = {
    tasks: [],
    fetching: true,
  };
  onToggleCompleted = (taskID) => {
    let taskToUpdate = this.state.tasks.find((task) => task.id === taskID);
    taskToUpdate.completed = !taskToUpdate.completed;

    this.setState((prevState) => {
      prevState.tasks.map((task) => {
        return task.id === taskID ? taskToUpdate : task;
      });
    });
  };

  AddTask = (newTaskName) => {
    let newTask = {
      id: uniqueId(),
      name: newTaskName,
      completed: false,
    };

    this.setState((prevTask) => ({
      tasks: [...prevTask.tasks, newTask],
    }));
  };

  onDeleteCompletedTask = () => {
    this.setState((prevState) => {
      let newState = prevState.tasks.filter((task) => !task.completed);
      return {
        tasks: newState,
      };
    });
  };

  shouldComponentUpdate = () => {
    console.log("Good Morning shouldComponentUpdate !");
    return true;
  };

  componentDidMount = () => {
      let delay = Math.floor(Math.random()*5000)

      setTimeout(() =>{
         this.setState({
             fetching:false,
             tasks : initial_data
         })
      }, delay)

    console.log("Good Morning componentDidMount !");
  };

  componentDidUpdate = () => {
    console.log("Good Morning componentDidUpdate !");
  };

  getSnapshotBeforeUpdate = () => {
    console.log("Good Morning getSnapshotBeforeUpdate !");
    return true;
  };

  render() {
    console.log("Good Morning render");
    // return <Button color="default">UI Button</Button>;
    return (
      <section id="todo">
        {this.state.fetching ? <Fetching /> : null}
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" component={} /> */}
            <Route
              path="/add-task"
              render={(props) => <AddTask {...props} addTask={this.AddTask} />}
            />
            <Route
              path="/:filter?"
              render={(props) => (
                <TodoList
                  {...props}
                  tasks={this.state.tasks}
                  onToggleCompleted={this.onToggleCompleted}
                />
              )}
            />
          </Switch>
          <NavBar onDeleteCompleted={this.onDeleteCompletedTask} />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
