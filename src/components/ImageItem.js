import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './ImageItem.css'

const ImageItem = ({
  photo: { title, url, explanation, copyright, date }
}) => {
  const [liked, setLiked] = useState(false)

  return (
    <Card className='card'>
      <Card.Header className='card-header'>
        <h3>{title}</h3>
        <h4>
          {date}
        </h4>
      </Card.Header>
      <Card.Img className='card-image' src={url} alt={explanation}></Card.Img>
      <Card.Body className='card-body'>{explanation}</Card.Body>
      <Card.Footer className='card-footer'>
        {
          liked ?
            <Button variant="primary" onClick={() => setLiked(!liked)}>Unlike</Button>
            :
            <Button variant="secondary" onClick={() => setLiked(!liked)}>Like</Button>
        }
        {copyright && <div>&#169; {date && date.split("-")[0]} {copyright}</div>}
      </Card.Footer>
    </Card>
  )
}

export default ImageItem
