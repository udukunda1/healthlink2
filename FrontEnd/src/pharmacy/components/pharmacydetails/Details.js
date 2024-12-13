import { FaPhone } from "react-icons/fa6";
import { BsFillStopwatchFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

import './Details.css';

function Details({tel, hours, address, services}) {

    return(
        <div className='datails-container'>
        <h2 className='item item1'><span><FaPhone /></span> {tel}</h2>
        <h3 className='item item2'><span><BsFillStopwatchFill /></span> working: {hours}</h3>
        <p className='item item3'><span><ImLocation /></span> {address}</p>
        </div>
    )

}

export default Details;