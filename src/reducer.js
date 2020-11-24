import { AccordionActions } from "@material-ui/core";

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user:action.user,
      }
    case "Add_to_basket":
      //logic to add item to basket
      return {
        ...state, //return whatever the state are but change in basket whatever its state is
        basket: [...state.basket, action.item],
      };
    case "Remove_From_Basket":
      //logic to remove item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exist remove it..
        newBasket.splice(index, 1); //remove the item
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its nothing in basket`
        );
      }

      return { ...state, basket: newBasket }; 

    default:
      return state;
  }
}

export default reducer;
