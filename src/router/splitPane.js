import React from 'react';
//require('../css/splitPane.css');
import '../css/splitPane.css';

function Contacts() {
  return <div className="Contacts">Contacts</div>;
}

function Chat() {
  return <div className="Chat">Chat</div>;
}

function SplitPanePart(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

class SplitPane extends React.Component{
	render() {
      return (
        <SplitPanePart
	      left={
	        <Contacts />
	      }
	      right={
	        <Chat />
	      } />
      	);
    }
}

export default SplitPane;