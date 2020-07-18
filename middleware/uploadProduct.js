const util = require("util")
const path = require("path")
const multer = require("multer")
const gridFsStrorage = require("multer-gridfs-storage")

// Khởi tạo biến cấu hình cho việc lưu trữ file upload
var storage = multer.diskStorage({
    // Định nghĩa nơi file upload sẽ được lưu lại
    destination: (req, file, callback) => {
        callback(null, path.join(`${__dirname}/../public/upload`));
    },
    filename: (req, file, callback) => {
        // ở đây có thể làm bất kỳ điều gì với cái file nhé.
        // ví dụ chỉ cho phép tải lên các loại ảnh png & jpg
        let math = ["image/png", "image/jpeg"];
        if (math.indexOf(file.mimetype) === -1) {
            let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
            return callback(errorMess, null);
        }
        // Tên của file thì mình nối thêm một cái nhãn thời gian để tránh bị trùng tên file.
        let filename = `${file.originalname}`;
        callback(null, filename);
    }
});

// Khởi tạo middleware uploadProduct với cấu hình như ở trên,
// Bên trong hàm .array() truyền vào name của thẻ input, ở đây đặt là "multi-image",
//và tham số thứ hai là giới hạn số file được phép upload mỗi lần, sẽ để là 17
var uploadProduct = multer({storage: storage}).array("multi-image", 12);
// Mục đích của util.promisify() là để bên controller có thể dùng async-await để gọi tới middleware này
var uploadProductMiddleware = util.promisify(uploadProduct);

module.exports = uploadProductMiddleware;