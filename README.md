# Student-attendance-system
# 📘 Student Attendance System

A simple **Full Stack Web Application** built with **Node.js, Express, MongoDB, and Bootstrap**.  
It allows you to:
- Add students 🧑‍🎓
- Mark attendance ✅❌
- View attendance summary 📊
- Toggle between Light 🌞 and Dark 🌙 modes

---

## 🚀 Features
- CRUD operations for Students
- CRUD operations for Attendance
- Attendance % calculation per student
- Attendance summary table with Present/Absent counts
- Dark mode toggle
- RESTful API (can be tested with Postman)

---

## 📂 Project Structure
student-attendance-system/
┣ 📂 models/
┃ ┣ student.js
┃ ┗ attendance.js
┣ 📂 routes/
┃ ┣ studentRoutes.js
┃ ┗ attendanceRoutes.js
┣ 📂 public/
┃ ┣ index.html
┃ ┣ script.js
┃ ┗ style.css
┣ server.js
┣ package.json
┣ README.md

yaml
Copy code

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB (Local or Atlas)
- **Frontend**: HTML, CSS, Bootstrap, Fetch API
- **API Testing**: Postman

---

## ⚡ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/student-attendance-system.git
cd student-attendance-system
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Setup MongoDB
Local MongoDB: Start with

bash
Copy code
mongod
MongoDB Atlas (Cloud):

Create a free cluster → Get connection URI

Replace MongoDB connection in server.js:

js
Copy code
mongoose.connect("YOUR_ATLAS_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
4️⃣ Run Server
bash
Copy code
npm start
✅ Server runs on: http://localhost:5000

📌 API Endpoints (Postman)
You can test these using Postman.

Method	Endpoint	Description
POST	/api/students	Add new student
GET	/api/students	Get all students
GET	/api/students/:id	Get one student
PUT	/api/students/:id	Update student
DELETE	/api/students/:id	Delete student
POST	/api/attendance	Mark attendance
GET	/api/attendance	Get all attendance records
GET	/api/attendance/student/:id	Get attendance of one student
GET	/api/attendance/percentage/:id	Get attendance % of a student
GET	/api/attendance/summary	Get summary of all students

📌 Postman Collection
https://akritisharma1605-5249738.postman.co/workspace/Akriti-Sharma's-Workspace~6bc6cc21-ddb4-4daf-8270-9c5237d52040/collection/48216871-6780626d-d2fc-4b95-a75e-7ca05d8f6c0a?action=share&source=copy-link&creator=48216871
🎯 Usage
Visit http://localhost:5000

Add students

Mark attendance

View attendance summary table

Toggle Dark Mode 🌙

📸 Screenshots
👉 (Add your screenshots here once running locally)

Home Page (Light Mode)

Attendance Summary

Dark Mode

👨‍💻 Author
Akriti Sharma

GitHub: @akriti0527

LinkedIn: akriti sharma

## ✅ Next Steps
1. Save this file as `README.md` in your project root.  
2. Push your project to GitHub.  
3. Export your API collection from Postman → Share Link → Replace in `README.md`.  
