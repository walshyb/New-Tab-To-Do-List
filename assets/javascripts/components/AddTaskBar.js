import React, { Component } from 'react';
import AddCategory from './AddCategory';

export default class AddTaskBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      currentCategory: '',
      displayAddCategoryField: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.setCategoryOption = this.setCategoryOption.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    var categories = this.props.categories;
    
    categories.map((category) => {
      var name = Object.keys(category)[0];
      if (name === this.state.currentCategory) {

        var tasks = category[name];
        tasks.push(this.state.inputValue);
        this.props.updateCategory(name, tasks);

        this.setState({
          inputValue: '',
        });
      }
    });
  };

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleSelectChange(event) {
    if(event.target.value !== '' && event.target.value !== 'add-category') {

      this.setState({
        currentCategory: event.target.value,
        displayAddCategoryField: false
      });
    } else if (event.target.value === 'add-category') {

      this.setState({
        currentCategory: event.target.value,
        displayAddCategoryField: true
      });
    } else {

      this.setState({
        currentCategory: event.target.value,
        displayAddCategoryField: false
      });
    }
  };

  renderCategoryOptions() {
    const categoryNames = this.props.categories.map((category) => {
      var name = Object.keys(category)[0];
      return <option value={name} key={name}> {name} </option>;
    });

    return categoryNames;
  };

  setCategoryOption(categoryName) {
    this.setState({
      currentCategory: categoryName,
      displayAddCategoryField: false
    });
  };

  render() {
    return (
      <div id='add-task-bar'>
        <input 
          type='text' 
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder='What do you need to get done?' 
        />
        <select id='select-category' value={this.state.currentCategory} onChange={this.handleSelectChange}>
          <option value=''>Category</option>
          { this.renderCategoryOptions() }
          <option value='add-category'>Add Category</option>
        </select>
      
        { this.state.displayAddCategoryField ? <AddCategory updateCategory={this.props.updateCategory} setCategoryOption={this.setCategoryOption}/> : null }

        <button id='add-task' onClick={this.handleClick}> + </button>
      </div>
    );
  };
}

AddTaskBar.propTypes = {
  updateCategory: React.PropTypes.func.isRequired,
  categories: React.PropTypes.array.isRequired
};
