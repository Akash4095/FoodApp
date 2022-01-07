import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <>
           <header className={classes.header}>
               <h1>ReactMeals</h1>
               <div className={classes.cart}>
               <h3>🛒 your cart <div className={classes.count}></div> </h3>
               </div>
              
           </header> 
           <div className={classes['main-image']}>
                   <img src="D:\react\sharpner\FoodApp\src\Components\Meals\meals.jpg" alt="" />
               </div>
        </>
    )
}

export default Header;
