/* eslint-disable react/prop-types */
const Product = (props) => {
  return (
    <div className="Product-item col-3">
      <img src={props.productImg} alt="product_image" />
      <div className="product_title">
        <h4 className="product_name">{props.productName}</h4>
        <p className="product_price">USD {props.price}</p>
        <div className="Action">
          <button
            className="sellBtn"
            onClick={() => props.handleSell(props.id)}
            disabled={props.quantity ? false : true}
          >
            Sell
          </button>
          <span>{props.quantity}</span>
          <button className="buyBtn" onClick={() => props.handleBuy(props.id)}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
