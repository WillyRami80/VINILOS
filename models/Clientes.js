module.exports = (sequelize, dataTypes) => {
    let alias = "Clientes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },

    };
    let config = {
        tableName: "clientes",
        timestamps: false
    }
    const Clientes = sequelize.define(alias, cols, config);

    return Clientes
     
}