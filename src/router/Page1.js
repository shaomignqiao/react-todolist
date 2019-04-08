import React from 'react';

class Name extends React.Component{
	render(){
		return(
			<h1>{this.props.title}</h1>
		);
	}
}
class Url extends React.Component{
	render(){
		return(
			<a href={this.props.site}>{this.props.site}</a>
		);
	}
}
class WebSite extends React.Component{
	render() {
		return(
			<div>
				<Name title={this.props.name}/>
				<Url site={this.props.url}/> 
			</div>
		);
	}
}

class Page1 extends React.Component{
	render(){
		return(
			<div>
{/*若要为创建的某个元素增加 class 属性，不能直接定义 class 而要用 className，因为 class 是 javascript 中的保留字。*/}
				<div className='mydiv'>This is Page1!</div>
				<WebSite name="菜鸟教程" url="http://www.runoob.com"/>
			</div>
		);
	}
}
 
export default Page1;