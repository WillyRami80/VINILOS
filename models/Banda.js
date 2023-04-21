module.exports = (sequelize, dataTypes) => {
    let alias = "Bandas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
        },
    };

        let config = {
            tableName: "bandas",
            timestamps: false
        }
        const Banda = sequelize.define(alias, cols, config);
    
        return Banda
         
    }