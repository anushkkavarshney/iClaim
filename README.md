This is a claim automation system.
# iClaim

AI-assisted insurance claim automation platform with customer, agent, and admin portals for claim filing, document review, assignment, approval workflow, and payment tracking.

## Overview

iClaim is a full-stack insurance claim automation system designed to simplify and accelerate the claim lifecycle. The platform supports three roles:

- `Customer`: files claims, uploads supporting documents, and tracks claim progress
- `Agent`: reviews assigned claims with OCR-assisted document insights and decision support
- `Admin`: monitors the system, assigns claims to agents, and marks approved claims as paid

The project combines role-based dashboards, OCR-powered document analysis, workflow tracking, and operational controls into a single web platform.

## Key Features

- Customer claim submission with document uploads
- Multi-role authentication for customer, agent, and admin
- OCR-based document text extraction using local processing
- Claim amount validation against uploaded bills and invoices
- Identity cross-checking against uploaded customer documents
- AI-style review summary for faster agent decision-making
- Red flag detection and agent guidance panel
- Agent claim approval and rejection with review notes
- Admin assignment of specific claims to specific agents
- Admin payment completion flow for approved claims
- Role-based dashboards with workflow visibility
- Shared profile page and topbar navigation across all roles
- Sample test documents for demo and validation

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- Radix UI components
- Lucide React icons
- Recharts

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- Multer for file uploads
- Tesseract.js for OCR
- pdf-parse for PDF text extraction

## Project Structure

```text
.
├── backend
│   ├── Controller
│   ├── config
│   ├── middleware
│   ├── model
│   ├── routes
│   └── services
├── frontend
│   └── src
├── sample-docs
└── README.md
```

## Workflow

1. Customer logs in and files a new insurance claim.
2. Customer uploads supporting files such as ID proof, prescriptions, and bills.
3. Backend stores the claim and uploaded documents.
4. OCR service extracts text from uploaded images and PDFs.
5. System generates:
   - claim summary
   - amount verification
   - identity verification
   - red flags
   - agent guidance
6. Admin assigns the claim to a specific agent.
7. Agent reviews the claim and either approves or rejects it.
8. Admin marks approved claims as paid.

## Role-Based Modules

### Customer Portal

- File new claims
- Upload supporting documents
- View workflow progress
- See AI/OCR review results
- Check agent notes and claim status

### Agent Portal

- View assigned claims
- Review OCR/AI-assisted summary
- Compare amount and identity validation
- Inspect red flags and guidance
- Approve or reject claims with notes

### Admin Portal

- View all claims and users
- Assign agents to claims
- Track claim and payment progress
- Access analytics and operational overview
- Mark approved claims as paid

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd orkes-insurance-automata-47895-30202-41-18853
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Configure environment variables

Create a `backend/.env` file with values like:

```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000
```

## Run the Project

### Start backend

```bash
cd backend
npm run dev
```

### Start frontend

```bash
cd frontend
npm run dev
```

## Demo Notes

- Frontend runs on Vite local server
- Backend runs on port `8000`
- OCR review works locally through `tesseract.js`
- Sample upload files are available in the [`sample-docs`](./sample-docs) folder

## Sample Test Inputs

You can use the sample files below for testing:

- `sample-docs/customer-id.svg`
- `sample-docs/medical-bill.svg`
- `sample-docs/prescription.svg`

These are useful for checking claim submission, document review, and agent-side analysis flow.

## Current Highlights

- Local OCR-based review pipeline without paid AI API dependency
- Shared profile page for customer, agent, and admin
- Improved dashboard UI for all three roles
- Admin assignment and payment workflow integrated into the claim lifecycle

## Future Improvements

- Cloud storage for uploaded files
- Editable user profile management
- Better production deployment configuration
- Advanced analytics and reporting
- Email and notification integration
- Improved code splitting and performance optimization

## Author

Built as a full-stack insurance claim automation project focused on workflow automation, OCR-based validation, and role-based operational dashboards.
