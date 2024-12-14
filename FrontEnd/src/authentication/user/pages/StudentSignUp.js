import { Form, useNavigate } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import './StudentSignUp.css';
import { useContext, useEffect, useRef, useState } from "react";
import { authContext } from "../../../shared/context/auth-context";
import useOpenModal from "../../../shared/hooks/useOpenModal";
import Modal from "../../../shared/components/UI/Modal/modal";
import LoadingSpinner from "../../../shared/components/UI/loadingspinner/LoadingSpinner";
import LanguageContext from "../../../shared/context/LanguageContext";

function StudentSignUp(){
    const name = useRef();
    const email = useRef();
    const file = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const [isLoading, setIsLoading] = useState();
    const [logData, setLogData] = useState({err: ''});
    const auth = useContext(authContext);
    const navigate = useNavigate();
    const [modalRef, openModal] = useOpenModal();
    const { translations } = useContext(LanguageContext);


    function handleSubmit(event){
        event.preventDefault();

        async function signUp(){
            try{
                const formData = new FormData();
                formData.append('name', name.current.value);
                formData.append('email', email.current.value);
                formData.append('picture', file.current.files[0]);
                formData.append('password', password.current.value);
                formData.append('confirmPassword', confirmPassword.current.value);
                setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/signup`,{
                method: 'POST',
                body: formData
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

        signUp();
    }

    useEffect(() => {
        if(logData.err){
          openModal();
        }
      }, [logData, openModal])

    return (
        <div className='wrapper'>
        <div className="student-signup">
        <Modal  ref={modalRef}>
        <p className='message'>{logData.err}</p>
        </Modal>
        <p>{translations.student_signup}</p>
        <Form>
        {isLoading && <LoadingSpinner asOverlay />}
            <label htmlFor='name'>{translations.name}</label>
            <input ref={name} type="text" name="name" id="name" required />
            <label htmlFor='email'>{translations.email}</label>
            <input ref={email} type="email" name="email" id="email" required />
            <label htmlFor='pic'>{translations.picture}</label>
            <input ref={file} type="file" accept=".jpg,.png,.jpeg" name="file" id="pic" required />
            <label htmlFor='password'>{translations.password}</label>
            <input ref={password} type="password" name="password" id="Password" required />
            <label htmlFor='confirmpassword'>{translations.confirm_password}</label>
            <input ref={confirmPassword} type="password" name="confirmPassword" id="confirmPassword" required />
            <Button type='submit' id="button" onClick={(event) => handleSubmit(event)} >{translations.signup_button}</Button>
        </Form>
        </div>
        </div>
    )
}

export default StudentSignUp;