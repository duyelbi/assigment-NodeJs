var shortId = require('shortId');
const cart = require('../models/Cart')

module.exports = function(req, res, next) {
    if (!req.signedCookies.sessionId) {
        var sessionId = shortId.generate();
        res.cookie('sessionId', sessionId, {
            signed: true
        });

        cart.getMaxListeners('sessions').push({
            id: sessionId
        }).write();
    }
    next();
}