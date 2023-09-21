import React from 'react'
import Modal from '../modal/Modal'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    
    const navigate = useNavigate();


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const clear = () => {
        navigate('/');
    }
  return (
   <>
          <div className='grid grid-cols-3 gap-[6rem] mb-[7rem] pl-[7rem]'>
              <div className='text-white-400'>
                  <img src='image/Movie Projector.png' />
              </div>

              <div>
                  <form className="w-full col-span-4">
                      <label htmlFor="simple-search" className="block mb-2 text-sm font-medium text-dark-500 dark:text-white"></label>
                      <div className="relative mt-[4px]">
                          <input
                              type="text"
                              id="simple-search"
                              className="border text-dark text-lg placeholder-dark placeholder-opacity-50 rounded-lg focus:ring-white-500 outline-white block w-full md:w-full px-4 py-3 dark:border-white-600 dark:text-dark dark:focus:ring-white-500 bg-transparent"
                              placeholder="What do you want to watch?"
                              required
                          />



                          <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                          </div>
                      </div>
                  </form>


              </div>

              <div className="flex items-center">
                  {/* <h1 className="text-white ml-[9rem] text-3xl md:text-2xl lg:text-2xl ">Sign Out</h1> */}
                  <button type="button" className="text-blue-gray bg-grey-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium border  rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 flex items-center hover:text-white" onClick={openModal}>
                      <img src='image/logout.png' alt='logout' className='ml-6' />
                      <span > Logout</span>

                  </button>
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                  {/* <img src='image/nav.png' className='h-[2rem] w-[3.5rem] ml-1 mt-2 mr-0' /> */}

              </div>


          </div>
   </>
  )
}

export default Nav