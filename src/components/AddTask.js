import React from "react";

class AddTask extends React.Component {

handleSubmit = (e) =>{
  e.preventDefault()
//   console.log(this.newTask.value)
let taskName = this.newTask.value
this.props.addTask(taskName)
this.props.history.push('/')
}
  render() {
    return (
      <section>
        <h1 className="m-3">Nouvelle tâche</h1>
        <div className="card mx-3">
          <form className="card-body" onSubmit={ e => this.handleSubmit(e) }>
            <div className="form-group">
              <label form="taskName">Nom de la tâche</label>
              <input
                type="text"
                className="form-control"
                name="taskName"
                id="taskName"
                required
                ref={(input) => (this.newTask = input)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Créer
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default AddTask;
