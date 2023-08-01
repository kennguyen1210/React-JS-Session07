/* eslint-disable react/prop-types */
function Receipt(props) {
  let { buyList, check, total } = props;
  return (
    <section className="Receipt">
      <p className="receipt_title">
        <b>Receipt</b>
      </p>
      <div className="productList">
        {buyList.map((product, index) => {
          if (product.quantity) {
            let totalMonney = product.price * product.quantity;
            return (
              <p key={index}>
                {product.productName} x {product.quantity} ..............$
                {totalMonney.toLocaleString()}
              </p>
            );
          }
          return "";
        })}
      </div>
      {check ? <p>Total is: $ {total.toLocaleString()}</p> : ""}
      <button>Print Receipt</button>
    </section>
  );
}

export default Receipt;
