# Full Stack Refurbished Goods Selling Platform

## Project Overview

This project is a full-stack application designed to create a platform for selling refurbished goods. It leverages technologies such as React, Node.js, Redux Toolkit, and MongoDB. The application is built with a focus on modularity, scalability, and user role-based access.

## Key Features

### User Interfaces:

- Separate interfaces for Seller, Buyer, and Admin.
- Admin has full access to the entire application.
- Sellers can manage their products and bids.
- Buyers can browse products, filter, and place bids.

### Authentication and Authorization:

- User authentication and authorization handled through Redux.
- Admin has exclusive access to the entire application.

### Image Upload Handling:

- Utilizes Cloudinary, Multer, and Node.js for seamless multiple image uploads.

### Product Approval Workflow:

- Admin reviews and approves every product before it is listed on the platform.
- Ensures quality control and adherence to standards.

### MongoDB Integration:

- Complex MongoDB queries implemented for efficient data handling.
- Data storage, retrieval, and manipulation seamlessly integrated with the application.

### Bids/Quotes Functionality:

- Buyers can place bids/quotes on products.
- Seller receives and manages bids through their interface.

### Notifications:

- Real-time notifications triggered for all relevant actions.
- Enhances user engagement and provides timely updates.

### Cloud Services Integration:

- Integration with Cloudinary for efficient image storage and retrieval.

## Tech Stack

### Frontend:

- React
- Tailwind CSS
- Ant Design

### Backend:

- Node.js
- Express.js

### Database:

- MongoDB

### State Management:

- Redux Toolkit

### File Upload Handling:

- Cloudinary
- Multer
- Node.js
