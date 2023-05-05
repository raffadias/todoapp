import { motion, AnimatePresence } from 'framer-motion';
import { useCardStore } from "../store/card";
import { toast } from 'react-toastify';

interface ModalProps {
  visible: boolean;
  closeModal: () => void;
}

export function ModalConfirmation({ visible, closeModal }: ModalProps) {

  const cardToEdit = useCardStore((state) => state.cardToEdit);
  const deleteCard = useCardStore((state) => state.deleteCard);

  function handleConfirmation() {
    deleteCard(cardToEdit?.id as number);
    closeModal();
    toast.success('Tarefa deletada.', {
      icon:'🗑',
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      draggable: false,
      closeOnClick: true,
      theme: 'dark'
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.main
          initial={{ scale: 0 }}
          animate={{ scale: 0.9 }}
          exit={{ scale: 0 }}
          className='h-screen w-screen
          absolute z-20 flex justify-center items-center'
        >
          <div className='h-[fit-content] w-[fit-content] pb-5 bg-gray-500 dark:bg-gray-700 rounded-md shadow-2xl'>
            <div className='flex flex-col h-full text-white font-bold font-sans text-xl mx-8 mt-4'>
              <h3 className='text-center my-10'>
                Tem certeza de que deseja deletar a tarefa {cardToEdit?.title}?
              </h3>
              <button
                onClick={handleConfirmation}
                className='bg-red-500 dark:bg-red-500 hover:bg-red-800 hover:dark:bg-red-800 flex w-full gap-1
                justify-center items-center text-white font-semibold p-2 rounded-md shadow-2xl transition-all delay-50 mb-3'
              >
                Excluir
              </button>
              <button
                onClick={closeModal}
                className='bg-gray-700 dark:bg-gray-500 hover:bg-gray-800 flex w-full gap-1 justify-center
                items-center text-white font-semibold p-2 rounded-md shadow-2xl transition-all delay-50'
              >
                Cancelar
              </button>
            </div>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  )
}
