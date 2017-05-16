import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Lecturers from './components/lecturers/Lecturers';
import Video from './components/video/Video';

import reducers from './reducers';

import './components/bundle.scss';


import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io.connect('http://localhost:3000');


let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
function reducer(state = {}, action){
    switch(action.type){
        case 'message':
            return Object.assign({}, state, {message:action.data});
        default:
            return state;
    }
}
let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);
store.subscribe(()=>{
    console.log('new client state', store.getState());
});
store.dispatch({type:'server/hello', data:'Hello!'});


ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />;
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} ssss={store} />
        <Route path="/lecturers" component={Lecturers} />
        <Route path="/video" component={Video} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
