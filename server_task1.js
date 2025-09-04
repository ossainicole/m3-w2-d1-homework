const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Optional: prevent the extra /favicon.ico request from cluttering logs
  if (url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  console.log(${new Date().toISOString()} ${method} ${url});

  // Route 1: Home
  if (url === '/' && method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Powered-By': 'Node.js'
    });
    res.end(<h1>Welcome</h1><p>This is the home route.</p>);
  
  // Route 2: About
  } else if (url === '/about' && method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Powered-By': 'Node.js'
    });
    res.end('About: This is a simple Node.js server example.');
  
  // Route 3: Users (JSON example)
  } else if (url === '/users' && method === 'GET') {
    const users = [
      { id: 1, name: 'Anil' },
      { id: 2, name: 'Nicole' },
      { id: 3, name: 'Westcliff'},
    ];
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Powered-By': 'Node.js'
    });
    res.end(JSON.stringify({ count: users.length, data: users }, null, 2));
  
  // No matches: Invalid Request
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Powered-By': 'Node.js'
    });
    res.end('Invalid Request!');
  }
});

server.listen(PORT, () => {
  console.log(The NodeJS server on port ${PORT} is now running....);
});


   



