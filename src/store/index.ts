import { create } from "zustand";

const useStore = create((set) => ({
  editing: false,
  setEditing: (editing: boolean) => set({ editing }),
}));

export default useStore;
