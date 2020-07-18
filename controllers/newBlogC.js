module.exports = (req, res) => {
    if (req.session.userId) {
        return res.render('newBlog');
    }
    res.redirect('/users/login')
}