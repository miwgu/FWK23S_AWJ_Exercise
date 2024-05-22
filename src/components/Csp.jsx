import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';

const Csp = () => {

  const [blocked, setBlocked] = useState(false);
  const [imgUrls, setImgUrls] = useState(null);

  const fetchImage = async () =>{
     try{
      const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    
      if(!res.ok){
        throw new Error('Failed to fetch image');
      }

      const data = await res.json();
      const imageUrls = data.slice(0, 10).map(photo => photo.url);
      setImgUrls(imageUrls)

      setBlocked(false);
    } catch(error){
      console.error(error);
      setBlocked(true);
    }

  }


  return (
    <div>
      {blocked && <p>Image loading blocked by Content Security Policy (CSP)</p>}

      <Button variant='primary' onClick={fetchImage}>FETCH IMAGE</Button>
      <br/>


    {imgUrls && 

    imgUrls.map((url, index)=>(
    <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>Colors</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    ))
    }

    </div>
  )
}

export default Csp