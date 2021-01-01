const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());



// app.get('/', (req,res) => {
   
//     res.send(mess);
// }
// );

app.post('/login', (req, res) => {
    const USEREMAIL = "vika@email.com";
    const USERPASSWORD = "vika123";

    const { userEmail, userPassword } = req.body;
if (userEmail == USEREMAIL && userPassword == USERPASSWORD){
//200 ok
   

const user = {
    id: 1,
    name: "Vika",
    email: "vika@email.com",
    password: "vika123",
};
const token = jwt.sign(user, "" + process.env.JWT_KEY);
res.json({
    token, 
    user,
});
} else {
res.status(403);
res.json({
    messages: "invalid login information",
});
}

   
} );



app.listen(port, () => console.log('app running'));