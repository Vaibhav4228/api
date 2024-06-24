# Worko.ai Backend Internship Assignment

## Overview

Worko.ai is developing a platform to help job seekers request referrals from multiple companies based on job description URLs. 

### Backend API Setup

- Create a Node.js project with MVC architecture.
- Implement controller, service, and DAO layers.
- Define models for CRUD operations.
- Design DTOs (Data Transfer Objects) for request and response handling.
- Integrate a validator framework for input validation.

### API Endpoints

- **GET** `/worko/user`: List all users.
- **GET** `/worko/user/:userId`: Retrieve details of a specific user.
- **POST** `/worko/user`: Creating a new user.
- **PUT** `/worko/user/:userId`: Update an existing user.
- **PATCH** `/worko/user/:userId`: Partially update a user.
- **DELETE** `/worko/user/:userId`: delete a user in the database.

## Getting Started

Follow these instructions to set up and run the Worko.ai Node.js backend project on your local machine.

### Prerequisites

- Node.js installed on your machine.
- NoSQL database installed and running.

### Installation

1. Clone the repository from GitHub:
   ```bash
   git clone 
   cd repository-name
   npm install
