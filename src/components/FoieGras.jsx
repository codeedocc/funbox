import React, { useState } from 'react'
import Cat from '../assets/cat.png'

const FoieGras = () => {
  const [foieGras, setFoieGras] = useState(10)
  const [foieGrasBought, setFoieGrasBought] = useState(0)
  const [foieGrasPicked, setFoieGrasPicked] = useState(false)

  const plusHandler = () => {
    setFoieGras((prev) => prev - 1)
    setFoieGrasBought((prev) => prev + 1)
  }

  const minusHandler = () => {
    setFoieGras((prev) => prev + 1)
    setFoieGrasBought((prev) => prev - 1)
  }

  return (
    <div className="info">
      <div className={foieGrasPicked ? 'block-left picked' : 'block-left'}>
        <div
          className="inner"
          onClick={() => setFoieGrasPicked((prev) => !prev)}
        >
          <div className="text">
            <p className="title">Сказочное заморское яство</p>
            <p className="name">Нямушка</p>
            <p className="description">с фуа-гра</p>
            <p className="quantity">{foieGras} порций</p>
            <p className="gift">мышь в подарок</p>
            <img src={Cat} alt="cute animal" className="picture" />
            <div className={foieGrasPicked ? 'weight picked' : 'weight'}>
              <p className="number">0,5</p>
              <p className="kg">кг</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        {foieGrasPicked ? (
          <p>Печень утки разварная с артишоками</p>
        ) : (
          <>
            <p>Чего сидишь? Порадуй котэ,</p>
            <button onClick={() => setFoieGrasPicked((prev) => !prev)}>
              купи
            </button>
          </>
        )}
      </div>

      {foieGrasPicked && (
        <div className="buy-sell">
          <button onClick={plusHandler} disabled={foieGras === 0}>
            +
          </button>
          {foieGrasBought}
          <button onClick={minusHandler} disabled={foieGrasBought === 0}>
            -
          </button>
        </div>
      )}
    </div>
  )
}

export default FoieGras
