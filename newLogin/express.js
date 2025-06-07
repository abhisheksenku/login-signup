const express = require('express');
const app = express();
const port = 5000;
const database = require('./utility/sql');

app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, 'views')));
const userRoutes = require('./routes/userRoutes');
app.use('/user',userRoutes);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','signup.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});
database.sync({force:false}).then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at http://localhost:${port}`);
    })
}).catch((err)=>{
    console.error('Unable to connect to server',err);
})