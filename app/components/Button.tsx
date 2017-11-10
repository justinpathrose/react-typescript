import * as React from "react";

interface ButtonProps {
  name: string;
}

class Button extends React.Component<ButtonProps, {}> {
  render() {
    return <button>Hello, {this.props.name}</button>;
  }
}

export default Button;