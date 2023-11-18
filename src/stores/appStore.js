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
      addToCart: (item, kuantitas) => {
        const existingItemIndex = get().cart.findIndex(
          (i) => i.id_menu === item.id_menu
        );

        if (existingItemIndex !== -1) {
          set((state) => {
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex] = {
              ...updatedCart[existingItemIndex],
              kuantitas: updatedCart[existingItemIndex].kuantitas + kuantitas,
            };
            return { cart: updatedCart };
          });
        } else {
          set((state) => ({
            cart: [...state.cart, { ...item, kuantitas }],
          }));
        }
      },
      removeFromCart: (item) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id_menu !== item.id_menu),
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
