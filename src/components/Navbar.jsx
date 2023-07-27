/* eslint-disable react/prop-types */
const Navbar = (props) => {
  return (
    <div className="Navbar">
      <span>Remaining: {props.monney} USD</span>
      <span>You only spent {props.present} % of the total!</span>
    </div>
  );
};
export default Navbar;
