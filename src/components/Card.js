import React, {useState} from 'react';
import "./card.css";
import { FaTimes } from "react-icons/fa";


const Card = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <>

            {modal && (
                <section className="modal animate">
                    <div onClick={toggleModal} className="overlay"></div>
                    <article className="modal-content">
                        <p className="title">{props.title}</p>
                        <span className="details">{props.details}</span>
                        <button className="close-modal" onClick={toggleModal}>
                            <FaTimes />
                        </button>

                    </article>
                </section>
            )}


            <div className='shadow min-h-[200px] mt-3 pb-1'>
                <img src={IMGPATH + props.image} alt="movie" className='w-full' />
                <div className='flex justify-between px-2 items-center'>
                    <span className='text-lg font-semibold'>{props.title}</span>
                    <span className='text-base text-orange-500 font-bold'>{props.rating}</span>
                </div>

                <div className='flex justify-between px-2 mt-2 items-center'>
                    <span className="mt-4 items-center text-orange-500">Release Date: {props.type}</span>
                    <button className="details-btn" onClick={toggleModal}>Details</button>
                </div>
            </div>

        </>
    )
}

export default Card