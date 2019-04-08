import React from 'react';

class Header extends React.Component{
	render() {
		return (
			<header>
				<section>
					<form onSubmit={this.props.inputKeyUp} id="form" >
						<label>ToDoList</label>
						<input type="text" name="title" placeholder="添加ToDo" onChange={this.props.handleChange} value={this.props.inputValue} required  autoComplete="off"/>
					</form>
				</section>
			</header>
		);
	}
}

export default Header;