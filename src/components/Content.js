import React, { useContext, useState } from 'react'
import { AppContext } from './contextApi';
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Content = () => {
    const { cart, setCart } = useContext(AppContext);

    const handleClick = (item) => {
        if (!cart.find((item2) => item2.name === item.name)) {
            setCart([...cart, item])
        }
    }
    return (
        <div className='mainbody'>
            <div className='leftSection'>
                <LeftSection handleClick={handleClick} />
            </div>
            <div className='rightSection'>
                <RightSection cart={cart} />
            </div>
        </div>
    )
}

export default Content