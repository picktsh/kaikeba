import React, {Component} from "react";
import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
import {bindActionCreators} from "../kReactRedux";

function mapStateToProps(state) {
  // mapStateToProps Function 把state映射到了props上
  // return {...state}
  return {count: state}
}

function mapDispatchToProps(dispatch) {
  // mapDispatchToProps Object/Function 不定义，默认注入dispatch
  // {
  //   add: () => ({type: "ADD"})
  // }
  let actions = {
    add: () => ({type: "ADD"}),
    minus: () => ({type: "MINUS"})
  };
  actions = bindActionCreators(actions, dispatch);
  return {
    dispatch,
    ...actions
  };
  
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  // 如果指定了这个参数，`mapStateToProps()` 与 `mapDispatchToProps()` 的执⾏结果和组件⾃身的`props` 将传⼊到这个回调函数中。
  
  console.log("mergeProps", stateProps,
    dispatchProps, ownProps); //sy-log
  return {
    omg: "omg",
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  };
}

class ReactReduxPage extends Component {
  render() {
    console.log("props", this.props); //sy-log
    const {count, dispatch, add, minus} = this.props;
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={() => dispatch({type: "ADD"})}>
          add - use dispatch
        </button>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    );
  }
}

// connect帮助组件获得store，hoc，返回了一个新的组件
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ReactReduxPage);
