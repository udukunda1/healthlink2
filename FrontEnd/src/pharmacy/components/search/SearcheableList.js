import { useEffect, useState } from 'react';

import './SearchableList.css';
import { FaSearch } from 'react-icons/fa';
import SpeechRec from '../speechrecogn.js/SpeechRec';


function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [word ,setWord] = useState('')

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(()=>{
    setSearchTerm(word)
  }, [word]);

  return (
    <div className="searchable-list">
      <div className='inputs'>
        <div>
        <input type="search" value={searchTerm} placeholder="Search For everything" onChange={handleChange} />
        </div>
      <div>
      <SpeechRec word={word} setWord={setWord} />
      </div>
      </div>
      {/* <p style={{color: 'red'}}>{word}</p> */}
      {(!searchTerm)?
      <div className='content-before-typing'>
      <h2>Instantly access what matters most.</h2>
      <div><FaSearch style={{width: '6rem', height: '6rem', color: '#1FCEBF'}} /></div>
      </div>
      :
      <div className='conten-after-typing'>
      <h2>Items Matching Your Search: <span>{searchResults.length}</span></h2>
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>
            {children(item)}
          </li>
        ))}
      </ul>
      </div>}
    </div>
  );
}

export default SearchableList;