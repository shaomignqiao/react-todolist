import React from 'react';

class ItemList extends React.Component{
	render() {
		return (
			<li>
				<input type="checkbox" checked={this.props.checked} onChange={this.props.FinshEvent}/>
				{this.props.list.edit ? (
					<p><input onChange={this.props.EditChangeEvent} onBlur={this.props.EditBlurEvent} value={this.props.editInput}  autoFocus/></p>
					) : (
					    <p onClick={this.props.changeEditEvent}>{this.props.list.title}</p>
					)}
				<i onClick={this.props.delete}>-</i>
			</li>
		);
	}
}

export default ItemList;