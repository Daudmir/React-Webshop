import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-white rounded-3 py-5">
        <div className="text-center py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const cartItems = (product) => {
    return (
      <>
        <div className="w-60 border-4 rounded-xl text-center mb-3 mt-5 bg-white">
          <div className="py-4">
            <div className="">
              <div className="pl-7">
                <img
                  src={product.filename}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-xl">{product.title}</h3>
                <p className="text-xl mb-3 mt-2">
                  {product.qty} x 
                  = {product.qty * product.price} KR
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div
              to="/checkout"
              className="bg-indigo-600 rounded-md mb-5 p-2 text-white mx-auto cursor-pointer"
            >
              Checkout Not Available
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <h2 className="text-white text-6xl mt-10 font-semibold">Cart</h2>
      <div className="grid grid-cols-3 mb-10 justify-items-center">
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      </div>
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
