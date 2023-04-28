import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { Input } from "./Input";

interface ModalProps {
  visible: boolean;
  closeModal: () => void;
  confirmAction: (id: number | null, title: string, description: string) => void;
  type: 'create' | 'edit';
  cardToEdit?: Card
}

export function Modal({ visible, closeModal, confirmAction, type, cardToEdit }: ModalProps) {

  if(!visible) {
    return null;
  }

  const [title, setTitle] = useState(type === 'edit' ? cardToEdit?.title as string : '');
  const [desc, setDesc] = useState(type === 'edit' ? cardToEdit?.description as string : '');

  function clearInputs() {
    setTitle('');
    setDesc('');
  }

  function handleConfirmation() {
    type === 'create' ? confirmAction(null, title, desc) : confirmAction(cardToEdit?.id!, title, desc)
    clearInputs();
    closeModal();
  }



  return (
    <main className='h-screen w-screen bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-80 absolute z-20 flex justify-center items-center'>
      <div className='h-[60%] w-[40%] bg-gray-500 dark:bg-gray-700 rounded-md'>
        <div className='flex justify-between items-center text-white font-bold font-sans text-xl mx-8 mt-4'>
          Adicione as informações da sua tarefa
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
              <MdAdd size={24}/>
          </button>
        </div>
      </div>
    </main>
  )
}
