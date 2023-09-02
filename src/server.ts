import express from 'express'
import router from './router';
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth';
import { createNewUser, signIn } from './handlers/user';

const app = express();

//middlware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//routes
app.get("/", (req, res) => {
    console.log('hello express');
    res.status(200);
    res.json({message:'hello'});
});


//paths in router exist on /api now 

app.use('/api', protect , router);
app.post('/user' , createNewUser);
app.post('/signin', signIn)

app.use((err,req,res,next)=>{
    console.log(err);
    res.json({message:"there was an erro"});
})

export default app;
