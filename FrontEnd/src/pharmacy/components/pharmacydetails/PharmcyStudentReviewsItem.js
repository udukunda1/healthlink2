import { FaStar } from 'react-icons/fa';

import './PharmcyStudentReviewsItem.css';

function PharmcyStudentReviewsItem({name, content, image}) {

    return (
        <div className='PharmcyStudentReviewsItem'>
            <div className="PharmcyStudentReviewsItem__heading">
                <div className="PharmcyStudentReviewsItem__heading--image">
                <img src={`${process.env.REACT_APP_API_URL}/uploads/images/${image}`} alt='profileimage' />
                </div>
                <div className="PharmcyStudentReviewsItem__heading--name">
                    <p className='name'>{name}</p>
                    <p className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                </div>
            </div>
            <div className="PharmcyStudentReviewsItem__content">
                <p className='name'>{content}</p>
            </div>
        </div>
    )
}

export default PharmcyStudentReviewsItem;