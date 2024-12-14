import './PharmaDashBoard.css';
import Med from '../../components/med';
import Service from '../../components/Service';
import Button from '../../../shared/components/UI/Button/Button';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { pharmaAuthContext } from '../../../shared/context/pharma-auth-context';
import Modal from '../../../shared/components/UI/Modal/modal';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { createPortal } from 'react-dom';

function PharmaDashBoard() {
    const { pharmacy } = useLoaderData();
    const auth = useContext(pharmaAuthContext);
    const navigate = useNavigate();
    const [modalRef, openModal, closeModal] = useOpenModal();
    const medRef = useRef();
    const serviceRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [logData, setLogData] = useState({ err: '' });
    const [myModalRef, myOpenModal] = useOpenModal();
    const [sModalRef, sOpenModal, sCloseModal] = useOpenModal();

    function handleLogout() {
        auth.logout();
        navigate('/authenticate/pharmacy');
    }

    function handleAddMed() {
        closeModal();
        async function Add() {
            try {
                setIsLoading(true);
                const response = await fetch(`${process.env.REACT_APP_API_URL}/pharma/medicine`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + auth.isLoggedIn.token
                    },
                    body: JSON.stringify({ medicine: medRef.current.value })
                });

                const resData = await response.json();
                setIsLoading(false);

                setLogData(resData);

                if (resData.err) {
                    return;
                }
                medRef.current.value = '';
                navigate(`/pharmadashboard/${pharmacy.id}`);
            } catch {
                setIsLoading(false);
                console.log('failed');
            }
        }

        Add();
    }

    function handleAddService() {
        sCloseModal();
        async function AddService() {
            try {
                setIsLoading(true);
                const response = await fetch(`${process.env.REACT_APP_API_URL}/pharma/service`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + auth.isLoggedIn.token
                    },
                    body: JSON.stringify({ service: serviceRef.current.value })
                });

                const resData = await response.json();
                setIsLoading(false);

                setLogData(resData);

                if (resData.err) {
                    return;
                }
                serviceRef.current.value = '';
                navigate(`/pharmadashboard/${pharmacy.id}`);
            } catch {
                setIsLoading(false);
                console.log('failed');
            }
        }

        AddService();
    }

    useEffect(() => {
        if (logData.err) {
            myOpenModal();
        }
    }, [logData, myOpenModal]);

    return (
        <>
            <div
                className='pharma-dashboard'
                style={{
                    backgroundImage: `url(${process.env.REACT_APP_API_URL}/uploads/images/${pharmacy.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            {isLoading && <LoadingSpinner asOverlay />}
            <Modal ref={myModalRef}>{logData.err}</Modal>

            {/* Send pharma-dashboard__header to the body using portal */}
            {createPortal(
                <div className='pharma-dashboard__header'>
                    <h1>{pharmacy.title}!</h1>
                </div>,
                document.body
            )}

            <div className='pharma-dashboard__content'>
                <div className='pharma-dashboard__content-holder'>
                    <Modal ref={modalRef} addButton={{ name: 'Add', handleClick: handleAddMed }}>
                        <h3 className='modal-header'>Add Medicine</h3>
                        <form>
                            <input type='text' ref={medRef} />
                        </form>
                    </Modal>
                    <Modal ref={sModalRef} addButton={{ name: 'Add', handleClick: handleAddService }}>
                        <h3 className='modal-header'>Add Service</h3>
                        <form>
                            <input type='text' ref={serviceRef} />
                        </form>
                    </Modal>
                    <div className='inventory-management'>
                        <h2>Inventory Management</h2>
                        <h3>Last Updated At {pharmacy.inventory.updatedAt}</h3>
                        <h3>Med List: </h3>
                        {pharmacy.inventory.medicines.length !== 0 ? (
                            pharmacy.inventory.medicines.map((medicine) => (
                                <Med name={medicine} key={medicine} />
                            ))
                        ) : (
                            <h2>Add some Meds</h2>
                        )}
                        <Button onClick={openModal}>add med</Button>
                    </div>
                    <div className='avairable-services'>
                        <h2>Available Services</h2>
                        {pharmacy.avairableServices.length !== 0 ? (
                            pharmacy.avairableServices.map((service) => (
                                <Service service={service} key={service} />
                            ))
                        ) : (
                            <h2>Add some Services</h2>
                        )}
                        <Button onClick={sOpenModal}>add service</Button>
                    </div>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </div>
        </>
    );
}

export default PharmaDashBoard;

export async function dashboardloader({ params }) {
    const id = params.pharmaId;
    const response = await fetch(`${process.env.REACT_APP_API_URL}/pharma/${id}`);
    return response;
}
