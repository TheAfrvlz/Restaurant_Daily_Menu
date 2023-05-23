const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const Routes = require("./routes/Menu_Routes.js");
const MenuServer = express();


MenuServer.use(cors({
    origin:'http://192.168.184.1:5173',
    //origin:'*'
}))
MenuServer.set('json spaces',2);
MenuServer.use(morgan('dev'));
MenuServer.use(express.urlencoded({extended:false}));
MenuServer.use(express.json());

MenuServer.use(Routes);

MenuServer.listen(4000)

