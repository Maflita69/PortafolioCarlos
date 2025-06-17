import fs from "fs";
import path from "path";

const viewIndex = (req, res) => {
    res.render('datos/principal');
};

const viewAcerca = (req, res) => {
    const filePath = path.join(process.cwd(), 'data', 'info.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.render('datos/acerca', { habilidades: [], actitudes: [] });
        }
        const jsonData = JSON.parse(data);
        res.render('datos/acerca', {
            habilidades: jsonData.habilidades || [],
            actitudes: jsonData.actitudes || []
        });
    });
};

const viewCurriculum = (req, res) => {
    const filePath = path.join(process.cwd(), 'data', 'info.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.render('datos/cv', { experiencia: [] });
        }
        const jsonData = JSON.parse(data);
        res.render('datos/cv', {
            experiencia: jsonData.experiencia || []
        });
    });
};

const viewProyectos = (req, res) => {
    const filePath = path.join(process.cwd(), 'data', 'info.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.render('datos/proyectos', { proyectos: [] });
        }
        const jsonData = JSON.parse(data);
        res.render('datos/proyectos', {
            proyectos: jsonData.proyectos || []
        });
    });
};

const viewContacto = (req, res) => {
    const filePath = path.join(process.cwd(), 'data', 'info.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.render('datos/contacto', { contacto: {} });
        }
        const jsonData = JSON.parse(data);
        res.render('datos/contacto', {
            contacto: jsonData.contacto || {}
        });
    });
};

export { viewIndex, viewAcerca, viewCurriculum, viewProyectos, viewContacto };