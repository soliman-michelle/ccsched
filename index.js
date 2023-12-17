import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('New');
});

app.listen(3000, ()=> {
    console.log("apps is running");
})