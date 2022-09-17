import create from "zustand";

export const useStore = create((set) => ({
  // cart
  cart: {
    pizzas: [],
  },
  // adding to cart
  addPizza: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data],
      },
    })),

  // remove Pizza From Cart
  removePizza: (index) =>
    set((state) => ({
      cart: {
        pizzas: state.cart.pizzas.filter((_, i) => i != index),
      },
    })),
}));
