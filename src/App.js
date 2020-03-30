import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import IndexPage from './pages/IndexPage';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import auth from './reducers/AuthReducer';
import NewUserPage from './pages/NewUserPage';
const reducers = combineReducers({auth});
const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Route path="/" component={IndexPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/new-user" component={NewUserPage}/>
        </Router>
      </Provider>
    );
  }
}
