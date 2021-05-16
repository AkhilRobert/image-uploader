import multer from "multer";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/uploads");
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(".")[0];
        const extension = file.originalname.split(".").pop();
        const hash = uuid().split("-")[0];
        cb(null, `${fileName}-${hash}.${extension}`);
    },
});

export const upload = multer({ storage: storage });
