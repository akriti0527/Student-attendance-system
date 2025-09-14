const API_URL = "http://localhost:5000/api";

// Load students
async function loadStudents() {
  const res = await fetch(`${API_URL}/students`);
  const students = await res.json();

  const studentList = document.getElementById("studentList");
  const studentSelect = document.getElementById("studentSelect");

  studentList.innerHTML = "";
  studentSelect.innerHTML = "";

  students.forEach(stu => {
    // Add to student list
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${stu.name} (Roll: ${stu.rollNo}, Class: ${stu.class})`;
    studentList.appendChild(li);

    // Add to select dropdown
    const option = document.createElement("option");
    option.value = stu._id;
    option.textContent = stu.name;
    studentSelect.appendChild(option);
  });
}

// ✅ Load attendance summary
async function loadAttendanceSummary() {
  const res = await fetch(`${API_URL}/attendance/summary`);
  const summary = await res.json();

  const summaryTable = document.getElementById("attendanceSummary");
  summaryTable.innerHTML = "";

  summary.forEach(stu => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${stu.student}</td>
      <td>${stu.rollNo}</td>
      <td>${stu.class}</td>
      <td>${stu.totalDays}</td>
      <td class="text-success fw-bold">${stu.present}</td>
      <td class="text-danger fw-bold">${stu.absent}</td>
      <td><span class="badge bg-${parseFloat(stu.attendancePercentage) >= 75 ? 'success' : 'warning'}">
        ${stu.attendancePercentage}
      </span></td>
    `;
    summaryTable.appendChild(row);
  });
}

// Add student
document.getElementById("studentForm").addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const rollNo = document.getElementById("rollNo").value;
  const cls = document.getElementById("class").value;

  await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, rollNo, class: cls })
  });

  e.target.reset();
  loadStudents();
  loadAttendanceSummary();
});

// Mark attendance
document.getElementById("attendanceForm").addEventListener("submit", async e => {
  e.preventDefault();
  const student = document.getElementById("studentSelect").value;
  const status = document.getElementById("status").value;

  await fetch(`${API_URL}/attendance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ student, status })
  });

  e.target.reset();
  loadAttendanceSummary();
});

// Initial load
loadStudents();
loadAttendanceSummary();

// 🌙 Dark Mode Toggle
document.getElementById("toggleDark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("toggleDark");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "🌞 Light Mode";
    btn.classList.remove("btn-outline-dark");
    btn.classList.add("btn-outline-light");
  } else {
    btn.textContent = "🌙 Dark Mode";
    btn.classList.remove("btn-outline-light");
    btn.classList.add("btn-outline-dark");
  }
});
