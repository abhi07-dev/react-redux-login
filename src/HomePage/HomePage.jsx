import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <div  className="col-md-6 col-md-offset-4">
                   
                        <Link to="/login">Logout</Link>
                   
                </div>
            
                <div  className="col-md-6 col-md-offset-4">
                    <h2>Welcome, {user.firstName}!</h2>
                    <p></p>
                        
                </div>
                
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };