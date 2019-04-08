//条件渲染
import React from 'react';

const messages = ['React', 'Re: React', 'Re:Re: React'];
function UserGreeting(props) {
	return <div>
		<h1>欢迎回来!</h1> {props.messageNum}
	</div>;
}

function GuestGreeting(props) {
	return <h1>请先登录。</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
	    return <UserGreeting messageNum={props.unreadMessages.length}/>;
	}
	return <GuestGreeting />;
}

function LogoutButton(props){
	return <button onClick={props.onClick}>退出</button>
}

function LoginButton(props){
	return <button onClick={props.onClick}>登录</button>
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
 
  return (
    <div className="warning">警告!</div>
  );
}

class Conditiona extends React.Component{
   	constructor(props) {
    	super(props);
    	this.handleLoginClick = this.handleLoginClick.bind(this);
    	this.handleLogoutClick = this.handleLogoutClick.bind(this);
    	this.handleToggleClick = this.handleToggleClick.bind(this);
    	this.state = {isLoggedIn: false,showWarning: true};
  	}
  	handleLoginClick() {
    	this.setState({isLoggedIn: true});
  	}
 
  	handleLogoutClick() {
    	this.setState({isLoggedIn: false});
  	}
  	handleToggleClick() {
	    this.setState(prevState => ({
	      showWarning: !prevState.showWarning
	    }));
	}
 
  	
	render(){
		const isLoggedIn = this.state.isLoggedIn;
	    let button = null;
		if (isLoggedIn) {
	      button = <LogoutButton onClick={this.handleLogoutClick} />;
	    } else {
	      button = <LoginButton onClick={this.handleLoginClick} />;
	    }
		
		return(
			<div>
			 	<Greeting isLoggedIn={isLoggedIn} unreadMessages={messages}/>
			 	{button}
				{isLoggedIn?(
			    	<LogoutButton onClick={this.handleLogoutClick} />
			    ) : (
			    	<LoginButton onClick={this.handleLoginClick} />
			    )}
				
				<WarningBanner warn={this.state.showWarning} />
				<div>
			        <button onClick={this.handleToggleClick}>
			          {this.state.showWarning ? '隐藏' : '显示'}
			        </button>
			    </div>
			</div>
		);
	}
}
 
export default Conditiona;