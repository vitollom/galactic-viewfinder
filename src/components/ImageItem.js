import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import './ImageItem.css'

const ImageItem = ({
  photo: { title, url, explanation, copyright, date }, 
  number: number
}) => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(false)
  }, [number])

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
            <HeartFilled onClick={() => setLiked(!liked)} />
            // <Button variant="primary" onClick={() => setLiked(!liked)}>Unlike</Button>
            :
            <HeartOutlined onClick={() => setLiked(!liked)} />
            // <Button variant="secondary" onClick={() => setLiked(!liked)}>Like</Button>
        }
        {copyright && <div>&#169; {date && date.split("-")[0]} {copyright}</div>}
      </Card.Footer>
    </Card>
  )
}

export default ImageItem
