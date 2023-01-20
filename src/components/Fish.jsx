import React, { useState } from 'react'
import Cat from '../assets/cat.png'

const Fish = () => {
  const [fish, setFish] = useState(10)
  const [fishBought, setFishBought] = useState(0)

  const plusHandler = () => {
    setFish((prev) => prev - 1)
    setFishBought((prev) => prev + 1)
  }

  const minusHandler = () => {
    setFish((prev) => prev + 1)
    setFishBought((prev) => prev - 1)
  }

  return (
    <div className="info">
      <div className="block-center">
        <div className="inner">
          <div className="text">
            <p className="title">Сказочное заморское яство</p>
            <p className="name">Нямушка</p>
            <p className="description">с рыбой</p>
            <p className="quantity">{fish} порций</p>
            <p className="gift">2 мыши в подарок</p>
            <img src={Cat} alt="cute animal" className="picture" />
            <div className="weight">
              <p className="number">2</p>
              <p className="kg">кг</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <p>Чего сидишь? Порадуй котэ,</p>
        <button>купи</button>
      </div>

      <div className="buy-sell">
        <button onClick={plusHandler} disabled={fish === 0}>
          +
        </button>
        {fishBought}
        <button onClick={minusHandler} disabled={fishBought === 0}>
          -
        </button>
      </div>
    </div>
  )
}

export default Fish
