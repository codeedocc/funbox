import React from 'react'
import Cat from '../assets/cat.png'

const Fish = () => {
  return (
    <div className="block-center">
      <div className="inner">
        <div className="text">
          <p className="title">Сказочное заморское яство</p>
          <p className="name">Нямушка</p>
          <p className="description">с рыбой</p>
          <p className="quantity">40 порций</p>
          <p className="gift">2 мыши в подарок</p>
          <img src={Cat} alt="cute animal" className="picture" />
          <div className="weight">
            <p className="number">2</p>
            <p className="kg">кг</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fish
