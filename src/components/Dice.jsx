/* eslint-disable react/prop-types */
import "./Dive.css";
const Dice = (props) => {
  let { dive, shaking } = props;
  return (
    <i
      style={{ fontSize: "100px", marginRight: 20, color: "blue" }}
      className={`fa-solid fa-dice-${dive} ${shaking ? "shaking" : ""}`}
    />
  );
};
export default Dice;
