// Modal.js
import React, { useState } from 'react';
import './modal.css'
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose }: any) => {
    const [signOut, setSignOut] = useState(false)
    const navigate = useNavigate();


    const clear = () => {
        setSignOut(true);
        navigate('/')
    }
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={onClose}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
                <div className="p-6 text-center">
                    <h2 className="mb-3 text-lg font-bold text-dark-400 dark:text-dark-400">Logout</h2>
                    <p >Are you sure you want to logout?</p>
                    <br />
                    <button data-modal-hide="popup-modal" type="button" className="text-white-500 bg-grey hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 hover:text-white-900 focus:z-10 dark:bg-red-700 dark:text-red-300 dark:border-red-500 hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-600 mr-[1rem]" onClick={clear}>
                        Logout
                    </button>
                    <button data-modal-hide="popup-modal" type="button" className="text-white-500 bg-grey hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 hover:text-white-900 focus:z-10 dark:bg-red-700 dark:text-red-300 dark:border-red-500 hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-600" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
