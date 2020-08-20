import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <Link  to='/'>
            <img  className='header__logo' 
             src='https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5bb4460812b73.image.jpg'
             alt='logo' />
            </Link>
            
            <div className='header__search'>
            <input className='search' type='text' placeholder='Search' />
            <SearchIcon className='header__icon'/>
            </div>

            <div className='header__nav'>
             <Link to='/login' className='header__link'>
                 <div className='header__option'>
                 <span className='header__optionLineOne'>hello</span>
                 <span className='header__optionLineTwo'>login</span>
                 </div>
             </Link>

             <Link to='' className='header__link'>
                 <div className='header__option'>
                 <span className='header__optionLineOne'>return</span>
                 <span className='header__optionLineTwo'>&order</span>
                 </div>
             </Link>

             <Link to='' className='header__link'>
                 <div className='header__option'>
                 <span className='header__optionLineOne'>your</span>
                 <span className='header__optionLineTwo'>prime</span>
                 </div>
             </Link>
             
             <Link to='/chekout' className='header__link'>
                 <div className='header__optionBasket'>
                 <ShoppingBasketIcon className='basket'/>
                 <span className='header__optionLineTwo'>0</span>
                 </div>
             </Link>
            </div>

            
        </div>
    )
}

export default Header
