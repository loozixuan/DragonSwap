import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Layout from '../components/Layout';
class Home extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <div>Hello World</div>
                    {/* <Link to="/profile">My Link</Link>  */}

                </div>
            </Layout>

        );
    }
}

export default Home;