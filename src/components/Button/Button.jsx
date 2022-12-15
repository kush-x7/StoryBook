import "./button.css";

const Button = (props) => {
  // default value for variant is primary
  const { variant = "primary", children, ...rest } = props;

  return <button className={`button ${variant}`}>{children}</button>;
};
export default Button;
