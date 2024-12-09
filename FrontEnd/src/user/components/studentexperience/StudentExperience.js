import './StudentExperience.css';
import StudentExperienceItems from './StudentExperienceItems';


function StudentExperience(){

    return (
        <div className='student-experience'>
        <p className='student-experience__heading'>Student Success Stories</p>
        <StudentExperienceItems />
        </div>
    )
}

export default StudentExperience;