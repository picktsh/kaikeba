import React, {Component} from "react";
import store from "../store/";

export default class ReduxPage extends Component {
  componentDidMount() {
    // 订阅
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  
  add = () => {
    // 派发操作
    store.dispatch({type: "ADD"});
  };
  minus = () => {
    store.dispatch({type: "MINUS"});
  };
  asyAdd = () => {
    // 异步派发操作(需要中间件来实现)
    console.log('asyAdd 的 ADD 开始执行');
    store.dispatch(dispatch => {
      setTimeout(() => {
        dispatch({type: "ADD"});
      }, 1000);
    });
  };
  
  render() {
    console.log("store", store); //sy-log
    return (
      <div>
        <h3>ReduxPage</h3>
        {/* getState获取数据 */}
        <p>state: {store.getState()}</p>
        <button onClick={this.add}>add +1</button>
        <button onClick={this.minus}>minus -1</button>
        <button onClick={this.asyAdd}>asyAdd +1</button>
      </div>
    );
  }
}
