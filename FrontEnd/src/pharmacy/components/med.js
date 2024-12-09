import { useContext, useState } from 'react';
import './Med.css';
import { pharmaAuthContext } from '../../shared/context/pharma-auth-context';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../shared/components/UI/loadingspinner/LoadingSpinner';
import { path } from '../../shared/utils/imagePath';


function Med({name}){
    const auth = useContext(pharmaAuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    function handleRemove(medName){

        async function Remove(){
            try{
                setIsLoading(true)
            const response = await fetch(`${path}/pharma/medicine`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.isLoggedIn.token
                },
                body: JSON.stringify({medicine: medName})

            })

            const resData = await response.json();
            setIsLoading(false)
            // console.log(resData);

            if(resData.err){
                return;
            }
            navigate(location.pathname); //current route
            }
            catch(err) {
                setIsLoading(false)
                console.log('failed', err);
            }
        }

        Remove();
    }

    return(
        <div className='med'>
            {isLoading && <LoadingSpinner />}
            <h3>{name}</h3>
            <button onClick={() => handleRemove(name)}>remove</button>
        </div>
    )
}

export default Med;