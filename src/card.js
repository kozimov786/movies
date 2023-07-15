import React from 'react'

export default function Card({movie}) {
  return (
        <div className='card'>
            <h2 className='card-title'>{movie.name}</h2>
            <img className='card-img' src={movie.imgUrl} alt={movie.name} width={200} height={200} />
            <span className='card-liked'>Liked : {movie.liked} &#10084;   </span>
            <span className='card-year'> Year : {movie.year}</span>
        </div>
  )
};
