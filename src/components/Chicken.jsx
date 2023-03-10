import React, { useState } from 'react'
import Cat from '../assets/cat.png'
import { useOverOut } from '../hooks/overOut'

const Chicken = () => {
  const [chicken, setChicken] = useState(10)
  const [chickenBought, setChickenBought] = useState(0)
  const [chickenPicked, setChickenPicked] = useState(false)
  const overOut = useOverOut()

  const plusHandler = () => {
    setChicken((prev) => prev - 1)
    setChickenBought((prev) => prev + 1)
  }

  const minusHandler = () => {
    setChicken((prev) => prev + 1)
    setChickenBought((prev) => prev - 1)
  }

  return (
    <div className="info">
      <div
        className={
          chicken === 0
            ? 'block-right empty'
            : chickenPicked
            ? 'block-right picked'
            : 'block-right'
        }
      >
        <div
          className={chicken === 0 ? 'inner empty' : 'inner'}
          onClick={() => setChickenPicked((prev) => !prev)}
          style={{ backgroundColor: overOut.bgColor }}
          onMouseOver={() => overOut.mouseOverHandler()}
          onMouseOut={() => overOut.mouseOutHandler()}
        >
          <div className={chicken === 0 ? 'text empty' : 'text'}>
            <p className="title">Сказочное заморское яство</p>
            <p className="name">Нямушка</p>
            <p className="description">с курой</p>
            <p className="quantity">
              <strong className="number">{chicken}</strong> порций
            </p>
            <p className="gift">
              <strong className="number">5</strong> мышей в подарок
            </p>
            <p className="result">заказчик доволен</p>
            <img
              src={Cat}
              alt="cute animal"
              className={chicken === 0 ? 'picture empty' : 'picture'}
            />
            <div
              className={
                chicken === 0
                  ? 'weight empty'
                  : chickenPicked
                  ? 'weight picked'
                  : 'weight'
              }
            >
              <p className="number">5</p>
              <p className="kg">кг</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        {chicken === 0 ? (
          <p className="message-empty">Печалька, с курой закончился</p>
        ) : chickenPicked ? (
          <p className="product">Филе из цыплят с трюфелями в бульоне</p>
        ) : (
          <>
            <p className="message-description">Чего сидишь? Порадуй котэ,</p>
            <button
              onClick={() => setChickenPicked((prev) => !prev)}
              className="buy-btn"
            >
              купи
            </button>
          </>
        )}
      </div>

      {chickenPicked && (
        <div className="buy-sell">
          <button onClick={plusHandler} disabled={chicken === 0}>
            +
          </button>
          {chickenBought}
          <button onClick={minusHandler} disabled={chickenBought === 0}>
            -
          </button>
        </div>
      )}
    </div>
  )
}

export default Chicken
