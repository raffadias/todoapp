import { MdAdd } from 'react-icons/md';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { ThemeSwitch } from './components/ThemeSwitch';
import { useCardStore } from './store/card';
import { useModalStore } from './store/modal';

export default function App() {

  const modalCreateVisible = useModalStore((state) => state.modalCreateVisible);
  const toggleModalCreate = useModalStore((state) => state.toggleModalCreate);

  const modalEditVisible = useModalStore((state) => state.modalEditVisible);
  const toggleModalEdit = useModalStore((state) => state.toggleModalEdit);

  const cards = useCardStore((state) => state.cards);
  const addCard = useCardStore((state) => state.addCard);

  const cardToEdit = useCardStore((state) => state.cardToEdit);
  const editCard = useCardStore((state) => state.editCard);

  function handleCreateCard(id: number | null, title: string, description: string) {
    addCard(id, title, description);
  }

  function handleEditCard(id: number | null, title: string, description: string) {
    editCard({id, title, description});
  }

	return (
    <main className='h-screen overflow-y-hidden overflow-x-hidden bg-gray-200 dark:bg-gray-500 flex
    flex-col transition-all ease-in-out delay-100'>
      <div className='flex items-center justify-between w-screen'>
        <button
            onClick={() => toggleModalCreate()}
            className='hover:text-gray-800 hover:dark:text-gray-800 dark:text-gray-200 text-gray-500 flex items-center
            gap-1 font-semibold p-2 rounded-md transition-all ease-in-out delay-100'
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
        visible={modalCreateVisible}
        closeModal={() => toggleModalCreate()}
        confirmAction={handleCreateCard}
        type='create'
      />
      <Modal
        visible={modalEditVisible}
        closeModal={() => toggleModalEdit()}
        confirmAction={handleEditCard}
        type='edit'
        cardToEdit={cardToEdit}
      />
    </main>
)}
