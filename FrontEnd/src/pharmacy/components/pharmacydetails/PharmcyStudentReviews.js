import './PharmcyStudentReviews.css';
import PharmcyStudentReviewsItem from './PharmcyStudentReviewsItem';

function PharmacyStudentReviews({reviews}) {

    if(reviews.length === 0){
        return (
            <h3 style={{textAlign: 'center', padding: '1rem'}}>no reviews yet</h3>
        )
    }
    const reversedReviews = [...reviews].reverse();

   return (
       <div className='PharmacyStudentReviews'>
           {reversedReviews.map(review => review.uid && <PharmcyStudentReviewsItem key={review.id} name={review.uid.name} content={review.content} image={review.uid.picture} />)}
       </div>
   )

}

export default PharmacyStudentReviews;