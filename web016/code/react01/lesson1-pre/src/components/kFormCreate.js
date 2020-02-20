import React, {Component} from "react";

export default function kFormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }
    
    handleChange = e => {
      // setState name value
      let {name, value} = e.target;
      this.setState({[name]: value});
    };
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return InputCmp => {
        //克隆一份
        return (
          <div className="form-item">
            {React.cloneElement(InputCmp, {
              name: field,
              value: this.state[field] || "",
              onChange: this.handleChange
            })}
            <div className="form-msg" style={{height: '21px', color: 'red'}}>
              {this.state['show_' + field + '_Message'] &&
              option.rules[0].message}
            </div>
          
          </div>)
      };
    };
    getFieldsValue = () => {
      return {...this.state};
    };
    getFieldValue = field => {
      return this.state[field];
    };
    validateFields = callback => {
      // 校验错误信息
      const errors = {};
      const state = {...this.state};
      for (let name in this.options) {
        // 字段验证，或正则验证
        // 提示消息内容
        // 提示消息是否显示,这是在submit的时候做的事情
        console.log(this.options[name].rules[0].regExp.test(state[name]), state[name]);
        if ((!state[name]) || this.options[name].rules[0].regExp.test(state[name]) === false) {
          // if (!state[name]) {
          // 没有输入，判断为不合法
          errors[name] = "error";
          // 设置是否显示提示消息的状态
          this.setState({['show_' + name + '_Message']: true})
        } else {
          this.setState({['show_' + name + '_Message']: false})
        }
      }
      if (JSON.stringify(errors) === "{}") {
        // 合法
        callback(undefined, state);
      } else {
        callback(errors, state);
      }
    };
    
    render() {
      return (
        <div className="border">
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />
        </div>
      );
    }
  };
}
