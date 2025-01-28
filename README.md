# Node.js Server Crash on High Request Load

This repository demonstrates a common issue in Node.js where a server crashes under heavy load due to unhandled exceptions or resource exhaustion. The original `server.js` file contains a simple HTTP server that is vulnerable to this issue. The solution, in `server-solution.js`, addresses these issues.

## Bug

The `server.js` file contains a basic HTTP server. While it works fine under light load, it fails when bombarded with many simultaneous requests, causing the server to crash without any helpful error messages.

## Solution

The `server-solution.js` introduces error handling and resource management techniques to mitigate the crash.  Specifically, it implements proper error handling using `try...catch` blocks and ensures that resources are released properly, regardless of whether requests are successful or not.