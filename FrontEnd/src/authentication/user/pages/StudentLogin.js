import { useContext, useRef, useState, useEffect } from 'react';
import Button from '../../../shared/components/UI/Button/Button';
import './StudentLogin.css';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { authContext } from '../../../shared/context/auth-context';
import { useNavigate } from 'react-router-dom';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import Modal from '../../../shared/components/UI/Modal/modal';
import LanguageContext from '../../../shared/context/LanguageContext';

function StudentLogin(){
    const auth = useContext(authContext);
    const emailRef = useRef();
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: emailRef.current.value, password: pssRef.current.value})
            })

            const resData = await response.json();
            setIsLoading(false);

            setLogData(resData);

            if(resData.err){
                return;
            }
            auth.login(resData);
            navigate('/');
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
        <div className="student-login">
        <Modal  ref={modalRef}>
        <p className='message'>{logData.err}</p>
        </Modal>
        <p>{translations.student_login}</p>
        <form>
            {isLoading && <LoadingSpinner asOverlay />}
            <label htmlFor='email'>{translations.email}</label>
            <input ref={emailRef} type="email" id="email" name="email" required />
            <label htmlFor='password'>{translations.password}</label>
            <input ref={pssRef} type="password" id="password" name="password" required />
            <Button type='submit' id="button" onClick={handleSubmit} >{translations.login_button}</Button>
        </form>
        </div>
        </div>
    )
}

export default StudentLogin;