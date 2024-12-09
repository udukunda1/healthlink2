import { Outlet } from "react-router-dom";
import PharmacyNavigation from "./components/PharmacyNavigation";


function PharmacyLayout() {
    return (
        <>
        <PharmacyNavigation />
        <Outlet />
        </>
    )
}

export default PharmacyLayout;