import { useLoaderData, useNavigation } from 'react-router-dom';
import ImageHolder2 from '../../components/imageholder2/ImageHolder2';
import PharmacyItemsDirectory from '../../components/pharmacy/PharmacyItemsDirectory';
import './Directory.css';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import { useEffect } from 'react';
import Modal from '../../../shared/components/UI/Modal/modal';
import { path } from '../../../shared/utils/imagePath';

function Directory(){
    const navigation = useNavigation();
    const [modalRef, openModal] = useOpenModal();
    const response = useLoaderData();

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
        {navigation.state === 'loading' && <LoadingSpinner asOverlay />}
        <ImageHolder2 />
        <section className='pharmacies'>
            <h1>Pharmacy Directory.</h1>
            <PharmacyItemsDirectory />
         </section>
        </>
    )
}

export default Directory;

export async function dloader() {
  try{
    const response = await fetch(`${path}/pharma`);
  if(!response.ok){
    return {error: true, message: 'failed to fetch from server'}
  }

  return response;
  }

  catch {
    return {error: true, message: 'server is down now can not fetch'}
  }
}