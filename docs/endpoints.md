# Backend API Documentation

This document outlines the API endpoints available in the Restaurant Menu Backend service.

## Base Configuration

- **Base URL**: `http://localhost:5000/api` (Development)
- **Content Type**: `application/json`
- **Authentication**: None (Current Implementation)

## Response Formats

### Success Response
```json
{
  "success": true,
  "data": <any>,
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "stack": <stack_trace_only_in_development>
}
```

---

## Health Check Endpoints

### Get API Status
Check if the API server is running and healthy.

- **URL**: `/`
- **Method**: `GET`
- **Auth Required**: No

#### Success Response
- **Code**: `200 OK`
- **Content**:
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-04-29T20:27:03.000Z",
  "environment": "development"
}
```

---

## Menu Endpoints

### List All Menu Items
Retrieves a list of all menu items with populated nutritional information.

- **URL**: `/menu`
- **Method**: `GET`
- **Auth Required**: No

#### Success Response
- **Code**: `200 OK`
- **Content**:
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "662f...",
      "name": "Classic Burger",
      "price": 12.99,
      "calories": 650,
      "category": "Main Course",
      "image": "https://example.com/burger.jpg",
      "model3D": "https://example.com/burger.glb",
      "nutrients": [
        {
          "_id": "662f...",
          "name": "Protein",
          "amount": "25g",
          "benefit": "Muscle growth"
        }
      ],
      "createdAt": "2024-04-29T10:00:00Z",
      "updatedAt": "2024-04-29T10:00:00Z"
    }
  ]
}
```

### Get Single Menu Item
Retrieve details of a specific menu item.

- **URL**: `/menu/:id`
- **Method**: `GET`
- **Auth Required**: No

#### Success Response
- **Code**: `200 OK`
- **Content**: Same as item object in the list.

#### Error Response
- **Code**: `404 Not Found`
- **Content**: `{ "success": false, "message": "Menu item not found" }`

### Create Menu Item
Add a new item to the restaurant menu.

- **URL**: `/menu`
- **Method**: `POST`
- **Auth Required**: No

#### Request Body
```json
{
  "name": "string (required)",
  "price": "number (required)",
  "calories": "number (required)",
  "category": "string (required)",
  "image": "string (url, required)",
  "model3D": "string (url, optional)",
  "nutrients": ["ObjectId (Nutrition Reference)"]
}
```

#### Success Response
- **Code**: `201 Created`
- **Content**: Created item object.

### Update Menu Item
Modify an existing menu item.

- **URL**: `/menu/:id`
- **Method**: `PUT`
- **Auth Required**: No

#### Request Body
Same as Create Menu Item (all fields optional).

#### Success Response
- **Code**: `200 OK`
- **Content**: Updated item object.

### Delete Menu Item
Remove an item from the menu.

- **URL**: `/menu/:id`
- **Method**: `DELETE`
- **Auth Required**: No

#### Success Response
- **Code**: `200 OK`
- **Content**: `{ "success": true, "message": "Item deleted successfully" }`

---

## Data Models

### MenuItem
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| name | String | Yes | Name of the food item |
| price | Number | Yes | Price in USD |
| calories | Number | Yes | Caloric content |
| category | String | Yes | Food category (e.g., Starters, Mains) |
| image | String | Yes | URL to the item image |
| model3D | String | No | URL to the 3D model (.glb/.gltf) |
| nutrients | Array | No | References to Nutrition objects |

### Nutrition
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| name | String | Yes | Nutrient name (e.g., Protein) |
| amount | String | Yes | Amount with units (e.g., 20g) |
| benefit | String | No | Health benefit description |
