import React from 'react';

class BodyChild extends React.Component{
    render(){
        return(
            <div>
                <p>子页面输出：<input type='text' onChange={this.props.changeUsername} /></p>
            </div>
        )
    }
}

export default BodyChild;