import multer from "multer";
import path from "path"
const DIR = "./uploads/"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
}); 

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|svg|ico)$/)) {
        return cb(new Error('Please upload a valid image file'))
    }
    cb(undefined, true)
}

export const upload = multer({
    storage:storage, 
    limits:{fileSize: 1024 * 1024}, 
    fileFilter:fileFilter
})


