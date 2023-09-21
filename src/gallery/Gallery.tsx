import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import Nav from '../nav/Nav';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';

interface Character {
    id: string;
    name: string;
    thumb: string;
}

const finalSpaceCharacters: Character[] = [

    {

        id: 'Stranger Things',

        name: 'Stranger Things',

        thumb: 'image/Strange.png',

    },

    {

        id: 'Batman Begins',

        name: 'Batman Begins',

        thumb: 'image/Batman.png',

    },

    {

        id: 'Spider Man',

        name: 'Spider Man',

        thumb: 'image/Spider.png',

    },

    {

        id: 'Dunkirk',

        name: 'Dunkirk',

        thumb: 'image/Dun.png',

    },

    {

        id: 'Dune',

        name: 'Dune',

        thumb: 'image/Dune.png',

    }

];

function Gallery() {
    const [characters, updateCharacters] = useState<Character[]>(finalSpaceCharacters);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [loading, setLoading] = useState(true)
    const [searchItem, setSearchItem] = useState("")

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

    function handleOnDragEnd(result: DropResult) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }

    const handleSearchInput = (e: any) => {
        e.preventDefault()
        setSearchItem(e.target.value)
    }
   
    function searchPicturesByName(query: string, pictureArray: Character[]) {
        const queryLowerCase = query.toLowerCase();

        const filteredPictures = pictureArray.filter((picture) => {
            const pictureNameLowerCase = picture.name.toLowerCase();
            return pictureNameLowerCase.includes(queryLowerCase);
        });

        return filteredPictures;
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])


    useEffect(() => {
        updateCharacters(searchPicturesByName(searchItem, finalSpaceCharacters))
    }, [searchItem])

    return (

        <div className="container mx-auto">
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
                                // value={searchQuery}
                                onChange={handleSearchInput}
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
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters" direction="horizontal">
                    {(provided) => (
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-x-auto"
                            style={{
                                listStyle: 'none',
                            }}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {characters.map(({ id, name, thumb }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="character-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10"
                                            >
                                                <div className="characters-thumb">
                                                    <img src={thumb} alt={`${name} Thumb`} />
                                                </div>
                                                <p>{name}</p>
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <footer className='flex justify-center items-center w-full bg-white dark:bg-gray-900 mt-4'>
                <div className="mx-auto p-2 md:py-8">

                    <div className='grid grid-cols-4 gap-[-20px]'>
                        <div className='mx-[1rem]'>
                            <img src='image/facebook.png' alt='facebook-icon' />
                        </div>

                        <div className='mx-[1rem]'>
                            <img src='image/instagram.png' alt='instagram-icon' />
                        </div>
                        <div className='mx-[1rem]'>
                            <img src='image/twitter.png' alt='twitter-icon' />
                        </div>
                        <div className='mx-[1rem]'>
                            <img src='image/youtube.png' alt='youtube-icon' />
                        </div>

                    </div>

                    <div className='grid grid-cols-3 gap-2 text-sm text-gray-500 text-center dark:text-dark-400 mt-7'>
                        <h3 className='font-bold font-2xl mx-[1rem]'>Conditions of use</h3>
                        <h5 className='font-bold font-2xl'>Privacy & Policy </h5>
                        <h5 className='font-bold font-2xl'>Press Room</h5>
                    </div>
                    <span className="block text-sm text-gray-500 mt-7 sm:text-center sm:text-base dark:text-gray-400 lg:text-lg">
                        ©2023 MovieBox by Ugochi Joy Amajoh
                    </span>

                </div>
            </footer>

        </div>
    );
}

export default Gallery;
