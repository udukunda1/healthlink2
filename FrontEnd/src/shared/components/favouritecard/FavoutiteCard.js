import { useContext } from 'react';

import './FavoutiteCard.css';
import { authContext } from '../../context/auth-context';
import { useLocation, useNavigate } from 'react-router-dom';
import { path } from '../../utils/imagePath';

function FavoutiteCard({image, name, id}){

    const auth = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    function handleRemove(){

        async function Remove(){
            try{

            const response = await fetch(`${path}/users/favourite/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.isLoggedIn.token
                }
            })

            const resData = await response.json();

            if(resData.err){
                return;
            }
            auth.toggleChanger();
            navigate(location.pathname); //current route
            }
            catch {
                console.log('failed');
            }
        }

        Remove();
    }

    return(
        <div className='favoutite-card'>
            <div className='favoutite-card__image'>
            <img src={`${path}/uploads/images/${image}`} alt='img' />
            </div>
            <h4>{name}</h4>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default FavoutiteCard;