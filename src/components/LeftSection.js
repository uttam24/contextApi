import React, { useContext } from 'react'
import { AppContext } from './contextApi'

const LeftSection = ({ handleClick }) => {
    const { product } = useContext(AppContext);

    return (
        <>
            {product?.map(item =>
                <div key={item.id} className='box'>
                    <div className='imageSection'>
                        <img src={item.imgsrc} alt='' />
                    </div>
                    <div className='pricelist'>
                        <span> {item.name}</span>
                        <span className='button' onClick={() => handleClick({ price: item.price, name: item.name })}> {item.price} </span>
                    </div>
                </div>)}
        </>
    )
}

export default LeftSection