import {createStore} from "redux";

function initialState() {
  return {
    username: '还未登陆',
    isLogin: false
  }
}

function countReducer(state = initialState(), action) {
  switch (action.type) {
    case "LOGIN":
      return {isLogin: true};
    case "LOGOUT":
      return {isLogin: false};
    default:
      return state;
  }
}

const store = createStore(countReducer);

export default store;
