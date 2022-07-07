import express from "express";
import { eatRouter } from "./routes/eat.route.js";

const app = express();
// 🔽 追加 POSTでデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// 🔽 追加 JSONデータを使用するために必要
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
    res.json({
        uri: "/",
        message: "Hello Node.js!",
    });
});

app.use("/eat", (req, res) => eatRouter(req, res));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});