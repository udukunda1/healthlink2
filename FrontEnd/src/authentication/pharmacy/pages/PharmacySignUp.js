import { useContext, useEffect, useRef, useState } from "react";
import Button from "../../../shared/components/UI/Button/Button";
import './PharmacySignUp.css';
import { pharmaAuthContext } from "../../../shared/context/pharma-auth-context";
import { useNavigate } from "react-router-dom";
import Modal from "../../../shared/components/UI/Modal/modal";
import useOpenModal from "../../../shared/hooks/useOpenModal";
import LoadingSpinner from "../../../shared/components/UI/loadingspinner/LoadingSpinner";
import LanguageContext from "../../../shared/context/LanguageContext";
import ImageUpload from "../../../shared/components/UI/imagepicker/ImageUpload";

function PharmacySignUp(){

    const nameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const hoursRef = useRef();
    // const pictureRef = useRef();
    const dateRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const codeRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [logData, setLogData] = useState({err: ''});
    const auth = useContext(pharmaAuthContext);
    const navigate = useNavigate();
    const [modalRef, openModal] = useOpenModal();
    const { translations } = useContext(LanguageContext);
    const [pickedFile, setPickedFile] = useState();


    function handleRegister(event){
        event.preventDefault();

        async function signUp(){
            try{
                const formData = new FormData();
                formData.append('title', nameRef.current.value);
                formData.append('address', addressRef.current.value);
                formData.append('number', phoneRef.current.value);
                formData.append('workingHours', hoursRef.current.value);
                // formData.append('image', pictureRef.current.files[0]);
                formData.append('image', pickedFile);
                formData.append('date', dateRef.current.value);
                formData.append('password', passwordRef.current.value);
                formData.append('confirmPassword', confirmPasswordRef.current.value);
                formData.append('code', codeRef.current.value);
                setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/pharma/signup`,{
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
            navigate(`/pharmadashboard/${resData.id}`);
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
        <>
        <div className='wrapper'>
        <div className="pharmacy-signup">
        {isLoading && <LoadingSpinner asOverlay />}
        <Modal  ref={modalRef}>
        <p className='message'>{logData.err}</p>
        </Modal>
        <p>{translations.pharmacy_register}</p>
        <form>
            <label htmlFor='name'>{translations.name}</label>
            <input type="text" ref={nameRef} id="name" required />
            <label htmlFor='address'>{translations.address}</label>
            <input type="text" ref={addressRef} id="address" required />
            <label htmlFor='number'>{translations.phone_number}</label>
            <input type="number" ref={phoneRef} id="number" required />
            <label htmlFor='Hours'>{translations.working_hours}</label>
            <input type="text" ref={hoursRef} id="Hours" required />
            <label htmlFor='photo'>{translations.picture}</label>
            {/* <input type="file" ref={pictureRef} id="photo" required /> */}
            <ImageUpload setPickedFile={setPickedFile} id='image' />
            <label htmlFor="date">{translations.date}</label>
            <input type="date" ref={dateRef} id="date" />
            <label htmlFor='password'>{translations.password}</label>
            <input type="password" ref={passwordRef} id="Password" required />
            <label htmlFor='confirmpassword'>{translations.confirm_password}</label>
            <input type="password" ref={confirmPasswordRef} id="confirmPassword" required />
            <label htmlFor='code'>{translations.access_code}</label>
            <input type="number" ref={codeRef} id="code" required />
            <Button type='submit' id="button" onClick={(event) => handleRegister(event)}>{translations.register_button}</Button>
        </form>
        </div>
        </div>
        </>
    )
}

export default PharmacySignUp;