import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const cartReducer = (state = { ...persistedState }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (
        state.cartItems.findIndex((obj) => obj.id === action.value.id) == -1
      ) {
        return { ...state, cartItems: [...state.cartItems, action.value] };
      } else {
        const newCartList = state.cartItems.map((obj) => {
          if (obj.id === action.value.id) {
            return {
              ...obj,
              price: action.value.price,
              quantity: action.value.quantity,
            };
          }
          return obj;
        });
        return { ...state, cartItems: newCartList };
      }

    case "REMOVE_TO_CART":
      console.log(action.value.id);
      const newCartList = state.cartItems.filter(
        (voucher) => voucher.id != action.value.id
      );

      return { ...state, cartItems: newCartList };

    default:
      return state;
  }
};

const store = createStore(
  cartReducer,
  persistedState,
  composeWithDevTools(applyMiddleware())
);
store.subscribe(() => {
  saveState({
    voucherList: store.getState().voucherList,
    countryList: store.getState().countryList,
    voucherCountryList: store.getState().voucherCountryList,
    cartItems: store.getState().cartItems,
  });
});

export default store;
