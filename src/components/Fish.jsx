import React, { useState } from 'react'
import Cat from '../assets/cat.png'

const Fish = () => {
  const [fish, setFish] = useState(10)
  const [fishBought, setFishBought] = useState(0)
  const [fishPicked, setFishPicked] = useState(false)

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
      <div className={fishPicked ? 'block-center picked' : 'block-center'}>
        <div className="inner" onClick={() => setFishPicked((prev) => !prev)}>
          <div className="text">
            <p className="title">Сказочное заморское яство</p>
            <p className="name">Нямушка</p>
            <p className="description">с рыбой</p>
            <p className="quantity">{fish} порций</p>
            <p className="gift">2 мыши в подарок</p>
            <img src={Cat} alt="cute animal" className="picture" />
            <div className={fishPicked ? 'weight picked' : 'weight'}>
              <p className="number">2</p>
              <p className="kg">кг</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        {fishPicked ? (
          <p className="product">
            Головы щучьи с чеcноком да свежайшая семгушка
          </p>
        ) : (
          <>
            <p>Чего сидишь? Порадуй котэ,</p>
            <button onClick={() => setFishPicked((prev) => !prev)}>купи</button>
          </>
        )}
      </div>

      {fishPicked && (
        <div className="buy-sell">
          <button onClick={plusHandler} disabled={fish === 0}>
            +
          </button>
          {fishBought}
          <button onClick={minusHandler} disabled={fishBought === 0}>
            -
          </button>
        </div>
      )}
    </div>
  )
}

export default Fish
