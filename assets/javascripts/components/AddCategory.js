import React, { Component } from 'react';

export default class AddCategory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categoryName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(event) {
    this.setState({ categoryName: event.target.value });
  };

  handleClick(event) {
    var key = this.state.categoryName;
    this.props.addCategory(key);
    
  };

  render() {
    return (
      <div id='add-category'>
        <input type='text' 
          value={this.state.categoryName} 
          onChange={this.handleChange} 
          placeholder='Category'
        />
        <button onClick={this.handleClick}> Add Category </button>
      </div>
    ); 
  };
}
