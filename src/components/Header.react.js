var React = require('react'),
    LoginActions = require('../actions/LoginActions'),

    UsernameWelcome = require('./headerComponents/UsernameWelcome.react'),
    UsernameForm = require('./headerComponents/UsernameForm.react'),
    LogoContainer = require('./headerComponents/LogoContainer.react'),

    Header = React.createClass({
        getInitialState : function() {
            return { username : undefined };
        },

        render : function() {
            var userDiv;

            if("undefined" !== typeof this.props.username) {
                userDiv = <UsernameWelcome
                    onLogout={this._onLogout}
                    username={this.props.username}
                />;
            }
            else {
                userDiv = <UsernameForm onLogin={this._onLogin} />;
            }


            return (
                <div id="header" className="row brd-bottom-1">
                    <LogoContainer />
                    {userDiv}
                </div>
            );
        },

        _onLogin : function(username) {
            LoginActions.userDidLogin(username);
        },
        _onLogout : function() {
            LoginActions.userDidLogout();
        }
    });

module.exports = Header;
