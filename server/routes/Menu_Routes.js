const { Router, response } = require("express");
const fs = require("fs");
const menu = require("../Jsons/Menu.json");
const Daily = require("../Jsons/Daily.json");
const JWT = require('jsonwebtoken');
const { token } = require("morgan");

const Key = 'Restaurant';
const Path = "../server/Jsons/Daily.json";
const router = Router();

function Auth(req,res,next){

  const Token = req.headers.authorization;

  if(!Token){
    return res.status(401).json({message: 'Authentication Required'})
  }

  try{
    const decoded = JWT.verify(token,Key);
    req.user= decoded;
    next();
  }
  catch(err){
    return res.status(401).json({message: 'Invalid Token'})

  }

}

router.get("/Daily", (req, res) => {
  fs.readFile(Path, "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    res.send(JSON.parse(jsonString));
  });
});

router.get("/Menu", (req, res) => {
  res.send(menu);
});

router.post("/MenuDiario", (req, res) => {
  const { Sopa, Guisado, Guarnicion, Postres, Agua } = req.body;

  if (Sopa && Guisado && Guarnicion && Postres && Agua) {
    fs.readFile(Path, "utf-8", (err, data) => {
      try {
        const menu = JSON.parse(data);
        const updatedMenu = req.body;

        menu.Sopa = updatedMenu.Sopa;
        menu.Guisado = updatedMenu.Guisado;
        menu.Guarnicion = updatedMenu.Guarnicion;
        menu.Postres = updatedMenu.Postres;
        menu.Agua = updatedMenu.Agua;

        const json = JSON.stringify(menu, null, 2);

        fs.writeFile(Path, json, "utf-8", (err) => {
          if (err) {
            console.error(err);
            res.status(500).send({ error: "Internal server error" });
            return;
          }
        });
      } catch (err) {
        res.status(400).send({ error: "Invalid data" });
      }
    });
  } else {
    res.status(400).send({ error: "Missing fields" });
  }
});

module.exports = router;
