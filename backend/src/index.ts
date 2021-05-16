import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";

import "./db";
import imageModel from "./db/model/image_model";
import { upload } from "./multer";

const app = express();

const PORT = 5000;

app.use(cors());

app.post("/api", upload.single("image"), async (req, res) => {
    const image = await imageModel.create({
        name: req.file.originalname,
        added: Date.now(),
        url: `/uploads/${req.file.filename}`,
    });

    res.send({
        message: "Image Added",
        id: image._id,
        url: encodeURI(image.url),
    });
});

app.get("/uploads/:file", (req, res) => {
    const file = req.params.file;
    const filePath = path.join(__dirname, `uploads/${file}`);

    if (!fs.existsSync(filePath)) {
        res.status(404).send("<h1>Not found </h1>");
    }
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`serving on the ${PORT}`);
});
