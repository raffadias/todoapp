import { useState, useEffect } from "react";
import { MdCheck, MdClose } from "react-icons/md";
import { Input } from "./Input";
import { motion, AnimatePresence } from 'framer-motion';
import { useCardStore } from "../store/card";

interface ModalProps {
  visible: boolean;
  closeModal: () => void;
  confirmAction: (id: number | null, title: string, description: string) => void;
  type: 'create' | 'edit';
}

export function Modal({ visible, closeModal, confirmAction, type }: ModalProps) {

  const cardToEdit = useCardStore((state) => state.cardToEdit);

  const [id, setId] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (type === 'edit') {
      setId(cardToEdit?.id as number);
      setTitle(cardToEdit?.title as string);
      setDesc(cardToEdit?.description as string);
    }
  }, [cardToEdit])

  function clearInputs() {
    setTitle('');
    setDesc('');
  }

  function handleConfirmation() {
    type === 'create' ? confirmAction(null, title, desc) : confirmAction(id, title, desc)
    clearInputs();
    closeModal();
  }



  return (
    <AnimatePresence>
      {visible && (
        <motion.main
        initial={{ scale: 0 }}
        animate={{  scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        exit={{ scale: 1 }}
          className='absolute z-20 flex justify-center items-center h-full w-full'
        >
          <div className='sm:h-[70%] h-[70%] sm:w-[80%] md:w-[70%] lg:w-[40%] bg-gray-500 dark:bg-gray-700 rounded-md shadow-2xl overflow-hidden'>
            <div className='flex justify-between items-center text-white font-bold font-sans text-xl mx-8 mt-4'>
              <p className='xl:text-xl lg:text-lg md:text-base sm:text-sm mr-4'>
                {type === 'create' ? 'Adicione' : 'Edite'} as informações da sua tarefa
              </p>
              <button
                onClick={closeModal}
                className='bg-red-500 dark:bg-red-500 hover:bg-red-800 hover:dark:bg-red-800 text-white font-semibold p-2 rounded-md shadow-2xl transition-all delay-50'
              >
                <MdClose />
              </button>
            </div>
            <div className='w-[90%] mx-auto mt-10'>
              <Input label='Título da tarefa' type='text' value={title} setValue={setTitle}/>
            </div>
            <div className='w-[90%] mx-auto mt-10'>
              <Input label='Descrição' type='textarea' value={desc} setValue={setDesc}/>
            </div>
            <div className='flex w-full justify-center items-center mt-5'>
              <button
                  onClick={handleConfirmation}
                  className='bg-green-700 hover:bg-green-800 text-gray-200 w-[90%] shadow-lg flex items-center justify-center gap-1 font-semibold p-2 rounded-md transition-all ease-in-out delay-100'
                >
                  Confirmar
                  <MdCheck size={24}/>
              </button>
            </div>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  )
}
