import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapReduxStateToProps = reduxState => ({
    loggedIn: reduxState.auth.loggedIn
});

const mapReduxDispatchToProps = {

};

export default connect(mapReduxStateToProps, mapReduxDispatchToProps)(
    class IndexPage extends Component {
        render() {
            if(!this.props.loggedIn){
                return (<Redirect to={{ pathname: "/login" }} />);
            }
            return (
                <div>
                    Index!
                </div>
            );
        }
    })