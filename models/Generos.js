module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        genero: {
            type: dataTypes.STRING,
        },
    };

        let config = {
            tableName: "generos",
            timestamps: false
        }
        const Generos = sequelize.define(alias, cols, config);
    
        return Generos
         
    }