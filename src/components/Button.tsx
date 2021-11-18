import React from "react";

export interface Props {
  label: string;
}

const Button = (props: Props) => {
  return <button>{props.label}</button>;
};

export default Button;
