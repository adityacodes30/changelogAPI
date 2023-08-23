import app from './server'
import * as dotenv from 'dotenv' //
dotenv.config()//

app.listen(3001 , ()=>
{
    console.log('on port 3001');
})


// also learning orm (object relational mapping)(oop for databases basically)- PRISMA in this course , database agnostic