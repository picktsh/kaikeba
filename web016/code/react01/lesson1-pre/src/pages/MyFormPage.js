import React, {Component} from "react";
import kFormCreate from "../components/kFormCreate";

const nameRules = {required: true, message: "请输入任意位中文", regExp: /[\u4e00-\u9fa5]/};
const passwordRules = {required: true, message: "请输入6位数字", regExp: /^[1-9]{6}\d*$/};

@kFormCreate
class MyFormPage extends Component {
  submit = () => {
    const {getFieldsValue, getFieldValue, validateFields} = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err); //sy-log
      } else {
        console.log("success", values); //sy-log
        // 操作提示,在输入框下给出相关提示
        alert("验证通过")
      }
    });
    console.log("submit", getFieldsValue(), getFieldValue("password"));
  };
  
  render() {
    console.log("props", this.props); //sy-log
    const {getFieldDecorator} = this.props;
    return (
      <div>
        <h3>MyFormPage</h3>
        {getFieldDecorator("name", {rules: [nameRules]})(
          <input type="text" placeholder={nameRules.message}/>
        )}
        {getFieldDecorator("password", {rules: [passwordRules]})(
          <input type="password" placeholder={passwordRules.message}/>
        )}
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default MyFormPage;
