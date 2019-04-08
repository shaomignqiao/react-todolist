import React from 'react';

class Footer extends React.Component{
	render() {
		return (
			<footer>Copyright © 2014 todolist.cn <i className="clear" onClick={this.props.clearStorage}>clear</i></footer>
		);
	}
}

export default Footer;

