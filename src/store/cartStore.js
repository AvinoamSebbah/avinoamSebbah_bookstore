import  create  from "zustand";

const useShoppingCart = create((set, get) => ({
  items: [],
  addItem: (item) => {
    const existingItem = get().items.find((i) => i.id === item.id);
    if (existingItem) {
      set((state) => ({
        items: state.items.map((i) => {
          if (i.id === item.id) {
            return { ...i, quantity: i.quantity + 1 };
          }
          return i;
        }),
      }));
    } else {
      set((state) => ({ items: [...state.items, { ...item, quantity: 1 }] }));
    }
  },
  removeItem: (itemId) => {
    set((state) => {
      if (itemId.quantity > 1) {
        // If the quantity of the item is greater than 1, we simply decrement the quantity

        return {
          items: state.items.map((item) => {
            if (item.id === itemId.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }

            return item;
          }),
        };
      } else {
        // If the quantity of the item is less than or equal to 1, we remove the item from the cart
        return {
          items: state.items.filter((item) => item.id !== itemId.id),
        };
      }
    });
  },
  removeAllItem: (itemId) => {
    set((state) => {
      return {
        items: state.items.filter((item) => item.id !== itemId.id),
      };
    });
  },
  removeAllItems: () => {
    set((state) => {
      return {
        items: [],
      };
    });
  },
  getTotal: () =>
    get().items.reduce(
      (acc, item) => parseFloat((acc + item.price * item.quantity).toFixed(2)),
      0
    ),
  getCount: () =>
    get().items.reduce((acc, item) => parseFloat(acc + item.quantity), 0),
}));


export { useShoppingCart };
    