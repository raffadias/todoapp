import { MdAdd } from 'react-icons/md';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { ThemeSwitch } from './components/ThemeSwitch';
import { useCardStore } from './store/card';
import { useState } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const cards = useCardStore((state) => state.cards);
  const addCard = useCardStore((state) => state.addCard);

  function handleCardInfo(title: string, description: string) {
    addCard(title, description);
  }

	return (
    <main className='h-screen overflow-y-hidden overflow-x-hidden bg-gray-200 dark:bg-gray-500 flex flex-col transition-all ease-in-out delay-100'>
      <div className='flex items-center justify-between w-screen'>
        <button
            onClick={() => setIsVisible(prevState => !prevState)}
            className='hover:text-gray-800 hover:dark:text-gray-800 dark:text-gray-200 text-gray-500 flex items-center gap-1 font-semibold p-2 rounded-md transition-all ease-in-out delay-100'
          >
            Nova tarefa
            <MdAdd size={24}/>
          </button>
        <ThemeSwitch />
      </div>
      <div className='flex overflow-y-auto w-screen h-screen justify-center flex-wrap items-center mt-5'>
        {cards.length === 0 && (
          <h1 className='font-bold dark:text-gray-200 text-gray-800 transition-all ease-in-out delay-100'>
            Você não possui tarefas.
          </h1>
        )}
        {cards.map((card) => <Card key={card.id} id={card.id} title={card.title} description={card.description}/>)}
      </div>
      <Modal
        visible={isVisible}
        closeModal={() => setIsVisible(prevState => !prevState)}
        confirmAction={handleCardInfo}
      />
    </main>
)}
