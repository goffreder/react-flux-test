var assign = require('object-assign'),

    AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppStore = require('../stores/AppStore'),
    Consts = require('../constants/Consts'),

    currentUser;

var LoginStore = assign({}, AppStore, {
        /**
         * Return the currently logged in username
         * @return {object}
         */
        getLoggedInUser : function() {
            return { username : currentUser };
        },

        /**
         * Checks if a user has logged in
         * @return {boolean}
         */
        hasUserLoggedIn : function() {
            return "undefined" === typeof currentUser;
        }
    });

function logInUser(username) {
    currentUser = username;
}

function logOutUser() {
    currentUser = undefined;
}

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case Consts.ACTIONS.USER_LOGIN :
            logInUser(action.username);
            break;

        case Consts.ACTIONS.USER_LOGOUT :
            logOutUser();
            break;

        default :
            break;
    }

    LoginStore.emitAction(action.actionType);

    return true;
});

module.exports = LoginStore;
