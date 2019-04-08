/*React Props*/    
import React from 'react';
import PropTypes from 'prop-types';

/*你可以通过组件类的 defaultProps 属性为 props 设置默认值*/
/*注意: React.PropTypes 自 React v15.5 起已弃用。请使用 prop-types 库代替。*/
class HelloMessage extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name} {this.props.title} {this.props.number}</h1>
    );
  }
}
//你可以通过组件类的 defaultProps 属性为 props 设置默认值
HelloMessage.defaultProps = {
  name: 'Runoob'
};
HelloMessage.propTypes = {
  title: PropTypes.string,
  object: PropTypes.object.isRequired,
  array:PropTypes.arrayOf(PropTypes.number),
  email:function(props,propName,componentName){
  if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(props[propName])){
      return new Error('组件' + componentName+ '里的属性' + propName + '不符合邮箱的格式'); 
  	}
  },
  number:PropTypes.oneOfType(
           [PropTypes.string,PropTypes.number]
        ),
        
};
 
/*以下实例演示了如何在应用中组合使用 state 和 props 。 */
class Name extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}
 
class Site extends React.Component {
  render() {
    return (
      <a href={this.props.site}>
        {this.props.site}
      </a>
    );
  }
}


class WebSite extends React.Component {
  constructor() {
      super();
 
      this.state = {
        name: "菜鸟教程",
        site: "https://www.runoob.com"
      }
    }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <Site site={this.state.site} />
        <HelloMessage  title = {'12222'} array = {[1,2,3,4]} number={'1111'} object={{name:'李雷'}}  email = {'2314838004@qq.com'}/>
      </div>
    );
  }
}

class Page3 extends React.Component{
	render(){
		return(
			 <WebSite />
		);
	}
}

export default Page3;