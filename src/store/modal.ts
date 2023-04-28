import { create } from 'zustand';

const useStore = create<ModalStateProps>()(
  (set) => ({
    modalCreateVisible: false,
    toggleModalCreate: () => set((prevState) => {
      return (
      { modalCreateVisible: !prevState.modalCreateVisible }
    )}),
    modalEditVisible: false,
    toggleModalEdit: () => set((prevState) => {
      return (
      { modalEditVisible: !prevState.modalEditVisible }
    )}),
  }));

export const useModalStore = useStore;
