import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Toast from './components/toast'
//React 使用 JSX 来替代常规的 JavaScript。
//React DOM 使用 camelCase 小驼峰命名 来定义属性的名称
const i=2;
//内联样式的写法
const myStyle = {
    fontSize: 24,
    color: '#FF0000'
};
//允许在模板中插入数组，数组会自动展开所有成员：
const arr = [
  <p>菜鸟教程</p>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
/*<HelloMessage style={{color:'red',textAlign:'center'}}/> 这样，
那么该组件名是无 style 样式的，也就是说我们刚写的 style 样式，是无效的*/
//function HelloMessage(props) {
//  return <h1 style = {myStyle}>明天 {props.name}!</h1>;
//}
/*需要注意的是在 render() 方法中，需要使用 this.props 替换 props：
 *而自定义的 React 类名以大写字母开头,除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。*/
class HelloMessage extends React.Component {
  render() {
    return (
    	<div>
    		<h1 style = {myStyle}>明天{this.props.name}!{1+1}</h1>{/*内联样式的写法和表达式写在花括号 {}*/}
    	</div>
    	
    );
  }
}
/*1、在标签内部的注释需要花括号
2、在标签外的的注释不能使用花括号*/
class Home extends Component {

  render() {
    return (
    /*添加自定义属性需要使用 data- 前缀。*/
      <div>
		<p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
		<Link to="/demo/" style={{color:'black'}}>
			<div>点击跳转到demo</div>
		</Link>
		<Link to="/Page1/" style={{color:'black'}}>
			<div>点击跳转到Page1</div>
		</Link>
		<Link to="/reactState/" style={{color:'black'}}>
			<div>点击跳转到reactState</div>
		</Link>	
		<Link to="/props/" style={{color:'black'}}>
			<div>点击跳转到props</div>
		</Link>	
		<Link to="/parentChild/" style={{color:'black'}}>
			<div>点击跳转到parentChild</div>
		</Link>	
		<Link to="/reactEvent/" style={{color:'black'}}>
			<div>点击跳转到reactEvent</div>
		</Link>
		<Link to="/Conditiona/" style={{color:'black'}}>
			<div>点击跳转到Conditiona</div>
		</Link>
		<Link to="/reactListsKeys/" style={{color:'black'}}>
			<div>点击跳转到reactListsKeys</div>
		</Link>
		<Link to="/componentApi/" style={{color:'black'}}>
			<div>点击跳转到componentApi</div>
		</Link>
		<Link to="/componentLife/" style={{color:'black'}}>
			<div>点击跳转到componentLife</div>
		</Link>
		<Link to="/reactAjax/" style={{color:'black'}}>
			<div>点击跳转到reactAjax</div>
		</Link>
		<Link to="/formsEvents/" style={{color:'black'}}>
			<div>点击跳转到formsEvents</div>
		</Link>
		<Link to="/reactRefs/" style={{color:'black'}}>
			<div>点击跳转到reactRefs</div>
		</Link>
		<Link to="/calculator/" style={{color:'black'}}>
			<div>点击跳转到calculator</div>
		</Link>
		<Link to="/splitPane/" style={{color:'black'}}>
			<div>点击跳转到splitPane</div>
		</Link>
		<Link to="/welcomeDialog/" style={{color:'black'}}>
			<div>点击跳转到welcomeDialog</div>
		</Link>
		<Link to="/filterableProductTable/" style={{color:'black'}}>
			<div>点击跳转到filterableProductTable</div>
		</Link>
		<Link to="/uncontrolled/" style={{color:'black'}}>
			<div>点击跳转到uncontrolled</div>
		</Link>
		<Link to="/fileApi/" style={{color:'black'}}>
			<div>点击跳转到fileApi</div>
		</Link>
		<Link to="/todoList/" style={{color:'black'}}>
			<div>点击跳转到todoList</div>
		</Link>
		<HelloMessage name="你好"/>
		<h1>{i === 1 ? 'True!' : 'False'}</h1>{/*在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。*/}
		{
			arr.map(function (value, key) {
				return <div key={key}>{value}</div>
			})
		}	
		<button onClick={() => { Toast.info('普通提示') }}>普通提示</button>
    	</div>
    );
  }
}

export default Home;
