var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),

    Consts = require('../constants/Consts');

var AppStore = assign({}, EventEmitter.prototype, {
    addActionListener : function(actionType, callback) {
        this.on(actionType, callback);
    },
    removeActionListener : function(actionType, callback) {
        this.removeListener(actionType, callback);
    },

    addListeners : function(actions) {
        var that = this;

        actions.forEach(function(action) {
            that.addActionListener(action.type, action.callback);
        });
    },
    removeListeners : function(actions) {
        var that = this;

        actions.forEach(function(action) {
            that.removeActionListener(action.type, action.callback);
        });
    },
    emitAction : function(actionType) {
        this.emit(actionType);
    }
});

module.exports = AppStore;
