import React from 'react'
import {useState} from 'react';
import {Alert} from 'react-bootstrap'
import {Container,Col,Row,Image} from 'react-bootstrap'
import {Card,Button,ListGroup,ListGroupItem} from "react-bootstrap"
import { Rating } from 'react-simple-star-rating'
import { CardGroup} from 'react-bootstrap'
function MovieCard({movie}){
 
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
  }

return (
 <Card  style={{ width: "22.5%" , marginLeft: "1rem" }}>
 <Card.Img variant="top" src={movie.posterURL} />
 <Card.Body>
 <Card.Title>{movie.title}</Card.Title>
 
 <Rating onClick={handleRating} ratingValue={movie.rating}/>
 </Card.Body>
</Card>
)}
export default MovieCard