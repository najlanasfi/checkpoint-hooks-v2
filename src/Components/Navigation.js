
import React, { useState } from 'react'
import { Navbar,Container,Nav,Form,Button } from 'react-bootstrap'
import { Rating,setShow,show,Header } from 'react-simple-star-rating'
import { Modal } from 'react-bootstrap';
const Navigation = ({setSearchCondition,selectRating,setSelectRating,setMovies,movies}) => {
    const [show,setShow]=useState(false);
    const handleAdd = ()=>{
setMovies([...movies,movieToAdd]);
setTimeout(() => {
    setShow(false);
},1500);
    };
    const [movieToAdd, setMovieToAdd] = useState({
title: "",
description:"",
posterURL:"",
rating:0});
    return (
        <Navbar bg="dark" variant="dark" style ={{marginBottom: "2rem"}}>
    <Container>
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Movies</Nav.Link>
      <Nav.Link href="#pricing">Movies</Nav.Link>
    </Nav>
    <Rating onClick={(x) => setSelectRating(x)} 
    ratingValue={selectRating}/>
    <Form.Control type="text" placeholder="Search" 
    style ={{ width: "250px" , marginLeft: "1rem"}}
    onChange={(e) => setSearchCondition(e.target.value)}
    ></Form.Control>
    </Container>
    <Button variant ="secondary" onClick={()=> setShow(true)}>
        Add New Movie 
    </Button>
    <Modal
        show={show}
        onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title >
       Movie Add
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
             <Form.Label>Title</Form.Label>
             <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,title:e.target.value})} type="text" placeholder="Enter Title"/>
             <Form.Label>Description</Form.Label>
             <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,description:e.target.value})} type="text" placeholder="Enter Description"/>
             <Form.Label>Poster URL</Form.Label>
             <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,posterURL:e.target.value})} type="text" placeholder="Enter URL"/>
             <Form.Label>Rating</Form.Label>
             <Form.Control type="number"onChange={(e)=>setMovieToAdd({...movieToAdd,rating:e.target.value})} placeholder="Enter Rating"/>
           <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
           <Button variant="secondary" onClick={()=> handleAdd()}>Add Movie</Button>
             </Form>
        </Modal.Body>
      </Modal>
  </Navbar>
    )
}
export default Navigation
