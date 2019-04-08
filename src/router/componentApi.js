//React 组件 API
//1.设置状态：setState
//2.替换状态：replaceState
//3.设置属性：setProps
//4.替换属性：replaceProps
//5.强制更新：forceUpdate
//6.获取DOM节点：findDOMNode
//7.判断组件挂载状态：isMounted
import React from 'react';

class componentApi extends React.Component{
	constructor(props) {
        super(props);
        this.state = {clickCount: 0};
        this.handleClick = this.handleClick.bind(this);	
	}
	handleClick() {
	    this.setState(function(state) {
	      return {clickCount: state.clickCount + 1};
	    });
  	}
	render(){
		return (
			<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>
		);
	}
}
 
export default componentApi;