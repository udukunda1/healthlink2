import { FaStar } from 'react-icons/fa';

import './StudentExperienceItem.css'

function StudentExperienceItem({name, content, image}) {

    return (
        <div className='StudentExperienceItem'>
            <div className="StudentExperienceItem__heading">
                <div className="StudentExperienceItem__heading--image">
                <img src={image} alt={name + ' image'} />
                </div>
                <div className="StudentExperienceItem__heading--name">
                    <p>{name}</p>
                    <p className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                </div>
            </div>
            <div className="StudentExperienceItem__content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default StudentExperienceItem;