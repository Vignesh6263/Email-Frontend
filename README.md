# Lead Alert Generator - Frontend

This project was bootstrapped with Create React App and serves as the frontend for the Lead Alert Generator, a smart lead capture and email notification system.

## Project Overview

The frontend is a React application that provides a user-friendly form for capturing lead details (name, email, company, message). It validates user input, sends the data to a backend server, and displays success or error messages. The application communicates with a Node.js backend and an n8n workflow to process leads and send notifications.

## Available Scripts

In the frontend directory, you can run the following scripts:

### `npm start`

Runs the app in development mode. The application is configured to run on port 3001 to avoid conflicts with other services (e.g., n8n on port 3000).

Open `http://localhost:3001` to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode. For more information, see the Create React App documentation on running tests: https://facebook.github.io/create-react-app/docs/running-tests

### `npm run build`

Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes. Your app will be ready to deploy.

For more information, see the Create React App documentation on deployment: https://facebook.github.io/create-react-app/docs/deployment

### `npm run eject`

Note: This is a one-way operation. Once you `eject`, you can't go back!

If you need to customize the build tool and configuration, you can `eject` to gain full control over dependencies (webpack, Babel, ESLint, etc.). This command copies all configuration files and transitive dependencies into your project. All commands except `eject` will still work, but they will point to the copied scripts for customization. Use this only if necessary, as the default setup is suitable for most small to medium deployments.

## Setup Instructions

### Prerequisites

- Node.js (version 18 or higher) and npm
- A running backend server on `http://localhost:5005` (see the backend README)
- A browser to access the application

### Step 1: Install Dependencies

Navigate to the frontend directory and install the required packages.

```bash
npm install
