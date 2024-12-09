import { Form, useNavigate } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import './StudentSignUp.css';
import { useContext, useEffect, useRef, useState } from "react";
import { authContext } from "../../../shared/context/auth-context";
import useOpenModal from "../../../shared/hooks/useOpenModal";
import Modal from "../../../shared/components/UI/Modal/modal";
import LoadingSpinner from "../../../shared/components/UI/loadingspinner/LoadingSpinner";
import { path } from "../../../shared/utils/imagePath";

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
            const response = await fetch(`${path}/users/signup`,{
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
        <div className="student-signup">
        <Modal  ref={modalRef}>
        <p className='message'>{logData.err}</p>
        </Modal>
        <p>student SignUp</p>
        <Form>
        {isLoading && <LoadingSpinner asOverlay />}
            <label htmlFor='name'>Name</label>
            <input ref={name} type="text" name="name" id="name" required />
            <label htmlFor='email'>Email</label>
            <input ref={email} type="email" name="email" id="email" required />
            <label htmlFor='pic'>Picture</label>
            <input ref={file} type="file" accept=".jpg,.png,.jpeg" name="file" id="pic" required />
            <label htmlFor='password'>Password</label>
            <input ref={password} type="password" name="password" id="Password" required />
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input ref={confirmPassword} type="password" name="confirmPassword" id="confirmPassword" required />
            <Button type='submit' id="button" onClick={(event) => handleSubmit(event)} >SignUp</Button>
        </Form>
        </div>
    )
}

export default StudentSignUp;