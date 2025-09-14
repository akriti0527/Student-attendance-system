const express = require("express");
const Attendance = require("../models/attendance");
const Student = require("../models/student");
const router = express.Router();

// Mark attendance
router.post("/", async (req, res) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).json(attendance);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all attendance records
router.get("/", async (req, res) => {
    const records = await Attendance.find().populate("student");
    res.json(records);
});

// Get attendance for a specific student
router.get("/student/:id", async (req, res) => {
    const records = await Attendance.find({ student: req.params.id }).populate("student");
    res.json(records);
});

// ✅ Get attendance percentage for a student
router.get("/percentage/:id", async (req, res) => {
    try {
        const records = await Attendance.find({ student: req.params.id });

        if (records.length === 0) {
            return res.json({ message: "No attendance records for this student" });
        }

        const total = records.length;
        const presentCount = records.filter(r => r.status === "Present").length;
        const absentCount = total - presentCount;
        const percentage = ((presentCount / total) * 100).toFixed(2);

        res.json({
            studentId: req.params.id,
            totalDays: total,
            present: presentCount,
            absent: absentCount,
            attendancePercentage: `${percentage}%`
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get attendance summary for all students
router.get("/summary", async (req, res) => {
    try {
        const students = await Student.find();
        const summary = [];

        for (let stu of students) {
            const records = await Attendance.find({ student: stu._id });
            if (records.length === 0) {
                summary.push({
                    student: stu.name,
                    rollNo: stu.rollNo,
                    class: stu.class,
                    attendancePercentage: "0%",
                    totalDays: 0,
                    present: 0,
                    absent: 0
                });
                continue;
            }

            const total = records.length;
            const presentCount = records.filter(r => r.status === "Present").length;
            const absentCount = total - presentCount;
            const percentage = ((presentCount / total) * 100).toFixed(2);

            summary.push({
                student: stu.name,
                rollNo: stu.rollNo,
                class: stu.class,
                attendancePercentage: `${percentage}%`,
                totalDays: total,
                present: presentCount,
                absent: absentCount
            });
        }

        res.json(summary);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

