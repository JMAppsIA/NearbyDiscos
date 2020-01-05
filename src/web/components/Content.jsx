import React,{Component} from 'react';
import Button from './reusable/Button';

import event from '../../utils/img/event1.png';
import eventBG from '../../utils/img/event-bg.png';
import arrow from '../../utils/img/arrow.svg';

import sliderOne from '../../utils/img/slider1.png';
import sliderTwo from '../../utils/img/slider2.png';

class Content extends Component {


    render(){

        return (
            <>
                <div className="second-content">
                    <div className="second-content__event">
                                <img src={event} alt="iconNB" className="second-content__event__img-event"/>
                                <img src={eventBG} alt="iconNB" className="second-content__event__img-background"/>                            
                    </div>
                    <div className="second-content__description">
                        <div className="second-content__description__categories">
                            <Button
                                        buttonName="DANCE"
                                        buttonClass="btn-secondary btn-text btn--animated"
                                    />
                            <Button
                                buttonName="HOUSE PARTY"
                                buttonClass="btn-secondary btn-text btn--animated"
                            />

                        </div>
                        <div className="second-content__description__description">
                            <span>Global Fridays</span>
                            <span>Glow Up 4.20</span>
                            <h2>/ 26 Marzo 2020</h2>
                            <h3>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                            </h3>
                        </div>
                        <div className="second-content__description__buttons">
                            <Button
                                            buttonName="VER DETALLES"
                                            buttonClass="btn-secondary btn-text btn--animated"
                                        />
                            <Button
                                buttonName="OBTENER TICKET"
                                buttonClass="btn-secondary btn-text btn--animated"
                            />
                        </div>
                        <div className="second-content__description__timer">
                            <div className="second-content__description__timer__time">
                                <h1>30</h1><h1>:</h1><h1>30</h1><h1>:</h1><h1>30</h1><h1>:</h1><h1>09</h1>
                            </div>
                            <div className="second-content__description__timer__days">
                                <h2>dias</h2><h2> </h2><h2>horas</h2><h2> </h2><h2>minutos</h2><h2> </h2><h2>segundos</h2>
                            </div>
                            
                            

                        </div>
                    </div>
                </div>
                <div className="third-content">
                    <div className="third-content__title">
                            <span>/ Eventos</span>
                            <div className="third-content__title__subtitle">
                                <h1>Pr&oacute;ximos Eventos </h1>
                                <img src={arrow} alt="arrow" className=""/>
                            </div>
                            <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                            
                    </div>
                    <div className="third-content__table-events">
                        <table className="tbl-default">
                            <thead>
                                <tr>
                                    <th>
                                        Fecha
                                    </th>
                                    <th>

                                    </th>
                                    <th>
                                        Artista
                                    </th>
                                    <th>
                                        Evento
                                    </th>
                                    <th>
                                        Entradas
                                    </th>
                                </tr>                                
                            </thead>
                            <tbody>
                                <tr className="space">
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        20/03/2020
                                        
                                    </td>
                                    <td>
                                        <img src="" alt="iconNB" className=""/>
                                    </td>
                                    <td>DJ Ocean &amp; DJ Thunder</td>
                                    <td>Global Fridays</td>
                                    <td>
                                    <Button
                                            buttonName="SABER MAS"
                                            buttonClass="btn-secondary btn-text btn--animated"
                                        />
                                    <Button
                                        buttonName="OBTENER TICKET"
                                        buttonClass="btn-secondary btn-text btn--animated"
                                    />
                                    </td>
                                </tr>
                                <tr className="space">
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        20/03/2020                                    
                                    </td>
                                    <td>
                                        <img src="" alt="iconNB" className=""/>
                                    </td>
                                    <td>DJ Ocean &amp; DJ Thunder</td>
                                    <td>Global Fridays</td>
                                    <td>
                                    <Button
                                            buttonName="SABER MAS"
                                            buttonClass="btn-secondary btn-text btn--animated"
                                        />
                                    <Button
                                        buttonName="OBTENER TICKET"
                                        buttonClass="btn-secondary btn-text btn--animated"
                                    />
                                    </td>
                                </tr>
                                <tr className="space">
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        20/03/2020                                    
                                    </td>
                                    <td>
                                        <img src="" alt="iconNB" className=""/>
                                    </td>
                                    <td>DJ Ocean &amp; DJ Thunder</td>
                                    <td>Global Fridays</td>
                                    <td>
                                    <Button
                                            buttonName="SABER MAS"
                                            buttonClass="btn-secondary btn-text btn--animated"
                                        />                                    
                                    </td>
                                </tr>    
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>

                    </div>
                    <div className="third-content__button">
                        <Button
                            buttonName="Ver todos los eventos"
                            buttonClass="btn-secondary btn-text btn--animated"
                        />
                    </div> 
                </div>
                <div className="fourth-content">
                    <div className="fourth-content__title">

                    </div>
                    <div className="fourth-content__slider">
                        <div className="fourth-content__slider__slides">
                            <div className="fourth-content__slider__slides__slider-1">
                                <img src={sliderOne} alt="imgSlider"/>
                            </div>
                            <div className="fourth-content__slider__slides__slider-2">
                            <img src={sliderTwo} alt="imgSlider"/>
                            </div>
                            <div className="fourth-content__slider__slides__slider-3">
                                <img src={sliderOne} alt="imgSlider"/>
                            </div>
                            <div className="fourth-content__slider__slides__slider-4">
                                <img src={sliderTwo} alt="imgSlider"/>
                            </div>
                        </div>
                    </div>
                    <div className="fourth-content__pagination">
                        <div className="fourth-content__pagination__dot active"><span></span></div>
                        <div className="fourth-content__pagination__dot"><span></span></div>
                        <div className="fourth-content__pagination__dot"><span></span></div>
                        <div className="fourth-content__pagination__dot"><span></span></div>
                    </div>
                </div>
            </>
            
        );
    }

}

export default Content;