import { useContext } from 'react';
import LanguageContext from '../../../shared/context/LanguageContext';
import './StudentExperience.css';
import StudentExperienceItems from './StudentExperienceItems';


function StudentExperience(){
    const { translations } = useContext(LanguageContext);

    return (
        <div className='student-experience'>
        <p className='student-experience__heading'>{translations.studentSuccessStories}</p>
        <StudentExperienceItems />
        </div>
    )
}

export default StudentExperience;