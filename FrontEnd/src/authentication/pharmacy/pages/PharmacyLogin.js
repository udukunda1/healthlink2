import { useContext, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pharmaAuthContext } from '../../../shared/context/pharma-auth-context';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import Modal from '../../../shared/components/UI/Modal/modal';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner'

import Button from "../../../shared/components/UI/Button/Button";
import './PharmacyLogin.css';
import LanguageContext from '../../../shared/context/LanguageContext';

function PharmacyLogin(){
    const auth = useContext(pharmaAuthContext);
    const phoneRef = useRef();
    const pssRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [logData, setLogData] = useState({err: ''});
    const navigate = useNavigate();
    const [modalRef, openModal] = useOpenModal();
    const { translations } = useContext(LanguageContext);


    function handleSubmit(event){
        event.preventDefault();

        async function loginData(){
            try{
                setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/pharma/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({number: phoneRef.current.value, password: pssRef.current.value})
            })

            const resData = await response.json();
            setIsLoading(false);

            setLogData(resData);
            // console.log(resData);

            if(resData.err){
                return;
            }
            auth.login(resData);
            navigate(`/pharmadashboard/${resData.id}`);
            }
            catch {
                setIsLoading(false);
                console.log('failed');
            }
        }

        loginData();
    }

    useEffect(() => {
        if(logData.err){
          openModal();
        }
      }, [logData, openModal])

    return (
        <div className='wrapper'>
        <div className="pharmacy-login">
        {isLoading && <LoadingSpinner asOverlay />}
        <Modal  ref={modalRef}>
        <p className='message'>{logData.err}</p>
        </Modal>
        <p>{translations.pharmacy_login}</p>
        <form>
            <label htmlFor='number'>{translations.phone_number}</label>
            <input type="number" id="number" ref={phoneRef} required />
            <label htmlFor='password'>{translations.password}</label>
            <input type="password" id="Password" ref={pssRef} required />
            <Button type='submit' id="button" onClick={handleSubmit}>{translations.login_button}</Button>
        </form>
        </div>
        </div>
    )
}

export default PharmacyLogin;