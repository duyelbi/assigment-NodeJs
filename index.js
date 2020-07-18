// import module
const express = require('express')
const app = new express()

var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');


var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname);
    }
  });
var upload = multer({ storage: storage });


var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

var expressValidator = require('express-validator');
var flash = require('connect-flash');


app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

app.use(session({
    secret: 'admin',
    resave: true,
    key: 'user',
    saveUninitialized: true

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});




// template engine ejs
const ejs = require('ejs')
app.set('view engine', 'ejs')

// express session
app.use(session({
    secret: 'keyboard cat'
}))
// Ở đoạn code trên, chúng ta đăng ký expressSession middleware và truyền vào cấu hình
// cho middleware. secret là một string để express-session đăng ký và mã hóa các
// session ID được gửi bởi trình duyệt. Đây là chuỗi bất kỳ, bạn có thể thay đổi thoái mái, ở
// trên thì mình chọn là chuỗi 'keyboard cat'.


global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});
// Chúng ta khai báo một biến loggedIn kiểu global, mục đích là có thể truy cập biến này
// trong các file EJS.
// Với khai báo app.use("*", (req, res, next) => … ), với toán tử "*" tức là áp dụng cho mọi
// request, và chúng ta sẽ gán UserId cho biến loggedIn


// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw());



// controllers
const newBlogC = require('./controllers/newBlogC')
const homeC = require('./controllers/homeC')
const aboutC = require('./controllers/aboutC')
const blogC = require('./controllers/blogC')
const blogDetailC = require('./controllers/blogDetailC')
const contactC = require('./controllers/contactC')
const productC = require('./controllers/productC')
const productDetailC = require('./controllers/productDetailC')
const shoppingCartC = require('./controllers/shoppingCartC')
const newUserC = require('./controllers/newUserC')
const loginC = require('./controllers/loginC')
const loginUserC = require('./controllers/loginUserC')
const logoutC = require('./controllers/logoutC')

const storePostC = require('./controllers/storePostC')
const storeUserC = require('./controllers/storeUserC')

// admin
const adminC = require('./controllers/adminC')
const listAdminC = require('./controllers/listAdminC')
const newAdminC = require('./controllers/newAdminC')
const deleteAdminC = require('./controllers/deleteAdminC')
const editAdminC = require('./controllers/editAdminC')
const loginAdminC = require('./controllers/loginAdminC')
const adminLoginC = require('./controllers/adminLoginC')
const storeAdminC = require('./controllers/storeAdminC')
const storeAdminEditC = require('./controllers/storeAdminEditC')

// category
const newCateC = require('./controllers/newCateC')
const listCateC = require('./controllers/listCateC')
const editCateC = require('./controllers/editCateC')
const deleteCateC = require('./controllers/deleteCateC')
const storeCateC = require('./controllers/storeCateC')
const storeCateEditC = require('./controllers/storeCateEditC')
// Color
const newColorC = require('./controllers/newColorC')
const listColorC = require('./controllers/listColorC')
const editColorC = require('./controllers/editColorC')
const deleteColorC = require('./controllers/deleteColorC')
const storeColorC = require('./controllers/storeColorC')
const storeColorEditC = require('./controllers/storeColorEditC')
// Size
const newSizeC = require('./controllers/newSizeC')
const listSizeC = require('./controllers/listSizeC')
const editSizeC = require('./controllers/editSizeC')
const deleteSizeC = require('./controllers/deleteSizeC')
const storeSizeC = require('./controllers/storeSizeC')
const storeSizeEditC = require('./controllers/storeSizeEditC')
// Tags
const newTagC = require('./controllers/newTagC')
const listTagC = require('./controllers/listTagC')
const editTagC = require('./controllers/editTagC')
const deleteTagC = require('./controllers/deleteTagC')
const storeTagC = require('./controllers/storeTagC')
const storeTagEditC = require('./controllers/storeTagEditC')
// Product
const newProductC= require('./controllers/newProductC')
const deleteProductC = require('./controllers/deleteProductC')
const editProductC = require('./controllers/editProductC')
const listProductC = require('./controllers/listProductC')
const storeProductC = require('./controllers/storeProductC')
const storeProductEditC = require('./controllers/storeProductEditC')
// Customer
const listCustomerC = require('./controllers/listCustomerC')
const deleteCustomerC = require('./controllers/deleteCustomerC')
// Cart
const addToCartC = require('./controllers/add-to-cartC')
const listCartC = require('./controllers/listCartC')

// connect database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cozaStore_database', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true);


// file upload
const fileUpload = require('express-fileupload')
app.use(fileUpload())


//Đăng ký thư mục public
app.use(express.static('public'))




// port 1 ->65535
app.listen(3000, () => {
    console.log("App listening on port 3000")
})

