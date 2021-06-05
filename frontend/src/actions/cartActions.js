import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  console.log(id);
  const { data } = await axios.get(`/api/products/${id}`);
  console.log(data);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      productID: data._id,
      price: data.price,
      numInStock: data.numInStock,
      image: data.image,
      quantity,
    },
  });
  console.log(getState().cart.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};