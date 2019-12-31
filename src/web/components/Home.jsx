import React, { Component } from 'react';
import Header from './reusable/Header';
import Content from './Content';
import '../../utils/sass/index.scss';

class Home extends Component {


    render(){
        return(
            <>
                <section className="first-section">
                    <Header/>
                    <Content/>
                </section>
                    
            </>
        );
    }

}

export default Home;