import React, { Component } from 'react';
import Task from './Task';

export default class CategoryListItem extends Component {
  constructor(props) {
    super(props);
    this.removeTask = this.removeTask.bind(this);
  };

  removeTask(task) {
    var index = this.props.tasks.indexOf(task);
    var newArray = this.props.tasks;

    if (index > -1 ) {
      newArray.splice(index, 1);
      this.props.updateCategory(this.props.categoryName, newArray);
    }
  };

  render() {
    const tasks = Object.keys(this.props.tasks).map(function(task) {
      return <Task key={task} text={this.props.tasks[task]} taskId={task} removeTask={this.removeTask}/>;
    }.bind(this));
    return (
      <article className='category' id={this.props.id}>
        <h2> {this.props.categoryName} </h2>
        <ul> { tasks } </ul>
     </article>
    );
  };  
}
