module.exports = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/user/login')
    })
}
// Với req.session.destroy(), chúng xóa tất cả dữ liệu liên quan sesson, kể cả session user
// id, sau khi xóa xong thì redirect về trang chủ.