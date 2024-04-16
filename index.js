import Express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;
var response = "";

function userResponse (req, res, next) {
    response = req.body["userInput"];
    next();
}

app.use(bodyParser.urlencoded({extended: true}));

app.use(userResponse);

app.get ("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.listen (port, (req, res) => {
console.log(`Server is running on port number: ${port}`);
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(`You chose to ${response}`);
});