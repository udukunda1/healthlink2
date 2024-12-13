import { Link } from 'react-router-dom';
import './PharmacyItem.css';
import { motion } from 'framer-motion';
import { imagePath } from '../../../shared/utils/imagePath';


function PharmacyItem({title, content, image, id}) {

    return(

        <motion.div
        className='pharmacy-card'
        whileHover={{scale: 1.02}}
        transition={{type: 'spring', stiffness: 500}}
        >
            <Link to={`/directory/details/${id}`} >
            <div className='pharmacy-card__image'>
                <img src={`${imagePath}${image}`} alt={title + ' image'} />
            </div>
            <div className='pharmacy-card__content'>
                <p className='title'>{title}</p>
                <p className='content'>{content}</p>
            </div>
            </Link>
        </motion.div>
    )
}

export default PharmacyItem;
