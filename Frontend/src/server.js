const app = require('express')();
const path = require('path');
const axios = require('axios');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => 

    axios.get(process.env.BACKEND)
        .then(response => {
            res.render('pages/index', {
                API: response.data.message
            });
        })
        .catch(error => {
            console.log(error);
        })
);

const port = process.env.PORT || 8040;

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));