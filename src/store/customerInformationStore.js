import create from "zustand";

const informationStore = create((set) => ({
  storeName: "",
  customerName: "",
  setStoreName: (name) => set((state) => ({ storeName: name })),
  setCustomerInfo: (name) => set((state) => ({ customerName: name })),
}));

export default informationStore;
