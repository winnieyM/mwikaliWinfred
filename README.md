# User Management API

## Setup
1. Clone the repository
2. Run `npm install`
3. Start the server: `node index.js`
4. API will be available at `http://localhost:3000`

## API Endpoints

### Get Users
- **URL**: `/api/users`
- **Method**: `GET`
- **URL Params**: 
- **Success Response**: 
  - Code: 200
  - Content:{"id":100,"name":"Emily Stan","grade":"7"},{"id":101,"name":"Caleb Jeremy","grade":"8"},{"id":102,"name":"Israel Baraka","grade":"9"},{"id":103,"name":"Karen Jared","grade":"10"}
- **Error Response**:
  - Code: 404
  - Content: `{ message: "User not found" }`

  ### DELETE User by ID
- **URL**: `/api/users/101`
- **Method**: `DELETE`
- **URL Params**:ID 101 
- **Success Response**: 
  - Code: 200
  - Content:{ "message": "User deleted successfully" }
- **Error Response**:
  - Code: 404
  - Content: `{ message: "User not found" }`

  ### PUT User
- **URL**: `/api/users/103`
- **Method**: `PUT`
- **URL Params**: ID 103
- **Success Response**: 
  - Code: 200
  - Content:{
  "id": 103,
  "name": "Karen Jared",
  "grade": "10",
  "updated": true
}
- **Error Response**:
  - Code: 404
  - Content: `{ message: "User not found" }`

 

  





