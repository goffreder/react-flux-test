var React = require('react'),

    UsernameWelcome = React.createClass({
        _onClick : function() {
            this.props.onLogout();

            return;
        },

        render : function() {
            return (
                <div id="username_logout" className="col-md-8 text-right h1-nrmlz">
                    <div className="text-center login-io">
                        Welcome, {this.props.username}
                    </div>
                    <button
                        type="button"
                        className="btn btn-danger ml-5 login-btn"
                        onClick={this._onClick}
                    >Logout</button>
                </div>
            );
        }
    });

module.exports = UsernameWelcome;
