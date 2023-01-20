import React from 'react'
import Cat from '../assets/cat.png'

const foieGras = () => {
  return (
    <div className="block-left">
      <div className="inner">
        <div className="text">
          <p className="title">Сказочное заморское яство</p>
          <p className="name">Нямушка</p>
          <p className="description">с курой</p>
          <p className="quantity">10 порций</p>
          <p className="gift">мышь в подарок</p>
          <img src={Cat} alt="cute animal" className="picture" />
          <div className="weight">
            <p className="number">0,5</p>
            <p className="kg">кг</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default foieGras
