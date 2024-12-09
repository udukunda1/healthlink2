import { Link } from 'react-router-dom';
import './SearchItem.css';
import { MdMedication } from 'react-icons/md';
import { motion } from 'framer-motion';
import { imagePath } from '../../../shared/utils/imagePath';

function SearchItem({title, address, image, time, meds, id}) {
    return(
        <Link to={`/directory/details/${id}`} className='search-item-card__link' >
        <motion.div
         className='search-item-card'
         whileHover={{scale: 1.01}}
         transition={{type: 'spring', stiffness: 500}}
         >
            <div className='search-item-card__image'>
                <img src={`${imagePath}${image}`} alt='img' />
            </div>
            <div className='search-item-card__content'>
                <h3>{title}</h3>
                <div className='search-item-card__content--time-and-address'>
                <p>{address}</p>
                <p>{'-'}{time}</p>
                </div>
                <h4>Available Meds:</h4>
                {meds.length === 0? <p>Unavailable at the moment!</p>
                :
                <ul>
                    {meds.map(med => <li key={med}><MdMedication />{med}</li>)}
                    <li className='others'>and others</li>
                </ul>
                }
            </div>
        </motion.div>
        </Link>
    )
}

export default SearchItem;
