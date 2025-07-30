# Expense Tracker Backend

A full-stack expense tracking application built with Node.js, Express.js, and MySQL. This application helps users track their daily expenses with features like user authentication, expense management, and premium features.

## 🚀 Features

### Core Features
- **User Authentication**: Secure registration and login with JWT tokens
- **Expense Management**: Add, edit, delete, and categorize expenses
- **Expense Reports**: Weekly and monthly expense summaries
- **Premium Features**: Download expense history and advanced reporting
- **Password Reset**: Email-based password reset functionality
- **Payment Integration**: Razorpay integration for premium subscriptions

### Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Helmet for security headers
- CORS configuration
- Request logging with Morgan

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **Sequelize** - ORM for database operations
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing

### External Services
- **AWS S3** - File storage for downloads
- **SendGrid** - Email service
- **Brevo (Sendinblue)** - Email service for password reset
- **Razorpay** - Payment gateway for premium features

### Frontend
- **HTML/CSS/JavaScript** - Simple frontend interface
- **Bootstrap** - UI framework
- **Axios** - HTTP client

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **MySQL** (v8.0 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd expense-tracker-backend-master
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Setup

#### Install MySQL
```bash
# On macOS with Homebrew
brew install mysql
brew services start mysql

# On Ubuntu/Debian
sudo apt-get install mysql-server
sudo systemctl start mysql

# On Windows
# Download and install MySQL from official website
```

#### Create Database
```sql
CREATE DATABASE expense_tracker;
```

### 4. Environment Configuration

Create a `.env` file in the project root:

```env
# Database Configuration
DB_NAME=expense_tracker
DB_LOGIN=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost

# Email Service (Brevo/Sendinblue)
API_KEY=your_brevo_api_key_here

# AWS Configuration (for file uploads)
AWS_USER_KEY=your_aws_access_key_here
AWS_USER_SECRET=your_aws_secret_key_here

# JWT Secret
JWT_SECRET=your_jwt_secret_here
```

### 5. Start the Application
```bash
npm start
```

The application will start on `http://localhost:4000`

## 📁 Project Structure

```
expense-tracker-backend-master/
├── app.js                 # Main application entry point
├── controller/            # Business logic handlers
│   ├── expenseController.js
│   ├── loginController.js
│   ├── purchaseController.js
│   ├── resetPasswordController.js
│   └── userController.js
├── middleware/            # Authentication middleware
│   └── authMiddleware.js
├── models/               # Database models
│   ├── expenseModel.js
│   ├── forgotPassword.js
│   ├── orderModel.js
│   ├── urlModel.js
│   └── userModel.js
├── routes/               # API route definitions
│   ├── expenseRoute.js
│   ├── loginRoute.js
│   ├── purchaseRoute.js
│   ├── resetPassword.js
│   └── userRoute.js
├── views/                # Frontend HTML templates
├── public/script/        # Frontend JavaScript files
└── helper/              # Database configuration
    └── database.js
```

## 🔌 API Endpoints

### Authentication
- `POST /login` - User login
- `POST /user` - User registration

### Expenses
- `GET /expense` - Get user expenses (with pagination)
- `POST /expense` - Add new expense
- `PUT /expense` - Update expense
- `DELETE /expense` - Delete expense

### Reports
- `GET /expense/weekly` - Weekly expense report
- `GET /expense/monthly` - Monthly expense report

### Downloads
- `GET /download` - Download expense data
- `GET /download/history` - Get download history

### Premium Features
- `POST /purchase/premium` - Purchase premium membership
- `POST /purchase/updatestatus` - Update premium status

### Password Reset
- `POST /password/forgotpassword` - Request password reset
- `GET /resetpassword/:id` - Reset password page
- `GET /updatepassword/:resetpasswordid` - Update password

## 🗄️ Database Models

### User
- `id` - Primary key
- `name` - User's full name
- `email` - Unique email address
- `password` - Hashed password
- `premiumUser` - Premium status
- `totalExpense` - Total expenses

### Expense
- `id` - Primary key
- `amount` - Expense amount
- `description` - Expense description
- `category` - Expense category
- `userId` - Foreign key to User

### Order
- `id` - Primary key
- `paymentid` - Payment ID
- `orderid` - Order ID
- `status` - Payment status
- `userId` - Foreign key to User

## 🔧 Troubleshooting

### Common Issues

#### 1. Database Connection Error
```
ConnectionRefusedError [SequelizeConnectionRefusedError]
```
**Solution:**
- Ensure MySQL is running
- Check database credentials in `.env` file
- Verify database exists: `CREATE DATABASE expense_tracker;`

#### 2. Missing Environment Variables
```
ReferenceError: process.env.DB_NAME is not defined
```
**Solution:**
- Create `.env` file in project root
- Add all required environment variables

#### 3. Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::4000
```
**Solution:**
- Change port in `app.js` or kill existing process
- Use: `lsof -ti:4000 | xargs kill -9`

#### 4. Nodemon Not Found
```
sh: nodemon: command not found
```
**Solution:**
- Install dependencies: `npm install`
- Or install nodemon globally: `npm install -g nodemon`

### Security Vulnerabilities
Run these commands to fix security issues:
```bash
npm audit fix
npm audit fix --force  # For breaking changes
```

## 🚀 Deployment

### Environment Variables for Production
```env
# Database
DB_NAME=your_production_db
DB_LOGIN=your_db_user
DB_PASSWORD=your_secure_password
DB_HOST=your_db_host

# Security
JWT_SECRET=your_very_secure_jwt_secret

# Services
API_KEY=your_production_email_api_key
AWS_USER_KEY=your_production_aws_key
AWS_USER_SECRET=your_production_aws_secret
```

### Production Considerations
- Use environment-specific database
- Set up proper logging
- Configure CORS for production domains
- Use HTTPS in production
- Set up proper error handling
- Configure rate limiting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Prashast Singh**

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Note:** This is a full-stack application with both backend API and frontend interface. The frontend is served statically from the `views/` directory and uses vanilla JavaScript for API interactions.
