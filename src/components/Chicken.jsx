import React from 'react'
import Cat from '../assets/cat.png'

const Chicken = () => {
  return (
    <div className="block-right">
      <div className="inner">
        <div className="text">
          <p className="title">Сказочное заморское яство</p>
          <p className="name">Нямушка</p>
          <p className="description">с курой</p>
          <p className="quantity">100 порций</p>
          <p className="gift">5 мышей в подарок</p>
          <p className="result">заказчик доволен</p>
          <img src={Cat} alt="cute animal" className="picture" />
          <div className="weight">
            <p className="number">5</p>
            <p className="kg">кг</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chicken
