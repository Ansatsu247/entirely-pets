import React, { Component } from 'react';
import '../css/category.css';

export default class Category extends Component {

    constructor(props) {
      super(props);
      this.state = {
        categoryOptions: [
          {
            name: 'Select Category',
            value: '',
          },
          {
            name: 'Dog',
            value: 'Dog',
          },
          {
            name: 'Cat',
            value: 'Cat',
          }
        ],
        sortOptions: [
          {
            name: 'Sort By',
            value: '',
          },
          {
            name: 'Lowest Price',
            value: 'low',
          },
          {
            name: 'Highest Price',
            value: 'high',
          }
        ],
        categoryValue: '',
        sortValue: ''
      };
    }

    handleCategoryChange = (event) => {
      this.setState({ categoryValue: event.target.value });
      this.props.onCategoryChange(event.target.value);
    };

    handleSortChange = (event) => {
      this.setState({ sortValue: event.target.value });
      this.props.onSortChange(event.target.value);
    };

    reset = (event) => {
      this.setState({
        categoryValue: '',
        sortValue: ''
      });
      this.props.resetAll('');
    }

    render() {
        const { categoryOptions, sortOptions, value } = this.state;

        return (
          <div className="categoryContainer">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <div className="form-group">
                  <select className="form-control categorySelect"
                    onChange={this.handleCategoryChange}
                    value = {this.state.categoryValue}>
                  {categoryOptions.map(item => (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                  </select>

                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4">
                <div className="form-group">
                  <select className="form-control categorySelect"
                    onChange={this.handleSortChange}
                    value = {this.state.sortValue}>
                  {sortOptions.map(item => (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                  </select>

                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4">
                <button type="button"
                        className="btn btn-primary reset"
                        onClick={this.reset}>Reset</button>
              </div>
            </div>
          </div>

        );
    }
}
