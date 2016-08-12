import React, { Component, PropTypes } from 'react';

const REPLACEMENTS = {
  '\n': <br />,
};

const arrayReplace = (array, replacements) => {
  const newArray = [];
  const keys = Object.keys(replacements);
  for (let i = 0; i < array.length; ++i) {
    if (keys.indexOf(array[i]) !== -1) {
      newArray.push(replacements[array[i]]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const lenCommon = (str1, str2) => {
  let i;
  for (i = 0; i < Math.min(str1.length, str2.length); ++i) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      return i;
    }
  }
  return i;
};

class Typewriter extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      currentText: this.props.startText,
      cursorVisible: true,
    };
    this.stepTimeout = null;
    this.cursorInterval = null;
    this.step = this.step.bind(this);
    this.blinkCursor = this.blinkCursor.bind(this);
  }

  componentDidMount() {
    this.cursorInterval = setInterval(this.blinkCursor, 500);
    const stepTimer = () => {
      if (this.step()) {
        const delay = 50 + Math.floor(Math.random() * 25);
        this.stepTimeout = setTimeout(stepTimer, delay);
      }
    };
    stepTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.stepTimeout);
    clearInterval(this.cursorInterval);
  }

  step() {
    const { currentText } = this.state;
    const { goalText } = this.props;
    if (currentText.length > lenCommon(currentText, goalText)) {
      this.setState({ currentText: currentText.slice(0, currentText.length - 1) });
      return true;
    }
    if (currentText.length < goalText.length) {
      this.setState({ currentText: `${currentText}${goalText.charAt(currentText.length)}` });
      return true;
    }
    return false;
  }

  blinkCursor() {
    this.setState({ cursorVisible: !this.state.cursorVisible });
  }

  render() {
    const { currentText, cursorVisible } = this.state;
    const { goalText } = this.props;
    return (
      <span>
        {arrayReplace(currentText.split(''), REPLACEMENTS)}
        <span
          style={{
            visibility: currentText !== goalText || cursorVisible ? 'visible' : 'hidden',
            color: '#7AF',
          }}
        >
          |
        </span>
      </span>
    );
  }
}

Typewriter.propTypes = {
  goalText: PropTypes.string,
  startText: PropTypes.string,
};

Typewriter.defaultProps = {
  goalText: '',
  startText: '',
};

export default Typewriter;
