const admin = require('../models/Admin')
module.exports = (req, res, next) => {
    admin.findById(req.session.userId, (error, admin) => {
        if (error || !admin) {
            return res.redirect('/admin/login')
        }
        next()
    })
}

// Trong middleware này, chúng ta sẽ query vào DB để tìm userId:
// User.findById(req.session.userId...). Nếu kết quả trả về mà có tồn tại thì gọi hàm next()
// để chuyển sang middleware khác. Ngược lại, redirect về trang chủ.