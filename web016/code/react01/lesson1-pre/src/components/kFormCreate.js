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
        return React.cloneElement(InputCmp, {
          name: field,
          value: this.state[field] || "",
          onChange: this.handleChange
        });
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
        if (state[name] === undefined) {
          // 没有输入，判断为不合法
          errors[name] = "error";
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
