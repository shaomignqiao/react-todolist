/*React State(状态)*/
import React from 'react';

// Wrong
//this.setState({
//counter: this.state.counter + this.props.increment,
//});
// Correct
//this.setState((prevState, props) => ({
//counter: prevState.counter + props.increment
//}));

// Correct
//this.setState(function(prevState, props) {
//return {
//  counter: prevState.counter + props.increment
//};
//});
/*componentDidMount() 与 componentWillUnmount() 方法被称作生命周期钩子。
 * 每当 Clock 组件第一次加载到 DOM 中的时候，这在 React 中被称为挂载。
 * 每当 Clock 生成的这个 DOM 被移除的时候，我们也会想要清除定时器，这在 React 中被称为卸载*/

function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
}
/*state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。*/
class ReactState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default ReactState;