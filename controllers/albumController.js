
let controlador = {
    lista: function (req, res) {
        res.send("Lista de álbumes" + req.params.lista)
    },

    detalle: function (){},
    agregar: function (){}
    };

    module.exports = controlador;