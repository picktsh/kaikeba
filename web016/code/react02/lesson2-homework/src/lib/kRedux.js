// 创建仓库
export function createStore(reducer, enhancer) {
  // 应用中间件-高阶函数
  // 第一次调用(一调):要加强的方法(自己)
  // 第二次调用(二调):保持传入原来的修改规则
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

// 应用中间件,(把上面的 createStore 整体做了一边封装)
export function applyMiddleware(...middlewares) {
  // 第一次调用,传入的是基础方法 (箭头函数写法)
  // return createStore => (...args) => {
  //   const store = createStore(...args);
  //   /** 需要加强具体的方法写在这里 举例:dispatch*/
  //   return {
  //     ...store
  //     // 覆盖原方法 dispatch
  //   }
  // };
  return function (createStore) {
    return function (...args) {
      // 把原有的方法创建一份,--做他本来要做的事情
      const store = createStore(...args);
      // 下面开始封装 dispatch
      let dispatch = store.dispatch;
      const middleApi = {
        getState: store.getState,
        dispatch
      };
      // 给middleware参数，比如说dispatch
      const middlewaresChain = middlewares.map(middleware =>
        middleware(middleApi)
      );
      dispatch = compose(...middlewaresChain)(dispatch);
      // 返回所有基础方法+封装过后的方法
      return {
        ...store,
        // 覆盖 store 中原有的 dispatch 方法
        dispatch
      }
    }
  }
}

// 聚合函数 把第⼀个函数的返回值作为参数,传递给下⼀个函数 f3(f2(f1))
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
    // return () => {};
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  // 关键操作 reduce
  // return funcs.reduce((acc, cur) => (...args) => acc(cur(...args)));
  return funcs.reduce(function (accumulator, currentValue) {
    return function (...args) {
      return accumulator(currentValue(...args))
    }
  });
}
