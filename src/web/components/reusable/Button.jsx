import React from 'react'

const Button = ({ eventOkClick , buttonClass, buttonName}) => {
    var styleButton = "header__login__btn " + buttonClass || '' ;
    
    return(
        <button className={ styleButton }
            onClick={ () => eventOkClick() }> { buttonName || 'CONTINUAR' } </button>
    )
}


export default Button;