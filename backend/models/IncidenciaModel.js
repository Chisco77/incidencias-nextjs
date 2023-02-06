import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Incidencia = db.define('incidencias',{
    idusuario: DataTypes.INTEGER,
    idtipoincidencia: DataTypes.STRING,
    estado: DataTypes.STRING,
    descripcion: DataTypes.STRING
},{
    freezeTableName:true
});

export default Incidencia;

(async()=>{
    await db.sync();
})();
