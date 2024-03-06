// Importar módulos necesarios
const express = require('express');

// Inicializar la aplicación Express
const app = express();

// Definir una ruta básica
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Definir una ruta con parámetros
app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`¡Hola, ${nombre}!`);
});

// Definir una ruta para manejar errores 404
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
