# User Registration Endpoint Documentation

## POST `/users/register`

Registers a new user in the system.

### Description

This endpoint allows a new user to register by providing their first name, last name, email, and password. Upon successful registration, a JWT authentication token is returned along with the user data.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, required): Minimum 3 characters.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

#### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

#### Missing Fields

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "All Fields are required"
  }
  ```

---

# User Login Endpoint Documentation

## POST `/users/login`

Authenticates an existing user and returns a JWT token.

### Description

This endpoint allows a registered user to log in using their email and password. If the credentials are valid, a JWT authentication token and user data are returned.

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

# User Profile Endpoint Documentation

## GET `/users/profile`

Returns the profile information of the authenticated user.

### Description

This endpoint returns the profile data of the currently authenticated user. The request must include a valid JWT token in the `Authorization` header as a Bearer token or as a cookie named `token`.

### Authentication

- **Required:** Yes (JWT token)

### Request Headers

- `Authorization: Bearer <jwt_token>`  
  or  
- Cookie: `token=<jwt_token>`

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // other user fields
  }
  ```

#### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

# User Logout Endpoint Documentation

## POST `/users/logout`

Logs out the authenticated user by blacklisting their JWT token.

### Description

This endpoint logs out the currently authenticated user. The JWT token is blacklisted and cannot be used for further requests. The token must be provided in the `Authorization` header as a Bearer token or as a cookie named `token`.

### Authentication

- **Required:** Yes (JWT token)

### Request Headers

- `Authorization: Bearer <jwt_token>`  
  or  
- Cookie: `token=<jwt_token>`

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

**Note:**  
All endpoints require valid input and authentication where specified. The JWT token should be included in requests to