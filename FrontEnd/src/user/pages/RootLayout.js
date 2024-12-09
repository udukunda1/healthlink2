import { Outlet } from "react-router-dom";
import Navbar from "../../shared/components/navigation/Navbar";
import Footer from "../../shared/components/footers/footer";
import FavouriteIcon from "../../shared/components/favouriteicon/FavouriteIcon";
import { useContext } from "react";
import { authContext } from "../../shared/context/auth-context";


function RootLayout(){
    const auth = useContext(authContext);

    return (
        <>
        <Navbar />
        <FavouriteIcon key={auth.changer} />
        <Outlet />
        <Footer />
        </>
    )

}

export default RootLayout;