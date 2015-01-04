var React = require('react'),

    Content = React.createClass({
        render : function() {
            return (
                <div id="content">
                    Content for {this.props.username}
                </div>
            );
        }
    });

module.exports = Content;
