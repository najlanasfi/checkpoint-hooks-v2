import React from 'react'
import MovieCard from './MovieCard';
import {Container} from "react-bootstrap";
const MovieList = ({movies,searchCondition,selectRating}) => {
    return (
        
   <Container style={{display: "flex" ,flexWrap: "wrap"}}>
{movies
.filter(
  (movie) =>
   movie.title.toLowerCase().includes(searchCondition.toLowerCase()) && movie.rating >= selectRating
   )
.map((movie) => (
    <MovieCard movie={movie} />
  ))}
    </Container>        
);
};
export default MovieList
