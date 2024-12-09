import SearchableList from '../../components/search/SearcheableList';
import './AvailabilitySearch.css';
import SearchItem from '../../components/pharmacy/SearchItem';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { useEffect } from 'react';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import Modal from '../../../shared/components/UI/Modal/modal';

function AvailabilitySearch(){
  const response = useLoaderData();
  const { pharmacies } = response;
  let navigation = useNavigation();
  const [modalRef, openModal] = useOpenModal();

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
        <div className='availability-search'>
        <h2>Check Availability</h2>
        <div>
        <SearchableList items={pharmacies} itemKeyFn={(item) => item.id}>
          {(item) => <SearchItem title={item.title} address={item.address} image={item.image} time={item.workingHours} meds={item.inventory.medicines.slice(0, 3)} id={item.id} />}
        </SearchableList>
        </div>
        </div>
        </>
    )

}

export default AvailabilitySearch;