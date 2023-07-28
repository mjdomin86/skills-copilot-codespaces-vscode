// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
// 7. Create a route for PATCH /comments/:id
// 8. Create a route for OPTIONS /comments

// 1. Create a web server
const express = require('express')
const app = express()

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments')
})

// 3. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send(`GET /comments/${req.params.id}`)
})

// 4. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments')
})

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send(`PUT /comments/${req.params.id}`)
})

// 6. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send(`DELETE /comments/${req.params.id}`)
})

// 7. Create a route for PATCH /comments/:id
app.patch('/comments/:id', (req, res) => {
  res.send(`PATCH /comments/${req.params.id}`)
})

// 8. Create a route for OPTIONS /comments
app.options('/comments', (req, res) => {
  res.send('OPTIONS /comments')
})

// 9. Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})