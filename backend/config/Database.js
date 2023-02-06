import {Sequelize} from "sequelize";

const db = new Sequelize('incidencias_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
