import { Link } from 'react-router-dom';
import './SearchItem.css';
import { MdMedication } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import LanguageContext from '../../../shared/context/LanguageContext';

function SearchItem({title, address, image, time, meds, id}) {
    const { translations } = useContext(LanguageContext);
    return(
        <Link to={`/directory/details/${id}`} className='search-item-card__link' >
        <motion.div
         className='search-item-card'
         whileHover={{scale: 1.01}}
         transition={{type: 'spring', stiffness: 500}}
         >
            <div className='search-item-card__image'>
                <img src={`${process.env.REACT_APP_API_URL}/uploads/images/${image}`} alt='click to view details' />
            </div>
            <div className='search-item-card__content'>
                <h3>{title}</h3>
                <div className='search-item-card__content--time-and-address'>
                <p>{address}</p>
                <p>{'-'}{time}</p>
                </div>
                <h4>{translations.searchItem.availableMeds}:</h4>
                {meds.length === 0? <p>{translations.searchItem.unavailable}</p>
                :
                <ul>
                    {meds.map(med => <li key={med}><MdMedication />{med}</li>)}
                    <li className='others'>{translations.searchItem.andOthers}</li>
                </ul>
                }
            </div>
        </motion.div>
        </Link>
    )
}

export default SearchItem;
