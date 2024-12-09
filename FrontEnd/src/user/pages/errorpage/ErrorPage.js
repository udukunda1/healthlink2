import Footer from "../../../shared/components/footers/footer";
import Navbar from "../../../shared/components/navigation/Navbar";
import './ErrorPage.css';

function ErrorPage() {

    return(
        <>
        <Navbar />
        <div className='rem3-top-place-holder'></div>
        <div className="error-page">
        <h1>Page Not Found!</h1>
        </div>
        <Footer />
        </>
    )

}

export default ErrorPage;