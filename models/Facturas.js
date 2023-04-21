module.exports = (sequelize, dataTypes) => {
    let alias = "Facturas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        id_Cliente: {
            type: dataTypes.INTEGER,
        },
        id_album: {
            type: dataTypes.INTEGER
        },
        fecha: {
            type: dataTypes.DATE
        },
        precioUnitario: {
            type: dataTypes.INTEGER
        },
        cantidad: {
            type: dataTypes.INTEGER
        },
        preciototal: {
            type: dataTypes.INTEGER
        }, 

    };
    let config = {
        tableName: "facturas",
        timestamps: false
    }
    const Factura = sequelize.define(alias, cols, config);

    return Factura
     
}