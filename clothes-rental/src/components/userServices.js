/*
 Why We write userServices ?
These functions interact with a backend API,
allowing the application to perform CRUD (Create, Read, Update, Delete) operations on user data .

 Placing all user-related API calls in one file, we keep our code organized and separate the concerns of the application. 
 This makes the code easier to maintain and understand.
 */ 
 import httpClient from '../components/httpCommon'

 // Fetch all users from the server
 const getAll = () => {
     return httpClient.get('/api/users')
 }
 
 // Fetch a specific user by their ID
 const getUserById = (id) => {
     return httpClient.get(`/api/users/${id}`)
 }
 
 // Register a new user with provided data
 const register = (data) => {
     return httpClient.post('/api/users/register', data);
 }
 
 // Login a user with provided data (usually email and password)
 const login = (data) => {
     return httpClient.post('/api/users/login', data);
 }
 
 // Update user information by their ID with provided data
 const updateUser = (id, data) => {
     return httpClient.put(`/api/users/${id}`, data);
 }
 
 // Delete a user by their ID
 const deleteUser = (id) => {
     return httpClient.delete(`/api/users/${id}`);
 }
 
 // Export all the functions so they can be used in other parts of the application
 export default { getAll, getUserById, register, login, updateUser, deleteUser }
 