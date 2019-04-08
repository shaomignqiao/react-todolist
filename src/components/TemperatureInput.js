import React from 'react';

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
  	const scaleNames = {
		  c: 'Celsius',
		  f: 'Fahrenheit'
	  };
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>在{scaleNames[scale]}:中输入温度数值</legend>
        <input value={temperature}
        	onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;