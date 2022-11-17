import React, { useState } from 'react';
import "./card.css";
import { FaTimes } from "react-icons/fa";


export default function LatestResult(props) {


    const boxes = props.movies.map(
        (item, index) => {
            return <Box key={index} image={item.poster_path} title={item.title} details={item.overview} casts={item.cast} type={item.release_date} rating={item.vote_average} />
        }
    )

    
    return (
        <div className='w-full grid md:grid-cols-4 gap-5'>
            {boxes}
        </div>
    )
}


const Box = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
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
                <img src={IMGPATH + props.image} alt="" className='w-full' />
                <div className='flex justify-between px-2 items-center'>
                    <span className='text-lg font-semibold'>{props.title}</span>
                    <span className='text-base text-yellow-500 font-bold'>{props.rating}</span>
                </div>

                <div className='flex justify-between px-2 mt-2 items-center'>
                    <span className="mt-4 items-center text-orange-500">Release Date: {props.type}</span>
                    <button className="details-btn" onClick={toggleModal}>Details</button>
                </div>
            </div>
        </>
    )
}