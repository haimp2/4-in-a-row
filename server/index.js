const express = require('express');
const cors = require( 'cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', (req, res)=> {
    res.send('Hello World');
})

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});