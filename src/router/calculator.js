import React from 'react';
import TemperatureInput from '../components/TemperatureInput.js';
/*使用 react 经常会遇到几个组件需要共用状态数据的情况。
 * 这种情况下，我们最好将这部分共享的状态提升至他们最近的父组件当中进行管理。*/
	function BoilingVerdict(props) {
	  if (props.celsius >= 100) {
	    return <p>水会烧开</p>;
	  }
	  return <p>水不会烧开</p>;
	}

	function toCelsius(fahrenheit) {
  	return (fahrenheit - 32) * 5 / 9;
	}
	
	function toFahrenheit(celsius) {
	  return (celsius * 9 / 5) + 32;
	}
	function tryConvert(temperature, convert) {
	  const input = parseFloat(temperature);
	  if (Number.isNaN(input)) {
	    return '';
	  }
	  const output = convert(input);
	  const rounded = Math.round(output * 1000) / 1000;
	  return rounded.toString();
	}
	
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }
//摄氏温度
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }
//华氏温度
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
  	const scale = this.state.scale;
    const temperature = this.state.temperature;
    /*向其中一个输入框输入值，另一个输入框总是基于这个值显示计算结果。*/
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
}

export default Calculator;
