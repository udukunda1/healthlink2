import { useCallback, useRef } from "react";


function useOpenModal() {
    const modalRef = useRef();

    const openModal = useCallback(()=> {
      modalRef.current.open(); // Calls handleOpen in the Modal component
    },[]);

    function closeModal() {
      modalRef.current.close();
    }

    return [modalRef, openModal, closeModal]
}

export default useOpenModal;