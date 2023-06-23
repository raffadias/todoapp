export interface InputProps {
  label: string;
  type: 'text' | 'textarea';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function Input({label, type, value, setValue}: InputProps) {
  return (
    <div className='flex flex-col'>
      <label className='text-white font-bold'>{label}</label>
      {type === 'textarea' ? (
        <textarea
          className='p-2 max-h-[9rem] shadow-lg rounded-md bg-transparent border-solid border-2 border-white focus:border-gray-400 text-white focus:outline-0'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={10}
          cols={30}
        />
      ) : (
        <input
          className='p-2 shadow-lg rounded-md bg-transparent border-solid border-2 border-white focus:border-gray-400 text-white focus:outline-0'
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={20}
        />
      )}
    </div>
  );
}
