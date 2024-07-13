const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static('public'));

// Serve static files from the "images" directory
//app.use('/images', express.static(path.join(__dirname, 'images')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get(['/', '/home'], (req, res) => {
    res.render('home');
});

app.get('/ideas', (req, res) => {
    res.render('ideas');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});