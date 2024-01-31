
import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      checked: child.props.value === selected,
      onChange,
    })
  );
  return <div className="RadioGroup">{RadioOptions}</div>;
};
export const RadioOption = ({ value, checked, onChange, children }) => {
  
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
