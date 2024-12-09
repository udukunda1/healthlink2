import { useLoaderData } from 'react-router-dom';

import PharmacyItem from './PharmacyItem';
import './PharmacyItemsDirectory.css';


function PharmacyItemsDirectory(){
    const { pharmacies } = useLoaderData()

    return(
        <div className='PharmacyItemsDirectory'>
        {pharmacies.map(pharmacy => <PharmacyItem key={pharmacy.id} id={pharmacy.id} image={pharmacy.image} title={pharmacy.title} content={pharmacy.address} />)}
        </div>
        )
}


export default PharmacyItemsDirectory;