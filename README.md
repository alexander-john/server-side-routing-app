# Server-side routing

### Explanation:
Core Modules:

- `http`: To create the HTTP server.
- `url`: To parse and extract the path and query parameters from the request URL.

Routing Logic:

- Check the `path` and `method` of the incoming request to decide which content to serve.
- `path.startsWith('/products/')` checks for dynamic routes (e.g., `/products/123`).

Dynamic Routing:

- Extracts parts of the URL (like `123` in `/products/123`) by splitting the path.

Response:

- Sends back different HTML content based on the route.

Fallback for 404:

- If no route matches, send a `404 - Page Not Found` response.