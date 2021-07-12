import React from 'react';
import './styles.css';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header row'>
            <a className='logo text-dark' href='#'>ReStore</a>
            <a>
                <i className='cart-icon fa fa-shopping-cart' />
                {numItems} items (${total})
            </a>
        </header>
    )
}

export default ShopHeader;