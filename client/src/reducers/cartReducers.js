import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (previousState = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = previousState.cartItems.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...previousState,
          cartItems: previousState.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      }

      return {
        ...previousState,
        cartItems: [...previousState.cartItems, item],
      };
    case CART_REMOVE_ITEM:
      return {
        ...previousState,
        cartItems: previousState.cartItems.filter(
          (x) => x.product !== action.payload
        ),
      };
    default:
      return previousState;
  }
};
