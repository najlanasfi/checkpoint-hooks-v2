import React , {useState} from 'react'
import { Form,Button } from "react-bootstrap";

function AddMovie({movies,setMovies}){
const [toAddMovie, settoAddMovie]=useState(
    {id:Date.now(),
    title:'',
    description:'',
    posterURL:'',
    rating:''
    })
    const handleAdd=()=>{
        setMovies([...movies,toAddMovie])
    }
    const newmovie={title:'title',description:'defaultdescription',posterURL:'urldefault',rating:0}
    return (
        <div> 
        <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title"  onChange={x=>newmovie.title=x.target.value}  as='textarea' row={1}/>

  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description"   onChange={x=>newmovie.description=x.target.value} as='textarea' row={1}/>
  </Form.Group>

  <Form.Group className="mb-3" >
  <Form.Label>Poster URL</Form.Label>
  <Form.Control type="url" placeholder="Enter url"  onChange={x=>newmovie.posterurl=x.target.value}  as='textarea' row={1}/>
  </Form.Group>
  <Form.Group className="mb-3" >
  <Form.Label>Rating</Form.Label>
  <Form.Control type="number" placeholder="Enter rating"  as='textarea' row={1}/>
  </Form.Group>
  
  <Button variant="info" onClick={()=>handleAdd()}>ADD !</Button>
</Form>
        </div>
    )

}
export default AddMovie;