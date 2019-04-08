import React from 'react';
import axios from 'axios';
import Toast from '../components/toast'
class UserGist  extends React.Component{
  constructor(props) {
      super(props);
      this.state = {username: '', lastGistUrl: ''};
  }
  componentDidMount() {
 		const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    axios.get(this.props.source)
    .then(function (result) {
			const hideLoading = Toast.loading('加载中...', 0, () => {
			   var lastGist = result.data[0];
	      _this.setState({
	        username: lastGist.owner.login,
	        lastGistUrl: lastGist.html_url
	      });
			})
		 setTimeout(hideLoading, 500)
    })
    .catch(function (error) {
      _this.setState({
        username: '',
        lastGistUrl: ''
      })
    })
  }
  //卸载React组件时，把多余请求关闭，以免影响其他框架或组件的操作
  componentWillUnmount() {
    
  }
 	
  render() {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    );
  }
}

class ReactAjax extends React.Component{
	render(){
		return(
			 <UserGist source="https://api.github.com/users/octocat/gists" />
		);
	}
}
 
export default ReactAjax;