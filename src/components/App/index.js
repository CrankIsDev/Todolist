// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import initialTasks from 'src/data/tasks';

// == Import : composants
import Counter from 'src/components/Counter';
import Form from 'src/components/Form';
import Tasks from 'src/components/Tasks';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTasks,
      newTaskLabel: '',
    };

    this.handleAddTask = this.handleAddTask.bind(this);

    this.toggleTask = this.toggleTask.bind(this);
    this.changeTaskDone = this.changeTaskDone.bind(this);
    this.changeTaskFav = this.changeTaskFav.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  generateId = () => {
    const { tasks } = this.state;
    const ids = tasks.map((task) => task.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    return maxId + 1;
  }

  handleChange = (newValue) => {
    this.setState({
      newTaskLabel: newValue,
    });
  }
  handleAddTask() {
    const newTask = {
      id: this.generateId(),
      label: this.state.newTaskLabel,
      done: false,
      fav: false,
    };

    const newTasks = [...this.state.tasks];
    newTasks.push(newTask);
    this.setState({
      tasks: newTasks,
    });

    this.setState({
      newTaskLabel: '',
    });
  }

  changeTaskDone(id) {
    this.toggleTask(id, 'done');
  }

  changeTaskFav(id) {
    this.toggleTask(id, 'fav');
  }

  toggleTask(id, key) {
    const { tasks } = this.state;
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          [key]: !task[key],
        };
      }
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  }

  deleteTask(id) {

    const { tasks } = this.state;
    const newTasks = tasks.filter((task) => task.id !== id);

    this.setState({
      tasks: newTasks,
    });
  }

  getFilteredTasks(tasks) {
    return [
      ...tasks.filter((task) => !task.done && task.fav),
      ...tasks.filter((task) => !task.done && !task.fav),
      ...tasks.filter((task) => task.done),
    ];
  }
  render() {
    console.log('on refait le rendu');

    const nbTasksNotDone = this.state.tasks.filter((task) => !task.done).length;
    const filteredTasks = this.getFilteredTasks(this.state.tasks);

    return (
      <div id="app">
        <Form
          handleSubmit={this.handleAddTask}
          label={this.state.newTaskLabel}
          handleChange={this.handleChange}
        />
        <Counter nbTasks={nbTasksNotDone} />
        <Tasks
          actions={{
            onChangeTaskDone: this.changeTaskDone,
            onChangeTaskFav: this.changeTaskFav,
            onDeleteTask: this.deleteTask,
          }}
          tasks={filteredTasks}
        />
      </div>
    );
  }
}

export default App;