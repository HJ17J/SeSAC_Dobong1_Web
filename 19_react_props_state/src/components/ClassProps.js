import { Component } from 'react';

class ClassProps extends Component {
  render() {
    const divStyle = { color: this.props.color };
    console.log(this.props);
    return (
      <div style={divStyle}>
        <h4>hi, my name is {this.props.name}</h4>
        <ul>
          <li>별명: {this.props.nickname}</li>
          <li>좋아하는 색: {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

class ClassProps2 extends Component {
  render() {
    const { name, color, nickname, bgColor } = this.props;
    const divStyle = { color: color, backgroundColor: bgColor };
    return (
      <div style={divStyle}>
        <h4>hi, my name is {name}</h4>
        <ul>
          <li>별명: {nickname}</li>
          <li>좋아하는 색: {color}</li>
        </ul>
      </div>
    );
  }
}

ClassProps2.defaultProps = {
  bgColor: 'skyblue',
};

export { ClassProps, ClassProps2 };
