import Express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = Express();
const port = 3000;

app.listen (port, (req, res) => {
console.log(`Server is running on port number: ${port}`);
});