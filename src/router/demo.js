import React from 'react';

class Columns extends React.Component {
	render() {
		return(
			<React.Fragment>
		        <td>Hello</td>
		        <td>World</td>
		        <td>this is a demo!</td>
      		</React.Fragment>
		);
	}
}

class Demo extends React.Component {
	render() {
		return(
			<table>
			<tbody>
			        <tr>
			          <Columns />
			        </tr>
			    </tbody>
			</table>
		);
	}
}

export default Demo;