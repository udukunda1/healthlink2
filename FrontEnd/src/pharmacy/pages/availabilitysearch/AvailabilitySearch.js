import SearchableList from '../../components/search/SearcheableList';
import './AvailabilitySearch.css';
import SearchItem from '../../components/pharmacy/SearchItem';
import { useLoaderData, useNavigation } from 'react-router-dom';
// import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { useContext, useEffect } from 'react';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import Modal from '../../../shared/components/UI/Modal/modal';
import Skeleton from '../../../shared/components/skeleton/Skeleton';
import LanguageContext from '../../../shared/context/LanguageContext';

function AvailabilitySearch(){
  const response = useLoaderData();
  const { pharmacies } = response;
  let navigation = useNavigation();
  const [modalRef, openModal] = useOpenModal();
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
        <div className='wrapper'>
        <div className='availability-search'>
        <h2>{translations.availabilitySearch.title}</h2>
        <div>
        <SearchableList items={pharmacies} itemKeyFn={(item) => item.id}>
          {(item) => <SearchItem title={item.title} address={item.address} image={item.image} time={item.workingHours} meds={item.inventory.medicines.slice(0, 3)} id={item.id} />}
        </SearchableList>
        </div>
        </div>
        </div>
        </>
    )

}

export default AvailabilitySearch;