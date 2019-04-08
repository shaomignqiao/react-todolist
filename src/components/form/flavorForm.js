import React from 'react';

//在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Google'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
 
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择您最喜欢的网站
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Google">Google</option>
            <option value="Runoob">Runoob</option>
            <option value="Taobao">Taobao</option>
            <option value="Facebook">Facebook</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default FlavorForm;