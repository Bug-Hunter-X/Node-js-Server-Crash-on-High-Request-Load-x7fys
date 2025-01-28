const http = require('http');

const requestListener = function (req, res) {
  try {
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at Promise:', p, 'reason:', reason);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// Graceful shutdown
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed gracefully');
    process.exit(0);
  });
});