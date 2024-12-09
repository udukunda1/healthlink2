import { FaCheckCircle } from "react-icons/fa";

import './Inventory.css';


function Inventory({lastUpdated, medicines}) {

    if(medicines.length === 0){
        return (
            <h3 className="not-available" style={{ padding: '0 6rem'}}>no medicines yet</h3>
        )
    }

    return (
        <div className='inventory-list'>
        <h3>Last updated at {lastUpdated}</h3>
        <ul>
            {medicines.map(medicine => <li key={medicine}><FaCheckCircle /> <span>{medicine}</span></li>)}
        </ul>
       </div>
    )

}

export default Inventory;