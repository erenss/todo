import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js"

dotenv.config();

//conn to the DB
conn();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set('view engine', 'ejs');

//static files middleware
app.use(express.static('public'));

app.use("/", pageRoute);

/* alt+Shift+A
app.get("/", (req, res) =>{
    res.render('todo');
});

app.get("/category", (req, res) => {
    res.render('category');
}); */


app.listen(port, () => {
    console.log(`Uygulama ${port} portunda çalışmaya başladı.`);
});