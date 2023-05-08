import React, { useContext } from 'react'
import { AppContext } from './contextApi';

const Nav = () => {
    const { cart } = useContext(AppContext);

    console.log(cart, "pppppppppppppppppp");
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <h2>DIVISIMA</h2>
                </div>
                <div className='cart'>
                    <div className='shoppingCart'>
                        <img src='images/shopping.svg' />
                        <div className='range'>
                            {cart.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav