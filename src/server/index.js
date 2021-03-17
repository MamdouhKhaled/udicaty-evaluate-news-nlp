var path = require('path')
require('dotenv').config();
const axios = require('axios')

const mockAPIResponse = require('./mockAPI');
const express = require('express')
const app = express()


const bodyParser = require('body-parser');
const cors = require('cors');



// Cors for cross origin allowance
app.use(cors());
app.use(express.static('dist'))
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// Get Data form meaningcloud
async function getData(url) {
    try {
        return await axios({
            url: url,
            method: 'get',
        });
    } catch (err) {
        console.log(err);
    }
}

app.get('/api/:url', async (req, res) => {
    try {
        const url = `${BASE_API_URL}?key=${process.env.API_ID}&of=json&url=${req.params.url}&lang=en`;
        getData(url)
            .then(result => {
                res.send({
                    agreement: result.data.agreement,
                    subjectivity: result.data.subjectivity,
                    confidence: result.data.confidence,
                    irony: result.data.irony
                })
            });
    } catch (err) {
        console.log(err.message)
    }
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
