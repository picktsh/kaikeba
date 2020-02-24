import {createStore, applyMiddleware, combineReducers} from 'redux'

// import {createStore, applyMiddleware} from '../lib/kRedux'

function countReducer(state = 1, action) {
  
  switch (action.type) {
    case 'ADD':
      // console.log(action);
      let inputValue = action.payload && action.payload.inputValue;
      if (inputValue) {
        return state + inputValue;
      } else if (inputValue === 0 && !isNaN(inputValue)) {
        // 0 算是个什么操作?虽然外面有加判断,安全起见这里还是要加判断
        return state
      }
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

// 输入框组的reducer,输入,确认添加,确认减少
function inputReducer(state = {inputValue: 2}, action) {
  switch (action.type) {
    case 'ONCHANGE':
      return {inputValue: action.payload.value};
    // case 'CONFIRM':
    //   这里有办法拿到其他reducer的值吗?允许这样吗?似乎不合理也不可以
    //   console.log('--CONFIRM', state);
    //   return {...state, countReducer: action.payload.countReducer + state.inputValue};
    // // return state;
    default:
      return state
  }
}

const rootReducer = combineReducers({countReducer, inputReducer});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;

function logger({getState, dispatch}) {
  return dispatch => action => {
    console.log(action.type + " 执行了;", 'payload:', action.payload); //sy-log
    return dispatch(action);
  };
}

function thunk({getState, dispatch}) {
  return dispatch => action => {
    // action 可以是对象 还可以是函数 ，那不同的形式，操作也不同
    if (typeof action === "function") {
      return action(dispatch, getState);
    } else {
      return dispatch(action);
    }
  };
}
