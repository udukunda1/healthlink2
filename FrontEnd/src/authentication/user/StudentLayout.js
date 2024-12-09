import { Outlet } from "react-router-dom";
import StudentNavigation from "./components/StudentNavigation";


function StudentLayout() {
    return (
        <>
        <StudentNavigation />
        <Outlet />
        </>
    )
}

export default StudentLayout;