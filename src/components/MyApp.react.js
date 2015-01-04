var React = require('react'),

    Header = require('./Header.react'),
    Content = require('./Content.react'),

    LoginStore = require('../stores/LoginStore'),
    Consts = require('../constants/Consts');

var MyApp = React.createClass({
        getInitialState : function() {
            return { username : undefined };
        },

        componentDidMount : function() {
            LoginStore.addListeners([
                {
                    type : Consts.ACTIONS.USER_LOGIN,
                    callback : this._onLogin
                },
                {
                    type : Consts.ACTIONS.USER_LOGOUT,
                    callback : this._onLogout
                }
            ]);
        },
        componentWillUnmount : function() {
            LoginStore.removeListeners([
                {
                    type : Consts.ACTIONS.USER_LOGIN,
                    callback : this._onLogin
                },
                {
                    type : Consts.ACTIONS.USER_LOGOUT,
                    callback : this._onLogout
                }
            ]);
        },

        render : function() {
            return (
                <div id="viewport" className="container">
                    <Header username={this.state.username} />
                    <Content username={this.state.username }/>
                </div>
            );
        },

        _onLogin : function() {
            this.setState(getLoggedInUser());
        },
        _onLogout : function() {
            this.setState({ username : undefined });
        }
    });

function getLoggedInUser() {
    return LoginStore.getLoggedInUser();
}

module.exports = MyApp;
