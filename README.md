# Job Portal Application Documentation

## Table of Contents
1. [Installation and Setup](#installation-and-setup)
2. [Running the Application](#running-the-application)
3. [Client Folder Structure](#client-folder-structure)
4. [Server Folder Structure](#server-folder-structure)
5. [Key Design Decisions](#key-design-decisions)
6. [Postman API Testing](#postman-api-testing)
7. [API Documentation](#api-documentation)

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd job-portal
   ```
2. **Install Client Dependencies**
   ```bash
   cd client
   npm install
   ```
3. **Install Server Dependencies**
   ```bash
   cd ../server
   npm install
   ```
4. **Configure Environment Variables**
   Create a `.env` file in the root directory with the following:
   ```env
    PORT=5000
    NODE_ENV=development
    MONGO_URI=<your_database_url>
    JWT_SECRET=<your_secret_key>
    CLIENT_URL=<your_deployed_frontend_app_url>
    AWS_ACCESS_KEY_ID=<your_aws_access_key>
    AWS_SECRET_ACCESS_KEY=<your_aws_secret_key>
    AWS_REGION=<your_aws_region>
    AWS_BUCKET_NAME=<your_s3_bucket_name>
    SENDGRID_API_KEY=<your_api_key>
    SENDGRID_FROM_EMAIL=<your_email_address>
   ```

## Running The Application

1. **Start the server**
   ```bash
   npm run dev
   ```
2. **Start the client**

    Open new terminal
   ```bash
   cd client
   npm run dev
   ```

The backend server will be running in the localhost port `5000`.

The frontend app will be available at `http://localhost:3000`.

---

## Client Folder Structure
```
job-portal-application/
├── client/
│   ├── app/
│   │   ├── applications/
│   │   │   ├── user/
│   │   │   │   ├── page.js
│   │   │   ├── page.js
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── page.js
│   │   │   ├── forgot-password/
│   │   │   │   ├── page.js
│   │   │   ├── reset-password/
│   │   │   │   ├── page.js
│   │   │   ├── verify-email/
│   │   │   │   ├── page.js
│   │   │   ├── signup/
│   │   │   │   ├── page.js
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   ├── context/
│   │   │   ├── DataContext.js
│   │   ├── dashboard/
│   │   │   ├── admin/
│   │   │   │   ├── page.js
│   │   ├── hooks/
│   │   │   ├── useAuthCheck.js
│   │   ├── jobs/
│   │   │   ├── [id]/
│   │   │   │   ├── page.js
│   │   │   ├── add/
│   │   │   │   ├── page.js
│   │   │   ├── update/
│   │   │   │   ├── page.js
│   │   │   ├── page.js
│   │   ├── profiles/
│   │   │   ├── [id]/
│   │   │   │   ├── page.js
│   │   │   ├── add/
│   │   │   │   ├── page.js
│   │   │   ├── update/
│   │   │   │   ├── page.js
│   │   │   ├── upload-resume/
│   │   │   │   ├── page.js
│   │   │   ├── page.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── uploadResume.css
│   │   ├── utils/
│   │   │   ├── admin.js
│   │   │   ├── api.js
│   │   │   ├── application.js
│   │   │   ├── auth.js
│   │   │   ├── cookie.js
│   │   │   ├── jobs.js
│   │   │   ├── profile.js
│   │   ├── layout.js
│   │   ├── page.js
│   ├── public/
│   │   ├── favicon.ico
│   ├── package.json
│   ├── package-lock.json
```
## Server Folder Structure
```
job-portal-application/
├── server/
│   ├── configs/
│   │   ├── config.js
│   │   ├── sendGridMail.config.js
│   ├── controllers/
│   │   ├── admin.controller.js
│   │   ├── application.controller.js
│   │   ├── auth.controller.js
│   │   ├── job.controller.js
│   │   ├── profile.controller.js
│   ├── db/
│   │   ├── connectDB.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── awsUpload.middleware.js
│   │   ├── upload.middleware.js
│   ├── models/
│   │   ├── application.model.js
│   │   ├── job.model.js
│   │   ├── profile.model.js
│   │   ├── user.model.js
│   ├── routes/
│   │   ├── admin.route.js
│   │   ├── application.route.js
│   │   ├── auth.route.js
│   │   ├── job.route.js
│   │   ├── profile.route.js
│   ├── utils/
│   │   ├── generateToken.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js

```

---

## Key Design Decisions

1. **Next.js** for server-side rendering.
2. **Tailwind CSS** for efficient and scalable UI development.
3. **SendGrid** for sending email notifications.
4. **Role-based access control (RBAC)** for secure authentication.

---

## Postman API Testing Guide

### Steps to Import API Collection in Postman

1. Open Postman – Launch the Postman application on your system.
2. Go to File Menu – Click on `File` in the top-left corner.
3. Select Import – Choose the `Import` option from the dropdown.
4. Upload JSON File – Locate and select the `postman_api_testing.json` file from your system.
5. Confirm Import – Click `Open` to import the API collection.

Once imported, you can easily test the APIs by selecting the desired request and clicking `Send`. 🚀

---

## API Documentation

### Base URL

```
http://localhost:5000/api
```

### **Authentication Endpoints**

### 1. User Signup

**Endpoint:**

```
POST /auth/signup
```

**Description:** Registers a new user and sends an email verification link.
**Request Body:**

```json
{
    "name": "Blue",
    "email": "3xbluemoon@gmail.com",
    "password": "123"
}
```

**Response:**

```json
{
    "message": "User registered successfully. Check your email to verify."
}
```

---

### 2. User Login

**Endpoint:**

```
POST /auth/login
```

**Description:** Logs in a user and issues an authentication token.
**Request Body:**

```json
{
    "email": "3xbluemoon@gmail.com",
    "password": "123"
}
```

**Response:**

```json
{
    "user": {
        "_id": "67cc497af66f88a47f6e5e10",
        "name": "Blue",
        "email": "3xbluemoon@gmail.com",
        "role": "User",
        "isEmailVerified": false,
        "emailVerificationToken": "d79ee72ec7e6311a23604fd12090f83346882773",
        "__v": 0
    }
}
```

---

### 3. Verify Email

**Endpoint:**

```
GET /auth/verify-email?token=<verification_token>
```

**Description:** Verifies the user's email using a verification token.
**Response:**

```json
{
    "message": "Email verified successfully"
}
```

---

### 4. Request Password Reset

**Endpoint:**

```
POST /auth/reset-password-request
```

**Description:** Sends a password reset link to the user's email.
**Request Body:**

```json
{
    "email": "jonasnavin@gmail.com"
}
```

**Response:**

```json
{
    "message": "Password reset email sent"
}
```

---

### 5. Reset Password

**Endpoint:**

```
PUT /auth/reset-password
```

**Description:** Resets the user's password using a reset token.
**Request Body:**

```json
{
    "token": "853916a9945e253839a94d5fb7ace3c2e2439f32",
    "newPassword": "123"
}
```

**Response:**

```json
{
    "message": "Password reset successfully"
}
```

---

### 6. User Logout

**Endpoint:**

```
POST /auth/logout
```

**Description:** Logs out the user by clearing the authentication token.
**Response:**

```json
{
    "success": true,
    "message": "Logged out successfully"
}
```

---

### **Admin Endpoints**

### 7. Update User Role

**Endpoint:**

```
PUT /admin/update-role
```

**Description:** Updates the role of a user. Only accessible by admins.

**Request Body:**

```json
{
    "email": "3xbluemoon@gmail.com",
    "newRole": "Manager"
}
```

**Response:**

```json
{
    "message": "User role updated successfully",
    "admin": "admin_details"
}
```

---

### 8. Get System Analytics

**Endpoint:**

```
GET /admin/analytics
```

**Description:** Retrieves system analytics, including total users, candidate profiles, and job applications. This endpoint is restricted to admins.

**Response:**

```json
{
    "totalUsers": 2,
    "totalCandidates": 0,
    "totalApplications": 0,
    "users": ["user_details_1", "user_details_2"],
    "admin": "admin_details"
}
```

---

### **Profile Endpoints**

### 9. Get All Profiles

**Endpoint:**

```
GET /profiles
```

**Description:** Retrieves a list of all candidate profiles. This endpoint is accessible to recruiters and admins.
**Response:**

```json
{
    "candidates": [
        {
            "_id": "67cc5e06083666ca88a9f249",
            "userId": "user_details",
            "skills": [
                "javascript",
                "python"
            ],
            "experience": "2.5",
            "education": "B.E - ECE",
            "location": "Bangalore, India",
            "createdAt": "2025-03-08T15:11:02.769Z",
            "updatedAt": "2025-03-08T15:21:43.616Z",
            "__v": 0,
            "resume": "/uploads/67cc497af66f88a47f6e5e10.pdf"
        }
    ],
    "user": "user_details"
}
```

---

### 10. Get Profile By Id

**Endpoint:**

```
GET /profiles/:userId
```

**Description:** Retrieves a specific candidate's profile using their user ID.

**Response:**

```json
{
    "candidate": {
        "_id": "67cc5e06083666ca88a9f249",
        "userId": "user_details",
        "skills": [
            "javascript",
            "python"
        ],
        "experience": "2.5",
        "education": "B.E - ECE",
        "location": "Bangalore, India",
        "createdAt": "2025-03-08T15:11:02.769Z",
        "updatedAt": "2025-03-08T15:21:43.616Z",
        "__v": 0,
        "resume": "/uploads/67cc497af66f88a47f6e5e10.pdf"
    },
    "user": "user_details"
}
```

---

### 11. Add Profile

**Endpoint:**

```
POST /profiles/add
```

**Description:** Allows a user to create their candidate profile by providing relevant details.
**Request Body:**

```json
{
    "skills": ["javascript"],
    "experience": "2",
    "education": "B.E - ECE",
    "location": "Bangalore, India"
}
```

**Response:**

```json
{
    "message": "Profile created successfully",
    "profile": {
        "userId": "67cc497af66f88a47f6e5e10",
        "skills": [
            "javascript"
        ],
        "experience": "2",
        "education": "B.E - ECE",
        "location": "Bangalore, India",
        "_id": "67cc5e06083666ca88a9f249",
        "createdAt": "2025-03-08T15:11:02.769Z",
        "updatedAt": "2025-03-08T15:11:02.769Z",
        "__v": 0
    },
    "user": "user_details"
}
```

---

### 12. Update Profile

**Endpoint:**

```
PUT /profiles/update
```

**Description:** Allows a user to update their profile information, including skills, experience, education, and location.
**Request Body:**

```json
{
    "skills": ["javascript", "python"],
    "experience": "2.5",
    "education": "B.E - ECE",
    "location": "Bangalore, India"
}
```

**Response:**

```json
{
    "message": "Profile updated successfully",
    "profile": {
        "_id": "67cc5e06083666ca88a9f249",
        "userId": "67cc497af66f88a47f6e5e10",
        "skills": [
            "javascript",
            "python"
        ],
        "experience": "2.5",
        "education": "B.E - ECE",
        "location": "Bangalore, India",
        "createdAt": "2025-03-08T15:11:02.769Z",
        "updatedAt": "2025-03-08T15:18:03.913Z",
        "__v": 0
    },
    "user": "user_details"
}
```

---

### 13. Upload Resume

**Endpoint:**

```
POST /profiles/upload-resume
```

**Description:** Allows a candidate to upload their resume as part of their profile.
#### **Request Body (Form-Data):**

| Key      | Type  | Value                          |
|----------|------|--------------------------------------|
| `resume` | File | Upload the file   |


**Response:**

```json
{
    "success": true,
    "message": "Resume uploaded successfully",
    "filePath": "/uploads/67cc497af66f88a47f6e5e10.pdf",
    "user": "user_details"
}
```

---

### **Job Endpoints**

### 14. Get All Jobs

**Endpoint:**

```
POST /jobs
```

**Description:** Retrieves a list of all available job postings. This endpoint is accessible to all users.
**Response:**

```json
{
    "jobs": [
        {
            "_id": "67cc64b6e31484eae2aebdb3",
            "title": "Full Stack Developer",
            "description": ["description_details"],
            "qualifications": ["qualification_details"],
            "location": "Galiveedu",
            "experience": "0-10",
            "jobType": "Full-time",
            "status": "Open",
            "postedBy": {
                "name": "Jonas Navin",
                "email": "jonasnavin@gmail.com"
            },
            "applicants": [],
            "createdAt": "2025-03-08T15:39:34.261Z",
            "updatedAt": "2025-03-08T15:39:34.261Z",
            "__v": 0
        }
    ]
}
```

---

### 15. Get Job By Id

**Endpoint:**

```
POST /jobs/:jobId
```

**Description:** Retrieves the details of a specific job posting based on the provided job ID.
**Response:**

```json
{
    "job": {
        "_id": "67cc64b6e31484eae2aebdb3",
        "title": "Full Stack Developer",
        "description": ["description_details"],
        "qualifications": ["qualification_deatils"],
        "location": "Galiveedu",
        "experience": "0-10",
        "jobType": "Full-time",
        "status": "Open",
        "postedBy": {
            "name": "Jonas Navin",
            "email": "jonasnavin@gmail.com"
        },
        "applicants": [],
        "createdAt": "2025-03-08T15:39:34.261Z",
        "updatedAt": "2025-03-08T15:39:34.261Z",
        "__v": 0
    }
}
```

---

### 16. Add Job

**Endpoint:**

```
POST /jobs/add
```

**Description:** Allows an authorized user (HR, Manager, or Admin) to create a new job posting.
**Request Body:**

```json
{
    "title": "Full Stack Developer",
    "description": ["description_details"],
    "qualifications": ["qualification_details"],
    "location": "Galiveedu",
    "experience": "0-10",
    "jobType": "Full-time"
}
```

**Response:**

```json
{
    "message": "Job created successfully",
    "job": {
        "title": "Full Stack Developer",
        "description": ["description_deatials"],
        "qualifications": ["qualification_details"],
        "location": "Galiveedu",
        "experience": "0-10",
        "jobType": "Full-time",
        "status": "Open",
        "postedBy": "67c9747ea1ff96e446b3af2b",
        "applicants": [],
        "_id": "67cc64b6e31484eae2aebdb3",
        "createdAt": "2025-03-08T15:39:34.261Z",
        "updatedAt": "2025-03-08T15:39:34.261Z",
        "__v": 0
    },
    "user": "user_details"
}
```

---

### 17. Update Job

**Endpoint:**

```
POST /jobs/update/:jobId
```

**Description:** Allows an authorized user (HR, Manager, or Admin) to update the details of an existing job posting.
**Request Body:**

```json
{
    "title": "Full Stack Developer",
    "description": ["description_details"],
    "qualifications": ["qualification_details"],
    "location": "Galiveedu",
    "experience": "0-10",
    "jobType": "Full-time"
}
```

**Response:**

```json
{
    "message": "Job updated successfully",
    "job": {
        "_id": "67cc64b6e31484eae2aebdb3",
        "title": "Full Stack Developer",
        "description": ["description_deatials"],
        "qualifications": ["qualification_details"],
        "location": "Galiveedu",
        "experience": "0-10",
        "jobType": "Full-time",
        "status": "Open",
        "postedBy": "67c9747ea1ff96e446b3af2b",
        "applicants": [],
        "createdAt": "2025-03-08T15:39:34.261Z",
        "updatedAt": "2025-03-08T15:46:08.205Z",
        "__v": 1
    },
    "user": "user_details"
}
```

---

### 18. Delete Job

**Endpoint:**

```
POST /jobs/remove/:jobId
```

**Description:** Allows an authorized user (HR, Manager, or Admin) to delete a job posting.
**Response:**

```json
{
    "message": "Job deleted successfully",
    "user": {
        "_id": "67c9747ea1ff96e446b3af2b",
        "name": "Jonas Navin",
        "email": "jonasnavin@gmail.com",
        "role": "Admin",
        "isEmailVerified": true,
        "__v": 0
    }
    }
```

---

### **Application Endpoints**

### 19. Get All Applications

**Endpoint:**

```
GET /applications
```

**Description:** Retrieves a list of all job applications submitted by users. This endpoint is accessible to HR, Managers, and Admins.

**Response:**

```json
{
    "applications": [
        {
            "_id": "67cc68ae2bb504c9a1a7414c",
            "userId": "user_details",
            "jobId": {
                "_id": "67cc64b6e31484eae2aebdb3",
                "title": "Full Stack Developer",
                "description": ["description_details"],
                "qualifications": ["qualification_details"],
                "location": "Galiveedu",
                "experience": "0-10",
                "jobType": "Full-time",
                "status": "Open",
                "postedBy": "67c9747ea1ff96e446b3af2b",
                "applicants": [
                    "67cc5e06083666ca88a9f249"
                ],
                "createdAt": "2025-03-08T15:39:34.261Z",
                "updatedAt": "2025-03-08T15:56:30.025Z",
                "__v": 2
            },
            "status": "Applied",
            "appliedAt": "2025-03-08T15:56:30.128Z",
            "__v": 0
        }
    ],
    "user": "user_details"
}
```

---

### 20. Get User Applications

**Endpoint:**

```
GET /applications/user
```

**Description:** Retrieves all job applications submitted by the currently logged-in user.

**Response:**

```json
{
    "applications": [
        {
            "_id": "67cc68ae2bb504c9a1a7414c",
            "userId": "67cc497af66f88a47f6e5e10",
            "jobId": {
                "_id": "67cc64b6e31484eae2aebdb3",
                "title": "Full Stack Developer",
                "description": ["description_details"],
                "qualifications": ["qualification_details"],
                "location": "Galiveedu",
                "experience": "0-10",
                "jobType": "Full-time",
                "status": "Open",
                "postedBy": "67c9747ea1ff96e446b3af2b",
                "createdAt": "2025-03-08T15:39:34.261Z",
                "updatedAt": "2025-03-08T15:56:30.025Z",
                "__v": 2
            },
            "status": "Applied",
            "appliedAt": "2025-03-08T15:56:30.128Z",
            "__v": 0
        }
    ],
    "user": "user_details"
}
```

---

### 21. Apply For Job

**Endpoint:**

```
POST /applications/:jobId/apply
```

**Description:** Allows a user to apply for a specific job posting. Only accessible by registered users.

**Response:**

```json
{
    "message": "Applied for job successfully",
    "job": {
        "_id": "67cc64b6e31484eae2aebdb3",
        "title": "Full Stack Developer",
        "description": ["description_details"],
        "qualifications": ["qualification_details"],
        "location": "Galiveedu",
        "experience": "0-10",
        "jobType": "Full-time",
        "status": "Open",
        "postedBy": "67c9747ea1ff96e446b3af2b",
        "applicants": [
            "67cc5e06083666ca88a9f249"
        ],
        "createdAt": "2025-03-08T15:39:34.261Z",
        "updatedAt": "2025-03-08T15:56:30.025Z",
        "__v": 2
    },
    "user": "user_details"
}
```

---

### 22. Update Application Status

**Endpoint:**

```
PUT /applications/update
```

**Description:** Updates the status of a specific job application. Only accessible by HR, Managers, and Admins to track applicants' progress (e.g., "Applied", "Interview Scheduled", "Selected", "Rejected").

**Request Body:**

```json
{
    "jobId": "67cc64b6e31484eae2aebdb3",
    "userId": "67cc497af66f88a47f6e5e10",
    "newStatus": "Interview Scheduled"
}
```

**Response:**

```json
{
    "message": "Applied status changed successfully",
    "user": "user_details"
}
```