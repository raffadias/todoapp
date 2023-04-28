import { MdOutlineMoreVert } from 'react-icons/md';
import { useModalStore } from '../store/modal';
import { useCardStore } from '../store/card';

export function Card({id, title, description}: Card) {

  const toggleModalEdit = useModalStore((state) => state.toggleModalEdit);
  const setCardInfo = useCardStore((state) => state.setCardToEdit);

  function handleToggleModalEdit() {
    setCardInfo({id, title, description});
    toggleModalEdit();
  }

  return (
    <div className='h-60 w-80 bg-gray-500 dark:bg-gray-700 m-5 rounded-lg'>
        <div className='w-full flex justify-between items-center p-4 text-gray-200 font-bold text-xl'>
          {title}
          <div className='cursor-pointer'>
            <MdOutlineMoreVert size={24} onClick={handleToggleModalEdit}/>
          </div>
        </div>
        <div className='p-5 text-xl font-extralight text-gray-200'>
          {description}
        </div>
    </div>
  )
}
