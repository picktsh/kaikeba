// 创建仓库
export function createStore(reducer, enhancer) {
  // 应用中间件
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  
  // 仓库初始时的 state
  let currentState = undefined;
  let currentListeners = [];
  
  function getState() {
    // 直接返回 state
    return currentState;
  }
  
  function dispatch(action) {
    // 根据 reduce 规则,修改 state,做个简单无变化判断
    let nextState = reducer(currentState, action);
    if (nextState !== currentState) {
      currentState = nextState;
      // 修改完 state 后,调用所有订阅的回调(通知订阅者更新了state)
      // 监听函数是一个数组，那就循环吧
      currentListeners.map(listener => listener());
    }
  }
  
  //订阅，可以多次订阅
  function subscribe(listener) {
    // 每次订阅,把回调放入回调数组
    currentListeners.push(listener);
  }
  
  // 派发一次事件,保证页面第一次加载能够得到初始化后的值(React中又怎么实现的呢???)
  // 取值的时候，注意一定要保证不和项目中的会重复
  dispatch({type: "@INITIAL/REDUX-KKB"});
  
  return {
    getState,
    dispatch,
    subscribe
  };
}

// 应用中间件
export function applyMiddleware(...middlewares) {

}
