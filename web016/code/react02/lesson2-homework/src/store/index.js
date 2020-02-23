// import {createStore, applyMiddleware} from 'redux'
import {createStore, applyMiddleware} from '../lib/kRedux'

function reducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
