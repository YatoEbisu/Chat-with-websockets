import express from 'express';
import './database';

const app = express();

app.get('/', (req, res) => {
    return res.json({
        message: 'NLW 05'
    });
});

app.post('/', (req, res) => {
    return res.json({
        message: 'usuario salvo com sucesso'
    });
});

app.listen(3333, () => {
    console.log('server is running on port 3333')
});






// *codigos*
// dia 01: missaoespacial