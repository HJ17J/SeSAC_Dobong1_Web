import { useState } from 'react';

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alphabet: 'a' },
    { id: 2, alphabet: 'b' },
    { id: 3, alphabet: 'c' },
    { id: 4, alphabet: 'd' },
    { id: 5, alphabet: 'e' },
    { id: 6, alphabet: 'f' },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) return;
    const newAlpha = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alphabet: inputAlpha,
    });
    setList(newAlpha);
    setInputAlpha('');
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      addAlpha();
    }
  };

  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => alpha.id !== id);
    setList(newAlpha);
  };

  return (
    <div>
      <input
        type='text'
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={(e) => activeEnter(e)}
        value={inputAlpha}
      />
      <button onClick={addAlpha}>add alphabet</button>
      <ol>
        {list.map((el) => (
          <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
            {el.alphabet}
          </li>
        ))}
      </ol>
    </div>
  );
}
