import express from 'express';
import portafolioRouter from './routes/portafolioRouter.js';

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.set('views', './views')
app.set('view engine', 'pug')


app.use('/', portafolioRouter);
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

