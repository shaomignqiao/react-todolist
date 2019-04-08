//React 表单与事件
import React from 'react';
import FlavorForm from '../components/form/flavorForm.js';
import Content from '../components/form/content.js';
//总之，<input type="text">, <textarea>, 和 <select> 都十分类似 - 他们都通过传入一个value属性来实现对组件的控制。

class FormEvents extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
      	value: 'Hello Runoob!',
      	isGoing: true,
      	numberOfGuests: 2
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  } 
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
    //注意我们如何使用ES6当中的计算属性名语法来更新与给定输入名称相对应的状态键：
    //在ES6中，把属性名用[ ]括起来，则括号中就可以引用提前定义的变量。
  }
  render() {
    var value = this.state.value;
    return <div>
             	<Content myDataProp = {value} updateStateProp = {this.handleChange}></Content>
              <FlavorForm />
 {/*当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么。*/}             	
              <hr/>	
              	<form>
					        <label>
					          是否离开:
					          <input
					            name="isGoing"
					            type="checkbox"
					            checked={this.state.isGoing}
					            onChange={this.handleInputChange} />
					          {/*false、null、undefined 和 true 都是有效的子代，只是它们不会被渲染。*/}
					          {/*false、true、null 或 undefined 出现在输出中，你必须先把它转换成字符串 :*/}
					          <span>{String(this.state.isGoing)}</span>
					        </label>
					        <br />
					        <label>
					          访客数:
					          <input
					            name="numberOfGuests"
					            type="number"
					            value={this.state.numberOfGuests}
					            onChange={this.handleInputChange} />
					          <span>{this.state.numberOfGuests}</span>
					        </label>
      					</form>
           </div>;
  }
}
 
export default FormEvents;