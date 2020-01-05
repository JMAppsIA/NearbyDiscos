import React, { Component } from 'react';
import Header from './reusable/Header';
import Carouselle from './Carouselle';
import '../../utils/sass/index.scss';
import Content from './Content';

class Home extends Component {


    render(){
        return(
            <>
                <section className="overlayGrid first-section">
                    <Header/>
                    <Carouselle/>
                </section>
                <Content/>
            </>
        );
    }

}

export default Home;