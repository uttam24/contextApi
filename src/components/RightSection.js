import React from 'react'

const RightSection = ({ cart }) => {
    return (
        <>
            <div className='itemSection'>Item List</div>
            {cart.map((list) => (
                <>
                    <div className='listSection'>
                        <div className='list'>{list.name}</div>
                        <div className='list'>{list.price}</div>
                    </div>
                </>
            ))}
            {cart.map(item => item.price).reduce((a, b) => a + b, 0) !== 0 && <div className='totalDiv'><div className='price'>Total :-</div><div className='itemtotal'>{cart.map(item => item.price).reduce((a, b) => a + b, 0)}</div></div>}
        </>
    )
}

export default RightSection