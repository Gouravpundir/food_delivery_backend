import React, { useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

import "../style/card.css";

export default function Card(props) {
  const dispatch = useDispatchCart();
  const cart = useCart();
  const options = props.options || [];
  const priceOptions = options.map((option) => ({
    name: option.name,
    price: option.price,
  }));
  const foodItem = props.foodItem;
  const [quantity, setQuantity] = useState(1);
  const [optionPrice, setOptionPrice] = useState(
    priceOptions.length > 0 ? priceOptions[0].price : 0
  );
  const [totalPrice, setTotalPrice] = useState(props.price);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    const food = cart.find((item) => item.id === foodItem._id);
    const qty = quantity;
    const finalPrice = quantity * optionPrice;

    if (food) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else {
        await dispatch({
          type: "ADD",
          id: foodItem._id,
          name: foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.ImgSrc,
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
    } else {
      await dispatch({
        type: "ADD",
        id: foodItem._id,
        name: foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: props.ImgSrc,
      });
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * optionPrice);
  };

  const handleOptionChange = (event) => {
    const newOptionPrice = parseFloat(event.target.value);
    setOptionPrice(newOptionPrice);
    setTotalPrice(quantity * newOptionPrice);
  };

  const finalPrice = quantity * optionPrice;

  return (
    <div
      className="card mt-3"
      style={{
        width: "15rem",
        maxHeight: "410px",
        boxShadow: "0px 0px 5px #ccc",
      }}
    >
      <img
        src={foodItem.image}
        className="card-img-top mt-2 mx-4"
        alt="..."
        style={{ height: "80px", width: "170px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title mt-1">{foodItem.name}</h5>
        <div className="container w-100">
          <div className="row">
            <select
              className="form-select m-2 col-6"
              aria-label="Quantity"
              onChange={handleQuantityChange}
              value={quantity}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              className="form-select m-2 col-6"
              aria-label="Options"
              onChange={handleOptionChange}
              value={optionPrice}
            >
              {priceOptions.map((option) => {
                return (
                  <option
                    key={`${option.name}-${option.price}`}
                    value={option.price}
                  >
                    {`${option.name} - ${option.price}`}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="d-inline h-100 fs-5">Total Price: ₹ {finalPrice}</div>
        </div>
        <hr />
        <button
          className="btn btn-success justify-center mx-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
