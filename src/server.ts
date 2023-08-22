import express from 'express'
import router from './router';
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'))

app.get("/", (req, res) => {
    console.log('hello express');
    res.status(200);
    res.json({message:'hello'});
});


//paths in router exist on /api now 

app.use('/api', router);

export default app;
