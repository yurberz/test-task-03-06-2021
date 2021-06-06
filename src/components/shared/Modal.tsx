import React, { useEffect } from 'react';

import { IModal } from '../../helpers/interfaces'

const Modal = ({ children, closeModal }: IModal) => {
    const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        if ((evt.target as HTMLDivElement).dataset.name !== 'wrapper') {
            return;
        }

        closeModal();
    };

    const handleKeyPress = (evt: KeyboardEvent) => {
        if (evt.code === 'Escape') {
            closeModal();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className='modalContainer' onClick={handleClick} data-name="wrapper">
            <div className="modal">{children}</div>
        </div>
    );
};

export default Modal;