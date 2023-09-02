import app from './server'
import * as dotenv from 'dotenv' //
dotenv.config() //
import config from './config'


app.listen(config.port , ()=>
{
    console.log('on port 3001');
})


// also learning orm (object relational mapping)(oop for databases basically)- PRISMA in this course , database agnostic