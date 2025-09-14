const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // 👈 serve frontend

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/student_attendance", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ DB Connection Error:", err));

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
