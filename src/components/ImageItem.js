import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import ReactPlayer from 'react-player'
import './ImageItem.css'

const ImageItem = ({
  photo: { title, url, explanation, copyright, date, media_type },
  number,
}) => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(false)
    console.log(media_type)
  }, [number])

  return (
    <Card className='card'>
      <Card.Header className='card-header'>
        <h3>{title}</h3>
        <h4>
          {date}
        </h4>
      </Card.Header>
      {
        media_type === 'video'
          ?
          <Card.Body className='video-container'>
            <ReactPlayer className='video-embed' url={url} />
          </Card.Body>
          :
          <Card.Img className='card-image' src={url} alt={explanation}></Card.Img>
      }
      <Card.Body className='card-body'>{explanation}</Card.Body>
      <Card.Footer className='card-footer'>
        {
          liked ?
            <HeartFilled onClick={() => setLiked(!liked)} />
            :
            <HeartOutlined onClick={() => setLiked(!liked)} />
        }
        {copyright && <div>&#169; {date && date.split("-")[0]} {copyright}</div>}
      </Card.Footer>
    </Card>
  )
}

export default ImageItem
