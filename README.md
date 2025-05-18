# TeamOut - AI-Powered Team Outing Assistant

TeamOutAI helps plan and book team outings effortlessly. TeamOut streamlines the process of quoting team events by understanding your requirements and suggesting the perfect outing options.

## Features

- 🤖 AI-powered event planning and recommendations
- 📅 Smart date and time scheduling
- 📍 Location-based suggestions
- 💰 Budget management
- 👥 Team size optimization
- 📧 Automated email notifications
- 🎯 Customizable team dynamics preferences

## Tech Stack

### Frontend

- React.js
- TypeScript
- Tailwind CSS
- Modern UI/UX design

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- AWS SQS for message queuing
- Gemini AI for intelligent recommendations
- Resend for email notifications

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- AWS Account (for SQS)
- Google Cloud Account (for Gemini AI)
- Resend Account (for email notifications)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server
PORT=3001
MONGODB_URI=your_mongodb_uri

# AWS
AWS_SQS_URL=your_sqs_queue_url
AWS_REGION=us-east-1

# AI
GEMINI_API_KEY=your_gemini_api_key

# Email
RESEND_API_KEY=your_resend_api_key
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tasteful.git
cd tasteful
```

2. Install dependencies:

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

## Running the Application

### Development Mode

1. Start the backend server:

```bash
cd server
npm run dev
```

2. In a new terminal, start the frontend:

```bash
cd client
npm start
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Production Build

1. Build the frontend:

```bash
cd client
npm run build
```

2. Start the production server:

```bash
cd server
npm start
```

## Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run specific test file
npm test -- path/to/test/file.test.ts
```

## Project Structure
