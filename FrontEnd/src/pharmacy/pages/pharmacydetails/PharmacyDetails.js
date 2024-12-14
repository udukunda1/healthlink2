import { useNavigate, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import Button from '../../../shared/components/UI/Button/Button';
import Details from '../../components/pharmacydetails/Details';
import Inventory from '../../components/pharmacydetails/Inventory';
import Map from '../../components/pharmacydetails/Map';
import PharmcyStudentReviews from '../../components/pharmacydetails/PharmcyStudentReviews';
import './PharmacyDetails.css';
import { IoCaretBackCircle } from 'react-icons/io5';
import Modal from '../../../shared/components/UI/Modal/modal';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { useContext, useEffect, useRef, useState } from 'react';
import { authContext } from '../../../shared/context/auth-context';
import Skeleton from '../../../shared/components/skeleton/Skeleton';
import LanguageContext from '../../../shared/context/LanguageContext';

function PharmacyDetails() {
    const { pharmacy } = useLoaderData();
    const [modalRef, openModal, closeModal] = useOpenModal();
    const [myModalRef, myOpenModal] = useOpenModal();
    const textRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [logData, setLogData] = useState({err: ''});
    const { pharmacyId } = useParams();
    const { translations } = useContext(LanguageContext);

    let navigate = useNavigate();
    let navigation = useNavigation();
    const auth = useContext(authContext);


    function handleRate(){
        closeModal();
        async function Rate(){
            try{
                setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/rate/${pharmacyId}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.isLoggedIn.token
                },
                body: JSON.stringify({review: textRef.current.value})
            })

            const resData = await response.json();
            setIsLoading(false);

            setLogData(resData);

            if(resData.err){
                return;
            }
            textRef.current.value = '';
            navigate(`/directory/details/${pharmacyId}`);
            }
            catch {
                setIsLoading(false);
                console.log('failed');
            }
        }

        Rate();
    }

    function handleAddToFavourite() {
        async function Add(){
            try{
                setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/favourite/${pharmacyId}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.isLoggedIn.token
                }
            })

            const resData = await response.json();
            setIsLoading(false);

            setLogData(resData);

            if(resData.err){
                return;
            }
            auth.toggleChanger();
            navigate(`/directory/details/${pharmacyId}`);
            }
            catch {
                setIsLoading(false);
                console.log('failed');
            }
        }

        Add();
    }

    useEffect(() => {
        if(logData.err){
          myOpenModal();
        }
      }, [logData, myOpenModal])

    return(
        <>
        {navigation.state === 'loading' && <Skeleton />}
        {isLoading && <LoadingSpinner asOverlay />}
        <Modal  ref={myModalRef}>
        <h3>{logData.err === 'authentication failed'? translations.pharmacyDetails.loginPrompt : logData.err}</h3>
        </Modal>
        <div className='details-page'>
        <div className='pharmacy-details'>
        <Modal ref={modalRef} addButton={{name: translations.pharmacyDetails.rate, handleClick: handleRate}}>
        <h3>{translations.pharmacyDetails.leaveReview}</h3>
        <form>
        <textarea name="message" rows="5" cols="40" ref={textRef}>
        </textarea>
        </form>
        </Modal>
            <div className='pharmacy-details__head'>
                <Button onClick={() => navigate(-1)} type='a' className='cta-white'><IoCaretBackCircle />{translations.pharmacyDetails.backButton}</Button>
                <p>{pharmacy.title}</p>
            </div>
            <div className='pharmacy-details__body'>
            <div className='pharmacy-details__body--one'>
            <div className='pharmacy-details__map'>
                <Map />
            </div>
            <div className='pharmacy-details__other'>
            <div className='pharmacy-details__details'>
                <Details tel={pharmacy.number} hours={pharmacy.workingHours} address={pharmacy.address} />
            </div>
            <div className='pharmacy-details__inventory'>
            <div className='services'>
            <h2 className=''>{translations.pharmacyDetails.availableServices}</h2>
                <ul>
                    {pharmacy.avairableServices.length === 0? <h3>{translations.pharmacyDetails.unavailableServices}</h3> : pharmacy.avairableServices.map(service => <li key={service}>{service}</li>)}
                </ul>
            </div>
            <div className='inventories'>
            <h2>{translations.pharmacyDetails.liveInventory}</h2>
                <Inventory lastUpdated={pharmacy.inventory.updatedAt || 'not yet'} medicines={pharmacy.inventory.medicines} />
            </div>
            </div>
            <div className='buttons'>
                <Button onClick={handleAddToFavourite}>{translations.pharmacyDetails.addToFavourite}</Button>
                <Button onClick={openModal} type='a' className='cta-white'>Rate</Button>
            </div>
            </div>
            </div>
            <div className='pharmacy-details__reviews'>
            <h2>{translations.pharmacyDetails.studentsReviews}</h2>
               <PharmcyStudentReviews reviews={pharmacy.studentReviews} />
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default PharmacyDetails;

export async function ploader({params}) {
    const id = params.pharmacyId;
    const response = await fetch( `${process.env.REACT_APP_API_URL}/pharma/${id}`);

    return response;
  }