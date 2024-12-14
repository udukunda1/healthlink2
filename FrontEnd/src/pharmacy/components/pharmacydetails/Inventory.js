import { FaCheckCircle } from "react-icons/fa";

import './Inventory.css';
import { useContext } from "react";
import LanguageContext from "../../../shared/context/LanguageContext";


function Inventory({lastUpdated, medicines}) {
    const { translations } = useContext(LanguageContext);

    if(medicines.length === 0){
        return (
            <h3 className="not-available" style={{ padding: '0 6rem'}}>{translations.inventory.noMedicines}</h3>
        )
    }

    return (
        <div className='inventory-list'>
        <h3>{translations.inventory.lastUpdated} {lastUpdated}</h3>
        <ul>
            {medicines.map(medicine => <li key={medicine}><FaCheckCircle /> <span>{medicine}</span></li>)}
        </ul>
       </div>
    )

}

export default Inventory;