module.exports = (req, res, next) => {
    if (req.session.userId) {
        return res.redirect('/') // if user logfed in, redirect to home page
    }
    next()
}