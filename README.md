Sure! Here's a **short, clean, no-icons** version of the `README.md`:

---

# Lead Generation System with Email Notifications and n8n Automation

## Overview

A simple lead generation system that collects user information through a frontend form, processes it with a backend API, and sends an email notification using an automated n8n workflow.

## Tech Stack

* Frontend: React
* Backend: Node.js (Express)
* Workflow Automation: n8n
* Email Service: SMTP (via n8n)

## Features

* Lead form with validation (name and email required)
* Backend API to receive and forward leads
* n8n workflow to trigger email notifications

## Setup Instructions

### Frontend

```bash
npx create-react-app frontend
cd frontend
npm install axios
npm start
```

### Backend

```bash
mkdir backend
cd backend
npm init -y
npm install express cors axios body-parser dotenv

```

> Ensure backend `.env` contains `N8N_WEBHOOK_URL` if using dynamic n8n URLs.

### n8n Workflow

* Import the workflow from `n8n-workflow/workflow.json`
* Set the webhook URL in the backend to match your n8n trigger
* Set up email credentials in the `Send Email` node

## Test the System

1. Start frontend, backend, and n8n
2. Submit the lead form
3. Check your inbox for the notification email

## Deployment URLs

* Frontend: https://email-frontend-ashy.vercel.app/
* Backend: 
* n8n Webhook: `http://localhost:3001/workflow/31Sn6EXHtcyxY9hb/executions/4`


