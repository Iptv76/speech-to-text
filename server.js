const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('.'));

// Configurar headers de seguridad y CORS
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    
    // Permitir acceso desde cualquier origen para la aplicación web
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    next();
});

// Ruta principal - servir la aplicación HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'stt_app.html'));
});

// Ruta específica para la aplicación
app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'stt_app.html'));
});

// Ruta de salud para verificar que el servidor está funcionando
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        service: 'Asistente de Voz'
    });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'stt_app.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`🎙️  Asistente de Voz ejecutándose en puerto ${port}`);
    console.log(`🌐 URL local: http://localhost:${port}`);
    console.log(`📱 Aplicación lista para usar`);
});

// Manejo graceful de cierre del servidor
process.on('SIGINT', () => {
    console.log('\n👋 Cerrando servidor...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n👋 Cerrando servidor...');
    process.exit(0);
});