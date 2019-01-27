const express = require('express');
const exphbs = require('express-handlebars');
const port = 5000;

const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About'
    });
});
app.get('/contact', (req, res) => {
    res.render('contact', {
        pageTitle: 'Contact'
    });
});

app.listen(port, () => console.log(`resver runs on ${port}`));