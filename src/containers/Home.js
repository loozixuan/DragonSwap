import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Home.css';

import Header from '../components/Header/Header';

class Home extends Component {
    render(){
        return(
            <>
                <Header />
            </>
        );
    }
}

export default Home;