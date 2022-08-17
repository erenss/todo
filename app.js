import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("INDEX sayfası");
});




app.listen(port, () => {
    console.log(`Uygulama ${port} portunda çalışmaya başladı.`);
});