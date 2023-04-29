import { MdOutlineMoreVert } from 'react-icons/md';
import { useModalStore } from '../store/modal';
import { useCardStore } from '../store/card';
import { motion } from 'framer-motion';

export function Card({id, title, description}: Card) {

  const toggleModalEdit = useModalStore((state) => state.toggleModalEdit);
  const modalCreateVisible = useModalStore((state) => state.modalCreateVisible);
  const setCardInfo = useCardStore((state) => state.setCardToEdit);

  function handleToggleModalEdit() {
    setCardInfo({id, title, description});
    toggleModalEdit();
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className='h-60 min-w-[20rem] bg-gray-500 dark:bg-gray-700 m-5 rounded-lg'
    >
        <div className='w-full flex justify-between items-center p-4 text-gray-200 font-bold text-xl'>
          {title}
          <div className='cursor-pointer'>
            <MdOutlineMoreVert size={24} onClick={handleToggleModalEdit} disabled={modalCreateVisible}/>
          </div>
        </div>
        <div className='h-40 overflow-y-auto overflow-x-hidden w-[fit-content] max-w-[20rem] card-wrap p-5 text-xl font-extralight text-gray-200'>
          {description}
        </div>
    </motion.div>
  )
}
