# Smart Goal Planner Backend Setup

## 1. Install json-server
```bash
npm install -g json-server
```

## 2. Start the server
```bash
json-server --watch db.json --port 3000
```

- The API will be available at http://localhost:3000/goals
- Supports GET, POST, PUT, PATCH, DELETE for /goals
