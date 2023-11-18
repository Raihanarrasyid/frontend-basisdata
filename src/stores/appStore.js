import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRestaurantStore = create((set) => ({
  menus: [],
  setMenus: (menus) => set({ menus }),
  cartIsOpen: false,
  setCartIsOpen: (cartIsOpen) => set({ cartIsOpen }),
}));

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
      removeFromCart: (item) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== item.id_menu),
        })),
      clearCart: () => set({ cart: [] }),
      cartTotal: () =>
        get().cart.reduce((acc, item) => acc + item.harga * item.kuantitas, 0),
    }),
    {
      name: "cart-storage",
    }
  )
);
