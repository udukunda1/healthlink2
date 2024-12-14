import { FaPhone } from "react-icons/fa6";
import { BsFillStopwatchFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

import './Details.css';
import { useContext } from "react";
import LanguageContext from "../../../shared/context/LanguageContext";

function Details({tel, hours, address, services}) {
    const { translations } = useContext(LanguageContext);

    return(
        <div className='datails-container'>
        <h2 className='item item1'><span><FaPhone /></span> {tel}</h2>
        <h3 className='item item2'><span><BsFillStopwatchFill /></span> {translations.workingHours}: {hours}</h3>
        <p className='item item3'><span><ImLocation /></span> {address}</p>
        </div>
    )

}

export default Details;