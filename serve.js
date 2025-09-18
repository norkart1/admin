#!/usr/bin/env node

// Simple serve script for production deployment
const { spawn } = require('child_process');
const port = process.env.PORT || 5000;

console.log(`Starting Vite preview server on port ${port}...`);

const child = spawn('npx', ['vite', 'preview', '--host', '0.0.0.0', '--port', port.toString()], {
  stdio: 'inherit',
  cwd: process.cwd()
});

child.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`Server exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down...');
  child.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down...');
  child.kill('SIGINT');
});