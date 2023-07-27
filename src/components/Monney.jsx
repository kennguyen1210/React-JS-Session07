/* eslint-disable no-unused-vars */
import React from "react";
import "./Monney.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Product from "./Product";
import { useState, useEffect } from "react";
export default function Monney() {
  const [state, setState] = useState({
    products: [],
    // products: [
    //   {
    //     id: 1,
    //     productName: "Iphone 14 promax",
    //     productImg: "/src/components/product_img/Iphone_14.jpg",
    //     price: 1599,
    //     quantity: 0,
    //   },
    //   {
    //     id: 2,
    //     productName: "Samsung S23 Ultra - 1TB",
    //     productImg: "/src/components/product_img/Samsung.jpg",
    //     price: 1499,
    //     quantity: 0,
    //   },
    //   {
    //     id: 3,
    //     productName: "Nintendo Switch",
    //     productImg: "/src/components/product_img/Nintendo.jpg",
    //     price: 499,
    //     quantity: 0,
    //   },
    //   {
    //     id: 4,
    //     productName: "PS5",
    //     productImg: "/src/components/product_img/PS5.jpg",
    //     price: 499,
    //     quantity: 0,
    //   },
    //   {
    //     id: 5,
    //     productName: "Ipad pro 2022",
    //     productImg: "/src/components/product_img/Ipad.jpg",
    //     price: 1300,
    //     quantity: 0,
    //   },
    //   {
    //     id: 6,
    //     productName: "AirPods Pro",
    //     productImg: "/src/components/product_img/AirPods.jpg",
    //     price: 300,
    //     quantity: 0,
    //   },
    // ],
    totalMonney: 217000000000,
    monney: 0,
    persent: 0,
    headerImg: "/src/components/product_img/ElonMush.jpg",
  });
  useEffect(() => {
    let products = localStorage.getItem("Products")
      ? JSON.parse(localStorage.getItem("Products"))
      : [];

    let newProducts = products.map((product) => {
      return {
        id: product.id,
        price: product.price,
        productName: product.name,
        productImg: "/src/components/images/" + product.image,
        quantity: 0,
      };
    });
    setState((prevState) => {
      return {
        ...prevState,
        products: [...newProducts],
      };
    });
  }, []);
  function handleBuy(id) {
    // debugger;
    let { products, totalMonney, monney } = state;
    let index = products.findIndex((product, index) => product.id === id);
    if (index > -1) {
      products[index].quantity += 1;
      let price = products[index].price;
      totalMonney -= price;
      monney = monney + price;
      setState((prevState) => {
        return {
          ...prevState,
          products: products,
          totalMonney: totalMonney,
          monney: monney,
          persent: monney / 217000000000,
        };
      });
    }
  }
  function handleSell(id) {
    let { products, totalMonney, monney } = state;
    let index = products.findIndex((product) => product.id === id);
    if (index > -1) {
      products[index].quantity -= 1;
      let price = products[index].price;
      totalMonney += price;
      monney = monney - price;
      setState((prevState) => {
        return {
          ...prevState,
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
      </div>
    </div>
  );
}
