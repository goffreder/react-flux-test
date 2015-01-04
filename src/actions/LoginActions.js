var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Consts = require('../constants/Consts'),

    LoginActions = {
        userDidLogin : function(username) {
            AppDispatcher.handleViewAction({
                actionType : Consts.ACTIONS.USER_LOGIN,
                username : username
            });
        },

        userDidLogout : function() {
            AppDispatcher.handleViewAction({
                actionType : Consts.ACTIONS.USER_LOGOUT
            });
        }
    };

module.exports = LoginActions;
