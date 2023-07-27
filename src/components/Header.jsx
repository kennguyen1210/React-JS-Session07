/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <div className="Header">
      <img src={props.headerImg} alt="ElonMush's_Image" />
      <p>
        If Elon cashed out all of his stocks & assets today he would have
        approximately $217,000,000,000 (US Dollars) in his bank account.
      </p>
      <p>¿What would you spend it on? </p>
      <p>¡Have your receipt at the end!</p>
    </div>
  );
};
export default Header;
