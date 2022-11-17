import React from 'react';
import Card from "./Card";

export default function Result(props) {
    const boxes = props.movies.map(
        (item,index) => {
            return <Card key={index} image={item.poster_path} title={item.title} details={item.overview} type={item.release_date} rating={item.vote_average} />
        }
    )
    return (
        <div className='w-full grid md:grid-cols-4 gap-5'>
            {boxes}
        </div>
    )
}

