//React 事件处理
import React from 'react';

class reactEvent extends React.Component{
	constructor(){
        super();
        this.state = {
        	name:'Hello world!',
        	liked: false,
        	flag:false
        };
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }
	
	handleClick(){
	    this.setState(prevState =>({
	    	liked: !prevState.liked
	    }))
	}
    
    preventPop(name, e){//事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }
    // 警告：这种语法还处于实验性阶段,也就意味着，语法随时都可能改变。当然，也存在最终没有被官方批准的可能。
    // 在这里使用箭头函数就可以把方法绑定给实例：
    clickMe = () =>{
    	this.setState({
    		flag:!this.state.flag
    	});
    }
    
    deleteRow = (e) =>{
    e.preventDefault();
    console.log(e.target);
  }

    render(){
    	const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div>
                <div onClick={this.handleClick}>You {text} this. Click to toggle.</div>
                {/* 通过 bind() 方法传递参数。 */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            	<div onClick={this.clickMe}>Click me {this.state.flag?'true':'false'}</div>
            	<button onClick={(e) => this.deleteRow(e)}>Delete Row</button>
            </div>
        );
    }
}
 
export default reactEvent;


/*为了保险起见，以下三种做法都是可以的：

把方法绑定给构造器 (constructor)
使用箭头函数，比如这样写：onClick={(e) => this.handleClick(e)}.
使用 createReactClass.*/