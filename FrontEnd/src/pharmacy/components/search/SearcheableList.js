import { useState } from 'react';

import './SearchableList.css';
import { FaSearch } from 'react-icons/fa';


function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search For everything" onChange={handleChange} />
      {(!searchTerm)?
      <div className='content-before-typing'>
      <h2>Instantly access what matters most.</h2>
      <div><FaSearch style={{width: '6rem', height: '6rem', color: '#273B68'}} /></div>
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