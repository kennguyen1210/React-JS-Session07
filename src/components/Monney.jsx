/* eslint-disable no-unused-vars */
import React from "react";
import "./Monney.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Product from "./Product";
import Receipt from "./Receipt";
import { useState, useEffect } from "react";
import products from "./products";
export default function Monney() {
  const [state, setState] = useState({
    buyList: [],
    check: false,
    products: [],
    totalMonney: 217000000000,
    monney: 0,
    persent: 0,
    headerImg: "/src/components/product_img/ElonMush.jpg",
  });
  useEffect(() => {
    let products = localStorage.getItem("Product")
      ? JSON.parse(localStorage.getItem("Product"))
      : [];
    console.log(products);
    setState((prevState) => {
      return {
        ...prevState,
        products: [...products],
      };
    });
  }, []);
  function handleBuy(id) {
    // debugger;
    let { products, totalMonney, monney, buyList } = state;
    let index = products.findIndex((product) => product.id === id);
    if (index > -1) {
      products[index].quantity += 1;
      let price = products[index].price;
      totalMonney -= price;
      monney = monney + price;
      let buyProduct = {
        id: id,
        productName: products[index].productName,
        quantity: products[index].quantity,
        price: price,
      };
      if (buyList.length == 0) {
        buyList.push(buyProduct);
      } else {
        let buyIndex = buyList.findIndex((product) => product.id === id);
        buyIndex > -1
          ? (buyList[buyIndex].quantity += 1)
          : buyList.push(buyProduct);
      }

      setState((prevState) => {
        return {
          ...prevState,
          buyList: buyList,
          check: true,
          products: products,
          totalMonney: totalMonney,
          monney: monney,
          persent: monney / 217000000000,
        };
      });
    }
  }
  function handleSell(id) {
    let { products, totalMonney, monney, buyList } = state;
    let index = products.findIndex((product) => product.id === id);
    if (index > -1) {
      products[index].quantity -= 1;
      let price = products[index].price;
      totalMonney += price;
      monney = monney - price;

      let sellIndex = buyList.findIndex((product) => product.id === id);
      sellIndex > -1 && (buyList[sellIndex].quantity -= 1);
      setState((prevState) => {
        return {
          ...prevState,
          buyList: buyList,
          check: true,
          products: products,
          totalMonney: totalMonney,
          monney: monney,
          persent: monney / 217000000000,
        };
      });
    }
  }
  return (
    <div className="Monney">
      <Header headerImg={state.headerImg} />

      <Navbar
        monney={state.totalMonney.toLocaleString()}
        present={state.persent.toFixed(8)}
      />

      <div className="Products">
        <div className="row gap-2 justify-content-evenly">
          {state.products.map((product) => {
            return (
              <Product
                key={product.id}
                productImg={product.productImg}
                productName={product.productName}
                id={product.id}
                quantity={product.quantity}
                price={product.price.toLocaleString()}
                handleBuy={handleBuy}
                handleSell={handleSell}
              />
            );
          })}
        </div>
        <Receipt
          buyList={state.buyList}
          check={state.check}
          total={state.monney}
        />
      </div>
    </div>
  );
}
