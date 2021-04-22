import express from 'express';
import './database';
import { routes } from './routes'

const app = express();

app.use(express.json());

app.use(routes);

// app.get('/', (req, res) => {
//     return res.json({
//         message: 'NLW 05'
//     });
// });

// app.post('/', (req, res) => {
//     return res.json({
//         message: 'usuario salvo com sucesso'
//     });
// });

app.listen(3333, () => {
    console.log('server is running on port 3333')
});






// *codigos*
// dia 01: missaoespacial
// dia 02: embuscadoproximonivel
// dia 03: austronautas