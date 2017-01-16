import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
import AddTask from './components/AddTask';
import Category from './components/Category';
import CategoryList from './components/CategoryList';

export default class TaskManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      tasks: []
    };

    chrome.storage.sync.get(null, function(categoryKeys) {   // get all keys from chrome storage
      var allKeys = Object.keys(categoryKeys);                      // store them in list
      this.setState( {categories: allKeys} );                // assign list of JSX objects to attribute 'categories'
    }.bind(this)); 

  };

  currentDate() {
    var date = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var dayOfWeek = weekdays[date.getDay()];
    var month = months[date.getMonth()]; 
    var day = date.getDate();
    var year = date.getFullYear();

    return <h1>{dayOfWeek}, {month} {day}, {year} </h1>; 
  };

  render() {
    return (
      <div>
      { this.currentDate() }
      <CategoryList categories={this.state.categories}/>
      </div> 
    );

  };
}

ReactDOM.render(React.createElement(TaskManager) , document.getElementById('app'));
