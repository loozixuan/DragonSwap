import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <>
                <div>Hello World</div>
                <Link to="/profile">My Link</Link>
            </>
        );
    }
}

export default Home;