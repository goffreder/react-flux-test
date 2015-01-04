var React = require('react'),

    UsernameForm = React.createClass({
        _onSubmit : function(e) {
            e.preventDefault();

            var username = this.refs.username.getDOMNode().value.trim();

            if(!username) {
                return;
            }

            this.props.onLogin(username);

            this.refs.username.getDOMNode().value = "";

            return;
        },

        render : function() {
            return (
                <div id="username_login" className="col-md-8 text-right h1-nrmlz">
                    <form
                        id="username_login_form"
                        className="form-inline"
                        onSubmit={this._onSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="username_input" className="sr-only">Discogs username</label>
                            <input
                                type="text"
                                id="username_input"
                                className="form-control text-center login-io"
                                placeholder="Your username"
                                ref="username"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary ml-5">Login</button>
                    </form>
                </div>
            );
        }
    });

module.exports = UsernameForm;
