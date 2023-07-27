/* eslint-disable react/prop-types */
const Button = (props) => {
  // props la object
  // {key: value, key2: value2,....}
  return (
    <button onClick={props.method} disabled={props.disabled}>
      {props.content}
    </button>
  );
};
export default Button;
