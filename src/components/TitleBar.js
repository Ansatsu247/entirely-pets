import React, { Component } from 'react';
import '../css/TitleBar.css';

export default class TitleBar extends Component {

    constructor(props) {
      super(props);
      this.state = { term: '' };
    }

    render() {
        return (
          <header>
              <div className="title-container">
                <div className="row">
                  <div className="col-md-4 col-sm-12 col-xs-12">
                    <img src={this.props.logo} alt="Entirely Pets Logo" />
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="input-group">
                      <input type="text" className="form-control"
                        placeholder="Search" id="txtSearch"
                        onChange={event => this.onInputChange(event.target.value)}
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-primary" type="submit">
                          <span className="glyphicon glyphicon-search"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 col-xs-12">
                    <span className="glyphicon glyphicon-comment glyphStyle"></span>
                    <span className="glyphicon glyphicon-shopping-cart glyphStyle"></span>
                  </div>
                </div>
              </div>
              <div className="hero">
                <div className="row">
                  <img src={this.props.heroImg} alt="heroImg" />
                </div>
              </div>

          </header>
        );
      }

      onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
      }
}
