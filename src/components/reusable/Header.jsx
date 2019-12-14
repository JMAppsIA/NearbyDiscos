import React, { Component } from 'react';
import ball from '../../utils/img/icon-nb-white.png';

class Header extends Component{


    render(){

        return(
            <>
                <div className="loginHeader">
                    <div className="divLogo">
                        <span className="imgTitle">{this.props.tituloImagen}</span>
                        <img src={ball} className="imgLogo"/>
                    </div>                      
                    <hr/>       
                </div>
            </>
        );

    }
        
    

}


export default Header;