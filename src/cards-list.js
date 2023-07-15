import React from 'react'
import movies from "./movie";
import Card from './card';

export default function CardList() {
  return (
    <div className="container">
      <h1 className="title">Best movies</h1>
      <div className="cards-wrapper">
         {movies && movies.map((movie,id) => <Card key={id} movie={movie} />)}
      </div>
    </div>
  )
}
