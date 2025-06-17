import express from 'express';
import { viewAcerca, viewContacto, viewCurriculum, viewIndex, viewProyectos } from '../controller/portafolioController.js';

const router = express.Router();

router.get('/', viewIndex);
router.get('/acerca', viewAcerca);
router.get('/Curriculum', viewCurriculum);
router.get('/Proyectos', viewProyectos);
router.get('/Contacto', viewContacto);


export default router;