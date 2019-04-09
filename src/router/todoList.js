import React from 'react';
import Header from '../components/todolist/header'
import ItemList from '../components/todolist/itemList'
import Footer from '../components/todolist/footer'
import Toast from '../components/toast'
class TodoList extends React.Component{
	constructor(props) {
      super(props);
      this.state = {
      	statusType:[
      		{title:"正在进行",status:false},
      		{title:"已经完成",status:true}	
      	],
      	value:'',
      	editInput:'',
      	todolist:JSON.parse(localStorage.getItem("todolist"))||[]
      }; 
       //绑定挂载事件
       this.componentDidMount = this.componentDidMount.bind(this);
    }
	componentDidMount () {
	  //监听localstorage的todolist属性值改变
	  const _this=this; 
      window.addEventListener("storage", function (event) {
        if(event.key === 'todolist'){
        	if(event.newValue){
        		_this.setState({
		        	todolist: JSON.parse(event.newValue)
		    	})
        	}//当手动清除缓存的时候，event.newValue为null
        	else{
        		_this.setState({
		        	todolist: []
		    	})
        	}
        }
      }, false);
	}
	//卸载React组件
	componentWillUnmount() {
    
    }
	saveData(todolist){
		localStorage.setItem("todolist",JSON.stringify(this.state.todolist)) 
	}
	clearStorage(){
		localStorage.removeItem('todolist');
		this.setState({
			todolist:[ ],
		});
	}
	handleChange(event) {
      var value=event.target.value;
      this.setState({
		value
	  })
   }
	inputKeyUp(event){
		var regu = "^[ ]+$";
	    var re = new RegExp(regu);
	    //为空或纯空格为 true    有值为false
	    if(!re.test(this.state.value)){
	    	let addValue={
		  	 title:this.state.value,done:false,edit:false,id:Date.now()
		  	//因为数据有可能会删除所以这个id不能用数组的长度,当留下的数组的id为1数组长度为1再去获取长度会得到1，这样key就不是唯一的了
		  	//网上有很多js生成随机不唯一的id
		    }  
			this.setState((prevState, props) => ({
				todolist: [addValue, ...this.state.todolist],
			    value: ''
			}),()=>{
		    	this.saveData();
		   });
	    //React的setState方法是个异步方法,若是在setState之后立即访问state,往往是不能得到更新之后的state值的,解决方案有三种
	   }else{
	  	Toast.info('不能输入全部为空格！')
	   }
	   event.preventDefault();
	}
	FinshEvent(id,status){
		let newList=this.state.todolist.map(item => {
			if(item.id === id){
				item.done = status
			}
			return item
		})
		this.setState({
			todolist:newList,
		});//修改里面的数据没事
		this.saveData();
	}
	delete(id){
		let newList=this.state.todolist.filter(item => item.id !== id);
		this.setState((prevState, props) => ({
			todolist:newList,
		}),()=>{
	    	this.saveData();//增加和删除数据都是要回调，修改不需要
	   });
	}
	changeEditEvent(id){
		let newList=this.state.todolist.map(item => {
			if(item.id === id){
				item.edit = true
				this.setState({
					editInput:item.title,
				});
			}
			return item
		})
		this.setState({
			todolist:newList,
		});
	}
	EditChangeEvent(id,event){
		var value=event.target.value;
		this.setState({
			editInput: value
		});
		let newList=this.state.todolist.map(item => {
			if(item.id === id){
				item.title = value
			}
			return item
		})
		this.setState({
			todolist:newList,
		});
		this.saveData();
	}
	EditBlurEvent(id){
		let newList=this.state.todolist.map(item => {
			if(item.id === id){
				item.edit = false
			}
			return item
		})
		this.setState({
			todolist:newList,
		});
	}
	
	render() {
      return (
        <div className="todolist-container">
	        <Header inputKeyUp={this.inputKeyUp.bind(this)} handleChange={this.handleChange.bind(this)} inputValue={this.state.value}></Header>
			<section>
			{
				this.state.statusType.map((numbers,index) =>
				  <div key={index}>
  					<h2>{numbers.title} <span>{this.state.todolist.filter(item => {
	                    return item.done === numbers.status}).length}</span></h2> 
	                    <ul className={numbers.status?'complete':''}>
		                {
		                    this.state.todolist.filter(item => {
		                    	return item.done === numbers.status
		                	  }	
					      	).map((list,index) =>
							<ItemList key={list.id} list={list} checked={list.done} FinshEvent={this.FinshEvent.bind(this,list.id,!list.done)} 
							EditChangeEvent={this.EditChangeEvent.bind(this,list.id)}
							EditBlurEvent ={this.EditBlurEvent.bind(this,list.id)}
							changeEditEvent = {this.changeEditEvent.bind(this,list.id)}
							delete = {this.delete.bind(this,list.id)}
							editInput={this.state.editInput} 
							/>
							)
					    }
	                </ul>
	              </div>
				)
			}
			</section>
			<Footer clearStorage={this.clearStorage.bind(this)}/>
        </div>
      	);
    }
}

export default TodoList;