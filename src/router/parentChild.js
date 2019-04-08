/*Props 实现父与子通信：*/
import React from 'react';
import BodyChild from '../components/BodyChild.js';

class ParentChild extends React.Component{
	constructor(){
        super();
        this.state = {username : "父级名称"}; //可以传json等很多格式（这个是初始化赋值）
    }
    //click事件函数
    changeAge(){
        this.setState({username:"父级名称--修改"})
    }
    //change事件函数
    changeUsername(event){
        this.setState({username:event.target.value})
    }
    render(){
       return(
            <div>
                <h1>这里是主体内容部分</h1>
                <p>{this.state.username}</p>
                <input type="button" value="点击改变username" onClick={this.changeAge.bind(this)}/>
                <BodyChild changeUsername={this.changeUsername.bind(this)}/>
            </div>
        )
    }
}
 
export default ParentChild;