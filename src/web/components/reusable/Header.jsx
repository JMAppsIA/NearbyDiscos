import React,{Component} from 'react';
import iconNB from '../../../utils/img/icon-nb.png';
import titleNB from '../../../utils/img/title-logo.png';
import Button from './Button';

class Header extends Component {

    render(){

        return(
            <>           
                <div className="container">
                    <header className="header">
                        <div className="div-logo">
                            
                            <img src={titleNB} alt="iconNB" className="div-logo__title-logo"/>
                            <img src={iconNB} alt="iconNB" className="div-logo__logo"/>
                        </div>
                        <nav className="header__nav">                            
                            <ul className="header__nav__navigation">
                                <li> <a className="active" href="none">Inicio</a> </li>
                                <li> <a href="none">Categor&iacute;as</a>
                                    <ul>
                                        <li> <a href="#none">Cat. 1</a> </li>
                                        <li> <a href="#none">Cat. 2</a> </li>
                                        <li> <a href="#none">Cat. 3</a> </li>
                                        <li> <a href="#none">Cat. 4</a> </li>
                                        <li> <a href="#none">Cat. 5</a> </li>
                                    </ul>
                                </li>
                                <li className="header__nav__ul__li"> <a href="none">Eventos</a> </li>
                                <li className="header__nav__ul__li"> <a href="none">Noticias</a> </li>
                                <li className="header__nav__ul__li"> <a href="none">Contacto</a> </li>
                            </ul>                           
                        </nav>
                        <div className="header__login">
                            <Button
                                buttonName="INGRESAR"
                                buttonClass="btn-primary btn--animated"
                            />
                            <div className="header__login__separator"></div>
                            <Button
                                buttonName="REGISTRARSE"
                                buttonClass="btn-secondary btn-text btn--animated"
                            />
                        </div>
                    </header>
                    
                </div>
            </>        
        );
    }

}


export default Header;