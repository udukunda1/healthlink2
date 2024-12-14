import { MdOutlineFavorite } from 'react-icons/md';
import './FavouriteIcon.css';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/auth-context';
import Modal from '../UI/Modal/modal';
import useOpenModal from '../../hooks/useOpenModal';
import FavoutiteCard from '../favouritecard/FavoutiteCard';
import ReactDOM from 'react-dom'; // Import ReactDOM for createPortal
import LanguageContext from '../../context/LanguageContext';

function FavouriteIcon() {
    const [logData, setLogData] = useState({favourite: []});
    const auth = useContext(authContext);
    const [modalRef, openModal] = useOpenModal();
    const { translations } = useContext(LanguageContext);


    useEffect(() => {
        async function getFav(){
            if(auth.isLoggedIn){
                try{
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/favourite`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + auth.isLoggedIn.token
                        }
                    });

                    const resData = await response.json();

                    if(resData.err){
                        return;
                    }
                    setLogData(resData);
                }
                catch {
                    console.log('failed');
                }
            }
        }

        getFav();
    }, [auth.isLoggedIn]);

    // Modal content that will be rendered inside its current container
    const modalContent = (
        <Modal ref={modalRef}>
            <div className='favourite-modal'>
                {auth.isLoggedIn && logData.favourite.length !== 0 && <h3>{translations.favourites}</h3>}
                <h3>{!auth.isLoggedIn && translations.login_missing_favourite}</h3>
                {auth.isLoggedIn && logData.favourite.length !== 0 &&
                    <>{logData.favourite.map(pharma => <FavoutiteCard name={pharma.title} image={pharma.image} id={pharma.id} key={pharma.id} />)}</>}
                {auth.isLoggedIn && logData.favourite.length === 0 && <h3>{translations.no_favourite}</h3>}
            </div>
        </Modal>
    );

    // Render Favourite Icon using createPortal
    const favouriteIcon = (
        <div className='favourite-icon' onClick={openModal}>
            <h1><MdOutlineFavorite /></h1>
            <p>{logData.favourite.length}</p>
        </div>
    );

    return (
        <>
            {/* Render the Modal in the original container */}
            {modalContent}

            {/* Render the Favourite Icon outside the container using createPortal */}
            {ReactDOM.createPortal(favouriteIcon, document.body)}
        </>
    );
}

export default FavouriteIcon;
