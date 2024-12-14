import React, { useRef, useImperativeHandle, forwardRef, useContext } from 'react';
import logo2 from '../../../../image/logo2.svg';
//addButton={name: '', handleClick={...}};


import Button from '../Button/Button';
import './Modal.css';
import LanguageContext from '../../../context/LanguageContext';

const Modal = forwardRef(({children, addButton='', ...props}, ref) => {
  let a = useRef(null);
  const { translations } = useContext(LanguageContext);


  function handleClose() {
    a.current.close();
  }

  function handleOpen() {
    a.current.showModal();
  }

  // Expose the handleOpen function through the ref
  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose
  }));

  return (
    <dialog
     ref={a}
     initial={{opacity: 0, y: -30}}
     animate={{opacity: 1, y: 0}}
     {...props}
     className='mymodal'
     >
      <div className='placeholder'>
        <img src={logo2} alt='logo2' />
      </div>
      <div className='content'>
          {children}
      </div>
      <div className='modal-buttons'>
      {!!addButton && <Button onClick={addButton.handleClick} {...props}>{addButton.name}</Button>}
      <Button onClick={handleClose} type='red' className='red' {...props}>{translations.close}</Button>
      </div>
    </dialog>
  );
});

export default Modal;
