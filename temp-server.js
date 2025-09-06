const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Import API routes
const authAPI = require('./api/auth');
const configAPI = require('./api/config');

// Mount API routes
app.use('/api/auth', authAPI);
app.use('/api/config', configAPI);
app.use('/api/public/config', configAPI);

// Health check
app.get(['/api/health', '/health'], (req, res) => {
	res.json({ status: 'ok', time: new Date().toISOString() });
});

// Root route
app.get('/', (req, res) => {
	res.json({
		message: 'Bisonte API - Google OAuth Backend',
		available_endpoints: [
			'/api/health',
			'/api/config', 
			'/api/public/config',
			'/api/auth/signin/google',
			'/api/auth/callback/google',
			'/api/auth/google',
			'/api/auth/session'
		],
		timestamp: new Date().toISOString(),
		version: '2.0.0'
	});
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
	res.status(404).json({
		success: false,
		error: `Ruta no encontrada: ${req.url}`,
		available_auth_routes: [
			'/api/auth/signin/google',
			'/api/auth/callback/google', 
			'/api/auth/google',
			'/api/auth/session'
		]
	});
});

// General 404 handler
app.use('*', (req, res) => {
	res.status(404).json({
		success: false,
		error: `Ruta no encontrada: ${req.originalUrl}`,
		message: 'Bisonte API - Endpoint not found'
	});
});

app.listen(PORT, () => {
	console.log(`[bisonte-api] Server running on port ${PORT}`);
	console.log(`[bisonte-api] Available routes:`);
	console.log(`  GET  /api/health`);
	console.log(`  GET  /api/config`);
	console.log(`  GET  /api/auth/signin/google`);
	console.log(`  GET  /api/auth/callback/google`);
	console.log(`  POST /api/auth/google`);
	console.log(`  GET  /api/auth/session`);
});

module.exports = app;
