import { MdDelete, MdEditNote, MdOutlineMoreVert } from 'react-icons/md';
import { useModalStore } from '../store/modal';
import { useCardStore } from '../store/card';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export function Card({id, title, description}: Card) {
  const modalCreateVisible = useModalStore((state) => state.modalCreateVisible);
  const toggleModalEdit = useModalStore((state) => state.toggleModalEdit);
  const setCardInfo = useCardStore((state) => state.setCardToEdit);
  const deleteCard = useCardStore((state) => state.deleteCard);
  const [dropdownVisible, setDrowdownVisible] = useState<boolean>(false);

  // function handleToggleModalEdit() {
  //   setCardInfo({id, title, description});
  //   toggleModalEdit();
  // }

  function openDropdown() {
    setCardInfo({id, title, description});
    setDrowdownVisible(prevState => !prevState)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className='h-60 min-w-[20rem] bg-gray-500 dark:bg-gray-700 m-5 rounded-lg'
      >
          <div className='w-full flex justify-between items-center p-4 text-gray-200 font-bold text-xl'>
            {title}
            <div className='cursor-pointer hover:text-gray-800'>
              <MdOutlineMoreVert
                size={24}
                onClick={openDropdown}
                disabled={modalCreateVisible}
              />
            </div>
          </div>
          <div className='relative z-20'>
            <AnimatePresence>
              {dropdownVisible && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className='w-[fit-content] bg-gray-800 dark:bg-gray-500 text-gray-200
                    absolute right-5 bottom-[105px] z-30 rounded-md flex flex-col items-center'
                  >
                    <ul>
                      <li className='dropdown-item' onClick={toggleModalEdit}>
                        <MdEditNote size={20}/>
                      </li>
                      <li className='dropdown-item' onClick={() => deleteCard(id as number)}>
                        <MdDelete size={20}/>
                      </li>
                    </ul>
                  </motion.div>
              )}
            </AnimatePresence>
            <div className='h-40 overflow-y-auto overflow-x-hidden w-[fit-content] max-w-[20rem] card-wrap p-5 text-xl font-extralight text-gray-200'>
              {description}
            </div>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}
