import { Outlet, useNavigation } from "react-router-dom";
import AuthenticateNavigation from "./AuthenticateNavigation";
import LoadingSpinner from "../shared/components/UI/loadingspinner/LoadingSpinner";


function AuthenticateLayout() {
    const navigation = useNavigation();
    return (
        <>
        {navigation.state === 'loading' && <LoadingSpinner asOverlay />}
        <AuthenticateNavigation />
        <Outlet />
        </>
    )
}

export default AuthenticateLayout;