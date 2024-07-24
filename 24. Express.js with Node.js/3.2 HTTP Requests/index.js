import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>I'm Jaden! I hope you enjoy my website!</p>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact us!</h1><p>My email address is Jaden.C.Soroka@Sherwin.com</p>")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})