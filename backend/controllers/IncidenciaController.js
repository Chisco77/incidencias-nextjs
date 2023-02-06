import Incidencia from "../models/IncidenciaModel.js";

export const getIncidencias = async(req, res) =>{
    try {
        const response = await Incidencia.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getIncidenciaById = async(req, res) =>{
    try {
        const response = await Incidencia.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createIncidencia = async(req, res) =>{
    try {
        await Incidencia.create(req.body);
        res.status(201).json({msg: "Incidencia Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateIncidencia = async(req, res) =>{
    try {
        await Incidencia.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Incidencia Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteIncidencia = async(req, res) =>{
    try {
        await Incidencia.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Incidencia Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
