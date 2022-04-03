import React from "react";

import "./headline-component.styles.scss";

const textArray = [
  "Sign Up for 10% off your first order.",
  "Our cult favorite denim now comes in color. Shop Way-High Color.",
  "Free delivery from €50 - Returns extended to 60 days.",
];

class Headline extends React.Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
      <div className='headline'>
        <span className='headline__message'>{textThatChanges}</span>
      </div>
    );
  }
}

export default Headline;
