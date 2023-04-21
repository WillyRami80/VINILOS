module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
        },
        genero: {
            type: dataTypes.STRING
        },
        banda: {
            type: dataTypes.STRING
        },
        id_banda: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.INTEGER
        },
        lanzamiento: {
            type: dataTypes.DATE
        }, 

    };
    let config = {
        tableName: "albumes",
        timestamps: false
    }
    const Album = sequelize.define(alias, cols, config);

    return Album
     
}