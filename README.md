# Task Manager with n8n Email Automation

A **basic full-stack MERN project** with email notifications using **n8n workflow automation**. This project demonstrates **task creation, completion, and automated email notification** using a self-hosted n8n instance.

* * *

## Features

*   **User authentication** (via JWT or local auth)
    
*   **Task CRUD** (Create, Read, Update, Delete)
    
*   **Email notification** when a task is marked as completed
    
*   **n8n self-hosted workflow** triggers automatically via webhook
  ## Tech Stack


*   **Frontend:** React.js
    
*   **Backend:** Node.js + Express.js
    
*   **Database:** MongoDB Atlas
    
*   **Automation:** n8n (self-hosted)
    
*   **Email Service:** Zoho SMTP
    

* * *

## Workflow Overview


The current workflow includes:

1.  **Webhook Node**
    
    *   Receives POST requests from backend when a task is marked completed.
        
2.  **Set Node**
    
    *   Formats the incoming task data (`taskTitle`, `userId`) to prepare for email.
        
3.  **Email Node**
    
    *   Sends a notification email to the user using Zoho SMTP.
  
## WorkFlow Image
  
![WorkFlow Screenshot](public/workflow.png)

### n8n Setup

1.  Make sure n8n is **self-hosted and running on port 5678**:
    

`n8n start`

2.  Import the workflow:
    
    *   Create a new workflow.
        
    *   Add **Webhook → Set → Email Node**.
        
    *   Configure **Webhook** to match `N8N_WEBHOOK_URL`.
        
    *   Configure **Email Node** using Zoho SMTP credentials.
        

* * *

## Usage

1.  Create a task from the frontend.
    
2.  Mark the task as **completed**.
    
3.  Backend sends a POST request to n8n webhook.
    
4.  n8n formats the data and sends an **email notification** to the user.

