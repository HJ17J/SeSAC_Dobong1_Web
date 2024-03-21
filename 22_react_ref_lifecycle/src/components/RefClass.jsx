import React, { createRef } from 'react';

export class RefClass1 extends React.Component {
  handleFocus = () => {
    this.myInput.focus();
  };
  render() {
    return (
      // <React.Fragment></React.Fragment> -> <></> 대체 가능
      <>
        <p>버튼 클릭 시 input창에 focus 처리 (콜백 사용)</p>
        <input
          type='text'
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export class RefClass2 extends React.Component {
  myInput = createRef();
  handleFocus = () => {
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>버튼 클릭 시 input창에 focus 처리 (createRef() 사용)</p>
        <input type='text' ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
