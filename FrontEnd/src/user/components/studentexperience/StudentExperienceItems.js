
import './StudentExperienceItems.css';
import obed from '../../../image/obed.jpeg';
import cynthia from '../../../image/cynthia.jpeg';
import silas from  '../../../image/silas.jpeg';
import StudentExperienceItem from "./StudentExperienceItem";


function StudentExperienceItems(){

    let reviews = [
         {
          image: obed,
          name: 'Iradukunda Emmy',
          content: '"finally i can find medicine i need without running arround"'
         },
         {
            image: silas,
            name: 'silas tuyishime',
            content: '"Quick, reliable and Accurate - just what every student needs"'
        },
         {
            image: cynthia,
            name: 'cynthia Mutoni',
            content: '"This site saved me so much time! I was able to locate a pharmacy quickly and avoid unnecessary walking around."'
         }
        ]

    return (
        <div className='StudentExperienceItems'>
            {reviews.map(review => <StudentExperienceItem key={review.content} name={review.name} content={review.content} image={review.image} />)}
        </div>
    )
}

export default StudentExperienceItems;