const express  = require("express");
const app = express();
const dotenv = require('dotenv');
const db_conn = require('./config/database');
const path = require('path');
// var bodyParser = require('body-parser');
// const {errorHandler} = require('./middleware/errorMiddleware');
var cors = require('cors')

// routes 
const contactRoutes = require('./routes/contactRoute');



dotenv.config({path: path.resolve(__dirname+'/.env')});
db_conn();

//middlewares 

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(errorHandler);
// app.use(cors());
// app.use(express.json());
// //routes config 
// app.use('/api/contact', require('./routes/ContactRoute'))



// app.get('/',(res,req)=>{
//     req.send("hello");
//     req.send(req.body);
// });

// insert dummy users 
// app.get('/insert_users',async(res,req)=>{
//     const users = await UserModel.insertMany(usersdata);
//     const adminuser = users[0]._id;
//     const sampleDishData = dishdata.map((product)=>{
//         return{...product,user:adminuser}

//     });
//     await DishModel.insertMany(sampleDishData);
//     req.send("data inserted ");

// })


// app.listen(process.env.PORT || 8080,()=>{
//     console.log("node server running on port "+process.env.PORT );
// })

// const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/ContactRoute');

app.use('/api', routes)

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})