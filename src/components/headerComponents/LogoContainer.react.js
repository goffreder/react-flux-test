var React = require('react'),

    Logo = require('./Logo.react'),

    LogoContainer = React.createClass({
        render : function() {
            return (
                <div id="logo_container" className="col-md-4 text-center">
                <Logo />
                </div>
            );
        }
    });

module.exports = LogoContainer;
