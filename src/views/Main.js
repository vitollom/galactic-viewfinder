import React from 'react'
import ImageItem from '../components/ImageItem'
import { CaretRightFilled, CaretLeftFilled } from '@ant-design/icons'

function Main(props) {
  return (
    <div className='main'>
      <div className='left'>
        Back
        {
          props.number !== 0 ? <CaretLeftFilled onClick={props.back} /> : <CaretLeftFilled />
        }
      </div>
      <ImageItem photo={props.photo} liked={props.liked} setLiked={props.setLiked} number={props.number} />
      <div className='right'>
        <CaretRightFilled onClick={props.next} />
        Next
      </div>
    </div>
  )
}

export default Main
