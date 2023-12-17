import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Express vercel response');
});

app.listen(3000, ()=> {
    console.log("apps is running");
})