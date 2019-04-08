import React from 'react';
//Refs 提供了一种方式，用于访问在 render 方法中创建的 DOM 节点或 React 元素。
class ReactRefs extends React.Component{
	handleClick() {
	    // 使用原生的 DOM API 获取焦点
	    this.refs.myInput.focus();
  	}
	render(){
		return(
			<div>
		        <input type="text" ref="myInput" />
		        <input
		          type="button"
		          value="点我输入框获取焦点"
		          onClick={this.handleClick.bind(this)}
		        />
	      	</div>
		);
	}
}
 
export default ReactRefs;