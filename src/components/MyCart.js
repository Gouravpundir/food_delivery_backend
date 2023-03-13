// import React, { useState } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addItemToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeItemFromCart = (index) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems.splice(index, 1);
//     setCartItems(updatedCartItems);
//   };

//   return (
//     <div>
//       <h2>My Cart</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             {item} <button onClick={() => removeItemFromCart(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addItemToCart("Item " + (cartItems.length + 1))}>
//         Add Item
//       </button>
//     </div>
//   );
// };

// export default Cart;
