import { useLoaderData, useNavigation } from 'react-router-dom';
import ImageHolder2 from '../../components/imageholder2/ImageHolder2';
import PharmacyItemsDirectory from '../../components/pharmacy/PharmacyItemsDirectory';
import './Directory.css';
// import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import { useContext, useEffect } from 'react';
import Modal from '../../../shared/components/UI/Modal/modal';
import Skeleton from '../../../shared/components/skeleton/Skeleton';
import LanguageContext from '../../../shared/context/LanguageContext';

function Directory(){
    const navigation = useNavigation();
    const [modalRef, openModal] = useOpenModal();
    const response = useLoaderData();
    const { translations } = useContext(LanguageContext);

  useEffect(() => {
    if(response.error){
      openModal();
    }
  }, [response.error, openModal])

  if(response.error){

    return (
      <>
      <Modal  ref={modalRef}>
        {response.message}
      </Modal>
      </>
    )
  }

    return (
        <>
        {navigation.state === 'loading' && <Skeleton />}
        <ImageHolder2 />
        <div className='wrapper'>
        <section className='pharmacies'>
            <h1>{translations.pharmacyDirectory}</h1>
            <PharmacyItemsDirectory />
         </section>
         </div>
        </>
    )
}

export default Directory;

export async function dloader() {
  try{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/pharma`);
  if(!response.ok){
    return {error: true, message: 'failed to fetch from server'}
  }

  return response;
  }

  catch {
    return {error: true, message: 'server is down now can not fetch'}
  }
}