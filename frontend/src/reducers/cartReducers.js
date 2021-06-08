import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload;
      const itemExists = state.cartItems.find(
        (x) => x.productID === item.productID
      );

      if (itemExists) {
        console.log("state is");
        console.log(state);
        // console.log(state.cartItems);

        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productID === item.productID ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }
    case CART_REMOVE_ITEM: {
      console.log(action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.productID !== action.payload.productID
        ),
      };
    }
    default:
      return state;
  }
};
