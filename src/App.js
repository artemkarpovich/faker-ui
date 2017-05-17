import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from './components/Table';
import { usersFetchRequested, setCurrentPage } from './actions/users';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { actions, users: { pagination: { page, perPage } } } = this.props;

    actions.usersFetchRequested(page, perPage);
  }

  handleSetCurrentPage = (currentPage) => {
    const { actions, users: { pagination: { perPage } } } = this.props;

    actions.setCurrentPage(currentPage);
    actions.usersFetchRequested(currentPage, perPage);
  }

  render() {
    const { users: { items, numberOfItems, pagination: { page, perPage } } } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Table
          items={items}
          page={page}
          perPage={perPage}
          numberOfItems={numberOfItems}
          onSetCurrentPage={this.handleSetCurrentPage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    usersFetchRequested,
    setCurrentPage,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
