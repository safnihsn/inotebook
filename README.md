# iNotebook: Your Cloud-Based Note-Taking Solution 🌥️📝

![iNotebook](https://img.shields.io/badge/iNotebook-React%20%7C%20Node.js%20%7C%20MongoDB-blue)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [CRUD Operations](#crud-operations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

iNotebook is a full-stack cloud-based note-taking web application. Users can securely create, read, update, and delete their personal notes from anywhere. Built with a focus on simplicity and efficiency, iNotebook leverages modern technologies to provide a seamless experience. 

For the latest updates and releases, visit [Releases](https://github.com/safnihsn/inotebook/releases).

## Features

- **User Authentication**: Secure login and registration using JWT.
- **CRUD Functionality**: Create, read, update, and delete notes easily.
- **Responsive Design**: Works on various devices with a mobile-friendly interface.
- **Real-time Updates**: Changes reflect immediately for a better user experience.
- **Search Functionality**: Quickly find notes with an efficient search bar.
- **Cloud Storage**: Access your notes from anywhere with cloud integration.

## Technologies Used

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Netlify for frontend, custom server for backend

## Installation

To set up iNotebook on your local machine, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/safnihsn/inotebook.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd inotebook
   ```

3. **Install Dependencies**:
   - For the frontend:
     ```bash
     cd client
     npm install
     ```
   - For the backend:
     ```bash
     cd server
     npm install
     ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the `server` directory and add your MongoDB URI and JWT secret.

5. **Run the Application**:
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

Now, you can access the application at `http://localhost:3000`.

## Usage

Once the application is running, navigate to the frontend URL. You will see a login page. If you are a new user, you can register by clicking the "Sign Up" button. After logging in, you can create new notes, view existing ones, edit, or delete them.

### Creating a Note

1. Click on the "New Note" button.
2. Fill in the title and content.
3. Click "Save" to create the note.

### Editing a Note

1. Click on the note you want to edit.
2. Make your changes.
3. Click "Update" to save the changes.

### Deleting a Note

1. Click on the note you wish to delete.
2. Click the "Delete" button.
3. Confirm the deletion.

## Authentication

iNotebook uses JWT for user authentication. When a user logs in, a token is generated and stored in local storage. This token is sent with every request to secure the API endpoints. 

### Login

To log in, enter your credentials on the login page. If the credentials are correct, you will receive a token that allows access to your notes.

### Registration

New users can register by filling out the registration form. Once registered, you can log in using your new credentials.

## CRUD Operations

iNotebook supports full CRUD operations for notes. This means you can create new notes, read existing notes, update them, and delete them as needed. Each operation is straightforward and user-friendly.

### Create

Creating a note involves filling out a form with a title and content. Once saved, the note will appear in your list.

### Read

All your notes are displayed in a list format. You can click on any note to view its details.

### Update

Editing a note is as simple as clicking on it, making changes, and saving.

### Delete

You can delete any note by clicking the delete button associated with it. A confirmation prompt ensures you do not accidentally delete important notes.

## Deployment

iNotebook is deployed using Netlify for the frontend and a custom server for the backend. 

### Frontend Deployment

1. Push your code to GitHub.
2. Connect your GitHub repository to Netlify.
3. Configure the build settings:
   - Build Command: `npm run build`
   - Publish Directory: `client/build`
4. Click "Deploy Site".

### Backend Deployment

For the backend, you can use services like Heroku or DigitalOcean. Make sure to configure your environment variables accordingly.

## Contributing

We welcome contributions to iNotebook. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, please contact:

- **Author**: [Your Name](https://github.com/safnihsn)
- **Email**: your.email@example.com

 
For the latest updates and releases, visit [Releases](https://github.com/safnihsn/inotebook/releases).
