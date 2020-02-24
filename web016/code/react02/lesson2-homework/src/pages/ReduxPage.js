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
  
  // ========== 华丽的分割线 ==========
  // input的 事件,每次变更都把最新的值更新到store
  onChange = (e) => {
    console.log(e.target.value);
    store.dispatch({
      type: "ONCHANGE",
      payload: {
        value: Number(e.target.value)
      }
    });
  };
  CONFIRM = (value) => {
    console.log('--confirm', Number(value));
    if (Number(value) === 0 && !isNaN(Number(value))) return console.log('拜托,0就不要＋啦,没意义');
    store.dispatch({
      type: 'ADD',
      // 把 countReducer 中的 数据给传过去!  除了从这里传还能从别的什么地方能访问到呢???
      payload: {
        inputValue: Number(value)
      }
    })
  };
  
  render() {
    console.log("store 实例", store); //sy-log
    const state = store.getState();
    console.log('最终 state', state);
    return (
      <div>
        <h3>ReduxPage</h3>
        {/* getState获取数据 */}
        <p>state: {state.countReducer}</p>
        <button onClick={this.add}>add +1</button>
        <button onClick={this.minus}>minus -1</button>
        <button onClick={this.asyAdd}>asyAdd +1</button>
        <hr/>
        输入框的值每变化一次就会更新对应的store <br/>
        <input type="number" value={state.inputReducer.inputValue} onChange={(e) => this.onChange(e)}/>
        {state.inputReducer.inputValue}
        <button onClick={() => this.CONFIRM(state.inputReducer.inputValue)}>+</button>
        <br/>点击按钮,将这个值和最上面的数字进行 + 计算 <br/>
      </div>
    );
  }
}
