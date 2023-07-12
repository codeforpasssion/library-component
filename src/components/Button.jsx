import classNamesUtils from "./classNamesUtils";

const Button = ({ children, className, ...rest }) => {
  return (<button {...rest} className={classNamesUtils(`bg-blue-500 text-blue-50 m-2 p-2 rounded-md ${className}`)}>{children}</button>)
}

export default Button;