/* eslint-disable react/prop-types */
const DivColor = (props) => {
  let { color, method, id } = props;
  return (
    <div
      className="col-2"
      style={{ height: "70px", backgroundColor: `${color}` }}
      onClick={() => method(id)}
    ></div>
  );
};
export default DivColor;