// middleware
const validateMiddleWare = require("./middleware/validationMiddleware")
app.use('/posts/blog', validateMiddleWare)

const authMiddleware = require('./middleware/authMiddleware')
app.get('/blog/new', authMiddleware, newBlogC)
app.post('/posts/blog', authMiddleware, storePostC)

const adminMiddleware = require('./middleware/adminMiddleware')

// const addCartMiddleware = require('./middleware/addCartMiddleware.js');
// app.use(addCartMiddleware);

const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');
const { db } = require('./models/Tag');
app.get('/users/register', redirectIfAuthenticatedMiddleware, newUserC)
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserC)
app.get('/users/login', redirectIfAuthenticatedMiddleware, loginC)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserC)


app.get("/", homeC)
app.get("/index", homeC)
app.get("/about", aboutC)
app.get("/blog", blogC)
app.get("/blog-detail/:id", blogDetailC)
app.get("/contact", contactC)
app.get("/product", productC)
app.get("/product-detail/:id", productDetailC)
app.get("/shoping-cart", shoppingCartC)
app.get("/blog/new", newBlogC)
app.get("/users/register", newUserC)
app.get("/users/login", loginC)
app.get("/", logoutC)

app.post("/posts/blog", storePostC)
app.post("/users/register", storeUserC)
app.post("/users/login", loginUserC)

// admin
// app.use('/admin', adminC)
app.get('/admin/new', adminMiddleware, newAdminC)
app.get('/admin/:id/edit', adminMiddleware, editAdminC)
app.get('/admin/:id/delete', adminMiddleware, deleteAdminC)
app.get('/admin/login', adminLoginC)
app.get("/admin", adminMiddleware, adminC)
app.get("/admin/list", listAdminC)
app.post("/admin/new", adminMiddleware, storeAdminC)
app.post("/admin/login", loginAdminC)
app.post("/admin/:id/edit", adminMiddleware, storeAdminEditC)
// category
app.get("/admin/cate/new", adminMiddleware, newCateC)
app.get("/admin/cate/list", adminMiddleware, listCateC)
app.get("/admin/cate", adminMiddleware, listCateC)
app.get("/admin/cate/:id/edit", adminMiddleware, editCateC)
app.get("/admin/cate/:id/delete", adminMiddleware, deleteCateC)
app.post("/admin/cate/new", adminMiddleware, storeCateC)
app.post("/admin/cate/:id/edit", adminMiddleware, storeCateEditC)
// Color
app.get("/admin/color/new", adminMiddleware, newColorC)
app.get("/admin/color/list", adminMiddleware, listColorC)
app.get("/admin/color", adminMiddleware, listColorC)
app.get("/admin/color/:id/edit", adminMiddleware, editColorC)
app.get("/admin/color/:id/delete", adminMiddleware, deleteColorC)
app.post("/admin/color/new", adminMiddleware, storeColorC)
app.post("/admin/color/:id/edit", adminMiddleware, storeColorEditC)
// Size
app.get("/admin/size/new", adminMiddleware, newSizeC)
app.get("/admin/size/list", adminMiddleware, listSizeC)
app.get("/admin/size", adminMiddleware, listSizeC)
app.get("/admin/size/:id/edit", adminMiddleware, editSizeC)
app.get("/admin/size/:id/delete", adminMiddleware, deleteSizeC)
app.post("/admin/size/new", adminMiddleware, storeSizeC)
app.post("/admin/size/:id/edit", adminMiddleware, storeSizeEditC)
// Tags
app.get("/admin/tag/new", adminMiddleware, newTagC)
app.get("/admin/tag/list", adminMiddleware, listTagC)
app.get("/admin/tag", adminMiddleware, listTagC)
app.get("/admin/tag/:id/edit", adminMiddleware, editTagC)
app.get("/admin/tag/:id/delete", adminMiddleware, deleteTagC)
app.post("/admin/tag/new", adminMiddleware, storeTagC)
app.post("/admin/tag/:id/edit", adminMiddleware, storeTagEditC)
// Product
app.get("/admin/product/new", adminMiddleware, newProductC)
app.get("/admin/product/:id/delete", adminMiddleware, deleteProductC)
app.get("/admin/product/:id/edit", adminMiddleware, editProductC)
app.get("/admin/product/list", adminMiddleware, listProductC)
app.post("/admin/product/new", adminMiddleware, storeProductC)
app.post("/admin/product/:id/edit", adminMiddleware, storeProductEditC)
// Customer
app.get("/admin/customer/list", adminMiddleware, listCustomerC)
app.get("/admin/customer/:id/delete", adminMiddleware, deleteCustomerC)

// Cart
app.get("/aa-to-cart/:id", adminMiddleware, addToCartC)
app.get("/admin/cart/list", adminMiddleware, listCartC)

app.use((req, res) => res.render('404'));