//Declaraciones para el servidor
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//configuraciones
//Para que busque el index.html
app.use(express.static('public'));

/*
app.get("/", (req, res) => {
    res.sendFile("En teoria es el index.html");
});*/

app.get("*", (reg, res) => {
    /*res.send(`404 | Página no encontrada 40.4.html`);*/
    res.sendFile(__dirname + `/public/not-found-404.html`);
});


app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto: ', port");
});



//app.get obtener un recurso
//app.post crear un recurso
//app.put actualizar un recurso
//app.delete eliminar un recurso