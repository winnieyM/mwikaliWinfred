// index.js
const express = require('express')
const app = express()
app.use(express.json())

// In-memory data store
let users = [
  { id: 100, name: 'Emily Stan', grade: '7' },
  { id: 101, name: 'Caleb Jeremy', grade: '8' },
  { id: 102, name: 'Israel Baraka', grade: '9' },
  { id: 103, name: 'Karen Jared', grade: '10' }
];

// Get user by id (provided)
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  res.json(user)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})


app.post('/api/users', (req, res) => {
  const { name, email } = req.body
  const newUser = {
    id: users.length + 1,  // Simple way to generate a new ID
    name,
    email
  }
  users.push(newUser)
  res.status(201).json(newUser)  // Respond with the new user and 201 status
})

// PUT - Update a user by id
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  const { name, email } = req.body
  user.name = name || user.name  // Only update if new data is provided
  user.email = email || user.email

  res.json(user)  // Return the updated user
})

// DELETE - Delete a user by id
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id))
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' })
  }

  const deletedUser = users.splice(userIndex, 1)  // Remove the user from the array
  res.json(deletedUser[0])  // Return the deleted user
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})