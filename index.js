const express=require('express');

const app=express();

const port=8000;

const db=require('./config/mongoose');
const cookieParser = require('cookie-parser');

const expressLayout=require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expressLayout);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.urlencoded());

app.use(cookieParser());


// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running the server");
        return;
    }
    console.log("The server is running with port",port);

});