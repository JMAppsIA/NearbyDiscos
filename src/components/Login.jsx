import React from 'react';
import Header from './reusable/Header';
import Input from './reusable/Input';
import '../utils/scss/main.scss';


function Login() {
  return (
      <>
        <Header
        tituloImagen="NEARBY DISCOS"
        />
        <div className="title">
            <h1 className="title1">Buscas lugares para divertirte?<span className="title2">Accede</span> y disfruta los beneficios</h1>    
        </div> 
        <div className="subTitle">
                <p className="subTitle1">
                    Encuentra centros de entretenimiento cercanos a tu ubicación, efectúa compras en tu local de preferencia!
                </p>
                <p className="subTitle2">Quiero saber más</p>
        </div>

        <Input/>
      </>
  );
}

export default Login;
