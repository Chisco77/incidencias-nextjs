import express from "express";
import {
    getIncidencias,
    getIncidenciaById,
    createIncidencia,
    updateIncidencia,
    deleteIncidencia
} from "../controllers/IncidenciaController.js";

const router = express.Router();

router.get('/Incidencias', getIncidencias);
router.get('/Incidencias/:id', getIncidenciaById);
router.post('/Incidencias', createIncidencia);
router.patch('/Incidencias/:id', updateIncidencia);
router.delete('/Incidencias/:id', deleteIncidencia);

export default router;
